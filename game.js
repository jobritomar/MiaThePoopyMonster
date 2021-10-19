
class Game {
    constructor (canvas, score, time, callbackGameOver, callbackGameWin) {
        this.canvas=canvas;
        this.ctx=this.canvas.getContext("2d") 
        this.callbackGameOver = callbackGameOver
        this.callbackGameWin = callbackGameWin
        this.score = score;
        this.time = time;
        
        this.user;
        this.mia;
        this.poop=[];

        this.isGameOver=false;
        this.isWin = false;

        this.maxScore=1500;
        this.timeLeft=120;
        this.intervalId=null;

        
    }



    startLoop(){
        this.user = new User(this.canvas,0)
        this.mia = new Mia (this.canvas)

        function loop() {
            if(Math.random () > 0.97) {
                const y=Math.random()*this.canvas.height;
                this.poop.push(new Poop(this.canvas,y))
            }
            
            this.checkAllPoop();
            this.updateCanvas();
            this.clearCanvas();
            this.drawCanvas();

            if(!this.isGameOver) {
                window.requestAnimationFrame(loop);
            }
        }

        window.requestAnimationFrame (loop)

    }

    updateClasses(){
        this.user.userPosition()
        this.user.userScreen()

        this.poop.forEach((poop)=> poop.poopPosition() )

        this.mia.miaPosition()
        this.mia.miaScreen()
    }

    clearCanvas(){
        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)
    }

    drawCanvas() {
        this.user.userDraw()
        this.poop.forEach((poop)=> poop.poopDraw() )
        this.mia.miaDraw()
    }

    startInterval() {
        this.intervalId= setInterval(( )=> {
            this.time-=1
            this.score=user.userScore
        }, 1000)

    }

    checkAllPoop() {

        this.poop.forEach(((poop, index)=> {
            if(this.user.userCheckCatchPoop(poop)) {
                this.user.userScore()
                this.poop.splice(index,1)

                //falta cenario 2 do tempo

                const loseCenario1= this.user.score <0
                const loseCenario2=this.timeLeft < 0
                const winCenario= this.user.score=this.maxScore

                if(loseCenario1 || loseCenario2) {
                    this.isGameOver = true;
                    this.callbackGameOver()
                }
                else if(winCenario) {
                    this.isWin = true;
                    this.callbackGameWin()

                }
            }

            if(poop.y > this.canvas.height-10) {
                this.poop.splice(index,1)

            }

    }))

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

