const map = (arr,func) => {
    const newArr = []
    if (func) {
        for (const ele of arr) {
            newArr.push(func(ele))
        }
    } else {
        for (const ele of arr) {
            newArr.push(ele)
        }
    }
    return newArr
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