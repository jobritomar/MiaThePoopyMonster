class Mia {
    constructor(canvas) {
        this.canvas=canvas;
        this.ctx=this.canvas.getContext("2d")
        this.size=75;
        this.x=(this.canvas.width/2);
        this.y=(this.size)+5;
        this.speed=4.7777;
        this.img = new Image();
        this.img.src='./img/mia_poop.png'
    }

update() {

    let maxWidth = this.canvas.width-this.size
    let maxHeight = 150
   

    this.x = this.x + this.speed*10
    this.y= this.y + 100*Math.sin(this.x * Math.PI/180)

    this.x = Math.max(this.size/2, Math.abs((this.x + this.size/2) % maxWidth)) 
    this.y = Math.max(this.size/2, Math.abs((this.y + this.size/2) % maxHeight))

}

draw() {
    
    this.ctx.drawImage(this.img, this.x, this.y, this.size, this.size);

}



}


