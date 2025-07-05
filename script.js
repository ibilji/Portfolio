// Typewriter effect for "AI Web Developer"
const roleText = document.querySelector('.role');
const fullText = "AI Web Developer";
let index = 0;

function typeEffect() {
  if (index < fullText.length) {
    roleText.textContent += fullText.charAt(index);
    index++;
    setTimeout(typeEffect, 100);
  }
}

roleText.textContent = "";
typeEffect();
