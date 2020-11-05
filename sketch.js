const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, gameState,engine, world,dustbin,paper;
var background1;

function preload()
{
  background1= loadImage("background.jpg");
}

function setup() {
  createCanvas(800, 400);
  rectMode(CENTER);

  gameState = "start";

  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  dustbin = new DustBin(720, 320, 100, 10);

  paper = new Paper(200, 300, 2);
  
  ground = Bodies.rectangle(width / 2, 400, width, 10,
  {
    isStatic: true
  });
  World.add(world, ground);
}

function draw() {
  if (gameState === "start") {
    background(background1);
    textSize(40);
    fill("black");
    text("HOP A  LITTLE  DROP A  LITTLE ", 100, 200)
    textSize(20);
    fill("red");
    text("\n Press 'SPACE' to Start, and Up to throw away the trash", 150, 350)
    
    if (keyDown("space")) {
      gameState = "play"
    }
  }
  if (gameState === "play") {
    rectMode(CENTER);
    background(background1);

    paper.display();
    dustbin.display();
   

  }
}

function keyPressed() 
{
  if (keyCode === UP_ARROW)
   {

    Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:-145});

  
  }
}

