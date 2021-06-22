console.log("fichier counting-valleys.js chargé !")

/*
UDDDUDUU => 1

Algoritme pour compter le nombre de vallées

Boucle de consommation des pas :
    Je prend le premier pas.
    Si c'est un U, je compte +1
    Sinon si c'est un D, je compte -1

    Je prend le second pas.
    Si c'est un U, je compte +1
    Sinon si c'est un D, je compte -1

    Et ainsi de suite

Structure de contrôle permettant de détecter une valée

    Quand je reviens à 0, j'ai fini une montagne, ou une vallée.
    Si pas qui m'a fait revenir à 0 est un U, alors j'étais dans une vallée

*/
const countNumberOfValleysFor = (steps) => {
    let splittedSteps = steps.split("")
    let numberOfU = splittedSteps.filter((e) => { return e == "U"}).length
    let numberOfD = splittedSteps.filter((e) => { return e == "D"}).length
    console.log(splittedSteps, numberOfU,numberOfD )
    console.log(numberOfU == numberOfD)

    return 0
}