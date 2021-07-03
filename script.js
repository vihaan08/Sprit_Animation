var canvasWidth = 650
var canvasHeight = 350

var spriteWidth = 864
var spriteHeight = 280

var rows = 2
var columns = 8

var trackRight = 0
var trackLeft = 1

var width = spriteWidth/columns
var height = spriteHeight/rows

var curFrame = 0
var frameCount = 8

var x = 0 // render entire sprite
var y = 0

var srcX = 0 // to render single frame of sprite
var srcY = 0

var left = false
var right = true

var speed = 12

var canvas = document.getElementById("canvas")

canvas.width = canvasWidth
canvas.height = canvasHeight

var ctx = canvas.getContext("2d")

var character = new Image()
character.src = "character.png"

function updateFrame(){
curFrame = ++curFrame % frameCount //8%8=0
srcX = curFrame * width
ctx.clearRect(x,y,width,height)
if(left && x>0){
srcY = trackLeft * height
x -= speed // x=x-speed
}
if(right && x<(canvasWidth-width)){
srcY = trackRight * height
x += speed
}
}

function draw(){
updateFrame()
ctx.drawImage(character,srcX,srcY,width,height,x,y,width,height)
}

setInterval(draw,100)

function moveLeft(){
left = true
right = false
}

function moveRight(){
left = false
right = true
}