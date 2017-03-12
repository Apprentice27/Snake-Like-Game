var p1 = new Player();
var score = 0;
var food;
function setup() {
  createCanvas(400, 400);
  food = new Food(200, 20);
}

function draw() {
  background(0);
  stroke(255);
  noFill();
  rect(20, 20, 360, 300);



  textSize(30);
//score
  fill(255);
  text("Score: " + score, width-140, height-10);
//navigation
  fill(255);
  text("Food: " + food.x + ", " + food.y, 0, height - 10);

  p1.display();
  food.display();

  if(p1.x === food.x && p1.y === food.y) {
    console.log('it works');

    var x = floor(random(100, 300));
    var y = floor(random(100, 300));

    while(x % 20 !== 0) {
      x++;
    };

    while(y % 20 !== 0) {
      y++;
    };
    food.x = x;
    food.y = y;
    food.display();
    score += 1;
  }

}

function keyPressed() {
  if(keyCode === (UP_ARROW)) {
    if(p1.y !== 20) {
      p1.y -= p1.speed;
    }
  } else if(keyCode === (DOWN_ARROW)) {
    if(p1.y !== 320 - 20) {
      p1.y += p1.speed;
    }
  } else if(keyCode === (LEFT_ARROW)) {
    if(p1.x !== 20) {
      p1.x -= p1.speed;
    }
  } else if(keyCode === (RIGHT_ARROW)) {
    if(p1.x !== 380 - 20) {
      p1.x += p1.speed;
    }
  }
}

