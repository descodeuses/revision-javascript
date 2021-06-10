/*
Algoritme pour la suite de fibonacci

Calculer la suite de Fibonacci pour N nombres.

on part d'un nombre entier.

Si le nombre et négatif, on renvoie un tableau vide

Si le nombre est 0, on renvoie un tableau vide
Si le nombre est 1, on renvoie un tableau [0]
Si le nombre est 2, on renvoie un tableau [1]
Sinon
le nombre est égale à la somme des deux précédents.

*/
function donne10PremiersElementsFibo(combien) {
    if (combien <= 0) {
        return []
    }

    let suite = []

    if (combien >= 1) {
        suite.push(0)
    }
    if (combien >= 2) {
        suite.push(1)
    }

    let valeurElementPrecedent = 0
    let valeurElementPrecedentPrecedent = 1
        
    for (let i = 2; i < combien; i++) {
        suite.push(valeurElementPrecedent + valeurElementPrecedentPrecedent)
        console.log(i, suite)
        valeurElementPrecedent = suite[i - 1]
        valeurElementPrecedentPrecedent = suite[i - 2]
    }

    return suite
}