# Protocole de tests utilisateurs réels 


**Maquette testée :** `greenplate-chaleureux.html` C'est le prototype interactif du design retenu

**Testeur·euse :** Colin

**Observateur·trice :** Charlotte

**Date :** 8 octobre 2026

**Durée du test :** 5 minutes chronométrées

---

## 1. Scénario de test 

**« Trouve une recette à base de courgette prête en 30 minutes maximum, et ouvre sa fiche complète. »**

Choisi parce qu'il force à utiliser le vrai parcours de l'app (accueil → recherche → filtre par ingrédient + durée → fiche détail), cela force à pas juste à cliquer au hasard.

---

## 2. Observations pendant le test



| Étape | Ce qui a été observé 
|---|---|
| 1 | Clique directement sur le bouton « Rechercher un ingrédient » sur l'accueil.
| 2 | Regarde la liste de choix, hésite un petit peu avant de cliquer sur « Courgette ». 
| 3 | Clique sur « Courgette », puis sur l'option « 30 min ». Regarde immédiatement la liste de recettes en dessous, sans toucher au bouton Filtrer. 
| 4 | Fait défiler vers le bas, revient en haut, remarque enfin le bouton « Filtrer ». 
| 5 | Clique sur Filtrer, le bon résultat (Salade de riz complet aux herbes) s'affiche seul. 
| 6 | Clique sur la carte, la fiche recette s'ouvre. Tâche accomplie. 

**Temps total pour accomplir la tâche : env. 1 min**,

---

## 3. Audit d'accessibilité

### Contraste du bouton principal (mesuré, méthode WebAIM)

Bouton « Filtrer » / « Rechercher un ingrédient » — texte `#FFFBF6` sur fond terracotta `#C97B5F` :

**Ratio mesuré : 3,14:1**

| Seuil WCAG AA | Résultat |
|---|---|
| Texte normal (≥ 4,5:1) | ❌ Échec |
| Texte large / composant UI (≥ 3:1) | ✅ Passe |

→ Confirme la mesure déjà relevée dans `contrastes-chaleureux.md` : le bouton reste repérable comme zone cliquable (forme, couleur, taille), mais le texte lui-même est sous le seuil AA pour du texte standard.

### Navigation complète au clavier (Tab / Entrée, sans souris)

Testé directement sur le fichier HTML :

- `Tab` parcourt les chips, le bouton Filtrer et les cartes recette dans un ordre logique, de haut en bas.
- `Entrée` sur un chip le sélectionne (même comportement qu'un clic).
- `Entrée` sur « Filtrer » déclenche bien le filtrage.
- `Entrée` sur une carte recette ouvre la fiche détail.
- Seul bémol : la barre d'outils de démonstration (boutons Mobile/Desktop et onglets d'écran en haut de page) fait partie du parcours `Tab` avant d'atteindre l'app elle-même — normal ici puisque c'est un outil de présentation du prototype, à ignorer dans une version codée réelle.

**Verdict : navigation clavier fonctionnelle sur l'app elle-même.**

---
