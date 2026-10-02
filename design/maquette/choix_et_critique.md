
# Grille critique des 3 designs 


## Fiche critique — design 1 · **Audacieux & attractif**

| Force | Faiblesse |
|---|---|
| Critère : hiérarchie typographique — preuve : le nom de l'app et les titres de recette sont en TeX Gyre Bonum 700 à 22-24px, contre 12-15px pour le texte courant → la lecture va directement à l'essentiel. | Critère : accessibilité (contraste) — preuve : le tag "sain" (texte vert sur fond rose `#F2A6B3`) → illisible pour Léa si elle regarde son téléphone le soir, fatiguée, en plein soleil ou à bout de bras. |
| Critère : feedback deviné — preuve : le bouton "Rechercher un ingrédient" (fond vert sauge foncé `#3F5B44`, texte crème) affiche un contraste mesuré  et porte une icône + un chevron → il se devine comme cliquable sans avoir à zoomer sur l'image. | Critère : charge visuelle (hiérarchie) — preuve : l'écran d'accueil empile bandeau coloré + carrousel + bouton CTA + liste avant la moindre recette visible sans scroller → 4 blocs forts en haut, à l'opposé du "épuré, aéré" du brief. |

**Verdict**

J'élimine ce design parce qu'il ne correspond pas à l'ambiance générale voulue du site. La DA est surchargée, même si le thème donne envie cela distrait du principe de l'application, quelque chose de direct et efficace 


## Fiche critique — design 2 · **Sobre**

| Force | Faiblesse |
|---|---|
| Critère : fidélité au brief — preuve : fond `#FAFAF7` quasi blanc, aucune couleur dominante, cartes sans ombre → correspond au "beaucoup de blanc" et au "ton rassurant et simple" du brief, mot pour mot. | Critère : accessibilité (contraste non-textuel) — preuve : l'icône "feuille" sauge sur fond clair (`#8DA184` sur `#F1F1EC`) mesure **2,45:1**, sous le seuil de 3:1 recommandé pour les éléments graphiques (WCAG 1.4.11) → sur la grille desktop (8 cartes), l'icône devient quasi invisible. |
| Critère : navigation / densité — preuve : la liste utilise des lignes séparées par un simple trait (`1px solid #ECECE7`) au lieu de cartes avec ombre → moins d'éléments distincts à scanner, cohérent avec une Léa qui veut trouver vite sans réfléchir. | Critère : attractivité — preuve : aucune couleur ne dépasse un usage ponctuel (accent rose utilisé une seule fois) → le rendu peut lire comme "austère" plutôt que "appétissant", alors que le brief demande explicitement des "photos qui donnent envie". |

**Verdict**

J'élimine ce design parce que bien qu'il soit simple et efficace, il n'attire pas l'oeil et est assez ennuyant.  Il est plus faible pour donner envie de cuisiner


## Fiche critique — design 3 · direction **Chaleureux**

| Force | Faiblesse |
|---|---|
| Critère : cohérence — preuve : la même palette terracotta/crème et la même police Poppins reviennent identiquement sur les 8 écrans (header, CTA, tags) → une seule identité visuelle reconnaissable, pas de rupture d'un écran à l'autre. | Critère : accessibilité (contraste, le plus grave des 3) — preuve : le texte des boutons CTA (crème sur terracotta `#C97B5F`) est à **3,14:1** (sous les 4,5:1 requis pour du texte de bouton), et le tag "sain" (crème sur terracotta clair `#E7A98F`) tombe à **1,95:1** → ces éléments reviennent sur chaque écran et chaque carte, donc l'impact est le plus large des 3 maquettes. |
| Critère : attractivité / ton — preuve : message personnalisé ("Bon retour, Léa !") + tons chauds → correspond au "ton rassurant" du brief et crée un effet accueillant que les deux autres directions n'ont pas. | Critère : lisibilité à distance — preuve : comme Audacieux, l'accueil cumule carrousel + bouton + liste ; au test des 10 secondes, le mot "sain" sur fond terracotta clair est le premier élément à disparaître. |

**Verdict**

Je garde ce design, car malgré les défauts de lisibilité, c'est celui qui donne le plus envie de cuisiner et d'ouvrir l'application tout en restant simple. Le site suit le brief de base et correspond aux attentes de Léa. 

---

## Tableau comparatif — les 3 designs
 
Barème : 1 = cassé · 3 = moyen · 5 = ça va (ces maquettes n'auront jamais 5 partout).
 
| Design | Lisibilité | Navigation | Feedback | Cohérence | Accessibilité | Phrase précise |
|---|---|---|---|---|---|---|
| Audacieux | 3 | 5 | 5 | 5 | 1 | Le tag « sain » est illisible  et l'accueil cumule 4 blocs colorés avant la liste |
| Sobre | 5 | 5 | 1 | 5 | 3 | Le bouton de recherche (blanc sur fond presque blanc, sans bordure) ne se détache pas assez pour être deviné comme cliquable |
| Chaleureux | 3 | 5 | 5 | 5 | 1 | Les CTA et le tag « sain » tombent sous les seuils d'accessibilité sur presque chaque écran |
 
 
---

## Choix

Je retiens Chaleureux parce que Léa pourra repérer la recette la plus rapide en moins de 10 secondes, sans être distraite par la couleur, tout en ayant une application qui lui donne envie et un sentiment de réconfort.

---
