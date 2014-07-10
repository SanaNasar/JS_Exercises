 // Prime Number

// isPrime(num) (JavaScript)

// Create a function to return true or false if a number passed in a prime number.

 function isPrime(num) {
    if(num < 2) {
    return false;
    }
    for (var i = 2; i < num; i++) {
        if(num%i === 0)   // Checking if the number is divisible by itself.
        {
        return false;
        }
    }
    return true;
}
console.log(isPrime(10)); // For checking the code. 