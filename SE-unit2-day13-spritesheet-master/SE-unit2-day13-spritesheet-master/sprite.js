// Daniel Shiffman
// http://youtube.com/thecodingtrain
// https://thecodingtrain.com/CodingChallenges/111-animated-sprite.html

// Horse Spritesheet from
// https://opengameart.org/content/2d-platformer-art-assets-from-horse-of-spring

// Animated Sprite
// https://youtu.be/3noMeuufLZY

class Sprite {
  constructor(animation, x, y) {
    this.x = x;
    this.y = y;
    this.vy = 0;
    this.animation = animation;
    this.w = this.animation[0].width;
    this.len = this.animation.length;
    this.speed = 0.1;
    this.index = 0;
    this.gravity = 0.5;
  }

    jump() {
      this.vy = -5;
    }

    move() {
      this.y += this.vy;
      this.vy += this.gravity;
    }

  //notice the use of modulo to keeop the value of index in range of the number of images, ie this.len.....
  show() {
    let index = floor(this.index) % this.len;
    image(this.animation[index], this.x, this.y, 300, 250);
  }

  animate() {
    //increment the index and the position of x
    this.index += 0.2;
    this.x += this.speed * 0;
    this.speed += 0.000;
    //if this.x exceeds the screen, send it back to the beginning of the screen.....
    if (this.x > width) {
      this.x = -this.w;
    }
  }
}
