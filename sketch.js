
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var world,boy;

function preload(){
	boy=loadImage("boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2 = new mango(970,210,30);
	mango3 = new mango(1000,125,30);
	mango4 = new mango(1100,222,30);
	mango5 = new mango(1060,180,30);
	mango6 = new mango(1232,260,30);
	mango7 = new mango(1200,200,30);
	mango7 = new mango(1200,200,30);
	mango8 = new mango(895,200,30);
	mango9 = new mango(1000,65,30);
	rock = new Stone(243,408,20);
	rope = new Rope(rock.body,{x:235, y:420})

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy,200,340,200,300);

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  rock.display();
  rope.display();

  groundObject.display();

  detectCollision(rock,mango1);
  detectCollision(rock,mango2);
  detectCollision(rock,mango3);
  detectCollision(rock,mango4);
  detectCollision(rock,mango5);
  detectCollision(rock,mango6);
  detectCollision(rock,mango7);
  detectCollision(rock,mango8);
  detectCollision(rock,mango9);






  text(mouseX + "," + mouseY, mouseX, mouseY);
}


function mouseDragged(){
    Matter.Body.setPosition(rock.body,{x: mouseX, y: mouseY});
}

function mouseReleased(){
    rope.detach();
}

function detectCollision(lrock,lmango){
  mangoBodyPosition=lmango.body.position;
  stoneBodyPosition=lrock.body.position;

  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);

  if(distance<=lmango.r+lrock.r){
    Matter.Body.setStatic(lmango.body,false)
  }
}