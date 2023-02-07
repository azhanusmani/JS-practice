function isPerfectSquare(x) {
  let s = parseInt(Math.sqrt(x));
  return s * s == x;
}

function isFibonacci(n) {
  return isPerfectSquare(5 * n * n + 4) || isPerfectSquare(5 * n * n - 4);
}

isFibonacci(0) ? console.log("fabionacci") : console.log("not a fabionacci");

// Fabionacci nom can be checked if the result of (5*n*n + 4) or (5*n*n - 4)
//  either one or both return perfect square

// The other way to check the same is by classical way

function classicalWayOfFabionacci(num) {
  let prev = 1;
  let count = 2;
  let temp = 0;
  if (num == 0 || num == 1) {
    return true;
  }
  while(count<=num){
    if(prev+count==num){
        return true
    }
temp = prev;
prev=count;
count+=temp;

  }
  return false;
}

classicalWayOfFabionacci(6)?console.log("fabbionacci"): console.log("not a fabionacci")