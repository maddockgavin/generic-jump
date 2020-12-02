var spr;
function setup() {
  createCanvas(400, 400);
  spr = createSprite(
    width/2, height/2, 300, 20);
  spr.shapeColor = color(255);
  spr.rotation = (20);
}
function draw() {
  background(50);
  drawSprites();
}

