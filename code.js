const clicksDisplay = document.getElementById("Clicks")
const totalDisplay = document.getElementById("Total")

let totalClicks = 1
let totalPoints = 0
let totalTime = 0
let totalMultiplier = 1

let multiplier = 1
let clicks = 0
let autoclicker = 0
let price11 = 100000
let restartPrice = 1000000

let price1 = 10
let multiplier1 = 1
let price2 = 500
let multiplier2 = 10

let price3 = 10000
let multiplier3 = 50
let price4 = 50000
let multiplier4 = 100

let price5 = 250000
let multiplier5 = 500
let price6 = 1000000
let multiplier6 = 1000

let price7 = 5000000
let multiplier7 = 5000
let price8 = 20000000
let multiplier8 = 10000

let price9 = 100000000
let multiplier9 = 50000
let price10 = 500000000
let multiplier10 = 100000 

document.getElementById("Button").onclick = click
document.getElementById("Autoclicker").onclick = purchase11
document.getElementById("RestartButton").onclick = restart
document.getElementById("LoadData").onclick = loadData

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

document.getElementById("Shop1").textContent = "+" + new Intl.NumberFormat("en-US").format(multiplier1)
document.getElementById("Shop2").textContent = "+" + new Intl.NumberFormat("en-US").format(multiplier2)
document.getElementById("Shop3").textContent = "+" + new Intl.NumberFormat("en-US").format(multiplier3)
document.getElementById("Shop4").textContent = "+" + new Intl.NumberFormat("en-US").format(multiplier4)
document.getElementById("Shop5").textContent = "+" + new Intl.NumberFormat("en-US").format(multiplier5)
document.getElementById("Shop6").textContent = "+" + new Intl.NumberFormat("en-US").format(multiplier6)
document.getElementById("Shop7").textContent = "+" + new Intl.NumberFormat("en-US").format(multiplier7)
document.getElementById("Shop8").textContent = "+" + new Intl.NumberFormat("en-US").format(multiplier8)
document.getElementById("Shop9").textContent = "+" + new Intl.NumberFormat("en-US").format(multiplier9)
document.getElementById("Shop10").textContent = "+" + new Intl.NumberFormat("en-US").format(multiplier10)

const autoclicker1 = (autoclicker) => {
    setTimeout(() => {
        clicksDisplay.textContent = new Intl.NumberFormat("en-US").format(clicks+multiplier)
        clicks = clicks + (multiplier * totalMultiplier)
        localStorage.setItem('savedClicks', clicks) 

        document.getElementById("totalPoints").textContent = "Total Points: " + Intl.NumberFormat("en-US").format(totalPoints + (multiplier * totalMultiplier))
        totalPoints = totalPoints + (multiplier * totalMultiplier)
        localStorage.setItem('savedTotalPoints', totalPoints) 
        document.getElementById("totalTime").textContent = "Total Time : " + Intl.NumberFormat("en-US").format(totalTime)
        totalTime = totalTime
        localStorage.setItem('savedTotalTime', totalTime) 
        document.getElementById("Text4").textContent = new Intl.NumberFormat("en-US").format(totalMultiplier) + "x Total Multiplier"
        totalMultiplier = totalMultiplier
        localStorage.setItem('savedTotalMultiplier', totalMultiplier)
        restartPrice = restartPrice
        localStorage.setItem('savedRestartPrice', restartPrice)
        if(autoclicker >= 1){
            autoclicker1(autoclicker)
        }
    }, autoclicker * 1000);
}

const timer = (time) => {
    setTimeout(() => {
        document.getElementById("totalTime").textContent = "Total Time : " + Intl.NumberFormat("en-US").format(totalTime + 1)
        totalTime = totalTime + 1
        localStorage.setItem('savedTotalTime', totalTime)
        timer(totalTime)
    }, 60000);
}

timer(totalTime)

