

class Poop {
    static poopColors ;

    constructor(canvas,x,y) {
        this.canvas=canvas;
        this.ctx=this.canvas.getContext("2d")
        this.x = x;
        this.y = y;
        this.size=20;
        this.speed=5;
        this.score=0;
        this.img = new Image();
        this.poopColours={ 
            '#4246CA': {
              score : 5 ,
              img : './img/poop.png'
            },
            '#E89D38': {
              score : 15,
              img : './img/poop.png'
            },
            '#6AC032': {
              score : 20,
              img : './img/poop.png'
            },
            '#EC261A': {
              score : 25,
              img : './img/poop.png'
            },
        }
        this.poopColoursArr = Object.keys(this.poopColours)

        this.colour = this.selectColour();
        this.setScoreBaseOnColour();

        }
       //colour -> image & score
        setScoreBaseOnColour() {
            const colorData = this.poopColours[this.colour]
            this.img.src = colorData.img
            this.score = colorData.score
          }
        
        // random colour
          selectColour() {
            return this.poopColoursArr[Math.floor(Math.random() * this.poopColoursArr.length)];
          }

    //change y position
    update() {
        this.y= this.y + this.speed
    }

    draw() {
      this.ctx.drawImage(this.img, this.x, this.y, this.size, this.size);
      }

  
}

