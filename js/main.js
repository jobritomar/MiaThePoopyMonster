
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
       
        <h4> Instructions </h4>
        <ul>
            <li> Use ⬅️ and ➡️ to move the bag </li>
            <li> Try to catch a score of <b>1500</b> in 120 seconds </li>
            <li> Careful! Each poop has its own score </li>

        </ul>
    
    
    
    </section>
    

    <section class="screen">
        <h1> Mia the Puppy Monster </h1>
        <button> Start </button>
    </section>

    <div>
        <section class="time">
            <h3> Time Left </h3>
            <span> 120 </span>
        </section>

        <section class="score">
            <h3> Your Score </h3>
            <span> 0 </span>
        </section>

        <section class="poops">
            <ul>
                <li>
                    <img src='./img/poop_4.png'> </img>
                    <span> +10 </span>
                </li>

                <li>
                    <img src='./img/poop_1.png'> </img>
                    <span> +20 </span>
                </li>

                <li>
                    <img src='./img/poop_2.png'> </img>
                    <span> +50 </span>
                </li>

                <li>
                    <img src='./img/poop_3.png'> </img>
                    <span> -100 </span>
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
    const currentTimeNode = document.querySelector(".time span");
    currentTimeNode.innerText = time;
    const scoreDisplay = document.querySelector(".score span");
    scoreDisplay.innerText = score;
  }

  

function buildGameScreen() {

    audio = new Audio('./dog.mp3');
    audio.loop = true
    audio.play();

    buildDom(
        `
        <section class="game-screen">
        
        <section class ="instructions">
           
            <h4> Instructions </h4>
            <ul>
                <li> Use ⬅️ and ➡️ to move the bag </li>
                <li> Try to catch a score of <b>1500</b> in 120 seconds </li>
                <li> Careful! Each poop has its own score </li>

            </ul>
        
        
        
        </section>
        
    
        <canvas class="screen"></canvas>
    
        <div>
            <section class="time">
                <h3> Time Left </h3>
                <span> 120 </span>
            </section>
    
            <section class="score">
                <h3> Your Score </h3>
                <span> 0 </span>
            </section>
    
            <section class="poops">
                <ul>
                    <li>
                        <img src='./img/poop_4.png'> </img>
                        <span> +10 </span>
                    </li>
    
                    <li>
                        <img src='./img/poop_1.png'> </img>
                        <span> +20 </span>
                    </li>
    
                    <li>
                        <img src='./img/poop_2.png'> </img>
                        <span> +50 </span>
                    </li>
    
                    <li>
                        <img src='./img/poop_3.png'> </img>
                        <span> -100 </span>
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
        <section class="game-end">
            <h1> The Poopy Monster won! </h1>
            <img src='./img/mia_lose.png'> </img>
            <button> Let's try again </button>
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
        <section class="game-end">
            <h1> You defeat the Poopy Monster! </h1>
            <img src='./img/mia-win.png'> </img>
            <button> 'Let's Play Again!' </button>
        </section>
        `
    )

    const restartButton = document.querySelector("button")
    restartButton.addEventListener("click", buildStartScreen);


}





window.addEventListener("load", buildStartScreen)
