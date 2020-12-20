
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1, bob2, bob3, bob4, bob5;
var roof;
var rope1, rope2, rope3, rope4, rope5;
var engine;
var world;

function setup() {
	createCanvas(1600, 700);
	
	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(width/2, height/4, width/7, 20);
	bobdiameter = 40;
	startbobposx=width/2;
	startbobposy=height/4+500;
	bob1 = new Bob(startbobposx-bobdiameter*2, startbobposy, bobdiameter);
	bob2 = new Bob(startbobposx-bobdiameter, startbobposy, bobdiameter);
	bob3 = new Bob(startbobposx, startbobposy, bobdiameter);
	bob4 = new Bob(startbobposx+bobdiameter, startbobposy, bobdiameter);
	bob5 = new Bob(startbobposx+bobdiameter*2, startbobposy, bobdiameter);
    
	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  console.log(bob1.body.position);
 
}



