const form = document.querySelector("#search-form");
const input = document.querySelector("#query");
const button = document.querySelector("button");
const status = document.querySelector("#status");
const results = document.querySelector("#results");

let tousLesUtilisateurs = [];

function afficherUtilisateurs(utilisateurs) {
  results.innerHTML = "";

  if (utilisateurs.length === 0) {
    results.textContent = "Aucun utilisateur trouvé.";
    return;
  }

  utilisateurs.forEach(user => {
    const card = document.createElement("div");
    card.classList.add("card");

    const nom = document.createElement("p");
    nom.textContent = user.name;

    const email = document.createElement("p");
    email.textContent = user.email;

    const ville = document.createElement("p");
    ville.textContent = user.address.city;

    card.appendChild(nom);
    card.appendChild(email);
    card.appendChild(ville);
    results.appendChild(card);
  });
}

async function chargerUtilisateurs() {
  status.classList.remove("error");
  status.textContent = "Chargement des utilisateurs...";
  button.disabled = true;

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error("Erreur lors de la récupération des données");
    }

    tousLesUtilisateurs = await response.json();
    status.textContent = "";
    afficherUtilisateurs(tousLesUtilisateurs);
  } catch (error) {
    status.classList.add("error");
    status.textContent = "Impossible de charger les utilisateurs. Réessayez plus tard.";
  } finally {
    button.disabled = false;
  }
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const nom = input.value.trim();

  status.textContent = "";

  if (nom === "") {
    afficherUtilisateurs(tousLesUtilisateurs);
    return;
  }

  const utilisateursFiltres = tousLesUtilisateurs.filter(user =>
    user.name.toLowerCase().includes(nom.toLowerCase())
  );

  afficherUtilisateurs(utilisateursFiltres);
});

chargerUtilisateurs();