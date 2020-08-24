class Game{
    constructor(){
      
    }
    update(stat){
     database.ref('/').update({
         gamestate:stat
     })
    }

    Getgamestate(){
        console.log(123);
        database.ref('gamestate').on("value",function (data) {
            gamestate=data.val();
        })
    }
    Start(){
      if(gamestate===0)
      {
        player=new Player();
        player.Getcount();
        form=new Form();
        form.display();
      }
      car1=createSprite(100,200);
      car2=createSprite(300,200);
      car3=createSprite(500,200);
      car4=createSprite(700,200);
      cars=[car1,car2,car3,car4];

    }
    play()
    {
      form.hide();
      text("Game Is Starting",200,150);
      Player.getplayerinfo();
      if(allplayers!=undefined)
      {
        var xposition=100;
        var yposition=0;
        var index=0;
        for(var plr in allplayers)
        {
          index=index+1;
          xposition+=200;
          yposition=displayHeight-allplayers[plr].distance;
          //text(allplayers[plr].name,xposition,20);
          cars[index-1].x=xposition;
          cars[index-1].y=yposition;
          if(index===player.index)
          {
            cars[index-1].shapeColor="red";
            camera.position.x=displayWidth/2;
            camera.position.y=cars[index-1].y;
          }
          if(keyDown(UP_ARROW)&&(player.index!=null))
          {
           player.distance=player.distance+50;
           player.UpdatePlayer();
          }
        }
      }
      drawSprites();
    }
}
