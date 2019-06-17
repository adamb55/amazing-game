function lvl2tut(){

  ctx.clearRect(0,0,canvas.width,canvas.height);

  ctx.fillStyle = "black";
  ctx.fillRect(0,0,canvas.width,canvas.height);
  ctx.font = "40px Block";
  ctx.fillStyle= "white";
  ctx.fillText("Level 2", 10,40);
  ctx.font = "20px Block";
  ctx.fillText("Blue platforms are bouncy!", 255,117);
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

  tut2plat1.show();
  tut2plat2.show();
  tut2plat3.show();
  tut2plat4.show();
  tut2plat1.collision();
  tut2plat2.collision();
  tut2plat3.bcollision();
  tut2plat4.collision();



}
var tut2plat1 = new Platform(0,256,90,1);
var tut2plat2 = new Platform(182,256,100,1);
var tut2plat3 = new Platform(403,390,100,2);
var tut2plat4 = new Platform(525,256,50,1);
