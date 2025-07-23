const features = [
  { id: 'goKarts', en: "Indoor Go-Kart Track", es: "Pista de Go-Karts Interior" },
  { id: 'foodHall', en: "Global Street Food Hall", es: "Patio de Comida Global" },
  { id: 'printingLab', en: "Kids 3D Printing Lab", es: "Laboratorio de Impresión 3D para Niños" },
  { id: 'cyberRange', en: "Cyber Defense Simulation Range", es: "Rango de Simulación Cibernética" },
  { id: 'seniorWalk', en: "Senior Wellness Walk Loop", es: "Circuito de Bienestar para Adultos Mayores" },
];

const TOKEN_KEY = "desertTokens";
const VOTES_KEY = "desertVotes";
const DAILY_TOKEN_RESET_HOUR = 0; // Midnight reset

function getTokens() {
  return Number(localStorage.getItem(TOKEN_KEY)) || 0;
}

function setTokens(count) {
  localStorage.setItem(TOKEN_KEY, count);
  updateTokenDisplay();
}

function getVotes() {
  return JSON.parse(localStorage.getItem(VOTES_KEY)) || {};
}

function setVotes(votes) {
  localStorage.setItem(VOTES_KEY, JSON.stringify(votes));
}

function updateTokenDisplay() {
  const tokenCount = getTokens();
  document.getElementById('tokenCount').textContent = 
    `${tokenCount} DESERT Token${tokenCount !== 1 ? 's' : ''} available`;
}

function canGetDailyTokens() {
  const lastClaim = localStorage.getItem('lastTokenClaim');
  if (!lastClaim) return true;
  const lastDate = new Date(lastClaim);
  const now = new Date();
  return now.getDate() !== lastDate.getDate() || now - lastDate > 24*60*60*1000;
}

function claimTokens() {
  if (!canGetDailyTokens()) {
    alert('You already claimed your daily tokens. Come back tomorrow!');
    return;
  }
  const currentTokens = getTokens();
  setTokens(currentTokens + 10);
  localStorage.setItem('lastTokenClaim', new Date().toISOString());
  alert('You received 10 DESERT tokens!');
}

function renderFeatures() {
  const list = document.getElementById('featureList');
  list.innerHTML = '';
  const votes = getVotes();
  features.forEach(f => {
    const li = document.createElement('li');
    li.textContent = `${isSpanish ? f.es : f.en} — Votes: ${votes[f.id] || 0}`;
    const btn = document.createElement('button');
    btn.textContent = isSpanish ? 'Votar (1 token)' : 'Vote (1 token)';
    btn.onclick = () => voteFeature(f.id);
    li.appendChild(btn);
    list.appendChild(li);
  });
}

function voteFeature(featureId) {
  let tokens = getTokens();
  if (tokens < 1) {
    alert(isSpanish ? "No tienes tokens suficientes." : "You don't have enough tokens.");
    return;
  }
  tokens--;
  setTokens(tokens);

  const votes = getVotes();
  votes[featureId] = (votes[featureId] || 0) + 1;
  setVotes(votes);
  renderFeatures();
}

document.getElementById('getTokensBtn').onclick = claimTokens;

window.onload = () => {
  updateTokenDisplay();
  renderFeatures();
};
