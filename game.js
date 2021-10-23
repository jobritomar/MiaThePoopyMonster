
class Game {
    constructor (canvas, score, time, user, callbackGameOver, callbackGameWin) {
        this.canvas=canvas;
        this.ctx=this.canvas.getContext("2d") 
        this.callbackGameOver = callbackGameOver
        this.callbackGameWin = callbackGameWin
        this.score = score;
        this.time = time;
        
        this.user = user;
        this.mia;
        this.poop=[];

        this.isGameOver=false;
        this.isWin = false;

        this.maxScore=1500;
        this.intervalId=null;

        
    }



    startLoop(){
        this.mia = new Mia (this.canvas)

        this.startInterval()

        const loop = () => {
            this.checkAllPoop();

            this.clearCanvas();
            this.drawCanvas();
            

            if(!this.isGameOver) {
                window.requestAnimationFrame(loop);
            }
        }

        window.requestAnimationFrame(loop)

    }

    updateClasses(){
        this.poop.push(new Poop(this.canvas, this.mia.x, this.mia.y+25, "#4246CA"))
        debugger


        this.mia.miaPosition()
        this.mia.miaScreen()
    }

    clearCanvas(){
        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)
    }

    drawCanvas() {

        this.poop.forEach((poop)=> poop.poopDraw() )
        this.user.userDraw()
        this.mia.miaDraw()
    }

    startInterval() {

        debugger

        this.intervalId= setInterval(( )=> {
            this.time-=1
            this.score=user.userScore()
            
        }, 1000)

        setInterval(( )=> {
            this.updateClasses()
        }, 1000)
        setInterval(( )=> {
            this.poop.forEach((poop)=> poop.poopPosition() )
        }, 100)
    }

    checkAllPoop() {

        this.poop.forEach(((poop, index)=> {
            if(this.user.userCheckCatchPoop(poop)) {
                this.user.userScore()
                this.poop.splice(index,1)

                //falta cenario 2 do tempo


            if(poop.y > this.canvas.height-10) {
                this.poop.splice(index,1)

            }
        }
    }))

    const loseCenario1= this.user.score <0
    debugger
    const loseCenario2= this.time < 0
    const winCenario= this.user.score === this.maxScore
    

    if(loseCenario1 === true || loseCenario2 === true) {
        this.isGameOver = true;
        this.callbackGameOver()
    }
    else if(winCenario === true) {
     
        this.isWin = true;
        this.callbackGameWin()

    }

}

gameOverCallback(callback) {
    this.callbackGameOver = callback;
}

gameWinCallback(callback) {
    this.callbackGameWin = callback;
}

}


//script src= "user"
//script src ="poop"
// script src ="mia"

