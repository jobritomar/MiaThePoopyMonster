
class Game {
    constructor(canvas, score, time, user, callbackGameOver, callbackGameWin, callbackScoreDisplay) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d")
        this.callbackGameOver = callbackGameOver
        this.callbackGameWin = callbackGameWin
        this.callbackScoreDisplay = callbackScoreDisplay
        this.score = score;
        this.time = time;

        this.user = user;
        this.mia;
        this.poop = [];

        this.isGameOver = false;
        this.isWin = false;

        this.maxScore = 1500;
        this.intervalId = null;


    }


    startLoop() {
        this.mia = new Mia(this.canvas)
        this.startInterval();

        const loop = () => {
            // this.checkAllPoop();
            //this.clearCanvas();
            //this.drawCanvas();
            this.checkAllPoop();
            this.user.update()
            this.clearCanvas();
            this.drawCanvas();
            this.callbackScoreDisplay(this.time, this.user.score);

            if (!this.isGameOver) {
                window.requestAnimationFrame(loop);
            }
        }

        window.requestAnimationFrame(loop)

    }

    addPoop() {
        this.poop.push(
            new Poop(this.canvas, this.mia.x + this.mia.size/2, this.mia.y + 50)
        );
    }

    moveMiaAndPoop() {
        //this.poop.push(new Poop(this.canvas, this.mia.x, this.mia.y+25, "#4246CA"))
        
        this.mia.update();

        if (Math.random() > 0.30) {
            this.addPoop();
        }

    }

    clearCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.ctx.fillStyle = "white"
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)

    }

    drawCanvas() {

        this.poop.forEach((poop) => poop.draw())
        this.user.draw()
        this.mia.draw()
    }

    startInterval() {

        this.intervalId = setInterval(() => {
            this.time -= 1
        }, 1000)

        setInterval(() => {
            this.moveMiaAndPoop()
        }, 500)

        setInterval(( )=> {
            this.poop.forEach((poop) => poop.update())
          }, 100)
    }

    checkAllPoop() {

        

        this.poop.forEach(((poop, index) => {
            if (this.user.userCheckCatchPoop(poop)) {
                this.user.userScore(poop.score)

                this.poop.splice(index, 1)
                return 
                //falta cenario 2 do tempo
            }
            if (poop.y > this.canvas.height + 10) {

                this.poop.splice(index, 1)
            }
        }))

        const loseCenario1 = this.user.score < 0
        const loseCenario2 = this.time < 0
        const winCenario = this.user.score >= this.maxScore


        if (loseCenario1 === true || loseCenario2 === true) {
            this.isGameOver = true;
            clearInterval(this.intervalId);
            this.callbackGameOver()
        }
        else if (winCenario === true) {

            this.isWin = true;
            clearInterval(this.intervalId);
            this.callbackGameWin()

        }

    }



}