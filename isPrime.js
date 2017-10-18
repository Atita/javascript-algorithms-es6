  function isPrime(n) {

    if (n == 1) {
      return console.log(false);
    }

    for (var i = 2; i <= n / 2; i++) {
      // console.log("Looping " + i);
      if (n % i == 0) {
        return console.log(false);
      }
    }

    return console.log(true);

  }

  isPrime(2);
