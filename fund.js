const WALLET_KEY = "ethWallet";
const DONATED_KEY = "ethTotalDonated";

function getWallet() {
  return parseFloat(localStorage.getItem(WALLET_KEY)) || 0;
}

function setWallet(value) {
  localStorage.setItem(WALLET_KEY, value);
  document.getElementById("walletBalance").textContent = value.toFixed(2);
}

function getTotalDonated() {
  return parseFloat(localStorage.getItem(DONATED_KEY)) || 0;
}

function setTotalDonated(value) {
  localStorage.setItem(DONATED_KEY, value);
  document.getElementById("totalDonated").textContent = value.toFixed(2);
}

function addEth() {
  const input = document.getElementById("walletInput");
  const amount = parseFloat(input.value);
  if (isNaN(amount) || amount <= 0) {
    alert(isSpanish ? "Cantidad no válida." : "Invalid amount.");
    return;
  }
  const current = getWallet();
  setWallet(current + amount);
  input.value = "";
}

function donateEth() {
  const input = document.getElementById("donationInput");
  const amount = parseFloat(input.value);
  const wallet = getWallet();
  if (isNaN(amount) || amount <= 0) {
    alert(isSpanish ? "Cantidad no válida." : "Invalid amount.");
    return;
  }
  if (amount > wallet) {
    alert(isSpanish ? "Fondos insuficientes." : "Insufficient funds.");
    return;
  }
  setWallet(wallet - amount);
  setTotalDonated(getTotalDonated() + amount);
  input.value = "";
  alert(isSpanish ? "¡Gracias por tu apoyo!" : "Thank you for your support!");
}

window.onload = () => {
  setWallet(getWallet());
  setTotalDonated(getTotalDonated());
};
