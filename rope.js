class Rope {
    constructor(bodyE, bodyF,  offsetX, offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
    var option = {
        bodyA: bodyE,
        bodyB: bodyF,
        pointB:{
            x: this.offsetX, y: this.offsetY
        }
    };
    this.rope = Constraint.create(option);
    World.add(world, this.rope)
    
    };
    
    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        var anchor2x = pointB.x + this.offsetX;
        var anchor2y = pointB.y + this.offsetY;
     
    line(pointA.x, pointA.y, anchor2x, anchor2y)
    };
    }