
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
startButton.addEventListener("click", buildGameScreen)


function buildGameScreen() {
    buildDom(
        `
        <section class="game-screen">
            <canvas></canvas>
        </section>
        `
    )

    const width = document.querySelector(".game-screen").offsetWidth
    const height = document.querySelector(".game-screen").offsetHeight;
    const canvasElement = document.querySelector("canvas")
    canvasElement.setAttribute("width", width)
    canvasElement.setAttribute("height", height)

    

    const game = new Game(canvasElement, currentScore, currenTime, buildGameOver, buildGameWin)
    game.gameOverCallback(buildGameOver)
    game.startLoop()
    
    buildTimeDisplay()
    buildScoreDisplay()

    build


    function setUserDirection(event){
        if(event.code==="Left") {
            game.user.userPosition(-1)
        }
        if(event.code==="Right") {
            game.user.userPosition(1)

        }
    }
    document.addEventListener("keydown", setUserDirection)
}


function buildTimeDisplay() {

    buildDom(
        `
        <section class ="time">
            <h3> 'Time Left' </h3>
            <p> 0 </p>

        </section>
        `
    )
    const currentTimeNode= document.querySelector("time")
    currentTimeNode.innerText = currenTime
}


function buildScoreDisplay() {

    buildDom(
        `
        <section class "score">
            <h3> 'Your Score' </h3>
            <p> 0 </p>
        </section>
        `
    )

    const scoreDisplay = document.querySelector('score')
    scoreDisplay.innerText= currentScore
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