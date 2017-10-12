/*
 * By Anatoly Guaniezo 10.12.2017
 */
"use strict";

function linearSearch(arr, n, x) {

  for (let i = 0; i < n; i++) {
    if (arr[i] == x) { return i };
  }
  return -1;
}

module.exports = linearSearch;
