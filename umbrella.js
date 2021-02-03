class Umbrella {
    constructor(x,y,radius) {
      var options = {
          isStatic: true,
      }
      this.body = Bodies.circle(x,y,50,options);
      this.radius = 50;
      this.image=loadImage("Walking Frame/walking_1.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      fill("pink");
      imageMode(CENTER);
      image(this.image,pos.x, pos.y+70,300,300);
    }
  };