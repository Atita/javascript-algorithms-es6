"use strict";

const swap = (arr, fIndex, SIndex) => {
  let temp = arr[fIndex];
  arr[fIndex] = arr[SIndex];
  arr[SIndex] = temp;
}

const part = (arr, left, right) => {
  let pivot = arr[Math.floor((right + left) / 2)],
    i = left,
    j = right;

  while (i <= j) {
    while (arr[i] < pivot) {
      i++;
    }

    while (arr[j] > pivot) {
      j--;
    }

    if (i <= j) {
      swap(arr, i, j);
      i++;
      j--;
    }

  }
  return i;

}

const quickSort = (arr, left, right) => {
  let index;
  if (items.length > 1) {
    index = part(arr, left, right);
    if (left < index - 1) {
      qickSort(arr, left, index - 1);
    }
    if (index < right) {
      quickSort(arr, index, right);
    }
  }
  return arr;
}
let result = quickSort(arr, 0, arr.length - 1);

export default quickSort;
