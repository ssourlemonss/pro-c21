const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball;
var buttonOne;
var buttonTwo;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  buttonOne = createImg("right.png")
  buttonOne.position(220,30)
  buttonOne.size(50,50)
  buttonOne.mouseClicked(hForce)
  
  buttonTwo = createImg("up.png")
  buttonTwo.position(20,30)
  buttonTwo.size(50,50)
  buttonTwo.mouseClicked(vForce)

  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
 
  var options = {
    restitution: 0.95
  }
  ball = Bodies.circle(200,100,20, options)
  World.add(world, ball)

  rectMode(CENTER);
  ellipseMode(RADIUS);

}

function draw() 
{
  background(51);
  
  ellipse(ball.position.x,ball.position.y,20)
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);
}

function hForce()
{
Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
}

function vForce()
{
Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:0.05})
}
