// Fibonacci Series 

var i;
var fib = []; //Initializing an array!

fib[0] = 0;
fib[1] = 1;
for(i=2; i<=10; i++)
{
    // Next fibonacci number = previous + one before previous
    // Translated to JavaScript:
    fib[i] = fib[i-2] + fib[i-1];
    alert(fib[i]);
}

// recursive Fibonacci
function fibo(n) {
  var f = [];
  for (var i = 0; i < n; i+1) {
    f.push((i< 2) ? i: f[i-1] + f[i-2]);
  }
  return i;
}