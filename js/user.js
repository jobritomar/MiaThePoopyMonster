class User{
    constructor(canvas,score) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.size = 80;
        this.y= this.canvas.height-this.size;
        this.x= this.canvas.width/2;
      
        this.speed = 10;
        this.direction = 0;
        this.score=score;
        this.img = new Image();
        this.img.src='./img/raidArtboard 6.png'
    }

    update(){

        this.checkScreen()
        this.x = this.x + this.direction * this.speed
    }

    draw() {
        this.ctx.drawImage(this.img, this.x, this.y, this.size, this.size);
    }

    setDirection(direction) {
        this.direction = direction
  
    }

    checkScreen() {
        
        const leftBoard = this.x <= 0;
        const rightBoard = this.x + this.size >= this.canvas.width

        if(rightBoard) {
            this.direction =-1
        }
        else if(leftBoard) {
            this.direction = 1
        }
    }

    userScore(score) {
        this.score += score;
    }

    userCheckCatchPoop(poop) {



        const top = poop.y + poop.size > this.y ;
        const bottom = poop.y - poop.size / 2 < this.y + this.size ;

        const left = poop.x + poop.size > this.x  ;
        const right = poop.x - poop.size <= this.x + this.size  ;
        
        return top && left && right && bottom;
    }
}