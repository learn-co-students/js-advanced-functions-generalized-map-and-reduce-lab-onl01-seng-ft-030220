// Add your functions here
const map = (array, callback) => {
  const new_array = []
  for (let elem of array) {
    new_array.push(callback(elem))
  }
  return new_array
}

const reduce = (array, callback, start) => {
  if (start === undefined) {
    let accum = array[0]
    for (let i = 1; i < array.length; i++) {
      accum = callback(accum, array[i])
    }
    return accum
  } else {
    let accum = start
    for (let i = 0; i < array.length; i++) {
      accum = callback(accum, array[i])
    }
    return accum
  }
}