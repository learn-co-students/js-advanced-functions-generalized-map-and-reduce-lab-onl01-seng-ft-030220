function map(array, func){
    let mappedArray = []
    array.forEach(index => {
        mappedArray.push(func(index))
    })
    return mappedArray;
}

function reduce(array, func, start){
    let accumulator;
    let index;

    if(!!start){
        accumulator = start;
        index = 0;
    } else {
        accumulator = func(array[0],array[1]);
        index = 2;
    }
    for(index; index< array.length; index++){
        accumulator = func(accumulator, array[index])
    }
   return accumulator
}