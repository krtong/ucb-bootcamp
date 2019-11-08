function firstDup(arr) {
    for (let i = 0; i < arr.length; i++) {
        if(i !== arr.lastIndexOf(arr[i])) {
            return arr[i]
        }
    }
}

console.log([2, 5, 6, 3, 5], firstDup([2, 5, 6, 3, 5]))
console.log([1, 3, 4, 1, 3, 4], firstDup([1, 3, 4, 1, 3, 4]))
console.log([2, 4, 5], firstDup([2, 4, 5]))