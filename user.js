
class User{
    constructor(canvas,score) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");

        this.y= this.canvas.height;
        this.x= this.canvas.width/2;

        this.size = 40;
        this.speed = 5;
        this.direction = 1;

        this.score=score;
    }

    userPosition(){

        this.userScreen()
        this.x = this.x + this.direction * this.speed
    }

    userDraw() {
        this.ctx.fillStyle="green"
        this.ctx.fillRect(
            this.x - this.size / 2,
            this.y - this.size / 2,
            this.size,
            this.size
            )
    }

    userDirection(direction) {
        this.direction = direction
        this.userPosition()
  
    }

    userScreen() {
        debugger
        const leftBoard = this.x - this.size/2 <= 0;
        const rightBoard = this.x + this.size/2 >= this.canvas.width

        if(rightBoard) {
            this.direction =-1
        }
        else if(leftBoard) {
            this.direction = 1
        }
    }

    userScore() {
        return this.score++
    }

    userCheckCatchPoop(poop) {
        const catched = (this.y + this.size/2 < poop.y + poop.size/2) && 
            ((poop.x > this.x - poop.size) && (poop.x < this.x + poop.size))
        console.log(catched)
        return catched
    }
}