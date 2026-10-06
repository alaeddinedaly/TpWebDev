// main.js - fichier situé dans assets/js/
// Ce script est chargé depuis TROIS pages situées à des profondeurs différentes :
//   - index.html                     (racine du projet)
//   - pages/a-propos.html            (1 niveau de profondeur)
//   - pages/contact/contact.html     (2 niveaux de profondeur)

console.log("main.js chargé correctement");

// --- Fonctionnalité 1 : bascule du thème sombre (fonctionne sur toutes les pages) ---
const boutonTheme = document.querySelector("#toggle-theme");
if (boutonTheme) {
  boutonTheme.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
}

// --- Fonctionnalité 2 : icône de statut, à activer pour la partie BONUS ---
// PIÈGE À COMPRENDRE (partie bonus de l'exercice) :
//
// Une image insérée par du HTML (<img src="...">) ou par du CSS (url(...))
// se résout respectivement par rapport à la PAGE HTML et par rapport au
// FICHIER CSS. Une image dont le chemin est fixé PAR JAVASCRIPT (comme
// ci-dessous) se résout, elle, par rapport à la PAGE HTML QUI EXÉCUTE LE
// SCRIPT — jamais par rapport au fichier .js lui-même.
//
// Conséquence concrète : le chemin ci-dessous, écrit en pensant à
// index.html, va se rompre dès que ce même fichier main.js est chargé
// par pages/a-propos.html ou pages/contact/contact.html, alors que le
// fichier main.js n'a pourtant pas changé de place sur le disque.
const iconeStatut = document.querySelector("#icone-statut");
if (iconeStatut) {
  iconeStatut.src = "assets/images/icons/mail.svg"; // à corriger (voir consignes bonus)
}
