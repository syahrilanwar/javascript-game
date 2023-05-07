const canvas = document.querySelector("canvas");
export class Canvas {
  constructor(params) {
    this.params;
  }
  show() {
    const c = canvas.getContext("2d");
    canvas.width = 1000;
    canvas.height = 500;
    c.fillRect(0, 0, canvas.width, canvas.height);
    c.fillStyle = "black";
  }
}
