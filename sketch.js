var fixedrect,movingrect,gameObject1,gameObject2,gameObject3,gameObject4;
function setup() {
  createCanvas(1200,800);
  movingrect = createSprite(400, 200, 80, 30);
  movingrect.shapeColor = "Green";
  gameObject1 = createSprite(100,100,70,70);
  gameObject1.shapeColor = "Green";
  gameObject2 = createSprite(300,100,70,70);
  gameObject2.shapeColor = "Green";
  gameObject3 = createSprite(600,100,70,70);
  gameObject3.shapeColor = "Green";
  gameObject4 = createSprite(1000,100,70,70);
  gameObject4.shapeColor = "Green";
}

function draw() {
  background(0,0,0);  
  movingrect.x = World.mouseX;
  movingrect.y = World.mouseY;
  if(isTouching(movingrect,gameObject1)) {

    movingrect.shapeColor = "Green";
    gameObject1.shapeColor = "Red";
  } else {
    movingrect.shapeColor = "Green";
    gameObject1.shapeColor = "Green";
  }

  if(isTouching(movingrect,gameObject2)) {
    movingrect.shapeColor = "Green";
    gameObject2.shapeColor = "Yellow";
  } else {
    movingrect.shapeColor = "Green";
    gameObject2.shapeColor = "Green";

  } 
  if(isTouching(movingrect,gameObject3)) {
    movingrect.shapeColor = "Green";
    gameObject3.shapeColor = "Blue";
  } else {
    movingrect.shapeColor = "Green";
    gameObject3.shapeColor = "Green";
  }
  if(isTouching(movingrect,gameObject4)) {
    movingrect.shapeColor = "Green";
    gameObject4.shapeColor = "Orange";
  } else {
    movingrect.shapeColor = "Green";
    gameObject4.shapeColor = "Green";
  }
  drawSprites();
}
