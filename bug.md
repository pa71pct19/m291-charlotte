# Bug du compteur
- Ce que je vois : Le compteur n'affiche pas le chiffre qui augmente
- Ce que j’attendais : Le compteur s'augmente
- La boîte qui change : n 
- Ce qui ne se met pas à jour : l'affichage car dans la console ça change
- Ligne à ajouter : document.getElementById("affiche").textContent = n;