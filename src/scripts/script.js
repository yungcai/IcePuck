const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d')

//SCOREBOARD

const canvas2 = document.getElementById('canvas2');
const ctx2 = canvas2.getContext('2d')




//scorebaord updated

const canvas3 = document.getElementById('canvas3');
const ctx3 = canvas3.getContext('2d')

function score(){
    ctx3.font = '20px digital-7 mono';
    ctx3.fillStyle = "white";
    ctx3.fillText('COMP SCORE:', 2, 20);
    ctx3.fillText('YOUR SCORE:', 2, 145);
    };

//drawing the rink

function drawRink(){

ctx.beginPath();
ctx.arc(240, 350, 65, 0, 2 * Math.PI);
ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
ctx.stroke();

ctx.beginPath();
ctx.arc(240, 350, 65, 0, 2 * Math.PI);
ctx.strokeStyle = "rgba(0, 0, 255, 0.8)";
ctx.stroke();

ctx.beginPath();
ctx.moveTo(0, 350);
ctx.lineTo(480, 350);
ctx.strokeStyle = "red";
ctx.stroke();



//start 4 circles

ctx.beginPath();
ctx.arc(120, 165, 30, 0, 2 * Math.PI);
ctx.strokeStyle = "rgba(red";
ctx.stroke();

ctx.beginPath();
ctx.arc(360, 165, 30, 0, 2 * Math.PI);
ctx.strokeStyle = "rgba(red";
ctx.stroke();

ctx.beginPath();
ctx.arc(120, 515, 30, 0, 2 * Math.PI);
ctx.strokeStyle = "rgba(red";
ctx.stroke();

ctx.beginPath();
ctx.arc(360, 515, 30, 0, 2 * Math.PI);
ctx.strokeStyle = "rgba(red";
ctx.stroke();
ctx.closePath();

};


window.addEventListener("keydown", function(e) {
    if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
        e.preventDefault();
    }
}, false);


//drawing the ball/invoking the ball function

var x = 240;
var y = 350;
var dx = 1.2;
var dy = -1.2;


//delta handles


pdx = 1;
pdy = 0;

// variables

var puckRadius = 10;
var paddleHeight = 20;
var paddleWidth = 200;
var paddleX = canvas.width/ 2;
var paddleX2 = (canvas.width-paddleWidth) / 2;
var paddleY = (canvas.height-30);
var paddleY2 = 0;
var rightPressed = false;
var leftPressed = false;
var upPressed = false;
var downPressed = false;
let yourScore = 1;
let compScore = 1;
let gameOver = false;

function keyDownHandler(e) {
    if(e.key == "Up" || e.key == "ArrowUp") {
        upPressed = true;
    }
    else if(e.key == "Down" || e.key == "ArrowDown") {
        downPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.key == "Up" || e.key == "ArrowUp") {
        upPressed = false;
    }
    else if(e.key == "Down" || e.key == "ArrowDown") {
        downPressed = false;
    }
}


//puck shape

