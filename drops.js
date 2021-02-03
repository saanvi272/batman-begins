class Drop {
    constructor(x,y) {
      var options = {
          isStatic: false,
           restitution:0.1,
           friction:0.001,
      }
      this.body = Bodies.circle(x,y,5,options);
      this.radius = 5;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      fill("blue");
      ellipseMode(CENTER);
      ellipse(pos.x, pos.y,this.radius,this.radius);
    }
    updateY(){
        if(this.body.position.y>height){
            Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)})
        }
    }
  };