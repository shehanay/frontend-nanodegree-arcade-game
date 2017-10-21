// Enemies our player must avoid
var Enemy = function(x,y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    this.x = x;
    this.y = y;
   
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images

    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    if(this.x>=496){
              this.x=0;
                       }
//console.log(this.x);
this.x+=Math.floor(Math.random()*10);

}

// Draw the enemy on the screen, required method for game

Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Enemy.prototype.checkCollisions = function() {

    for(var i=0; i< 3; i++){
    if (allEnemies[i].x < player.x + 171 &&
     allEnemies[i].x + 171 > player.x &&
      allEnemies[i].y < player.y + 101 && 
      101 + allEnemies[i].y > player.y){

                                        console.log("false");
                                          player.x=202;
                                          player.y=404;

}
}
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var player=function(){
  this.x=202;
  this.y=404;
  this.sprite="images/char-boy.png";
};

player.prototype.update = function(dt) {
if(this.y<0){
setTimeout(function(){ player.x=202;player.y=402;}, 500);
}
  for(var j=0; j< 3; j++){
if(allEnemies[j].x<player.x<allEnemies[j].x+80&&player.y==(allEnemies[j].y+12)){
player.x=202;
player.y=404;
}
}
};

player.prototype.render = function() {
ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

player.prototype.handleInput=function(key){
if(key=="left" && this.x>0){
this.x-=101;
}
if(key=="right"&&this.x<404){
this.x+=101;
}
if(key=="down"&&this.y<390){
this.y+=83;
}
if(key=="up"&&this.y>0){
this.y-=83;
}
};



// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var allEnemies=[new Enemy(0,58), new Enemy(0,141), new Enemy(0,228)];
var player=new player();


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.

document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
