// this function determines if the two-digit number is the largest of the two possible numbers made by swapping digits

const largestSwap = (number) => {
  const reversedNumber = number.toString().split("").reverse().join("");
  return number >= reversedNumber ? true : false;
}

console.log(largestSwap(43));
console.log(largestSwap(27));
console.log(largestSwap(19));
console.log(largestSwap(33));
console.log(largestSwap(73));