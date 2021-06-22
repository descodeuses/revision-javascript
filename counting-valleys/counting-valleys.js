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
const jeViensDUneVallee = (positionAgainstSeaLevel, step) => {
    return positionAgainstSeaLevel == 0 && step == "U"
}

const countNumberOfValleysFor = (steps) => {

    let positionAgainstSeaLevel = 0
    let numberOfValleys = 0
    for(step of steps) {
        switch (step) {
            case 'U':
                positionAgainstSeaLevel++
                break
            case 'D':
                positionAgainstSeaLevel--
                break
        }
        // DEBUG.
        // console.log(step, positionAgainstSeaLevel)
        if (jeViensDUneVallee(positionAgainstSeaLevel, step)) {
            numberOfValleys++
        }        
    }

    return numberOfValleys
}
