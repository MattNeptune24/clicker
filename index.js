const clicksDisplay = document.getElementById("Clicks")
const totalDisplay = document.getElementById("Total")

var multiplier = 1
var clicks = -1

var price1 = 10
var multiplier1 = 1
var price2 = 500
var multiplier2 = 10

var price3 = 10000
var multiplier3 = 50
var price4 = 50000
var multiplier4 = 100

var price5 = 100000
var multiplier5 = 500
var price6 = 500000
var multiplier6 = 1000

var price7 = 1000000
var multiplier7 = 5000
var price8 = 5000000
var multiplier8 = 10000

var price9 = 10000000
var multiplier9 = 50000
var price10 = 50000000
var multiplier10 = 100000

document.getElementById("Button").onclick = click
document.getElementById("Shop1").onclick = purchase1
document.getElementById("Shop2").onclick = purchase2
document.getElementById("Shop3").onclick = purchase3
document.getElementById("Shop4").onclick = purchase4
document.getElementById("Shop5").onclick = purchase5
document.getElementById("Shop6").onclick = purchase6
document.getElementById("Shop7").onclick = purchase7
document.getElementById("Shop8").onclick = purchase8
document.getElementById("Shop9").onclick = purchase9
document.getElementById("Shop10").onclick = purchase10

function purchase1(){
    if(clicks>=(price1-1)){
        clicksDisplay.textContent = clicks-price1
        clicks = clicks-price1
        multiplier = multiplier + multiplier1
        multiplier1 = multiplier1 + 1
        document.getElementById("Shop1").textContent = "+" + multiplier1
        document.getElementById("Text2").textContent = multiplier + " Clicks / Click"
        price1 = price1 * 2
    }else{
        document.getElementById("Text").textContent = "You must have " + price1 + " clicks to purchase this upgrade."
    }
}

function purchase2(){
    if(clicks>=(price2-1)){
        clicksDisplay.textContent = clicks-price2
        clicks = clicks-price2
        multiplier = multiplier + multiplier2
        multiplier2 = multiplier2 + 2
        document.getElementById("Shop2").textContent = "+" + multiplier2
        document.getElementById("Text2").textContent = multiplier + " Clicks / Click"
        price2 = price2 * 2
    }else{
        document.getElementById("Text").textContent = "You must have " + price2 + " clicks to purchase this upgrade."
    }
}

function purchase3(){
    if(clicks>=(price3-1)){
        clicksDisplay.textContent = clicks-price3
        clicks = clicks-price3
        multiplier = multiplier + multiplier3
        multiplier3 = multiplier3 + 10
        document.getElementById("Shop3").textContent = "+" + multiplier3
        document.getElementById("Text2").textContent = multiplier + " Clicks / Click"
        price3 = price3 * 2
    }else{
        document.getElementById("Text").textContent = "You must have " + price3 + " clicks to purchase this upgrade."
    }
}

function purchase4(){
    if(clicks>=(price4-1)){
        clicksDisplay.textContent = clicks-price4
        clicks = clicks-price4
        multiplier = multiplier + multiplier4
        multiplier4 = multiplier4 + 20
        document.getElementById("Shop4").textContent = "+" + multiplier4
        document.getElementById("Text2").textContent = multiplier + " Clicks / Click"
        price4 = price4 * 2
    }else{
        document.getElementById("Text").textContent = "You must have " + price4 + " clicks to purchase this upgrade."
    }
}

function purchase5(){
    if(clicks>=(price5-1)){
        clicksDisplay.textContent = clicks-price5
        clicks = clicks-price5
        multiplier = multiplier + multiplier5
        multiplier5 = multiplier5 + 100
        document.getElementById("Shop5").textContent = "+" + multiplier5
        document.getElementById("Text2").textContent = multiplier + " Clicks / Click"
        price5 = price5 * 2
    }else{
        document.getElementById("Text").textContent = "You must have " + price5 + " clicks to purchase this upgrade."
    }
}

function purchase6(){
    if(clicks>=(price6-1)){
        clicksDisplay.textContent = clicks-price6
        clicks = clicks-price6
        multiplier = multiplier + multiplier6
        multiplier6 = multiplier6 + 200
        document.getElementById("Shop6").textContent = "+" + multiplier6
        document.getElementById("Text2").textContent = multiplier + " Clicks / Click"
        price6 = price6 * 2
    }else{
        document.getElementById("Text").textContent = "You must have " + price6 + " clicks to purchase this upgrade."
    }
}

function purchase7(){
    if(clicks>=(price7-1)){
        clicksDisplay.textContent = clicks-price7
        clicks = clicks-price7
        multiplier = multiplier + multiplier7
        multiplier7 = multiplier7 + 1000
        document.getElementById("Shop7").textContent = "+" + multiplier7
        document.getElementById("Text2").textContent = multiplier + " Clicks / Click"
        price7 = price7 * 2
    }else{
        document.getElementById("Text").textContent = "You must have " + price7 + " clicks to purchase this upgrade."
    }
}

function purchase8(){
    if(clicks>=(price8-1)){
        clicksDisplay.textContent = clicks-price8
        clicks = clicks-price8
        multiplier = multiplier + multiplier8
        multiplier8 = multiplier8 + 2000
        document.getElementById("Shop8").textContent = "+" + multiplier8
        document.getElementById("Text2").textContent = multiplier + " Clicks / Click"
        price8 = price8 * 2
    }else{
        document.getElementById("Text").textContent = "You must have " + price8 + " clicks to purchase this upgrade."
    }
}

function purchase9(){
    if(clicks>=(price9-1)){
        clicksDisplay.textContent = clicks-price9
        clicks = clicks-price9
        multiplier = multiplier + multiplier9
        multiplier9 = multiplier9 + 1000
        document.getElementById("Shop9").textContent = "+" + multiplier9
        document.getElementById("Text2").textContent = multiplier + " Clicks / Click"
        price9 = price9 * 2
    }else{
        document.getElementById("Text").textContent = "You must have " + price9 + " clicks to purchase this upgrade."
    }
}

function purchase10(){
    if(clicks>=(price10-1)){
        clicksDisplay.textContent = clicks-price10
        clicks = clicks-price10
        multiplier = multiplier + multiplier10
        multiplier10 = multiplier10 + 2000
        document.getElementById("Shop10").textContent = "+" + multiplier10
        document.getElementById("Text2").textContent = multiplier + " Clicks / Click"
        price10 = price10 * 2
    }else{
        document.getElementById("Text").textContent = "You must have " + price10 + " clicks to purchase this upgrade."
    }
}

function click(){
    clicksDisplay.textContent = (clicks + multiplier)
    clicks = clicks + multiplier
}
