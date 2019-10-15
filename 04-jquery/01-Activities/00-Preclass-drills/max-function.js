function maxOutput(x, y) {
    console.log(Math.max(x, y));
}

function isMax(x, y) {
    // if (x > y) {
    //     return x;
    // } else {
    //     return y;
    // }

    return (x > y) ? x : y;
}
console.log(isMax(-6, -19));
console.log(isMax(486, 120391));
console.log(isMax(4, 8));
console.log(isMax(3.14, 2.97));