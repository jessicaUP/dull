# dull...

## BACKGROUND & OVERVIEW
Dull is a color-mixing game that allows you to explore the art of color-mixing. One of the beauties of subtractive color mixing is that the more you mix, the more the color turns dull… Many painters will tell you, don’t over mix your colors, but with dull that is the point of the game!

 - GOAL: The goal of the game is to mix the right tiles to make the target color, creating a path the the target space. The level amount represents the distance away from the start tile (level 1 is 1 click away... level 5 is 5 clicks)

 - BOARD:  A 10 x 10 grid of 100 different color tiles.

 - MOVEMENT: Players are provided with a start tile and can move to the neigboring lateral and horizontal tiles towards the target tile position. The path can not cross over itself. The player may use the mouse or keyboard to navigate the grid.

 - 

## Functionality and MVPs

-	Players will be presented a start position, target tile and a target mixed color.
-	They will continue to mix colors creating a path of combinations.
-	(Subtractive color will be used, same as paint mixing)
-	
-	The path cannot overlap with itself, so the board will automatically refresh if the path can go no further and the color range was not hit. Prompting the user to start fresh.
-	(Additive version – Since colors do not mix to a dull color in additive mixing, users will keep working off the path they are on and see how many colors they can collect before their path can go no further)

## Wireframes
<img src='./wireframe.png' />

- /src
 - /styles
    - scss
 - /assets
    - logo.png
    - buttons...
 - index.js
 - /js
    - gridTile.js
    - colors.js
    - game.js
    - utils.js


## Architecture & Technology

-	Javascript
-	HTML
-	Sass
-	Webpack
- JQuery & JQuery Color

