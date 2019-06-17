function lvl3tut(){

  ctx.clearRect(0,0,canvas.width,canvas.height);

  ctx.fillStyle = "black";
  ctx.fillRect(0,0,canvas.width,canvas.height);
  ctx.font = "40px Block";
  ctx.fillStyle= "white";
  ctx.fillText("Level 3", 10,40);
  ctx.font = "20px Block";
  ctx.fillText("Don't touch the red!", 255,117);
  ctx.fillRect(player.x,player.y, player.width, player.height);
  ctx.fillStyle = "#6bf442";
  ctx.fillRect(687,256, 100, 7.5);

  if (player.x < 687 + 100 &&
   player.x + player.width > 687 &&
   player.y < 256 + 7.5 &&
   player.y + player.height > 256) {
    clearInterval(gameloop);
    gameloop = setInterval(lvl3tut, 1000/60);
  }





}
var tut3plat1 = new Platform(0,256,90,1);
