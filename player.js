class Player{
    constructor(){
      this.index=null;
      this.name=null;
      this.distance=0;
    }
    Getcount()
    {
        database.ref('playercount').on("value",function (data){
            playercount=data.val();
        })
    }
    Updatecount(count)
    {
        database.ref('/').update({
           playercount:count
        })
    }
    UpdatePlayer()
    {
        var playerindex="players/player"+this.index;
        database.ref(playerindex).set({name:this.name,distance:this.distance})
    }
    static getplayerinfo()
    {
       database.ref('players').on("value",function (data){
           allplayers=data.val();
       })
    }
}