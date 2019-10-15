function onetoNumber(num) {
    return num*(num+1)/2
}

function oneToN(num) {
    var total = 0;
    for (let index = 1; index <= num; index++) {
        total += index;
    }
    return total;
}

const fib = n => {
    //base case 
    if (n > 0) return fib(n-1) + n
    else return n
}



for (let i = 0; i < 10; i++) {
    console.log(i,onetoNumber(i), oneToN(i));
    console.log('fib', fib(i));
}

console.log('5', onetoNumber(5));

