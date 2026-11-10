// ============================================================
// ATELIER 0 — ANNUAIRE EN CONSOLE
// ============================================================

// 1. Contacts
const contacts = [
  { nom: 'Ada Lovelace', email: 'ada@ex.fr', ville: 'Londres' },
  { nom: 'Alan Turing', email: 'alan@ex.fr', ville: 'Manchester' },
  { nom: 'Grace Hopper', email: 'grace@ex.fr', ville: 'New York' }
];
console.log(contacts);

// 2. Display all contacts
contacts.forEach(c => {
  console.log(`${c.nom} (${c.ville})`);
});

// 3. Search by name
function chercherParNom(terme) {
  return contacts.find(c =>
    c.nom.toLowerCase().includes(terme.toLowerCase())
  );
}

// 4. Filter by city
function filtrerParVille(ville) {
  return contacts.filter(c => c.ville === ville);
}

// 5. Add a contact
function ajouterContact(nom, email, ville) {
  contacts.push({ nom, email, ville });
  console.log(`Contact ajouté : ${nom}`);
}

// 6. Statistics
const total = contacts.reduce((acc) => acc + 1, 0);
const villes = [...new Set(contacts.map(c => c.ville))];
console.log(`Total : ${total} contacts`);
console.log(`Villes : ${villes.join(', ')}`);

// TESTS
console.log(chercherParNom('ada'));       // Ada's object
console.log(chercherParNom('xyz'));       // undefined
console.log(filtrerParVille('Londres'));  // 1 contact
console.log(filtrerParVille('Paris'));    // []

const londres = filtrerParVille('Londres');
console.log(`${londres.length} résultat(s)`);
londres.forEach(c => console.log(c.nom));

ajouterContact('Linus Torvalds', 'linus@ex.fr', 'Helsinki');
console.log(contacts); // 4 contacts

// ============================================================
// DEBUG EXERCISES
// ============================================================

// Debug A
const age = '18';
if (age === 18) {
  console.log('Majeur');
}

// Debug B
const profil = { nom: 'Ada' };
console.log(profil.email?.length ?? 0);

// Debug C
const nombres = [1, 2, 3];
const resultatNombres = nombres.map(n => n * 2); // [2, 4, 6]
console.log(resultatNombres);

// Debug D
const contactsD = [
  { nom: 'Ada', ville: 'Londres' },
  { nom: 'Alan', ville: 'Londres' }
];
const resultatContacts = contactsD.filter(c => c.ville === 'Londres');
console.log(resultatContacts);

// ============================================================
// BONUS
// ============================================================

// Bonus 1: delete a contact
function supprimerContact(email) {
  const i = contacts.findIndex(c => c.email === email);
  if (i === -1) return false;
  contacts.splice(i, 1);
  return true;
}

// Bonus 2: sort by name (copy so the original isn't changed)
const tries = [...contacts].sort((a, b) => a.nom.localeCompare(b.nom));

// Bonus 3: partial update
function mettreAJour(email, changements) {
  const i = contacts.findIndex(c => c.email === email);
  if (i === -1) return false;
  contacts[i] = { ...contacts[i], ...changements };
  return true;
}

// Bonus 4: mini-report
console.log('=== ANNUAIRE ===');
console.log(`Total : ${contacts.length} contacts`);
console.log(`Villes : ${[...new Set(contacts.map(c => c.ville))].join(', ')}`);
console.log('Contacts :');
contacts.forEach((c, i) => {
  console.log(`${i + 1}. ${c.nom} — ${c.email} (${c.ville})`);
});