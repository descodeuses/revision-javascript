console.log("au moment ou le fichier est lu au premier chargement par le navigateur")

function estCeUnPalindrome () {
    let mot = document.getElementById("mot").value;
    let motInverse = mot.split("").reverse().join("");
    let resultat = document.getElementById("resultat");

    if (mot === motInverse) {
        resultat.innerHTML = "Palindrome détecté !"
    } else {
        resultat.innerHTML  = "Ce mot n'est pas un palindrome"
    }
}
