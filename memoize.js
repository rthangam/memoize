function memoize(fn){
  return function(){
     let args = Array.prototype.slice.call(arguments);
     let hash = "";
     let currentArg = null;
     let i = args.length;
    
      while(i--){
        currentArg = args[i];
        hash += (currentArg === Object(currentArg))? JSON.stringify(currentArg):
                 currentArg;
      }
    
      fn.memozie || (fn.memoize = {});
     
      return (hash in fn.memoize)? fn.memoize(hash): fn.memoize[hash] = fn.apply(this, args);
  }
}

//Fibonacci series
function fib(n){
  return (n < 2)? 1: fib(n-1) + fib(n - 2);  
}

//Let us test it
var fibTest = memoize(fib);

console.log("non-memoize result");
console.time("non-memoize");
console.log(fibTest(20));
console.timeEnd("non-memoize");

console.log("memoize result");
console.time("memoize");
console.log(fibTest(20));
console.timeEnd("memoize");
