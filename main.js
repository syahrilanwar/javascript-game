// set canvas container
const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = 1000;
canvas.height = 500;

c.fillRect(0, 0, canvas.width, canvas.height);
c.fillStyle = "black";

// class object
class Object {
  constructor({ position, size }) {
    this.position = position;
    this.size = size;
  }
  show() {
    c.fillStyle = "red";
    c.fillRect(this.position.x, this.position.y, this.size.w, this.size.h);
  }
  update(event) {
    // Create listener
    this.show();
    if (event.key == "D" || event.key == "d") {
      this.forward();
    }
    if (event.key == "A" || event.key == "a") {
      this.back();
    }
    if (event.key == "S" || event.key == "s") {
      this.jump();
    }
    if (event.key == "W" || event.key == "w") {
      this.crouch();
    }
  }
  back() {
    if (canvas.width != this.position.x) {
      for (let index = 0; index < 10; index++) {
        this.position.x -= 1;
      }
    }
  }
  forward() {
    this.position.x += 1;
  }
  jump() {
    this.position.y = 440;
    this.size.h = this.size.h / 2;
  }
  crouch() {
    this.position.y = 390;
    this.size.h = this.size.h * 2;
  }
}

const player = new Object({
  position: { x: 10, y: 390 },
  size: { w: 50, h: 100 },
});

document.addEventListener("keypress", (event) => {
  player.update(event);
});

function runAnimate() {
  c.fillStyle = "black";
  c.fillRect(0, 0, canvas.width, canvas.height);
  player.show();
  window.requestAnimationFrame(runAnimate);
}
// run apps
runAnimate();
