const chatBox = document.getElementById("chatBox");
const input = document.getElementById("chatInput");

function sendMessage() {
  const msg = input.value.trim();
  if (!msg) return;
  addBubble("user", msg);
  input.value = "";
  setTimeout(() => {
    addBubble("ai", generateReply(msg));
  }, 600);
}

function addBubble(sender, text) {
  const div = document.createElement("div");
  div.className = `chat-bubble ${sender}`;
  div.textContent = (sender === "user" ? "🧑 " : "🤖 ") + text;
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function generateReply(input) {
  input = input.toLowerCase();
  if (input.includes("what") && input.includes("desert nexus"))
    return "Desert Nexus is a redevelopment vision for Tucson Mall's old Sears Center — blending tech, culture, and family fun.";
  if (input.includes("fund") || input.includes("donate"))
    return "You can simulate a donation on the Fund page. Every ETH counts toward our dream!";
  if (input.includes("vote"))
    return "Vote for the features you want! It's all on-chain (simulated). Power to the people!";
  if (input.includes("3d print"))
    return "Yes! One of our favorite ideas is a 3D printing studio for kids to learn, design, and play.";
  if (input.includes("go cart") || input.includes("auto center"))
    return "We plan to turn the old auto center into an indoor electric go-kart arena!";
  if (input.includes("cyber") || input.includes("warfare"))
    return "The cyber warfare range is an educational simulator for kids and teens to learn cyber defense skills.";
  return "That's a great question! This project is all about community ideas. Let's build it together.";
}
