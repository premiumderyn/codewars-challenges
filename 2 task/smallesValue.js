function min(arr, toReturn) {
  let min, index;
  index = 0;
  min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
      index = i;
    }
  }
  if (toReturn === "value") {
    return min;
  } else return index;
}
