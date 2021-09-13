export const COLORS = ['rgb(153, 0, 51)', 'rgb(153, 51, 51)', 'rgb(179, 0, 0)', 'rgb(255, 0, 0)', 'rgb(204, 41, 0)', 'rgb(179, 89, 0)', 'rgb(204, 163, 0)', 'rgb(204, 204, 0)', 'rgb(153, 153, 0)', 'rgb(85, 128, 0)', 'rgb(179, 0, 89)', 'rgb(179, 0, 0)', 'rgb(255, 119, 51)', 'rgb(255, 102, 0)', 'rgb(255, 153, 51)', 'rgb(255, 214, 51)', 'rgb(255, 204, 0)', 'rgb(230, 230, 0)', 'rgb(153, 204, 0)', 'rgb(102, 102, 51)', 'rgb(204, 0, 102)', 'rgb(255, 51, 51)', 'rgb(255, 148, 77)', 'rgb(255, 153, 51)', 'rgb(255, 204, 0)', 'rgb(255, 255, 0)', 'rgb(255, 255, 102)', 'rgb(204, 255, 51)', 'rgb(102, 153, 0)', 'rgb(51, 102, 0)', 'rgb(255, 0, 102)', 'rgb(255, 80, 80)', 'rgb(255, 102, 102)', 'rgb(255, 153, 102)', 'rgb(255, 204, 102)', 'rgb(255, 255, 153)', 'rgb(204, 255, 102)', 'rgb(153, 255, 102)', 'rgb(51, 204, 51)', 'rgb(51, 153, 51)', 'rgb(204, 51, 153)', 'rgb(255, 51, 153)', 'rgb(255, 102, 153)', 'rgb(255, 153, 153)', 'rgb(255, 204, 153)', 'rgb(255, 255, 204)', 'rgb(204, 255, 153)', 'rgb(153, 255, 153)', 'rgb(102, 255, 102)', 'rgb(0, 204, 102)', 'rgb(204, 0, 204)', 'rgb(255, 102, 255)', 'rgb(255, 153, 255)', 'rgb(255, 179, 209)', 'rgb(255, 230, 240)', 'rgb(255, 255, 255)', 'rgb(204, 255, 204)', 'rgb(153, 255, 204)', 'rgb(0, 255, 153)', 'rgb(51, 153, 102)', 'rgb(153, 51, 153)', 'rgb(179, 0, 179)', 'rgb(217, 102, 255)', 'rgb(230, 204, 255)', 'rgb(242, 230, 255)', 'rgb(230, 242, 255)', 'rgb(230, 255, 255)', 'rgb(102, 255, 255)', 'rgb(0, 204, 153)', 'rgb(0, 153, 153)', 'rgb(153, 0, 204)', 'rgb(204, 51, 255)', 'rgb(204, 102, 255)', 'rgb(204, 153, 255)', 'rgb(230, 204, 255)', 'rgb(179, 215, 255)', 'rgb(179, 255, 255)', 'rgb(0, 230, 230)', 'rgb(0, 179, 179)', 'rgb(51, 102, 153)', 'rgb(102, 0, 204)', 'rgb(153, 51, 255)', 'rgb(153, 102, 255)', 'rgb(153, 153, 255)', 'rgb(179, 179, 255)', 'rgb(144, 192, 240)', 'rgb(128, 204, 255)', 'rgb(115, 180, 250)', 'rgb(77, 77, 255)', 'rgb(0, 61, 153)', 'rgb(77, 0, 153)', 'rgb(122, 0, 204)', 'rgb(163, 102, 255)', 'rgb(102, 102, 255)', 'rgb(128, 128, 255)', 'rgb(0, 123, 255)', 'rgb(0, 153, 255)', 'rgb(0, 122, 204)', 'rgb(0, 0, 204)', 'rgb(0, 0, 128)']

export let C, M, Y, K = 0;


export function randomColor() {
  let num = Math.floor(Math.random() * 100);
  let color = COLORS[num];
  return color;
}

function colorArr(rgbColor) {
  // 'rgb(r, g, b)'
  let step = rgbColor.split('(')[1].split(')')[0].split(', ');

  return step.map(num => parseInt(num));
}

function avg(num1, num2, step) {
  return ((num1 * (step - 1)) + num2) / step
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


export function cmykMax() {
  if (C > 1) C = 1;
  if (M > 1) M = 1;
  if (Y > 1) Y = 1;
}


export function setFirstColor(rgbColor) {
  // let step = $.Color(hex1).rgba();
  // MAKE INTO ARRAY OF VALUES R-G-B

  let step = colorArr(rgbColor);
  let color = rgbCMYK(step);
  C = color[0];
  M = color[1];
  Y = color[2];
  let currentSwatch = document.querySelector('#current-color');
  currentSwatch.style['background-color'] = rgbColor;
  return step;
}



export function addColor(rgbColor, count) {
  let cmykColor = rgbCMYK(colorArr(rgbColor));

  C = ((C * (count - 1)) + cmykColor[0]) / count
  Y = ((Y * (count - 1)) + cmykColor[2]) / count
  M = ((M * (count - 1)) + cmykColor[1]) / count
  cmykMax();

  return cmykRGB([C, M, Y, K])
}










