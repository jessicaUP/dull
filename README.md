# dull...
###### by jessica uphoff

![level5_example](https://user-images.githubusercontent.com/79214086/137543334-6e217dfc-ea5d-43a3-ba4e-b52f8bd09b69.gif)

## BACKGROUND & OVERVIEW
Dull is a color-mixing game that allows you to explore the art of color-mixing. One of the beauties of subtractive color mixing is that the more you mix, the more the color turns dull… Many painters will tell you, don’t over mix your colors, but with dull that is the point of the game!

![HowToGif](https://user-images.githubusercontent.com/79214086/137531794-fab24e07-1e27-4f48-8db5-26291f4e3696.gif)
 
- BOARD:  A 10 x 10 grid of 100 different color tiles.

- GOAL: The goal of the game is to mix the right tiles to make the target color, creating a path to the target space. The level amount represents the distance away from the start tile (level 1 is 1 click away...level 10 is 10 clicks...)

<img width="356" alt="level10Example" src="https://user-images.githubusercontent.com/79214086/137531377-7f6c8fbc-24f2-4c1d-bc2d-d3d26f1b9f88.png">



- DYNAMIC LEVELS: each level is auto generated each round, allowing for a different gameplay every refresh and optimized level count capabilities. 

```javascript
  while ((count) <= level) {
    optionTiles = nextMoveOptions(false);
    let next = optionTiles[randomNum(optionTiles.length)];
    selectedTiles.push(next);

    if (!next) {
      currentTile = start;
      currentColor = startColor;
      selectedTiles = [];
      setPath();
      return;
    }

    let nextColor = allTiles[next].ele.getAttribute('colorId');
    count++

    mixedColor = addColor(nextColor, count);
    currentTile = posObject(next);

  };
```

- MOVEMENT: Players are provided with a start tile and can move to the neigboring lateral and horizontal colors towards the target position. The current tile has a count of how many clicks there are left in the center circle. The path can not cross over itself and will trigger reset button when the path is incorrect or there are no neighboring options.

![pathGif](https://user-images.githubusercontent.com/79214086/137531518-5c838dcf-8847-4223-8c6e-836d74cfb77d.gif)


The player may use the mouse or keyboard to navigate the grid.
   - ARROWS: Allows the user to navigate the board one space at a time.
   - ENTER: User can press enter to trigger a blinking button.
   - H: Help 
   - R: results
   - A: about

![KEYBOARD (1)](https://user-images.githubusercontent.com/79214086/137531589-2f38cb27-b727-4fc6-a831-749d629942ab.jpg)

- COLOR MIXING: Subtractive mixing (values add to black) is used to mix the current color with the selected option. RGB codes are converted to CMYK, proportionality averaged together, then converted back to RGB for css styling.

![wheelGif](https://user-images.githubusercontent.com/79214086/137533552-8056b8f0-87ff-4816-9e1b-adab98b37764.gif)

```javascript
export function addColor(rgbColor, count) {
  let cmykColor = rgbCMYK(colorArr(rgbColor));

  C = ((C * (count - 1)) + cmykColor[0]) / count
  Y = ((Y * (count - 1)) + cmykColor[2]) / count
  M = ((M * (count - 1)) + cmykColor[1]) / count
  cmykMax();

  return cmykRGB([C, M, Y, K])
}
```

- SWATCHES: The swatch console (bottom right corner) is where the player can compare the following;
   - TARGET: Final color that the player is trying to mix. The background is also the target color, to bring focus to the goal and allow for easy comparison.
   - CURRENT: All of the colors that the player has mixed so far in the path. Same as the color of the current position.
   - OPTION: The player can hover their mouse over the current position options, to review in the swatch console.

![swatchGif](https://user-images.githubusercontent.com/79214086/137531652-ff225707-997b-4def-bf81-47fe7fd6c5ff.gif)

- RESULTS: As the player beats levels the paths are recored in the results modal. This also acts as the popup when the player loses.

<img width="277" alt="results" src="https://user-images.githubusercontent.com/79214086/137532250-13dcc777-03e5-4f38-87b0-73c56d5a3342.png">

- HELP: Modal explaining how the game works with gif animations. Opens automatically.


<!-- ## Functionality and MVPs

- Single-page web application, with popup modals for additional information.
- Each level, players are presented with a start position, target tile and a target mixed color.
- Each level they will mix colors creating a path of combinations, trying to land on the target space. 
- Once the player runs out of spaces, the current color and the target color are compared.
   CORRECT:
      - Success message and next level button are added to view.
      - The winning path is added to the results modal for review at anytime.
      - Lives are addded for next round.
   INCORRECT:
      - User can reset board by clicking the 'x' on the current tile or pressing enter.
      - 1 life is removed from total.
- Subtractive color mixing will be used, by converting to RGB to CMYK taking color average.
- 
 -->
<!-- 
## Wireframes
<img src='./wireframe.png' />

- /src
 - /styles
    - sass
 - /assets
    - logo.png
    - buttons...
 - index.js
 - /js
    - gridTile.js
    - color.js
    - mixPthGame.js
    - styleElements.js
    - utils.js
 -->

## Architecture & Technology

-	Javascript
-	HTML
-	Sass
-	Webpack
-  JQuery & JQuery Color (I DO NOT USE ANYMORE -- DOUBLE CHECK)


## Future Changes

- Button that allows user to mix up the colors, so they are not in rainbow order.
- Add hints:
   1. Highlight mid point of the path.
   2. Provide a preview of the mixed color for hover swatch.
   3. Reveal the next tile. 
