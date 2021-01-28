
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint; 

var bgmg;

var grnd;

function preload()
{
	bgmg = loadImage("images/GamingBackground.png");
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  grnd = new Ground(400,600,1200,20);
  grnd2 = new Ground(850,450,100,10);
  
  superMan = new Superman(380,200,200,200);
  mon = new Monster(870,440,300,300),
  rope = new Rope(superMan.body, {x: 380, y:0})

	box1 = new Box(595, 595);
  box2 = new Box(595, 540);
  box4 = new Box(595, 420);
  box5 = new Box(595, 360);
  box6 = new Box(595, 300);
  box7 = new Box(595, 240);
  box8 = new Box(540, 540);
  box10 = new Box(540, 390);
  box11 = new Box(540, 340);
  box12 = new Box(710, 290);
  box13 = new Box(710, 240);
  box14 = new Box(710, 190);
  box15 = new Box(710, 140);
  box16 = new Box(650, 590);
  box17 = new Box(650, 540);
  box18 = new Box(650, 490);
  box19 = new Box(650, 440);
  box20 = new Box(650, 390);
  box21 = new Box(650, 340);


 



	Engine.run(engine);
  
}


function draw() {
  background(255,0,0);
  image(bgmg,800,350,1600,700);
  Engine.update(engine);
  
  box1.display();
  box2.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  superMan.display();
  mon.display();

 
 
  grnd.display();
 
  fill(0);
  textSize(30);
  text("To summon moster again press Space key",600,650);



 
}


function mouseDragged(){
  Matter.Body.setPosition(superMan.body,{x:mouseX, y:mouseY})
}


function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(mon.body,{x:850, y:440})
  }
}