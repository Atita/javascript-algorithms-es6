"use strict;"
/* 
 *   Binary search implementation 
 *   By Anatoly Guaniezo last update 10.12.2017
 *   accepts unsorted array and sort contents
 *   
 *   @param arr = []
 *   @param  number = number to search
 *   @return mid = array index no., if not found return -1;
 */
function binarySearch(arr, number) {
  //variables
  let min = 0;
  let max = arr.length - 1;
  let mid;
  //sort the array first
  arr.sort((a, b) => { return a - b });

  //search mid 
  while (max >= min) {
    mid = Math.floor((min + max) / 2);
    if (arr[mid] === number) { return mid; } else if (arr[mid] < number) { min = mid + 1; } else { max = mid + 1; }
  }
  return -1; //returns -1 if not found
}

module.exports = binarySearch;
