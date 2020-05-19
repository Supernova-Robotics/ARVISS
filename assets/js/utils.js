
/**
 * Return the sign of a number.
 * 1 if position, -1 if negative, and 0 if within threhsold.
 * 
 * @param {number} num 
 * @param {number} threshold 
 */
var getSign = function(num, threshold) {
  if (!threshold)
    threshold = 0.01
  if (num > threshold) {
    return 1
  }
  else if (num < -threshold) {
    return -1
  }
  return 0
}

var RELU = function(num) {
  if (num > 0.01) {
    return num
  }
  return 0;
}

/**
 * Generate random signal noise.
 * 
 * @param {number} value 
 * @param {number} amplitude 
 */
var generateNoise = function(value, amplitude) {
  if (!amplitude) {
    amplitude = 1;
  }
  return value + (Math.random()-0.5) * amplitude;
}


var transformSelf2World = function(vec, angle) {
  var rot_mat = new Mat3D([
    Math.sin(angle),  Math.cos(angle), 0,
    Math.cos(angle), -Math.sin(angle), 0,
    0, 0, -1,
  ]);
  vec.matmul(rot_mat);
  return vec;
}
var transformWorld2Self = function(vec, angle) {
  var rot_mat = new Mat3D([
    -Math.sin(angle), -Math.cos(angle), 0,
    -Math.cos(angle), Math.sin(angle), 0,
    0, 0, 1,
  ]);
  vec.matmul(rot_mat);
  return vec;
}
