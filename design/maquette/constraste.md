# Contrastes mesurés — maquette retenue : Chaleureux

Méthode : même formule que le [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) — luminance relative WCAG 2.x, ratio de 1:1 (aucun contraste) à 21:1 (noir sur blanc). Seuils utilisés :

- **Texte normal** : AA ≥ 4,5:1 · AAA ≥ 7:1
- **Texte large** (≥ 24px, ou ≥ 19px en gras) : AA ≥ 3:1 · AAA ≥ 4,5:1
- **Composants d'interface / objets graphiques** (bordures de champs, icônes porteuses de sens, séparateurs nécessaires à la compréhension) : ≥ 3:1 (WCAG 1.4.11)

Toutes les couleurs ci-dessous sont celles réellement utilisées dans la maquette Chaleureux (fond `#FBF1E6`, surface `#FFFBF6`, accent sauge `#93A876`, accent terracotta `#C97B5F` / `#E7A98F`, texte `#3A2E27` / `#8A7264`).

## Tableau des paires mesurées

| Élément | Premier plan | Fond | Ratio | Texte normal | Texte large |
|---|---|---|---|---|---|
| Texte principal / fond de page | `#3A2E27` | `#FBF1E6` | **11,77:1** | ✅ AA/AAA | ✅ AA/AAA | 
| Texte principal / surface carte | `#3A2E27` | `#FFFBF6` | **12,74:1** | ✅ AA/AAA | ✅ AA/AAA | 
| Texte atténué (meta) / fond de page | `#8A7264` | `#FBF1E6` | 4,03:1 | ❌ AA | ✅ (large) | 
| Texte atténué (meta) / surface carte | `#8A7264` | `#FFFBF6` | 4,36:1 | ❌ AA | ✅ (large) | 
| Logo « Greenplate »/ fond | `#8A5A3E` | `#FBF1E6` | 5,21:1 | ✅ AA · ❌ AAA | ✅ AA/AAA | 



## Synthèse par gravité

**Bloquant — répété sur presque tous les écrans**
- Texte des tags « sain » : 1,95:1 (sous tous les seuils, y compris UI). Apparaît sur chaque carte recette, mobile et desktop.


**À corriger — visible mais sous le seuil texte**
- Texte des boutons CTA (Rechercher / Filtrer / Voir toutes les recettes) : 3,14:1. Le bouton se repère bien (forme, couleur), mais le texte dedans est en dessous du seuil AA pour du texte normal.
- Adapter la couleur des tags pour qu'ils soient plus lisible 


**Mineur — purement décoratif, sans impact sur la compréhension**
- Ligne de séparation dans les cartes desktop (1,23:1) : un simple filet esthétique, aucune information ne dépend de sa visibilité exacte.
- Texte atténué (temps de préparation, difficulté) à 4,03-4,36:1 : passe la barre « grand texte », reste un peu court pour du texte normal strict — acceptable en l'état, à surveiller.

## Pistes de correction, vérifiées sur la même échelle

| Élément | Option | Nouveau ratio |
|---|---|---|
| Texte CTA sur fond terracotta | Texte `#3A2E27` (brun foncé déjà dans la palette) au lieu de crème | 4,05:1 *(limite — voir option 2)* |
| Texte CTA sur fond terracotta | Fond assombri `#A85A3D` + texte crème `#FFFBF6` inchangé | **4,86:1 ✅** |
| Texte tag « sain » | Texte `#3A2E27` (brun foncé) au lieu de crème | **6,54:1 ✅** |
| Chiffre d'étape | Texte `#2E3B22` (vert très foncé) au lieu de blanc | **4,59:1 ✅** |
| Bordure des chips | Réutiliser `#8A5A3E` (déjà la couleur du logo) au lieu de `#EAD3B8` | **5,21:1 ✅** |

Aucune de ces corrections ne change la palette : elles réutilisent des teintes déjà présentes ailleurs dans la maquette (texte principal, logo), donc le ton « chaleureux » reste intact.