function click(){
    clicksDisplay.textContent = new Intl.NumberFormat("en-US").format(clicks+multiplier)
    clicks = clicks + (multiplier * totalMultiplier)
    localStorage.setItem('savedClicks', clicks) 

    document.getElementById("totalPoints").textContent = "Total Points : " + Intl.NumberFormat("en-US").format(totalPoints + (multiplier * totalMultiplier))
    totalPoints = totalPoints + (multiplier * totalMultiplier)
    localStorage.setItem('savedTotalPoints', totalPoints) 
    document.getElementById("totalClicks").textContent = "Total Clicks : " + Intl.NumberFormat("en-US").format(totalClicks + 1)
    totalClicks = totalClicks + 1
    localStorage.setItem('savedTotalClicks', totalClicks) 
    document.getElementById("totalTime").textContent = "Total Time : " + Intl.NumberFormat("en-US").format(totalTime)
    totalTime = totalTime
    localStorage.setItem('savedTotalTime', totalTime) 
    document.getElementById("Text4").textContent = new Intl.NumberFormat("en-US").format(totalMultiplier) + "x Total Multiplier"
    totalMultiplier = totalMultiplier
    localStorage.setItem('savedTotalMultiplier', totalMultiplier)
    restartPrice = restartPrice
    localStorage.setItem('savedRestartPrice', restartPrice)
}

function loadData(){
    clicks = Number(localStorage.getItem('savedClicks'))
    clicksDisplay.textContent = new Intl.NumberFormat("en-US").format(clicks)
    multiplier = 1
    document.getElementById("Text2").textContent = new Intl.NumberFormat("en-US").format(multiplier) + " Point / Click"
    totalMultiplier = 1
    document.getElementById("Text4").textContent = new Intl.NumberFormat("en-US").format(totalMultiplier) + "x Total Multiplier"
    document.getElementById("Text").textContent = "Successfully loaded " + new Intl.NumberFormat("en-US").format(clicks) + " points."

    totalPoints = Number(localStorage.getItem('savedTotalPoints'))
    document.getElementById("totalPoints").textContent = "Total Points : " + new Intl.NumberFormat("en-US").format(totalPoints)
    totalClicks = Number(localStorage.getItem('savedTotalClicks'))
    document.getElementById("totalClicks").textContent = "Total Clicks : " + new Intl.NumberFormat("en-US").format(totalClicks)
    totalTime = Number(localStorage.getItem('savedTotalTime'))
    document.getElementById("totalTime").textContent = "Total Time : " + Intl.NumberFormat("en-US").format(totalTime)
    totalMultiplier = Number(localStorage.getItem('savedTotalMultiplier'))
    document.getElementById("Text4").textContent = new Intl.NumberFormat("en-US").format(totalMultiplier) + "x Total Multiplier"
    restartPrice = Number(localStorage.getItem('savedRestartPrice'))
}

function restart(){
    if(clicks >= restartPrice){
        multiplier = 1
        clicks = -1, autoclicker = 0
        price11 = 100000, totalMultiplier = totalMultiplier + 1
        localStorage.setItem('savedTotalMultiplier', totalMultiplier)
        
        price1 = 100, multiplier1 = 1
        price2 = 500, multiplier2 = 10

        price3 = 10000, multiplier3 = 50
        price4 = 50000, multiplier4 = 100

        price5 = 250000, multiplier5 = 500
        price6 = 1000000, multiplier6 = 1000

        price7 = 5000000, multiplier7 = 5000
        price8 = 20000000, multiplier8 = 10000

        price9 = 100000000, multiplier9 = 50000
        price10 = 500000000, multiplier10 = 100000
        
        document.getElementById("Shop1").textContent = "+" + new Intl.NumberFormat("en-US").format(multiplier1), document.getElementById("Shop2").textContent = "+" + new Intl.NumberFormat("en-US").format(multiplier2)
        document.getElementById("Shop3").textContent = "+" + new Intl.NumberFormat("en-US").format(multiplier3), document.getElementById("Shop4").textContent = "+" + new Intl.NumberFormat("en-US").format(multiplier4)
        document.getElementById("Shop5").textContent = "+" + new Intl.NumberFormat("en-US").format(multiplier5), document.getElementById("Shop6").textContent = "+" + new Intl.NumberFormat("en-US").format(multiplier6)
        document.getElementById("Shop7").textContent = "+" + new Intl.NumberFormat("en-US").format(multiplier7), document.getElementById("Shop8").textContent = "+" + new Intl.NumberFormat("en-US").format(multiplier8)
        document.getElementById("Shop9").textContent = "+" + new Intl.NumberFormat("en-US").format(multiplier9), document.getElementById("Shop10").textContent = "+" + new Intl.NumberFormat("en-US").format(multiplier10)


        clicksDisplay.textContent = new Intl.NumberFormat("en-US").format(clicks+multiplier)
        document.getElementById("Text2").textContent = new Intl.NumberFormat("en-US").format(multiplier) + " Point / Click"
        document.getElementById("Text4").textContent = new Intl.NumberFormat("en-US").format(totalMultiplier) + "x Total Multiplier"
        restartPrice = restartPrice * 10
        localStorage.setItem('savedRestartPrice', restartPrice)
    }else{
        document.getElementById("Text").textContent = "You must have " + new Intl.NumberFormat("en-US").format(restartPrice) + " points to restart your progress."
    }
}

