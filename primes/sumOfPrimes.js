  const sumPrimes=(num)=> {

    let results = 0;

      for (let i = 1; i <= num; i++) {
        if (isPrime(i)) {
        results += i;
    }
  }
  return results;

  const isPrime=(n)=> {

    if (n == 1) {
      return false;
    }
    for (let i = 2; i <= n / 2; i++) {
      if (n % i == 0) {
        return false;
      }
    }
    return true;
  }
}
