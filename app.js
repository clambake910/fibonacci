'use strict';
function fib(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }
  return fib(n - 1) + fib(n - 2);
}

// 2のとき
// fib(1)+fib(0)=1

// 3のとき
// fib(2)+fib(1)=1+1=2

// 4のとき
// fib(3)+fib(2)=2+1=3

// 5のとき
// fib(4)+fib(3)=3+2=5

const length = 40;
for (let i = 0; i <= length; i++) {
  console.log(fib(i));
}