// Add your functions here
function map(array, cbf) {
    let newArr = []
    for (let i = 0; i < array.length; i++ ) {
        newArr.push(cbf(array[i]))
    }
    return newArr;
}

function reduce(array, cbf, starting){
    let newArr = (!!starting) ? starting : array[0]
    let i = (!!starting) ? 0 : 1
  
    for (; i < array.length; i++) {
        newArr = cbf(array[i], newArr)
    }
  
    return newArr;
  }