const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies



function setup() {
  canvas = createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var obj2_options = {
    restitution : 1
    
  }
  obj1 = Bodies.rectangle(200,100,100,100)
  obj2 = Bodies.circle(300,100,30,obj2_options)
  var ground_options ={
    isStatic : true
  }

  ground = Bodies.rectangle(200,390,400,5,ground_options)
  World.add(world,obj1);
  World.add(world,ground);
  World.add(world,obj2);
  console.log(obj1);
 
}

function draw() {

  background(200,255,255);

  Engine.update(engine);
 
    
  console.log(obj1.position.x);
  console.log(obj1.position.y);
 rectMode(CENTER);
  rect(obj1.position.x,obj1.position.y,100,100);
  rect(ground.position.x,ground.position.y,400,5);
  ellipseMode(RADIUS);
  circle(obj2.position.x,obj2.position.y,30);
}