function purchase1(){
    if(clicks>=(price1)){
        clicksDisplay.textContent = new Intl.NumberFormat("en-US").format(clicks-price1)
        clicks = clicks-price1
        multiplier = multiplier + multiplier1
        multiplier1 = multiplier1 + 1
        document.getElementById("Shop1").textContent = "+" + new Intl.NumberFormat("en-US").format(multiplier1)
        document.getElementById("Text2").textContent = new Intl.NumberFormat("en-US").format(multiplier) + " Points / Click"
        price1 = price1 * 2
    }else{
        document.getElementById("Text").textContent = "You must have " + new Intl.NumberFormat("en-US").format(price1) + " points to purchase this upgrade."
    }
}

function purchase2(){
    if(clicks>=(price2)){
        clicksDisplay.textContent = new Intl.NumberFormat("en-US").format(clicks-price2)
        clicks = clicks-price2
        multiplier = multiplier + multiplier2
        multiplier2 = multiplier2 + 2
        document.getElementById("Shop2").textContent = "+" + new Intl.NumberFormat("en-US").format(multiplier2)
        document.getElementById("Text2").textContent = new Intl.NumberFormat("en-US").format(multiplier) + " Points / Click"
        price2 = price2 * 2
    }else{
        document.getElementById("Text").textContent = "You must have " + new Intl.NumberFormat("en-US").format(price2) + " points to purchase this upgrade."
    }
}

function purchase3(){
    if(clicks>=(price3)){
        clicksDisplay.textContent = new Intl.NumberFormat("en-US").format(clicks-price3)
        clicks = clicks-price3
        multiplier = multiplier + multiplier3
        multiplier3 = multiplier3 + 10
        document.getElementById("Shop3").textContent = "+" + multiplier3
        document.getElementById("Text2").textContent = new Intl.NumberFormat("en-US").format(multiplier) + " Points / Click"
        price3 = price3 * 2
    }else{
        document.getElementById("Text").textContent = "You must have " + new Intl.NumberFormat("en-US").format(price3) + " points to purchase this upgrade."
    }
}

function purchase4(){
    if(clicks>=(price4)){
        clicksDisplay.textContent = new Intl.NumberFormat("en-US").format(clicks-price4)
        clicks = clicks-price4
        multiplier = multiplier + multiplier4
        multiplier4 = multiplier4 + 20
        document.getElementById("Shop4").textContent = "+" + new Intl.NumberFormat("en-US").format(multiplier4)
        document.getElementById("Text2").textContent = new Intl.NumberFormat("en-US").format(multiplier) + " Points / Click"
        price4 = price4 * 2
    }else{
        document.getElementById("Text").textContent = "You must have " + new Intl.NumberFormat("en-US").format(price4) + " points to purchase this upgrade."
    }
}

function purchase5(){
    if(clicks>=(price5)){
        clicksDisplay.textContent = new Intl.NumberFormat("en-US").format(clicks-price5)
        clicks = clicks-price5
        multiplier = multiplier + multiplier5
        multiplier5 = multiplier5 + 100
        document.getElementById("Shop5").textContent = "+" + new Intl.NumberFormat("en-US").format(multiplier5)
        document.getElementById("Text2").textContent = new Intl.NumberFormat("en-US").format(multiplier) + " Points / Click"
        price5 = price5 * 2
    }else{
        document.getElementById("Text").textContent = "You must have " + new Intl.NumberFormat("en-US").format(price5) + " points to purchase this upgrade."
    }
}

