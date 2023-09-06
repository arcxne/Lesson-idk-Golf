// TODO: CLEAN CODE
// TODO: IF BALL GOES OUT OF BOUNDS, RESPAWN IN CENTRE
// TODO: TURN MINI GOLF INTO GAME WHERE EMENIES CHASE YOU, AND HITTING BALL KILLS THEM (LIKE BASES LOADED)
// TODO: ADD SCORE

let walls = [];

function setup() {
  new Canvas(600, 800);
  
  sprites();
}

function draw() {
  clear();
  background('#e76f51');

  move();
}

function move() {
  paddle.moveTowards(mouse, 0.2);
  paddle.rotateTowards(mouse, 0.3, 0);
}

function sprites() {
  setupScene();
  drawObjects();
}

function drawObjects() {
  ball = new Sprite();

  ball.diameter = 20;
  ball.x = width/2;
  ball.y = height/2;
  ball.color = '#2a9d8f';
  ball.collider = 'dynamic';
  ball.strokeWeight = 0;
  ball.bounciness = 0.6;
  ball.friction = 0.7;

  paddle = new Sprite();
  
  paddle.width = 20;
  paddle.height = 70;
  paddle.x = width/2;
  paddle.y = height-100;
  paddle.color = '#DDA178';
  paddle.collider = 'dynamic';
  paddle.strokeWeight = 0;
}

function setupScene() {
  wall1 = new Sprite();
  wall2 = new Sprite();
  wall3 = new Sprite();
  wall4 = new Sprite();
  walls.push(wall1, wall2, wall3, wall4);
  
  wall1.width = width-100;
  wall1.height = 30;
  wall1.y = 50;
  wall1.x = width/2;
  wall1.color = '#543c2c';
  wall1.collider = 'static';
  wall1.strokeWeight = 0;
  
  wall2.width = width-100;
  wall2.height = 30;
  wall2.y = height-50;
  wall2.x = width/2;
  wall2.color = '#543c2c';
  wall2.collider = 'static';
  wall2.strokeWeight = 0;
  
  wall3.width = 30;
  wall3.height = height-130;
  wall3.y = height/2;
  wall3.x = width/2-(width-100)/2+15;
  wall3.color = '#543c2c';
  wall3.collider = 'static';
  wall3.strokeWeight = 0;
  
  wall4.width = 30;
  wall4.height = height-130;
  wall4.y = height/2;
  wall4.x = width/2+(width-100)/2-15;
  wall4.color = '#543c2c';
  wall4.collider = 'static';
  wall4.strokeWeight = 0;
}