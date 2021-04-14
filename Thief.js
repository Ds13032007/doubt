class Thief{
    constructor(x, y) {
      var options = {
          'frictionAir':0.005,
          'density':2
      }
      this.image = loadImage("thief.jpg");
      World.add(world, this.body);
    }
    display(){

      push();
      translate(this.body.position.x, this.body.position.y);
      imageMode(CENTER)
      image(this.image, 0, 0,this.radius*2, this.radius*2);
      pop();
    }
  };
  