// Función para cargar el archivo de traducción correspondiente
function loadTranslation(language) {
  fetch(`translations/${language}.json`)
    .then((response) => response.json())
    .then((data) => {
      updateTexts(data);
    })
    .catch((error) => console.error("Error:", error));
}

function updateTexts(translations) {
  document.getElementById("helloText").innerText = translations.hello;
  document.getElementById("welcomeText").innerText = translations.welcome;
}

// Función para cambiar el idioma y cargar la traducción correspondiente
function changeLanguage() {
  if (currentLanguage === "en") {
    loadTranslation("es"); // Cambiar a español
  } else {
    loadTranslation("en"); // Cambiar a inglés
  }
}

// Detectar la preferencia de idioma del usuario y cargar la traducción correspondiente
const userLanguage = navigator.language.split("-")[0]; // Obtener el idioma principal del usuario
loadTranslation(userLanguage);
