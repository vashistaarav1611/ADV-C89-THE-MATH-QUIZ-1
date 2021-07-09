var canvas = new fabric.Canvas("myCanvas");

ball_x = 0;
ball_y = 0;
hole_y = 400;
hole_x = 800;

block_image_width = 5;
block_image_height = 5;

speed = 10;

function load_img() {
 fabric.Image.fromURL("golf-h.png", function (img) {
  hole_obj = img;
  hole_obj.scaleToWidth(50);
  hole_obj.scaleToHeight(50);
  hole_obj.set({
   top: hole_y,
   left: hole_x
  });
  canvas.add(hole_obj);
 });
 new_image();
}

function new_image() {
 fabric.Image.fromURL("ball.png", function (img) {
  ball_obj = img;
  ball_obj.scaleToWidth(50);
  ball_obj.scaleToHeight(50);
  ball_obj.set({
   top: ball_y,
   left: ball_x
  });
  canvas.add(ball_obj);
 });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
 keyPressed = e.keyCode;
 console.log(keyPressed);
 /* Check the coordinates of the ball and hole images to finish the game. 
 And id coordinates matches them remove ball image, 
 display "GAME OVER!!!" 
 and make canvas border 'red'. */
 if ((ball_x == hole_x) && (ball_y == ball_y)) {
  canvas.remove(ball_obj);
  document.getElementById("hd3").innerHTML = "you have hit the goal!!!";
  document.getElementById("myCanvas").style.borderColor = "red";
 } else {
  if (keyPressed == '38') {
   canvas.remove(ball_obj);
   up();
   console.log("up");
  }
  if (keyPressed == '40') {
   canvas.remove(ball_obj);
   down();
   console.log("down");
  }
  if (keyPressed == '37') {
   canvas.remove(ball_obj);
   left();
   console.log("left");
  }
  if (keyPressed == '39') {
   canvas.remove(ball_obj);
   right();
   console.log("right");
  }
 }

 function up(ball_obj) {    
  ball_y = ball_y - block_image_height;
  new_image();
 }

 function down(ball_obj) {
  ball_y += speed;
  new_image();//down
 }

 function left(ball_obj) {
  ball_x -= speed;
  new_image();
 }

 function right(ball_obj) {
  ball_x += speed;
  new_image();//right
 }
}
// canvas.remove(ball_obj);
//  ball_x += speed;
//  new_image();//right
