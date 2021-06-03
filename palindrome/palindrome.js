console.log("au moment ou le fichier est lu au premier chargement par le navigateur")

document.getElementById("recherchePalindrome").addEventListener("click", estCeUnPalindrome)

function estCeUnPalindrome () {
    let mot = document.getElementById("mot").value.toLowerCase();
    // let motInverse = reverse(mot)
    let motInverse = autre_reverse(mot)
    
    let resultat;

    if (mot === motInverse) {
        resultat = "Palindrome détecté !"
    } else {
        resultat = "Ce mot n'est pas un palindrome"
    }

    // affiche_le_resultat_avec_une_alert(resultat)
    affiche_le_resultat_avec_un_innerHTML(resultat)
}

function reverse(mot) {
    let listeLettres = mot.split("")
    let nouveauTableau = [];
    for (let indice = listeLettres.length - 1; indice >= 0; indice--) {
        nouveauTableau.push(listeLettres[indice])
    }
    return nouveauTableau.join("")
}

function autre_reverse(mot) {
    return mot.split("").reverse().join("");
}

function affiche_le_resultat_avec_une_alert(resultat) {
    alert(resultat)
}

function affiche_le_resultat_avec_un_innerHTML(resultat) {
    document.getElementById("affichageResultat").innerHTML = resultat
}