function drawPuck(){
    ctx.beginPath();
    ctx.arc(x, y, 25, 0, 2 * Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();
}


//draw handles



function drawHandle1() {
    ctx.beginPath();
    ctx.arc(paddleX, paddleY, 30, 0, 2 * Math.PI);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();

};




function drawHandle2(){
    ctx.beginPath();
    ctx.rect(paddleX2, paddleY2, paddleWidth, paddleHeight);
    ctx.fillStyle = "green";
    ctx.fill();
    ctx.closePath();
}

//score functions

function instructions(){
    ctx2.font = "24px digital-7 mono";
    ctx2.fillStyle = "white";
    ctx2.fillText("Welcome to IcePuck! ", 15, 35);
}

function instructions2(){
    ctx2.font = "24px digital-7 mono";
    ctx2.fillStyle = "white";
    ctx2.fillText("instructions: ", 15, 70);
}

function instructions3(){
    ctx2.font = "24px digital-7 mono";
    ctx2.fillStyle = "white";
    ctx2.fillText("Use the handle on your side to hit the puck.", 15, 105);
}

function instructions4(){
    ctx2.font = "24px digital-7 mono";
    ctx2.fillStyle = "white";
    ctx2.fillText("Use the arrow keys to control handle", 15,140);
}
function instructions5(){
    ctx2.font = "24px digital-7 mono";
    ctx2.fillStyle = "white";
    ctx2.fillText("movement. You score a point if you hit the", 15,175);
}

function instructions6(){
    ctx2.font = "24px digital-7 mono";
    ctx2.fillStyle = "white";
    ctx2.fillText("puck to the opponents side. If you allow ", 15,210);
}

function instructions7(){
    ctx2.font = "24px digital-7 mono";
    ctx2.fillStyle = "white";
    ctx2.fillText("the puck to hit your side of the rink, ", 15,245);
}

function instructions8(){
    ctx2.font = "24px digital-7 mono";
    ctx2.fillStyle = "white";
    ctx2.fillText("you allow a point to score. First one ", 15,280);
}

function instructions9(){
    ctx2.font = "24px digital-7 mono";
    ctx2.fillStyle = "white";
    ctx2.fillText("to 5 points wins!", 15,315);
}



function drawCompScore() {
    ctx3.font = "76px digital-7 italic";
    ctx3.fillStyle = "#FF8C00";
    ctx3.fillText(compScore, 15, 80);
}

function drawYourScore() {
    ctx3.font = "76px digital-7 italic";
    ctx3.fillStyle = "#FF8C00";
    ctx3.fillText(yourScore, 15, 215);
}


//MAIN DRAW

function draw(){
    ctx3.clearRect(0, 0, canvas.width, canvas.height);
    ctx2.clearRect(0, 0, canvas.width, canvas.height);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawRink();
    drawPuck();
    drawHandle1();
    drawHandle2();
    score();
    drawCompScore();
    drawYourScore();
    instructions();
    instructions2();
    instructions3();
    instructions4();
    instructions5();
    instructions6();
    instructions7();
    instructions8();
    instructions9();
   

    paddleX2 += pdx


    distX = x - paddleX
    distY = y - paddleY
    dist = Math.sqrt(distX*distX + distY*distY)
    
    if (dist < 55){
        dx = -dx;
        dy = -dy
    }

    if (x > paddleX2 && x < paddleX2 + paddleWidth && y > paddleY2 &&  y < paddleY2 + paddleHeight + 20){
        dy = -dy;
        dx = -dx;
    }

    if(x + dx > canvas.width-puckRadius || x + dx < puckRadius) {
        dx = -dx;
    }

    if(y + dy < puckRadius) {
        if (yourScore){
            yourScore = yourScore + 1
            dy = -dy;
        }
    } else if (y + dy > canvas.height-puckRadius){
       if (compScore){
           compScore = compScore + 1;
           dy = -dy ;
       } 
    }

    if(paddleX2 + paddleWidth > canvas.width || paddleX2 + pdx < 0) {
        pdx = -pdx;
    }

    
    if(upPressed && paddleY > canvas.height/2+30 ) {
        paddleY -= 1.5
    
    }
    else if(downPressed && paddleY < canvas.height-30) {
        paddleY += 1.5;
     
    }

    if(rightPressed) {
        paddleX += 2.5;
        if (paddleX > canvas.width -30){
            paddleX = canvas.width -30;
        }
    }
    else if(leftPressed) {
        paddleX -= 2.5;
        if (paddleX < 30){
            paddleX = 30;
        }
        
    }

    if (yourScore === 5){
        ctx.fillStyle = "#FF8C00";
        ctx.font = ' 80px digital-7 italic';
        ctx.fillText("YOU WON", 110, 300);
        gameOver = true;
        clearInterval(interval);
    } else if (compScore === 5){
        ctx.fillStyle = "#FF8C00";
        ctx.font = ' 80px digital-7 italic';
        ctx.fillText("YOU LOST", 110, 300);
        gameOver = true;
        clearInterval(interval);
    }


    x += dx;
    y += dy;

 
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
function keyDownHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    }
    else if(e.key == "Up" || e.key == "ArrowUp") {
        upPressed = true;
    }
    else if(e.key == "Down" || e.key == "ArrowDown") {
        downPressed = true;
    }

    
}

function keyUpHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false;
    }
    else if(e.key == "Up" || e.key == "ArrowUp") {
        upPressed = false;
    }
    else if(e.key == "Down" || e.key == "ArrowDown") {
        downPressed = false;
    }
}


var interval = setInterval(draw, 2)