function purchase6(){
    if(clicks>=(price6)){
        clicksDisplay.textContent = new Intl.NumberFormat("en-US").format(clicks-price6)
        clicks = clicks-price6
        multiplier = multiplier + multiplier6
        multiplier6 = multiplier6 + 200
        document.getElementById("Shop6").textContent = "+" + multiplier6
        document.getElementById("Text2").textContent = new Intl.NumberFormat("en-US").format(multiplier) + " Points / Click"
        price6 = price6 * 2
    }else{
        document.getElementById("Text").textContent = "You must have " + new Intl.NumberFormat("en-US").format(price6) + " points to purchase this upgrade."
    }
}

function purchase7(){
    if(clicks>=(price7)){
        clicksDisplay.textContent = new Intl.NumberFormat("en-US").format(clicks-price7)
        clicks = clicks-price7
        multiplier = multiplier + multiplier7
        multiplier7 = multiplier7 + 1000
        document.getElementById("Shop7").textContent = "+" + new Intl.NumberFormat("en-US").format(multiplier7)
        document.getElementById("Text2").textContent = new Intl.NumberFormat("en-US").format(multiplier) + " Points / Click"
        price7 = price7 * 2
    }else{
        document.getElementById("Text").textContent = "You must have " + new Intl.NumberFormat("en-US").format(price7) + " points to purchase this upgrade."
    }
}

function purchase8(){
    if(clicks>=(price8)){
        clicksDisplay.textContent = new Intl.NumberFormat("en-US").format(clicks-price8)
        clicks = clicks-price8
        multiplier = multiplier + multiplier8
        multiplier8 = multiplier8 + 2000
        document.getElementById("Shop8").textContent = "+" + new Intl.NumberFormat("en-US").format(multiplier8)
        document.getElementById("Text2").textContent = new Intl.NumberFormat("en-US").format(multiplier) + " Points / Click"
        price8 = price8 * 2
    }else{
        document.getElementById("Text").textContent = "You must have " + new Intl.NumberFormat("en-US").format(price8) + " points to purchase this upgrade."
    }
}

function purchase9(){
    if(clicks>=(price9)){
        clicksDisplay.textContent = new Intl.NumberFormat("en-US").format(clicks-price9)
        clicks = clicks-price9
        multiplier = multiplier + multiplier9
        multiplier9 = multiplier9 + 1000
        document.getElementById("Shop9").textContent = "+" + new Intl.NumberFormat("en-US").format(multiplier9)
        document.getElementById("Text2").textContent = new Intl.NumberFormat("en-US").format(multiplier) + " Points / Click"
        price9 = price9 * 2
    }else{
        document.getElementById("Text").textContent = "You must have " + new Intl.NumberFormat("en-US").format(price9) + " points to purchase this upgrade."
    }
}

function purchase10(){
    if(clicks>=(price10)){
        clicksDisplay.textContent = new Intl.NumberFormat("en-US").format(clicks-price10)
        clicks = clicks-price10
        multiplier = multiplier + multiplier10
        multiplier10 = multiplier10 + 2000
        document.getElementById("Shop10").textContent = "+" + new Intl.NumberFormat("en-US").format(multiplier10)
        document.getElementById("Text2").textContent = new Intl.NumberFormat("en-US").format(multiplier) + " Points / Click"
        price10 = price10 * 2
    }else{
        document.getElementById("Text").textContent = "You must have " + new Intl.NumberFormat("en-US").format(price10) + " points to purchase this upgrade."
    }
}

function purchase11(){
    if(clicks>=(price11)){
        if(autoclicker == 0){
            clicksDisplay.textContent = new Intl.NumberFormat("en-US").format(clicks-price11)
            clicks = clicks-price11
            autoclicker = autoclicker + 1
            document.getElementById("Autoclicker").className = "auto"
            autoclicker1(autoclicker)
        }
    }else{
        if(autoclicker == 0){
            document.getElementById("Text").textContent = "You must have " + new Intl.NumberFormat("en-US").format(price11) + " points to purchase this upgrade."
        }else{
            document.getElementById("Text").textContent = "This upgrade has reached it's highest level."
        }
    }
}
