class Superman{
    constructor(x, y, r){
    
     var options = {isStatic: false, restitution: 0.3, friction: 0.5, density: 1}
        this.body = Matter.Bodies.circle(x, y, r/3 ,options); 
        this.radius = r;   
    
        
        this.image = loadImage("images/Superhero-01.png");
        World.add(world, this.body);

            }
            display(){
                imageMode(CENTER);
                image(this.image,this.body.position.x, this.body.position.y, this.radius, this.radius);
            }
    
    
    }