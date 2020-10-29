function map(arr, mapp) {
    let newArr = [];
    
    for (let x of arr) {
        newArr.push(mapp(x));
    }
    return newArr;
}

function reduce(arr, reducer, start = arr[0]) {
    let total = start;

    for (let x of arr) {
        if (x !== arr[0] || start !== arr[0]) {
            total = reducer(x, total);
        }
    }
    return total;
}