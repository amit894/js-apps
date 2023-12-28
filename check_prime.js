function isPrime(num) {
    // Check if the number is less than 2 (not a prime number)
    if (num < 2) {
        return false;
    }

    // Check for divisibility from 2 to the square root of the number
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            // If the number is divisible by any other number, it's not prime
            return false;
        }
    }

    // If the loop completes without finding a divisor, the number is prime
    return true;
}

console.log(isPrime(13));
console.log(isPrime(15));