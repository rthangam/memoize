function memoize(param) {
	if (!memoize.cache) {
		memoize.cache = {};
	}

	if (!memoize.cache[param]) {
		memoize.cache[param] = fib(param);
	}

	return memoize.cache[param];
}



//Fibonacci series
function fib(n) {
	return (n < 2) ? 1 : fib(n - 1) + fib(n - 2);
}


console.log("non-memoize result");
console.time("non-memoize");
console.log(memoize(20));
console.timeEnd("non-memoize");

console.log("memoize result");
console.time("memoize");
console.log(memoize(20));
console.timeEnd("memoize");