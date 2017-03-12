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
