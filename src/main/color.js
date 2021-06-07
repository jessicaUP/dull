

export const COLORS = ['#990033', '#993333', '#b30000', '#ff0000', '#cc2900', '#b35900', '#cca300', '#cccc00', '#999900', '#558000', '#b30059', '#b30000', '#ff7733', '#ff6600', '#ff9933', '#ffd633', '#ffcc00', '#e6e600', '#99cc00', '#666633', '#cc0066', '#ff3333', '#ff944d', '#ff9933', '#ffcc00', '#ffff00', '#ffff66', '#ccff33', '#669900', '#336600', '#ff0066', '#ff5050', '#ff6666', '#ff9966', '#ffcc66', '#ffff99', '#ccff66', '#99ff66', '#33cc33', '#339933', '#cc3399', '#ff3399', '#ff6699', '#ff9999', '#ffcc99', '#ffffcc', '#ccff99', '#99ff99', '#66ff66', '#00cc66', '#cc00cc', '#ff66ff', '#ff99ff', '#ffb3d1', '#ffe6f0', '#ffffff', '#ccffcc', '#99ffcc', '#00ff99', '#339966', '#993399', '#b300b3', '#d966ff', '#e6ccff', '#f2e6ff', '#e6f2ff', '#e6ffff', '#66ffff', '#00cc99', '#009999', '#9900cc', '#cc33ff', '#cc66ff', '#cc99ff', '#e6ccff', '#b3d7ff', '#b3ffff', '#00e6e6', '#00b3b3', '#336699', '#6600cc', '#9933ff', '#9966ff', '#9999ff', '#b3b3ff', '#90c0f0', '#80ccff', '#73b4fa', '#4d4dff', '#003d99', '#4d0099', '#7a00cc', '#a366ff', '#6666ff', '#8080ff', '#007bff', '#0099ff', '#007acc', '#0000cc', '#000080']


export function randomColor() {
  let num = Math.floor(Math.random() * 100);
  let color = COLORS[num];
  return color;
}

export function mixColor(color1, color2) {
  let c1 = chroma(color1);
  let c2 = chroma(color2);
  return chroma.mix(c1, c2).hex();

}

function avg(num1, num2) {
  return (num1 + num2) / 2
}

export function mixTilesTwo(hex1, hex2) {
  let color1 = $.Color(hex1).rgba();
  let color2 = $.Color(hex2).rgba();

  let r = avg(color1[0], color2[0])
  let g = avg(color1[1], color2[1])
  let b = avg(color1[2], color2[2])


  let rgb = `rgb(${r}, ${g}, ${b})`


  return rgb

}











