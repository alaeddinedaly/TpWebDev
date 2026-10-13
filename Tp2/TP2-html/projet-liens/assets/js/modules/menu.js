// menu.js - fichier situé dans assets/js/modules/
// Gère l'ouverture/fermeture du menu de navigation sur petit écran.

const boutonMenu = document.querySelector("#toggle-menu");
const nav = document.querySelector("#nav-principale");

if (boutonMenu && nav) {
  boutonMenu.addEventListener("click", () => {
    const ouvert = nav.classList.toggle("ouvert");
    boutonMenu.setAttribute("aria-expanded", String(ouvert));
  });
}
