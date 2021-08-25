

export const COLORS = ['rgb(153, 0, 51)', 'rgb(153, 51, 51)', 'rgb(179, 0, 0)', 'rgb(255, 0, 0)', 'rgb(204, 41, 0)', 'rgb(179, 89, 0)', 'rgb(204, 163, 0)', 'rgb(204, 204, 0)', 'rgb(153, 153, 0)', 'rgb(85, 128, 0)', 'rgb(179, 0, 89)', 'rgb(179, 0, 0)', 'rgb(255, 119, 51)', 'rgb(255, 102, 0)', 'rgb(255, 153, 51)', 'rgb(255, 214, 51)', 'rgb(255, 204, 0)', 'rgb(230, 230, 0)', 'rgb(153, 204, 0)', 'rgb(102, 102, 51)', 'rgb(204, 0, 102)', 'rgb(255, 51, 51)', 'rgb(255, 148, 77)', 'rgb(255, 153, 51)', 'rgb(255, 204, 0)', 'rgb(255, 255, 0)', 'rgb(255, 255, 102)', 'rgb(204, 255, 51)', 'rgb(102, 153, 0)', 'rgb(51, 102, 0)', 'rgb(255, 0, 102)', 'rgb(255, 80, 80)', 'rgb(255, 102, 102)', 'rgb(255, 153, 102)', 'rgb(255, 204, 102)', 'rgb(255, 255, 153)', 'rgb(204, 255, 102)', 'rgb(153, 255, 102)', 'rgb(51, 204, 51)', 'rgb(51, 153, 51)', 'rgb(204, 51, 153)', 'rgb(255, 51, 153)', 'rgb(255, 102, 153)', 'rgb(255, 153, 153)', 'rgb(255, 204, 153)', 'rgb(255, 255, 204)', 'rgb(204, 255, 153)', 'rgb(153, 255, 153)', 'rgb(102, 255, 102)', 'rgb(0, 204, 102)', 'rgb(204, 0, 204)', 'rgb(255, 102, 255)', 'rgb(255, 153, 255)', 'rgb(255, 179, 209)', 'rgb(255, 230, 240)', 'rgb(255, 255, 255)', 'rgb(204, 255, 204)', 'rgb(153, 255, 204)', 'rgb(0, 255, 153)', 'rgb(51, 153, 102)', 'rgb(153, 51, 153)', 'rgb(179, 0, 179)', 'rgb(217, 102, 255)', 'rgb(230, 204, 255)', 'rgb(242, 230, 255)', 'rgb(230, 242, 255)', 'rgb(230, 255, 255)', 'rgb(102, 255, 255)', 'rgb(0, 204, 153)', 'rgb(0, 153, 153)', 'rgb(153, 0, 204)', 'rgb(204, 51, 255)', 'rgb(204, 102, 255)', 'rgb(204, 153, 255)', 'rgb(230, 204, 255)', 'rgb(179, 215, 255)', 'rgb(179, 255, 255)', 'rgb(0, 230, 230)', 'rgb(0, 179, 179)', 'rgb(51, 102, 153)', 'rgb(102, 0, 204)', 'rgb(153, 51, 255)', 'rgb(153, 102, 255)', 'rgb(153, 153, 255)', 'rgb(179, 179, 255)', 'rgb(144, 192, 240)', 'rgb(128, 204, 255)', 'rgb(115, 180, 250)', 'rgb(77, 77, 255)', 'rgb(0, 61, 153)', 'rgb(77, 0, 153)', 'rgb(122, 0, 204)', 'rgb(163, 102, 255)', 'rgb(102, 102, 255)', 'rgb(128, 128, 255)', 'rgb(0, 123, 255)', 'rgb(0, 153, 255)', 'rgb(0, 122, 204)', 'rgb(0, 0, 204)', 'rgb(0, 0, 128)']


