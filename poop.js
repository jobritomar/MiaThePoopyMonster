
class Poop {
    constructor(canvas,x,y,colour) {
        this.canvas=canvas;
        this.ctx=this.canvas.getContext("2d")

        this.x=x;
        this.y=y;

        this.size=20;
        this.speed=5;

        this.colour=colour;
        this.score=0;

        switch (this.colour) {
            case '#4246CA':
                this.score += 5
                break;
            case '#E89D38':
                this.score += 15
                break;
            case '#6AC032':
                this.score += 20
                break;
            case '#EC261A':
                this.score += -25
                break;     
              }
    }

    //change y position
    poopPosition() {
        this.y= this.y + this.direction * this.speed
    }

    poopDraw() {

        this.ctx.fillStyle=this.colour;
        this.ctx.fillRect(
            this.x - this.size / 2,
            this.y - this.size / 2,
            this.size,
            this.size
            )
    }

  
}