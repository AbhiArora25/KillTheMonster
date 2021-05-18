const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4,box5,box6,box7,box8,box9,box10,box11,box12;
var hero,monster,rope,ground;

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(1500, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(400,800,250);
  rope = new Rope(hero.body, { x: 500, y: 50 });
  monster = new Monster(1100,550,300);

  box1 = new Box(660, 520, 70, 70);
  box2 = new Box(680, 550, 70, 70);
  box3 = new Box(690, 530, 70, 70);
  box4 = new Box(760, 500, 70, 70);

  box5 = new Box(680, 460, 70, 70);
  box6 = new Box(710, 460, 70, 70);
  box7 = new Box(735, 480, 70, 70);
  box8 = new Box(655, 470, 70, 70);
  
  box9 = new Box(740, 580, 70, 70);
  box10 = new Box(730, 550, 70, 70);
  box11 = new Box(755, 490, 70, 70);
  box12 = new Box(730, 540, 70, 70);

}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();

  box5.display();
  box6.display();
  box7.display();
  box8.display();

  box9.display();
  box10.display();
  box11.display();
  box12.display();

  hero.display();
  rope.display();
  monster.display();

}

function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX, y:mouseY});
}