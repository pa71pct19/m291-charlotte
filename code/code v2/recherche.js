// Recherche + filtres de la page recherche : JavaScript natif, aucune bibliothèque.
const formulaire = document.getElementById('filtres');
const champ = document.getElementById('q');
const cartes = document.querySelectorAll('.carte');
const compteur = document.getElementById('compteur');
const ingredients = formulaire.querySelectorAll('input[name="ing"]');
const aucunIngredient = formulaire.querySelector('input[name="ing"][value="aucun"]');

// 1. « Aucun » (ingrédients) exclut les autres ingrédients, et seulement eux :
//    la catégorie et la durée ne sont jamais modifiées.
formulaire.addEventListener('change', (e) => {
  if (e.target.name !== 'ing') return;
  if (e.target === aucunIngredient) {
    ingredients.forEach((c) => { if (c !== aucunIngredient) c.checked = false; });
  } else if (e.target.checked) {
    aucunIngredient.checked = false;
  }
  if (![...ingredients].some((c) => c.checked)) aucunIngredient.checked = true;
});

// 2. Au chargement, les choix sont relus dans l'adresse (?q=soupe&ing=courgette&cat=plat&duree=15)
const params = new URLSearchParams(location.search);
formulaire.querySelectorAll('input').forEach((c) => {
  const valeurs = params.getAll(c.name);
  if (valeurs.length) c.checked = valeurs.includes(c.value);
});
champ.value = params.get('q') ?? '';

// 3. Texte comparable : minuscules, sans accents, « œ » → « oe », ponctuation → espaces
const normaliser = (texte) => texte
  .toLowerCase()
  .normalize('NFD').replace(/\p{Diacritic}/gu, '')
  .replace(/œ/g, 'oe')
  .replace(/[^a-z0-9]+/g, ' ')
  .trim();

// Texte cherché dans chaque carte, calculé une seule fois : nom de la recette + aliments
const textes = new Map();
cartes.forEach((carte) => {
  const nom = carte.querySelector('.carte__titre').textContent;
  textes.set(carte, ' ' + normaliser(`${nom} ${carte.dataset.aliments}`));
});

// 4. Filtres des puces (relus dans l'adresse : ils s'appliquent au clic sur « Filtrer »)
const ing = params.getAll('ing').filter((v) => v !== 'aucun');
const cat = params.get('cat');
const dureeMax = Number(params.get('duree'));          // « aucun » ou absent → NaN / 0 → pas de limite

// 5. Affichage : le texte tapé ET les filtres doivent correspondre à la recette
function afficher() {
  // « courgettes » → « courgette », « œufs » → « oeuf » : on retire le pluriel des mots longs
  const mots = normaliser(champ.value).split(' ').filter(Boolean)
    .map((m) => (m.length > 3 ? m.replace(/[sx]$/, '') : m));

  let trouvees = 0;
  cartes.forEach((carte) => {
    const { ing: ingCarte, cat: catCarte, duree } = carte.dataset;
    const ok = mots.every((m) => textes.get(carte).includes(' ' + m))        // début de mot
            && (!ing.length || ing.some((i) => ingCarte.split(' ').includes(i)))
            && (!cat || cat === 'aucun' || cat === catCarte)
            && (!dureeMax || Number(duree) <= dureeMax);
    carte.hidden = !ok;
    if (ok) trouvees++;
  });

  compteur.textContent = trouvees
    ? `${trouvees} recette${trouvees > 1 ? 's' : ''} trouvée${trouvees > 1 ? 's' : ''}`
    : 'Aucune recette trouvée';
  return trouvees;
}

// Au chargement (ou après « Filtrer » / Entrée) : zéro résultat → page dédiée
// (replace : le bouton Retour ne rebondit pas dessus)
if (afficher() === 0) location.replace('aucun-resultat.html');

// Pendant la frappe : la liste se met à jour en direct, sans quitter la page.
// (Pas de redirection ici : on ne renvoie vers « aucun résultat » qu'au moment de valider.)
champ.addEventListener('input', afficher);
