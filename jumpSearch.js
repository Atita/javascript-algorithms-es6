"use strict";

/*
 *jump search
 *implemented in Javascript by Anatoly Guaniezo
 */
function jumpSearch(arr, x) {

  var n = arr.length;

  var step = Math.floor(Math.sqrt(n));
  var prev = 0;
  while (arr[Math.min(step, n) - 1] < x) {
    prev = step;
    step += Math.floor(Math.sqrt(n));
    if (prev >= n)
      return -1;

  }

  while (arr[prev] < x) {
    prev++;
    if (prev == Math.min(step, n))
      return -1
  }

  if (arr[prev] == x)
    return prev;
  return -1;
}

module.exports = jumpSearch;
