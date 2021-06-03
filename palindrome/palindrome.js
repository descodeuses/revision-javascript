console.log("au moment ou le fichier est lu au premier chargement par le navigateur")

document.getElementById("recherchePalindrome").addEventListener("click", estCeUnPalindrome)

function estCeUnPalindrome () {
  let mot = document.getElementById("mot").value.toLowerCase();
  affiche( estCeQueLesMotsSontIdentiques( mot, renverseLe(mot) ))
}

// Fonctions d'affichage
function affiche(resultat) {
  // affiche_le_resultat_avec_une_alert(resultat)
  affiche_le_resultat_avec_un_innerHTML(resultat)
}

function affiche_le_resultat_avec_une_alert(resultat) {
  alert(resultat)
}

function affiche_le_resultat_avec_un_innerHTML(resultat) {
  document.getElementById("affichageResultat").innerHTML = resultat
}

// Fonctions de « renversage »
function renverseLe(mot) {
  return renverse_detaille(mot)
  // return renverse_court(mot)
}

function renverse_detaille(mot) {
  let listeLettres = mot.split("")
  let nouveauTableau = [];
  for (let indice = listeLettres.length - 1; indice >= 0; indice--) {
    nouveauTableau.push(listeLettres[indice])
  }
  return nouveauTableau.join("")
}

function reverse_court(mot) {
  return mot.split("").reverse().join("");
}

// Fonction de comparaison
function estCeQueLesMotsSontIdentiques(mot, motInverse) {
  if (mot === motInverse) {
    return "Palindrome détecté !"
  } else {
    return "Ce mot n'est pas un palindrome"
  }
}

