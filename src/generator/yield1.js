function* genFunc() {
  yield 1;
  yield 2;
  yield 3;
  return 4;
}

// function* has
// 1. state
// 2. next
// 3. return
// 4. throw
const iterator = genFunc();

console.log(iterator.next()); // {value: 1, done: false}
console.log(iterator.next()); // {value: 2, done: false}
console.log(iterator.next()); // {value: 3, done: false}
console.log(iterator.next()); // {value: 4, done: true}

// ---
console.log([...genFunc()]); // [1, 2, 3]

for (const val of genFunc()) {
  console.log(val); // 1 2 3
}
