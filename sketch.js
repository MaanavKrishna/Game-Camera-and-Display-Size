var ball,ball1,database,position,playercount=0,player,form,game,allplayers,car1,car2,car3,car4;
var gamestate=0;
var cars;
function setup(){
    createCanvas(displayWidth,displayHeight);
    database=firebase.database();
    game=new Game();
    game.Getgamestate();
    game.Start();
}

function draw(){
     background("aqua"); 
    if(playercount===4)
     {
         game.update(1);
     }
     if(gamestate===1)
     {
         game.play();
     }
}

function changePosition(x,y){
    ball1.x = ball1.x + x;
    ball1.y = ball1.y + y;
}

function writeposition(x,y)
{
    database.ref('ball/position').set({x:ball1.x+x,y:ball1.y+y});
    console.log("hi")
}