var p1 = new Player();
var score = 0;
var food;
function setup() {
  createCanvas(400, 400);

  //background(0);
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
      //console.log(x);
    };

    while(y % 20 !== 0) {
      y++;
      //console.log(y);
    };
    food.x = x;
    food.y = y;
    food.display();
    score += 1;
  }

}

function keyPressed() {
  if(keyCode === DOWN_ARROW) {
    p1.y += 20;
  } else if(keyCode === UP_ARROW) {
    p1.y -= 20;
  } else if(keyCode === RIGHT_ARROW) {
    p1.x += 20;
  } else if(keyCode === LEFT_ARROW) {
    p1.x -= 20;
  } else {
    console.log('ERROR');
  }

}
/**
function Player() {
  this.x = 20;
  this.y = 20;
  this.w = 20;
  this.h = 20;
  this.display = function() {
    fill(255);
    noStroke();
    rect(this.x, this.y, this.w, this.h);
  };
}
**/

/**
function Food(x, y) {
  this.x = x;
  this.y = y;
  this.display = function() {
    fill('red');
    noStroke();
    rect(this.x, this.y, 20, 20);
  }
}
**/
