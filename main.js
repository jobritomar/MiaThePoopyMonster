
 let game 
 let user

function buildDom(html) {
    //change screen
    const main = document.querySelector("main")
    main.innerHTML = html;
}

function buildStartScreen (){
    
    buildDom(
        `
        <section class="sart-screen">
            <h1> 'Mia the Puppy Monster' </h1>
            <button> 'Start' </button>
        </section>

        `
    )

    
    const startButton = document.querySelector('button');
    startButton.addEventListener("click", buildGameScreen.bind(this))

}

function startMainInterval() {

setInterval(( )=> {
        const currentTimeNode= document.querySelector(".time p")
        currentTimeNode.innerText = game.time
        const scoreDisplay = document.querySelector('.score')
        scoreDisplay.innerText= game.score
    }
    , 1000)
}


function buildGameScreen() {

    buildDom(
        `
    <section class="game-screen">
            <canvas></canvas>
        <section class ="time">
            <h3> 'Time Left' </h3>
            <p> 0 </p>
        </section>

        <section class="score">
            <h3> 'Your Score' </h3>
            <p> 0 </p>
        </section>

    </section>
        `
    )
    
    const width = document.querySelector(".game-screen").offsetWidth
    const height = document.querySelector(".game-screen").offsetHeight;

    this.startMainInterval()

    const canvasElement = document.querySelector("canvas")
    canvasElement.setAttribute("width", width)
    canvasElement.setAttribute("height", height)
    user = new User(canvasElement, 0)
    game = new Game(canvasElement, 0, 120, user, buildGameOver, buildGameWin)
    game.gameOverCallback(buildGameOver)
    game.startLoop()
    game.startInterval()


    function setUserDirection(event){

        if(event.code==="ArrowLeft") {
            user.userDirection(-1)
        }
        if(event.code==="ArrowRight") {
            user.userDirection(1)

        }
    }
    document.addEventListener("keydown", setUserDirection)
}





function buildGameOver(){
    buildDom(
        `
        <section class "game-over">
            <h1> 'Game Over' </h1>
            <button> 'Let's Play Again!' </button>
        </section>
        `
    )

    const restartButton = document.querySelector("button")
    restartButton.addEventListener("click", buildStartScreen);


}


function buildGameWin(){
    buildDom(
        `
        <section class "game-win">
            <h1> 'You are a winner!' </h1>
            <button> 'Let's Play Again!' </button>
        </section>
        `
    )

    const restartButton = document.querySelector("button")
    restartButton.addEventListener("click", buildStartScreen);


}





window.addEventListener("load", buildStartScreen)
