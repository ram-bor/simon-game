# simon-game

# Created a Simon Game using HTML/CSS/Javascript with Score-Board

- HTML x CSS
- Javascript x Game Flow

1. HTML and CSS:

Create color panels/buttons on HTML then style them in CSS

Create START button to initialize game; maybe QUIT/PAUSE button for ending if you have time

Create CENTER CIRCLE to hold start/pause buttons and make it look authentic and as close to the real 80s toy.

Once basic style and format is completed, move on to the functionality of game.

2. JAVASCRIPT:

First step is to create variables (game pieces = quadrants and a sequence pattern to determine flow of game)

The sequence should become randomized so that the player may follow the pattern with every correct click.

GAME FLOW:

Step 1:
-Click event to initialize game by way of function (triggers sequence),

Step 2:
-Show pattern sequence to player

Step 3:
-Allow user the ability to repeat pattern by clicking color quadrant and showing a "flash" whenever user clicks on button
-If pattern matches what was shown, increment round and repeat steps 2-3

-If what user clicked does not match the pattern show, then reset/turn off game.

SCORE:

1. Create a function where score inner text is turned into an integer and create condition that if score has not reached a certain number, to increment score by 100 every time user correctly follows and executes a sequence.

2. Add function to the compare input choice condition statement to log and display score.
