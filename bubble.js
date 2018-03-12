
function bubble(array) {
  var switched = true;
  while (switched) {
    switched = false;
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      [array[i], array[i + 1]] = [array[i + 1], array[i]]
      switched = true
    }
  }
}
    return array
}

module.exports = bubble
