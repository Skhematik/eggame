console.log("hi")
// egg amount
let clicks = 0
// egg upgrade cost
let eggupgrade1 = 100
let eggupgrade2 = 1000
let eggupgrade3 = 100000
let eggupgrade4 = 1e6
let eggupgrade5 = 1e9
let rebirth = 1e15

    
function increment(){
    clicks++
    document.getElementById("clickcount").innerHTML = clicks
}
// upgrade functions
function upgrade(){
    if (clicks >= eggupgrade1) {
    clicks -= 100;
    setInterval(increment, 1000);
    }
}

function upgradex10(){
    if (clicks >= eggupgrade2) {
    clicks -= 1000;
    setInterval(increment, 100);
    }
}

function upgradex100(){
    if (clicks >= eggupgrade3) {
    clicks -= 100000;
    setInterval(increment, 1);
    }
}

function upgradex1000(){
    if (clicks >= eggupgrade4) {
    clicks -= 1e6;
    setInterval(increment, 0.1);
    }
}

function upgradex1000000(){
    if (clicks >= eggupgrade5) {
    clicks -= 1e9;
    setInterval(increment, 0.001);
    }
}

function godbtn(){
    if (clicks >= rebirth) {
        clicks -= 1e15
        displayImage("winscreen.png", 1000, 1000  )
        alert("you won the game, close this tab... NOW")
        
    }

}

function displayImage(src, width, height) {
    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    document.body.appendChild(img);
   }