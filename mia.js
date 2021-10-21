class Mia {
    constructor(canvas) {
       
        this.canvas=canvas;
        this.ctx=this.canvas.getContext("2d")

        this.x=this.canvas.height/2;
        this.y=0;

        this.size=50;
        this.speed=5;
        this.direction=1
    }

miaPosition() {

    this.x = this.x + this.direction*this.speed*10
    this.y= this.y + this.direction*100*Math.sin(this.x * Math.PI/180)

    this.x = Math.abs(this.x % this.canvas.width)
    this.y = Math.abs(this.y % 150)
}

miaDraw() {
    this.ctx.fillStyle="black"
    this.ctx.fillRect(
        this.x - this.size / 2,
        this.y - this.size / 2,
        this.size,
        this.size
        )
}

miaDirection(direction) {
    this.direction = direction
    this.miaPosition()
}

miaScreen() {
    const leftBoard = this.x <= 0;
    const rightBoard = this.x >= this.canvas.width
    const topBoard = this.y <= 0;
    const bottomBoard = this.y >= this.canvas.height/5


    if(leftBoard||topBoard) {
        this.direction = 1
    }
    else if(rightBoard||bottomBoard) {
        this.direction = -1
    }
}



}