// export const COLORS = ['#990033', '#993333', '#b30000', '#ff0000', '#cc2900', '#b35900', '#cca300', '#cccc00', '#999900', '#558000', '#b30059', '#b30000', '#ff7733', '#ff6600', '#ff9933', '#ffd633', '#ffcc00', '#e6e600', '#99cc00', '#666633', '#cc0066', '#ff3333', '#ff944d', '#ff9933', '#ffcc00', '#ffff00', '#ffff66', '#ccff33', '#669900', '#336600', '#ff0066', '#ff5050', '#ff6666', '#ff9966', '#ffcc66', '#ffff99', '#ccff66', '#99ff66', '#33cc33', '#339933', '#cc3399', '#ff3399', '#ff6699', '#ff9999', '#ffcc99', '#ffffcc', '#ccff99', '#99ff99', '#66ff66', '#00cc66', '#cc00cc', '#ff66ff', '#ff99ff', '#ffb3d1', '#ffe6f0', '#ffffff', '#ccffcc', '#99ffcc', '#00ff99', '#339966', '#993399', '#b300b3', '#d966ff', '#e6ccff', '#f2e6ff', '#e6f2ff', '#e6ffff', '#66ffff', '#00cc99', '#009999', '#9900cc', '#cc33ff', '#cc66ff', '#cc99ff', '#e6ccff', '#b3d7ff', '#b3ffff', '#00e6e6', '#00b3b3', '#336699', '#6600cc', '#9933ff', '#9966ff', '#9999ff', '#b3b3ff', '#90c0f0', '#80ccff', '#73b4fa', '#4d4dff', '#003d99', '#4d0099', '#7a00cc', '#a366ff', '#6666ff', '#8080ff', '#007bff', '#0099ff', '#007acc', '#0000cc', '#000080']


export function randomColor() {
  let num = Math.floor(Math.random() * 100);
  let color = COLORS[num];
  return color;
}

export function mixColor(color1, color2) {``
  let c1 = chroma(color1);
  let c2 = chroma(color2);
  return chroma.mix(c1, c2).hex();

}

function black(num1, num2, step) {
  // let check = ((num1 * (step - 1)) + num2) / step
  let check = ((num1 / step) + (num2 / step)) * step;
  // let check = (num1) + (num2);
  if (check < 0) {
    return 0
  } else if (check > 1) {
    return 1
  } else {
    return check
  }
  // if (check > 255) {
  //   return 255
  // } else if (check < 0) {
  //   return 0
  // } else {
  //   return check
  // }
}
function avg(num1, num2, step) {
  // let check = num2 - (num1);
  // if (check > 255) {
  //   return 255
  // } else if (check < 0) {
  //   return 0
  // } else {
  //   return check
  // }

  return ((num1 * (step - 1)) + num2) / step
  // let check = (num1 / step) + (num2 / step);
  // // let check = (num1) + (num2);
  // if (check > 100) {
  //   return 100
  // } else {
  //   return check
  // }
}


export function mixTilesTwo(hex1, hex2) {
  let color1 = $.Color(hex1).rgba();
  let color2 = $.Color(hex2).rgba();

  let r = color1[0] + color2[0]
  let g = avg(color1[1], color2[1])
  let b = avg(color1[2], color2[2])


  // let rgb = `rgb(${r}, ${g}, ${b})`


  return rgb

}

export function rgbCMYK(rgb) {
  let red = (rgb[0] / 255);
  let green = (rgb[1] / 255);
  let blue = (rgb[2] / 255);

  let k = (1 - Math.max(red, green, blue));
  let c = (1 - (red - k)) / (1 - k);
  let m = (1 - (green - k)) / (1 - k);
  let y = (1 - (blue - k)) / (1 - k);
  return [c, m, y, k]
}

export function cmykRGB(cmyk) {
  let r = 255 * (1 - cmyk[0]) * (1 - cmyk[3]);
  let g = 255 * (1 - cmyk[1]) * (1 - cmyk[3]);
  let b = 255 * (1 - cmyk[2]) * (1 - cmyk[3]);
  return [r, g, b]
}

export function mixTilesThree(c1, c2, step) {
  let color1 = rgbCMYK($.Color(c1).rgba());
  let color2 = rgbCMYK($.Color(c2).rgba());

  let c = avg(color1[0], color2[0], step)
  let m = avg(color1[1], color2[1], step)
  let y = avg(color1[2], color2[2], step)
  let k = black(color1[3], color2[3], step)

  let rgb = cmykRGB([c, m, y, k])
  let rgbStr = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`


  return rgbStr

}

export function mixTilesFour(c1, c2, step) {
  let color1 = rgbCMYK($.Color(c1).rgba());
  let color2 = rgbCMYK($.Color(c2).rgba());

  C = C + (color2[0] / step)
  M = M + (color2[1] / step)
  Y = Y + (color2[2] / step)

  // let a = 1

  let rgb = cmykRGB([C, M, Y, K])
  let rgbStr = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`


  return rgbStr

}












