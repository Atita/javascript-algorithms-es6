function sumPrimes(num) {

  var results = 0;

  for (var i = 1; i <= num; i++) {
    if (isPrime(i)) {
      results += i;
    }
  }

  return results;


  function isPrime(n) {

    if (n == 1) {
      return false;
    }
    for (var i = 2; i <= n / 2; i++) {

      if (n % i == 0) {
        return false;
      }
    }

    return true;

  }



}
