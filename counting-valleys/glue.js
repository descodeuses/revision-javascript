console.log("fichier glue.js chargé !")

document.getElementById("count").addEventListener("click", function (){
    let steps = document.getElementById("steps").value
    console.log("steps : ", steps)
    let numberOfValleys = countNumberOfValleysFor(steps)
    document.getElementById("resultat").innerHTML = numberOfValleys;
})