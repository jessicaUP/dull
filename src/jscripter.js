// SOURCE http://www.javascripter.net/faq/hex2cmyk.htm

export function hexToCMYK(hex) {
  var computedC = 0;
  var computedM = 0;
  var computedY = 0;
  var computedK = 0;

  hex = (hex.charAt(0) == "#") ? hex.substring(1, 7) : hex;

  if (hex.length != 6) {
    alert('Invalid length of the input hex value!');
    return;
  }
  if (/[0-9a-f]{6}/i.test(hex) != true) {
    alert('Invalid digits in the input hex value!');
    return;
  }

  var r = parseInt(hex.substring(0, 2), 16);
  var g = parseInt(hex.substring(2, 4), 16);
  var b = parseInt(hex.substring(4, 6), 16);

  // BLACK
  if (r == 0 && g == 0 && b == 0) {
    computedK = 1;
    return [0, 0, 0, 1];
  }

  computedC = 1 - (r / 255);
  computedM = 1 - (g / 255);
  computedY = 1 - (b / 255);

  var minCMY = Math.min(computedC, Math.min(computedM, computedY));

  computedC = (computedC - minCMY) / (1 - minCMY);
  computedM = (computedM - minCMY) / (1 - minCMY);
  computedY = (computedY - minCMY) / (1 - minCMY);
  computedK = minCMY;

  return [computedC, computedM, computedY, computedK];
}

//converts cmyk to hex
export function cmykToHex(c, m, y, k) {
  var hex,
    rgb;
  //convert cmyk to rgb first
  rgb = cmykToRgb(c, m, y, k);
  //then convert rgb to hex
  hex = rgbToHex(rgb.r, rgb.g, rgb.b);
  //return hex color format
  return hex;
}
//converts cmyk color to rgb
function cmykToRgb(c, m, y, k) {
  var rgb_r,
    rgb_g,
    rgb_b,
    cyan = 100 * Number(c),
    magenta = 100 * Number(m),
    yellow = 100 * Number(y),
    black = 100 * Number(m);
  0 < cyan ? cyan /= 100 : 0 < magenta ? magenta /= 100 : 0 < yellow ? yellow /= 100 : 0 < black && (black /= 100);
  rgb_r = 1 - Math.min(1, cyan * (1 - black) + black);
  rgb_g = 1 - Math.min(1, magenta * (1 - black) + black);
  rgb_b = 1 - Math.min(1, yellow * (1 - black) + black);
  rgb_r = Math.round(255 * rgb_r);
  rgb_g = Math.round(255 * rgb_g);
  rgb_b = Math.round(255 * rgb_b);
  return { r: rgb_r, g: rgb_g, b: rgb_b };
}



export function rgb2cmyk(r, g, b) {
  var computedC = 0;
  var computedM = 0;
  var computedY = 0;
  var computedK = 0;

  //remove spaces from input RGB values, convert to int
  var r = parseInt(('' + r).replace(/\s/g, ''), 10);
  var g = parseInt(('' + g).replace(/\s/g, ''), 10);
  var b = parseInt(('' + b).replace(/\s/g, ''), 10);

  if (r == null || g == null || b == null ||
    isNaN(r) || isNaN(g) || isNaN(b)) {
    alert('Please enter numeric RGB values!');
    return;
  }
  if (r < 0 || g < 0 || b < 0 || r > 255 || g > 255 || b > 255) {
    alert('RGB values must be in the range 0 to 255.');
    return;
  }

  // BLACK
  if (r == 0 && g == 0 && b == 0) {
    computedK = 1;
    return [0, 0, 0, 1];
  }

  computedC = 1 - (r / 255);
  computedM = 1 - (g / 255);
  computedY = 1 - (b / 255);

  var minCMY = Math.min(computedC,
    Math.min(computedM, computedY));
  computedC = (computedC - minCMY) / (1 - minCMY);
  computedM = (computedM - minCMY) / (1 - minCMY);
  computedY = (computedY - minCMY) / (1 - minCMY);
  computedK = minCMY;

  return [computedC, computedM, computedY, computedK];
}