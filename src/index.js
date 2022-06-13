// complete the function
function prime (num) {
  // check if number is equal to 1 or 2
  if (num === 1) {
    console.log("1 is not a prime number.")
  }
  else if (num === 2) {
    console.log("2 is a prime number.")
    return true
  }
  // check if number is greater than 2
  else if (num > 2) {
    // loop through 2 to number-1
    for (let i = 2; i < num; i++) {
      if (num % i == 0) {
        console.log(`${num} is not a prime number.`)
        return false
      }

      console.log(`${num} is a prime number.`)
      return true
    }
  }
  
}

function solution (arg) {
  return prime(arg);
}

if (typeof require !== "undefined" && require.main === module) {
  if (process.argv.length <= 2) {
    throw Error("Require argument");
  }

  const arg = process.argv[2];
  console.log(solution(arg));
}

module.exports = { solution };
