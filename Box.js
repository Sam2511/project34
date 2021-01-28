class Box{
    constructor(x,y){
        var options = {restitution: 0.8, friction: 1}
        this.body = Bodies.rectangle(x, y, 50,50,options);
        this.width = 50;
        this.height = 50;

        World.add(world, this.body);
    }
    display(){
        
       push();
        rectMode(CENTER);
        fill(255,0,0);
        stroke(0);
        strokeWeight(4);
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
        pop();

    }
}