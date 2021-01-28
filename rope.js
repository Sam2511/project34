class Rope{
    constructor(body1, point2){
        var options = {bodyA: body1, pointB: point2, stiffness: 1, length: 450};
       this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }
    display(){

        if(this.rope.bodyA){
            var pointA = this.rope.bodyA.position;
            var pointB = this.rope.pointB;
            push()
            stroke(0,255,0);
            strokeWeight(4);
            line(pointB.x, pointB.y, pointA.x, pointA.y);
            pop();

        }

    }
}