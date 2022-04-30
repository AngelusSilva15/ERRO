


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    Engine.update(engine)

	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
    var plane_options={
		isStatic:true
	}
var blok1_options = {
	restitution:07,
	friction:0.02,
	frictionAir:0
}
var blok2_options = {
	restitution:07,
	friction:0.01,
	frictionAir:0
}
var blok_options = {
	restitution:01,
	friction:1,
	frictionAir:0.3
}

	
	blok1 = Bodies.circle(220,10,10,blok1_options)
	World.add(world,blok1)
	  blok2 = Bodies.rectangle(110,50,10,10,blok2_options)
	  World.add(world,blok2)
	  blok3 = Bodies.rectangle(350,50,10,10,blok3_options)
	  World.add(world,blok3)
	
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.run(engine);
  ellipse(blok1.position.x,blok1.position.y,30)
  rect(blok2.position.x,blok2.position.y,50,50)
  rect(blok3.position.x,blok3.position.y,100,50)
  drawSprites();
}



