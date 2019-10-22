'use strict';

function safeCall(fn) {
  try {
      fn();
  } catch (err) {
      return false;
  }
  return true;
}

console.log(safeCall(() => console.log('Hello!'))); // true
console.log(safeCall(() => JSON.parse('abc'))); // false
console.log(safeCall(() => false)); // true
console.log(safeCall(() => abc)); // false
