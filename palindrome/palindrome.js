console.log("au moment ou le fichier est lu au premier chargement par le navigateur")

function estCeUnPalindrome () {
    let mot = document.getElementById("mot").value;
    let motInverse = mot.split("").reverse().join("");
    if (mot === motInverse) {
        console.log("PALINDROME DETECTED !")
    }
}
