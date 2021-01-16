const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var block1, block2, block3, block4, block5, block6;
var paddle1,paddle2;
var polygon, slingShot;

function setup(){
var canvas = createCanvas(1200,1000);
engine = Engine.create();
world = engine.world;
fill("pink")
block1= new Block(330,235,30,40);
block2= new Block(360,235,30,40);
block3= new Block(390,235,30,40);
block4= new Block(420,235,30,40);
block5= new Block(450,235,30,40);

block6= new Block(360,205,30,40);
block7= new Block(390,205,30,40);
block8= new Block(420,205,30,40);

block9= new Block(390,155,30,40);

paddle1= new Paddle(400,400,250,10);

block10= new Block(700,100,30,40);
block11= new Block(730,100,30,40);
block12= new Block(760,100,30,40);
block13= new Block(715,60,30,40);
block14= new Block(745,60,30,40);
block15= new Block(730,20,30,40);

paddle2= new Paddle(750,200,200,10);

polygon= new Polygon(20,20,20,20);

slingshot = new SlingShot(polygon.body,{x:200, y:50});
}
function draw(){
background(0);
Engine.update(engine);
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
block13.display();
block14.display();
block15.display();

paddle1.display();
paddle2.display();

polygon.display();
}
function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
slingShot.attach(this.polygon);
    }




}