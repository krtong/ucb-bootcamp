const fib = n => {
    //recursion
    if (n > 0) return fib(n-1) + n;
    //base case
    else return n;
};

console.log(fib(2));


