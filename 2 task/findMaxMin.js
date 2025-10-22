var min = function (list) {
  let i, min;
  min = list[0];
  for (i = 0; i < list.length; i++) {
    if (list[i] < min) min = list[i];
  }
  return min;
};

var max = function (list) {
  let i, max;
  max = list[0];
  for (i = 0; i < list.length; i++) {
    if (list[i] > max) max = list[i];
  }
  return max;
};
