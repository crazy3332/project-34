class Hero {
    constructor(x,y) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,300,300,options);
      World.add(world, this.body);
      this.image = loadImage("images/Superhero-01.png")
    }
    display(){
      var pos =this.body.position;
      push();
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y,10,10);
      imageMode(CENTER)
      image(this.image,pos.x,pos.y,500,500)
      pop();
    }
  };
