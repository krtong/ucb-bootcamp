// write a function that takes an array and returns the maximum value

function maxArray1(arr) {
return Math.max.apply(null,arr);    
}

function maxArray1andahalf(arr) {
    return Math.max(...arr);
}

function maxArray2(arr) {
    const newArr = arr.sort((a, b) => (a - b));
    return newArr[arr.length-1];
}

function maxArray3(arr) {
    let output = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > output) {
            output = arr[i]
        }
    }
    return output;
}

const maxArray4 = arr => arr.reduce((acc, curr) => acc > curr ? acc : curr); 

const maxArray5 = arr => {
    let output = arr[0];
    arr.forEach(elem => {
        if (elem > output) {
            output = elem;
        }
    })
    return output;
}

console.log("maxArray1",maxArray1([1,2,5,3]));
console.log("maxArray2", maxArray2([1, 2, 5, 3, 10, 15, 2]));
console.log("maxArray3", maxArray3([1, 2, 5, 3]));
console.log("maxArray4", maxArray4([1, 2, 5, 3]));