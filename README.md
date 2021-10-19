# MiaThePoopyMonster
​
## Description
​
Mia is a very naughty dog that likes to do whatever all the dogs like to do: lots and lots of poop :poop::poop::poop::poop:

Because Mia's mummy is so busy doing Ironhack labs, she only gets a 2 minute walk (poor Mia :sob:) and during this walk that the poopy monsters atacks :dog::poop::dog::poop:

In this game you should catch all the amount of poop that you can (yey so lucky! :sunglasses>). For each color of poop you have a specific amount of points (please check the bottom of your game screen).

You can win this game if you have a total amount of 1500 points in doggy poop during a 2 minute walk. Easy? Wait a minute... You must be fast beacause the poopy monster is an high-speed trainned machine of poop! If you get a total score of 0 points or if you don't core the amount of 1500 during the 2 minute walk, you loose and the puppy monster wins!!

Feeling excited? Let's play! 

## MVP (DOM - CANVAS)
​
- game has three elements: Mia; user and poop images;
- Mia is moving in the top of the screen throwing poop randomly;
- User tries to catch poop in a bag;
- Different colours of poop with different scores come from the top randomly;
- Total amount of time that decreases from 2:00;
- Total score that sums the catched poop points; 
- 2 cenarios of win: score 1500 && time remaining= curent time or score 1500 && time remaining= 0:00
- 2 cenarios of loose: score <0 or time remaining= 00:00
- 
## Backlog
​
- add sound during the game;
- add sound and animation to Mia each time the user gets a green poop;
- add a new levels of increased time;
​
## Data Structure
​
# main.js
​
- buildGameStartScreen() {}
- buildGameScreen () {}
- buildGameOverScreen () {}
​
# game.js
​
- Game () {}
- starLoop () {}
- checkPoop () {}
- clearCanvas () {}
- updateCanvas () {}
- drawCanvas () {}
- GameOver () {}
​
# Mia.js 
​
- Mia () {
    this.x;
    this.y;
    this.direction;
    this.size
}
- draw () {}
- move () {}
- shoot () {}
- checkScreenCollision () {}
​
# Poop.js 
​
- Poop () {
    this.x;
    this.y;
    this.direction;
    this.size
    this.colour
}
- draw () {}
- move () {}
- checkCollisionBotton () {}
​
# User.js 
​
- User () {
    this.x;
    this.direction;
    this.size
}
- draw () {}
- move () {}
- checkCollisionTop () {}
- checkScreenCollision () {}
​
## States y States Transitions
Definition of the different states and their transition (transition functions)
​
- startScreen
- gameScreen
- gameOverScreen
​
## Task
​
- main - buildDom
- main - buildSplashScreen
- main - addEventListener
- main - buildGameScreen
- main - buildGameOverScreen
- game - startLoop
- game - buildCanvas
- game - updateCanvas
- game - drawCanvas
- user-draw
- user-move
- mia - draw
- mia - move
- game - addpoop
- ship - draw
- ship - move
- game - addpoop
- game - checkCollision
- game - GameOver
- game - addEventListener
​
## Links
​
### Trello
[Link url](https://trello.com/b/sDr1l2vL/mia-the-poopy-moster)
​
### Git
URls for the project repo and deploy
[Link Repo](https://github.com/jobritomar/MiaThePoopyMonster.git)
[Link Deploy](https://jorgeberrizbeitia.github.io/kraken-brigade/)
​
### Excalidraw


URls for the project repo and deploy
[Link url](https://excalidraw.com/#json=5725831192117248,sc8v4bLnRxMNt4K3oLPKKA)



### Slides
URls for the project presentation (slides)
[Link Slides.com](https://docs.google.com/presentation/d/138o01hAz-0gXepN78RsDgse12HiiuN7Fz_N_hJnI9_g/edit?usp=sharing)