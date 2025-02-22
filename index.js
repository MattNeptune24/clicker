let clicks = document.getElementById("Clicks")
let totalDisplay = document.getElementById("Total")

let multiplier = 1
let total = 10

document.getElementById("Button").onclick = click
document.getElementById("ResetButton").onclick = reset

function click(){
    clicks.textContent = Number(Number(clicks.textContent) + multiplier)
}

function reset(){
    if(Number(Number(clicks.textContent))>=(total)){
        clicks.textContent = "0"
        multiplier = multiplier + 1
        total = total * 2
        totalDisplay.textContent = "/" + total
    }else{
        window.alert("You must have " + total + " clicks to reset your progress.")
    }
}