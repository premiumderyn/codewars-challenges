function stringToArray(string) {
  let i, index;
  index = 0;
  let arr = [];
  for (i = 0; i < string.length; i++) {
    if (string[i] === " ") {
      arr.push(string.slice(index, i));
      index = i + 1;
    }
  }
  arr.push(string.slice(index, string.lengsth));
  return arr;
}


//v2
function stringToArray(string){
  return string.split(" ")
}