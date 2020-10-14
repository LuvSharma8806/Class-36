class Form {
    constructor(){
        this.input=createInput(" Your Name");
        this.button=createButton("Start");
        this.info=createElement('h3');
    }

    hide(){
        this.info.hide();
        this.input.hide();
        this.button.hide();
    }

    display(){
        var title=createElement('h2');
        title.html("Car Racing Game");
        title.position(130,0);

        this.input.position(150,100);
        this.button.position(150,180);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();

            player.name=this.input.value();
            playerCount+=1;
            player.index=playerCount;
            player.update();
            player.updateCount(playerCount);

            this.info.html("Hello "+ name);
            this.info.position(250,200);
        });
    }
}