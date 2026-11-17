
const carteEl = document.querySelector('#carte');
const avatarEl = document.querySelector('.avatar');
const nomEl = document.querySelector('#nom');
const bioEl = document.querySelector('#bio');
const tagsEl = document.querySelector('#tags');
const compteurEl = document.querySelector('#compteur');
const btnSuivant = document.querySelector('#btn-suivant');
const btnPrecedent = document.querySelector('#btn-precedent');

const pointsEl = document.querySelector('#points');
const btnSombre = document.querySelector('#btn-sombre');

const profils = [
  {
    nom: 'Ada Lovelace',
    bio: 'Mathématicienne et pionnière de la programmation.',
    avatar: 'https://i.pravatar.cc/96?img=1',
    tags: ['Maths', 'Algorithmes', 'Histoire'],
    couleur: '#4f46e5'
  },
  {
    nom: 'Alan Turing',
    bio: 'Père de l\'informatique théorique.',
    avatar: 'https://i.pravatar.cc/96?img=3',
    tags: ['Logique', 'Cryptographie'],
    couleur: '#059669'
  },
  {
    nom: 'Grace Hopper',
    bio: 'Inventrice du premier compilateur.',
    avatar: 'https://i.pravatar.cc/96?img=5',
    tags: ['Compilateurs', 'COBOL', 'Marine'],
    couleur: '#dc2626'
  }
];

profils.forEach(() => {
  const point = document.createElement('span');
  point.classList.add('point');
  pointsEl.appendChild(point);
});

function afficherProfil(profil) {
  nomEl.textContent = profil.nom;
  bioEl.textContent = profil.bio;
  avatarEl.setAttribute('src', profil.avatar);
  avatarEl.setAttribute('alt', 'Photo de ' + profil.nom);

  tagsEl.textContent = '';
  profil.tags.forEach(tag => {
    const li = document.createElement('li');
    li.classList.add('tag');
    li.textContent = tag;
    tagsEl.appendChild(li);
  });

  carteEl.style.setProperty('--accent', profil.couleur);
  carteEl.classList.add('carte--active');
  compteurEl.textContent = 'Profil ' + (profils.indexOf(profil) + 1) + ' / ' + profils.length;

  pointsEl.style.setProperty('--accent', profil.couleur);
  Array.from(pointsEl.children).forEach((point, i) => {
  point.classList.toggle('actif', i === profils.indexOf(profil));
  });

  
}


let index = 0;
btnSuivant.addEventListener('click', () => {
  index = (index + 1) % profils.length;
  carteEl.classList.remove('carte--active');
  void carteEl.offsetWidth;
  afficherProfil(profils[index]);
});

btnPrecedent.addEventListener('click', () => {
  index = (index - 1 + profils.length) % profils.length;
  carteEl.classList.remove('carte--active');
  void carteEl.offsetWidth;
  afficherProfil(profils[index]);
});

btnSombre.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

afficherProfil(profils[0]);