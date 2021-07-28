const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d')

//SCOREBOARD

const canvas2 = document.getElementById('canvas2');
const ctx2 = canvas2.getContext('2d')

function score(){
ctx2.font = '20px digital';
ctx2.fillStyle = "red";
ctx2.fillText('COMP SCORE:', 2, 180);
ctx2.fillText('YOUR SCORE:', 2, 320);
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

//handles

// function drawHandles(){

// ctx.beginPath();
// ctx.rect(160, 0, 150, 10);
// ctx.fillStyle = "red";
// ctx.fill();
// ctx.closePath();

// ctx.beginPath();
// ctx.rect(160, 690, 150, 10);
// ctx.fillStyle = "red";
// ctx.fill();
// ctx.closePath();

// };


//drawing the ball/invoking the ball function

var x = 40;
var y = 40;
var dx = .8;
var dy = -.8;


//delta handles


pdx = 1;
pdy = 0;

// variables

var puckRadius = 10;
var paddleHeight = 20;
var paddleWidth = 100;
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
let distance = 40;

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

function drawCompScore() {
    ctx2.font = "46px Arial";
    ctx2.fillStyle = "white";
    ctx2.fillText(compScore, 15, 230);
}

function drawYourScore() {
    ctx2.font = "46px Arial";
    ctx2.fillStyle = "white";
    ctx2.fillText(yourScore, 15, 380);
}


//MAIN DRAW

function draw(){
    ctx2.clearRect(0, 0, canvas.width, canvas.height);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawRink();
    drawPuck();
    drawHandle1();
    drawHandle2();
    score();
    drawCompScore();
    drawYourScore();

    paddleX2 += pdx





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

    // if (distance <= 40){
    //     dy = -dy
    // }

    
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


var interval = setInterval(draw,2)



// ctx.beginPath();
// ctx.rect(160, 0, 150, 10);
// ctx.fillStyle = "red";
// ctx.fill();
// ctx.closePath();

// ctx.beginPath();
// ctx.rect(160, 690, 150, 10);
// ctx.fillStyle = "red";
// ctx.fill();
// ctx.closePath();

// };

//test comment