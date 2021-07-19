function fibonacci(n) {
    if (n === 0 || n === 1)
      return n;
    else
      return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(5));

//memoization
var fibonacci = (function() {
    var memo = {};
  
    function f(n) {
      var value;
  
      if (n in memo) {
        value = memo[n];
      } else {
        if (n === 0 || n === 1)
          value = n;
        else
          value = f(n - 1) + f(n - 2);
  
        memo[n] = value;
      }
  
      return value;
    }
  
    return f;
  })();

function fibonacci(n) {
    var memo = {};
    if (n in memo) {
        return memo[n];
    }else{
        if (n === 0 || n === 1)
            return n;
        else
            return fibonacci(n - 1) + fibonacci(n - 2);
    }
    
}