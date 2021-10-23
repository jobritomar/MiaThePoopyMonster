
 let game 
 let user
 let audio

function buildDom(html) {
    //change screen
    const main = document.querySelector("main")
    main.innerHTML = html;
}

function buildStartScreen (){
    
    buildDom(
        `

<section class="game-screen">
        
    <section class ="instructions">
       <div>
        <h4> Instructions </h4>
        <ul>
            <li> 1) bla bla bla bla bla bla </li>
            <li> 2) bla bla bla bla bla bla </li>
            <li> 3) bla bla bla bla bla bla </li>
            <li> 4) bla bla bla bla bla bla </li>
            <li> 5) bla bla bla bla bla bla </li>
            

        </ul>
    
        </div>
    
    </section>
    

    <section class="screen">
        <h1> 'Mia the Puppy Monster' </h1>
        <button> 'Start' </button>
    </section>

    <div>
        <section class="time">
            <h3> Time Left </h3>
            <p> 120 </p>
        </section>

        <section class="score">
            <h3> Your Score </h3>
            <p> 0 </p>
        </section>

        <section class="poops">
            <h3> Instructions </h3>
            <ul>
                <li>
                    <img src="./img/poop.png"> </img>
                    <p> poop </p>
                </li>

                <li>
                    <img src="./img/poop.png"> </img>
                    <p> poop </p>
                </li>

                <li>
                    <img src="./img/poop.png"> </img>
                    <p> poop </p>
                </li>

                <li>
                    <img src="./img/poop.png"> </img>
                    <p> poop </p>
                </li>

                <li>
                    <img src="./img/poop.png"> </img>
                    <p> poop </p>
                </li>

                <li>
                    <img src="./img/poop.png"> </img>
                    <p> poop </p>
                </li>
            </ul>
        </section>
    </div>

     
    </section>
        `
    )

    
    const startButton = document.querySelector('button');
    startButton.addEventListener("click", buildGameScreen.bind(this))

}

//function startMainInterval() {

//setInterval(( )=> {
        //const currentTimeNode= document.querySelector(".time p")
        //currentTimeNode.innerText = game.time
        //const scoreDisplay = document.querySelector('.score')
       // scoreDisplay.innerText= game.score
  //  }
   // , 1000)
//}

function displayScore(time, score) {
    const currentTimeNode = document.querySelector(".time p");
    currentTimeNode.innerText = time;
    const scoreDisplay = document.querySelector(".score p");
    scoreDisplay.innerText = score;
  }

  

function buildGameScreen() {

    audio = new Audio('./dog.mp3');
    audio.loop = true
    audio.play();

    buildDom(
        `
    <section class="game-screen">

        <section class="instructions">
            <div>
                <h4> Instructions </h4>
                <ul>
                    <li> 1) bla bla bla bla bla bla </li>
                    <li> 2) bla bla bla bla bla bla </li>
                    <li> 3) bla bla bla bla bla bla </li>
                    <li> 4) bla bla bla bla bla bla </li>
                    <li> 5) bla bla bla bla bla bla </li>
                </ul>
    
            </div>
    
    
            <img src="https://lh3.googleusercontent.com/proxy/6SqBh2lQIGfhgNbTObzR-i4OvHeVA3zBGEPD5ptEjwrIw3TNgo_OpZzWdbZRoiSaF43VeQxy-qqeA3EBdjQSVP9EaijhiL4"
                alt="doggo">
        </section>

        <canvas class="screen"></canvas>

        <div>
            <section class="time">
                <h3> Time Left </h3>
                <p> 120 </p>
            </section>
        
            <section class="score">
                <h3> Your Score </h3>
                <p> 0 </p>
            </section>
        
            <section class="poops">
                <h3> Instructions </h3>
                <ul>
                    <li>
                        <img src="./img/poop.png"> </img>
                        <p> poop </p>
                    </li>

                    <li>
                        <img src="./img/poop.png"> </img>
                        <p> poop </p>
                    </li>

                    <li>
                        <img src="./img/poop.png"> </img>
                        <p> poop </p>
                    </li>

                    <li>
                        <img src="./img/poop.png"> </img>
                        <p> poop </p>
                    </li>

                    <li>
                        <img src="./img/poop.png"> </img>
                        <p> poop </p>
                    </li>

                    <li>
                        <img src="./img/poop.png"> </img>
                        <p> poop </p>
                    </li>
                </ul>
            </section>
        </div>
    </section>

  
        `
    )
    
    const width = document.querySelector(".game-screen canvas").offsetWidth;
    const height = document.querySelector(".game-screen canvas").offsetHeight;

    // this.startMainInterval()

    const canvasElement = document.querySelector("canvas")
    canvasElement.setAttribute("width", width)
    canvasElement.setAttribute("height", height)

    user = new User(canvasElement, 0)
    game = new Game(canvasElement, 0, 120, user, buildGameOver, buildGameWin,displayScore);

    game.startLoop()
    //game.startInterval()


    function setUserDirection(event){
        console.log("keydown! " + event.code)
        if(event.code==="ArrowLeft") {
            user.setDirection(-1)
        }
        if(event.code==="ArrowRight") {
            user.setDirection(1)

        }
    }
    document.addEventListener("keydown", setUserDirection)
    document.addEventListener("keyup", (event) => {
        console.log("keyup! " + event.code)
        user.setDirection(0)
        
    })
}





function buildGameOver(){
    audio.pause()
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
    audio.pause()
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
