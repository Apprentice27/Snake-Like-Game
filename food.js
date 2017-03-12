function Food(x, y) {
  this.x = x;
  this.y = y;
  this.display = function() {
    fill('red');
    noStroke();
    rect(this.x, this.y, 20, 20);
  }
}
