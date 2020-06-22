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
// const reduce = (arr) => {
//     let allNums = true
//     for (const x of arr) {
//         if (!!Number(x)) {
//             allNums = false
//         }
//     }
//     if (allNums) {
//         innerFunc(startingPoint=0) {
//             const sum = startingPoint
//             for (const x of arr) {
//                 sum+=x
//             }
//             return sum
//         }
//     } else {
//         for (const x of arr) {
//             if (!!x) {
//                 return true
//             }
//         }
//         return false
//     }
// }