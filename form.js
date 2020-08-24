class Form{
    constructor(){
      this.title=createElement('h2');
      this.input=createInput("name");
      this.button=createButton("Play");
    }
    display(){
      this.title.html("car race");
      this.title.position(displayWidth/2+40,displayHeight/2-50);
      this.input.position(displayWidth/2,displayHeight/2+50);
      this.button.position(displayWidth/2+120,displayHeight/2+80);
      
      this.button.mousePressed(()=>{
          this.input.hide();
          this.button.hide();
          playercount++;
          player.name=this.input.value();
          player.index=playercount;
          player.UpdatePlayer();
          player.Updatecount(playercount);
      })
    }
    hide()
    {
      this.title.hide();
      this.input.hide();
      this.button.hide();
    }
}