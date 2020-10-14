class Player {
    constructor (){
        this.index=null;
        this.distance=0;
        this.name=null;

    }

    getCount(){
        var countRef=database.ref("playerCount");
        countRef.on("value",(data)=>{
            playerCount=data.val();
        });
    }
    updateCount(count){
     database.ref('/').update({
         playerCount:count
     });

    }
    update(){
        var playerIndex="Players/Player"+this.index;
        database.ref(playerIndex).set({
            name:this.name,
            distance:this.distance
        });
    }

    static getPlayerNo(){
        var playerNumber=database.ref("Players");
        playerNumber.on("value",(data)=>{
            allPlayers=data.val();
        })
    }
}