const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, gameState,engine, world;
var dustbin;
var paper;
var background,backgroundImg ;

function preload()
{
  backgroundImg= loadImage("background.jpg");
}
function setup() {
  createCanvas(800, 400);
  rectMode(CENTER);

  gameState = "start";

  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

 
  dustbin = new DustBin(720, 390, 100, 10);
  //dustbin.addImage(dustbinImg)
  
 
  paper = new Paper(200, 300, 10);
  //paper.addImage(paperImg)
  
  ground = Bodies.rectangle(width / 2, 400, width, 10,
  {
    isStatic: true
  });
  World.add(world, ground);
}

function draw() {
  background(backgroundImg);

  if (gameState === "start") 
  {
    textSize(40);
    fill("black");
    text("HOP A  LITTLE  DROP A  LITTLE ", 100, 200)
    textSize(20);
    fill("blue");
    text("\n Press 'SPACE' to Start, and Up to throw away the trash", 150, 350)
    
    if (keyDown("space")) 
    {
      gameState = "play"
    }
  }
  if (gameState === "play") {

    //background(backgroundImg);
    rectMode(CENTER);
    background(backgroundImg);
    dustbin.display();
    paper.display();

  }
}


function keyPressed()
{
  if (keyCode === UP_ARROW && gameState === "play") {
    Matter.Body.applyForce(paper.body, paper.body.position, {
      x: 12,
      y: -13
    });
  }
}
