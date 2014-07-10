 
// Prime Number (Max)

function isPrime(num) {
   if(num < 2) {
    return false;
    }
    for (var i = 2; i < num; i++) {
        if(num%i === 0)
        {
            return false;
        }
    }
    return true;
}

function primes(N) { // Declaring another function 'primes'
var list = [];
for (var i = 2; i != N; ++i)

if (isPrime(i)) list.push(i); // Pushing isPrime array into the empty array(list).
  return list;
}
console.log(primes(100));