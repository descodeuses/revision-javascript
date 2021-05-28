// C'est mieux les scripts en bas, parce que des fois ça plante,
// ça ne fait rien, des messages d'erreurs comme quoi
// il ne trouve pas les trucs
// -- Laetitia

console.log("coucou depuis le javascript")
console.error("un message d'erreur")
var listeDeBalises = document.getElementsByTagName("section")
console.log(listeDeBalises)
console.log(listeDeBalises.length)
console.log(listeDeBalises.item(0))
// Mais pourquoi c'est null ?
// https://developer.mozilla.org/fr/docs/Web/API/HTMLCollection

var unTableauAvecDesTrucsDedans = [1, 2, 3]
console.log(unTableauAvecDesTrucsDedans)
console.log("j'écris un truc pour le tableau : " + unTableauAvecDesTrucsDedans)
console.log("j'écris un truc pour le tableau : ", unTableauAvecDesTrucsDedans)

var unAutreTableau = []
console.log(unAutreTableau)
unAutreTableau.push("un")
console.log(unAutreTableau)
unAutreTableau.push("deux")
console.log(unAutreTableau)

// https://learnxinyminutes.com/docs/fr-fr/javascript-fr/

// Dans une boucle, trois éléments:
// - condition de départ : let i = 0
// - condition d'arrêt : i < 100
// - incrément : i++
let unTableauJusqua100 = []
for (let i = 10; i <= 100; i += 10) {
    unTableauJusqua100.push("un chiffre : " + i)
    console.log(i)
}
console.log(unTableauJusqua100)

// > L'instruction var (pour variable) permet de déclarer une variable et éventuellement d'initialiser sa valeur.
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/var
// **var est généraliste**
//
// > L'instruction let permet de déclarer une variable dont la portée 
// > est celle du bloc courant, éventuellement en initialisant sa valeur.
// **let est spécialisée**

for (let i = 0; i < 1; i++) {
    let uneLetVariableDansLaBoucle = "let déclaré dans la boucle"
    var uneVariableDansLaBoucle = "var déclaré dans la boucle"
    console.log(uneLetVariableDansLaBoucle)
    console.log(uneVariableDansLaBoucle)
    console.log(i)
}
console.log(uneVariableDansLaBoucle, "vue depuis l'extérieur du bloc")
//console.log(uneLetVariableDansLaBoucle, "vue depuis l'extérieur du bloc")
// Uncaught ReferenceError: uneLetVariableDansLaBoucle is not defined

let uneLetVariableDansLaBoucle = "let déclaré à l'exterieur de la boucle";
console.log(uneLetVariableDansLaBoucle, "vue depuis l'extérieur du bloc")

var unTableauDe0A10 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
console.log("valeur de la première position", unTableauDe0A10[0])
console.log("valeur de la deuxième position", unTableauDe0A10[1])

let lesNombresDuTableauDivisiblePar3 = []
for(let indexDuTableau = 0; indexDuTableau < unTableauDe0A10.length; indexDuTableau++) {
    // console.log("index tableau : ", indexDuTableau, " valeur : ", unTableauDe0A10[indexDuTableau])
    let valeur = unTableauDe0A10[indexDuTableau]
    if (valeur % 3 == 0) {
        lesNombresDuTableauDivisiblePar3.push(valeur)
    }
}
console.log("nombres divisible par 3 avec for classique : ", lesNombresDuTableauDivisiblePar3)

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
lesNombresDuTableauDivisiblePar3 = []
for(let indexDuTableau in unTableauDe0A10) {
    // console.log("index tableau : ", indexDuTableau, " valeur : ", unTableauDe0A10[indexDuTableau])
    let valeur = unTableauDe0A10[indexDuTableau]
    if (valeur % 3 == 0) {
        lesNombresDuTableauDivisiblePar3.push(valeur)
    }
}
console.log("nombres divisible par 3 avec for in : ", lesNombresDuTableauDivisiblePar3)

// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/for...of
lesNombresDuTableauDivisiblePar3 = []
for (let valeur of unTableauDe0A10) {
    // console.log("valeur du tableau: ", valeur)
    if (valeur % 3 == 0) {
        lesNombresDuTableauDivisiblePar3.push(valeur)
    }
}
console.log("nombres divisible par 3 avec for of : ", lesNombresDuTableauDivisiblePar3)


let indexDuTableau = 0;
lesNombresDuTableauDivisiblePar3 = []
while (indexDuTableau < unTableauDe0A10.length) {
    // console.log("index tableau : ", indexDuTableau, " valeur : ", unTableauDe0A10[indexDuTableau])
    indexDuTableau++;
    let valeur = unTableauDe0A10[indexDuTableau]
    if (valeur % 3 == 0) {
        lesNombresDuTableauDivisiblePar3.push(valeur)
    }
}
console.log("nombres divisible par 3 avec while : ",lesNombresDuTableauDivisiblePar3)

lesNombresDuTableauDivisiblePar3 = []
unTableauDe0A10.forEach(function (valeur, index) {
    // console.log("index tableau : ", index, " valeur : ", valeur)
    if (valeur % 3 == 0) {
        lesNombresDuTableauDivisiblePar3.push(valeur)
    }
})
console.log("nombres divisible par 3 avec un forEach : ",lesNombresDuTableauDivisiblePar3)

let unNouveauTableau = unTableauDe0A10.filter(function (valeur) {
    // console.log(valeur)
    return valeur % 3 == 0
})
console.log("nombres divisible par 3 avec un filter : ",unNouveauTableau)

unNouveauTableau = unTableauDe0A10.filter(valeur => valeur % 3 == 0)
console.log("nombres divisible par 3 avec un filter avec fonction fleche: ", unNouveauTableau)
