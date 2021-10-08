const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase, playerArcher, arrow;
var baseimage;

function preload() {
  backgroundImg = loadImage("assets/background.png");
  baseimage = loadImage("assets/base.png");
  playerimage = loadImage("assets/player.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  angleMode(DEGREES);

  var player_options = {
    isStatic: true
  }

  //create player base body
  playerBase = Bodies.rectangle(200, 380, 100, 150, player_options);
  World.add(world, playerBase);

  //create player body
  player = Bodies.rectangle(230, playerBase.position.y - 160, 50, 180, player_options);
  World.add(world, player);

  playerArcher = new PlayerArcher(300, 275, 100, 75, -90);

  arrow = new Arrow(155, 137);
}

function draw() {
  background(backgroundImg);

  //show the player image using image() function
  image(playerimage, player.position.x, player.position.y, 50, 180);

  //show the playerbase image using image() function
  image(baseimage, playerBase.position.x, playerBase.position.y, 100, 150);

  playerArcher.display();

  arrow.display();

  Engine.update(engine);

  // Title
  push();
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);
  pop();
}

function keyReleased() {
  if (keyIsDown(RIGHT_ARROW)) {
    arrow.shoot();
  }
}