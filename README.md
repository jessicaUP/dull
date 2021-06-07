# dull.

## BACKGROUND & OVERVIEW
Dull is a color-mixing game that allows you to explore the art of color-mixing. One of the beauties of subtractive color mixing (like paint mixing) is that the more you mix, the more the color turns dull… Many painters will tell you, don’t over mix your colors, but with dull that is your goal!

 - BOARD:  the starting board is a grid of colors set up similar to a color wheel. Each square will be its own unique color within the color range.

 - GAME: The player must choose a starting tile then must choose from the neighboring tiles to mix with. Going one by one creating a path, the user will continue to mix the colors until they hit one of the 5 dull color ranges. If they hit one of the ranges, the dull color will be checked off and the board will be refreshed, allowing for the player to start looking for the next dull color.

 - NOTE to REVIEWER: Subtractive mixing comes with some difficulties, my backup idea is to do additive mixing. A similar gameplay would apply but with random color targets that you would accumulate with the same color path. This could also be added as a bonus feature, if the subtractive mixing works 

## Functionality and MVPs

-	Players will be presented with a grid of colors and 5 target dull colors.
-	They start by choosing a starting color from the gird, then they must click a neighboring color to mix with.
-	They will continue to mix colors creating a path of combinations.
-	(Subtractive color will be used, same as paint mixing)
-	Once the current color hits one of the target dull color range, the grid turn back over to the original colors, the completed color gets marked off, and the players searches of the next color.
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
-	Color Libraries:
 - JQuery & JQuery Color
 - Subtractive Library: Color_mixer -https://github.com/AndreasSoiron/Color_mixer
 - Additive Library: Chroma.js - https://gka.github.io/chroma.js/

## Timeline
-	Color mixing testing and setup (1 day)
-	Create layout and color mixing logic (1 day)
-	Create gameplay with target colors (2 days)
-	Finish styling (1 day)
