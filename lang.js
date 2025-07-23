let isSpanish = false;

const translations = {
  "intro-title": {
    es: "Bienvenido a Desert Nexus"
  },
  "intro-body": {
    es: "Un plan de revitalización para el antiguo Sears Center — con diversión familiar, educación tecnológica e innovación regional."
  },
  "pitch-title": {
    es: "Nuestra Visión"
  },
  "line1": { es: "🏎️ Go-karts interiores usando el antiguo taller" },
  "line2": { es: "🖨️ Laboratorio de impresión 3D para niños" },
  "line3": { es: "🎮 Rango de simulación cibernética" },
  "line4": { es: "🍲 Comida económica para familias" },
  "line5": { es: "💼 Listo para inversión internacional (MX + CN)" },
  "line6": { es: "🪙 Tokens locales para decisiones comunitarias" },
  "call-title": { es: "¿Por qué ahora?" },
  "call-body": {
    es: "Las familias necesitan opciones. El desierto tiene potencial. Este espacio puede ser un nuevo nodo económico."
  }
};

function toggleLang() {
  isSpanish = !isSpanish;
  document.querySelectorAll('[data-lang]').forEach(el => {
    const key = el.getAttribute('data-lang');
    if (translations[key]) {
      el.textContent = isSpanish ? translations[key].es : el.dataset.default || el.textContent;
    }
    if (!el.dataset.default) {
      el.dataset.default = el.textContent;
    }
  });
}
