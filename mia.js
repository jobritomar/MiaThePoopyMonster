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
    this.x = this.x + this.direction*this.speed
    this.y= this.y + this.direction*Math.sin(this.x * Math.PI/180)

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
}

miaScreen() {
    const leftBoard = this.x - this.size/2 <= 0;
    const rightBoard = this.x - this.size/2 >= this.canvas.width
    const topBoard = this.y - this.size/2 <= 0;
    const bottomBoard = this.y - this.size/2 >= this.canvas.height/5


    if(leftBoard||topBoard) {
        this.direction = 1
    }
    else if(rightBoard||bottomBoard) {
        this.direction = -1
    }
}



}
