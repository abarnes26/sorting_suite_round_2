
function merge(array) {
  var sortedArray = [array[0]]
  array.shift()
  do {
    if (array[0] > sortedArray[-1]) {
      sortedArray.push(array[0]);
      array.shift();
    } else {
      i = 0
      do {
        i -= 1;
      }
      while (array[0] < sortedArray[i] || sortedArray[i] === sortedArray[0])
      sortedArray.splice(i, 0, array[0]);
      array.shift()
    }
  }
  while (array.length > 0)
  return sortedArray
}


module.exports = merge
