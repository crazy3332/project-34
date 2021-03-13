const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


function preload() {
//preload the images here
backG = loadImage("images/GamingBackground.png");
monster1 = loadImage("images/Monster-01.png");
bmonster2 = loadImage("images/Monster-02.png");
superhero1 = loadImage("images/Superhero-01.png");
superhero2 = loadImage("images/Superhero-02.png");
}

function setup() {
  engine = Engine.create();
  world = engine.world
  createCanvas(3000, 800);
  hero = new Hero(500,400);

  Monster = new monster(2250,400);
  ground = new Ground(1500,800,width-width/3,10);
  fly = new Fly(hero.body,{x:400, y:400})
  box1a = new block(1000,750,100,100);
  box1b = new block(1000,650,100,100);
  box1c = new block(1000,550,100,100);
  box1d = new block(1000,450,100,100);
  box1e = new block(1000,350,100,100);
  
  box2a = new block(1150,750,100,100);
  box2b = new block(1150,650,100,100);
  box2c = new block(1150,550,100,100);
  box2d = new block(1150,450,100,100);
  box2e = new block(1150,350,100,100);

  box3a = new block(1300,750,100,100);
  box3b = new block(1300,650,100,100);
  box3c = new block(1300,550,100,100);
  box3d = new block(1300,450,100,100);
  box3e = new block(1300,350,100,100);
  
  box4a = new block(1100,250,100,100);
  box4b = new block(1200,250,100,100);
  box4c = new block(1150,150,100,100);
  

  // create sprites here
  Engine.run(engine)
}

function draw() {

  background(backG);
  hero.display();
  Monster.display();
  ground.display();
  fly.display();
  box1a.display();
  box1b.display();
  box1c.display();
  box1d.display();
  box1e.display();
  
  box2a.display();
  box2b.display();
  box2c.display();
  box2d.display();
  box2e.display();

  box3a.display();
  box3b.display();
  box3c.display();
  box3d.display();
  box3e.display();

  
  box4a.display();
  box4b.display();
  box4c.display();
}


function mouseDragged(){
  Matter.Body.setPosition(hero.body, {x: mouseX , y: mouseY});
}