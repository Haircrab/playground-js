// any setTimeout argument, will convert to 32 bit integer first
// LIKELY(value->IsInt32)
// -> IsSmi() // smaller integer
// -> IsInt32Double // between min and max int, not minus zero, value == FastI2D(FastD2I(value))
// ToInt32Slow
// -> if (std::isinf(number_value)) return 0
const inf = Infinity;

// 1 ... 22*0 ... 11111011000 => 1 + 22 + 12 bits
// 4B... .... ... 1000
// 4B + 1000
// in js - cpp bridge, it is = 1000
const magic1 = 4294968296;

// 1 ... 31*0
// largely negative number in the signed world, even maximum negative number in 32bits signed integer
const magic2 = 2147483648; // need to happen in past, so fire immediately
// 0 ... 31*1
// largely positive number in the signed world, even maximum positive number in 32bits signed integer
const magic3 = 2147483647;

function main() {
  console.log(`${inf} == 0`);
  console.log(`${inf} binary == ${inf | 0} `);
  setTimeout(() => {
    console.log(`Firing ${inf}`);
  }, inf);

  console.log(`${magic1} == 1000`);
  console.log(`${magic1} binary == ${magic1 | 0} `);
  setTimeout(() => {
    console.log(`Firing ${magic1}`);
  }, magic1);

  console.log(`${magic2} == max negative integer`);
  console.log(`${magic2} binary == ${magic2 | 0} `);
  setTimeout(() => {
    console.log(`Firing ${magic2}`);
  }, magic2);

  console.log(`${magic3} == max positive integer`);
  console.log(`${magic3} binary == ${magic3 | 0} `);
  setTimeout(() => {
    console.log(`Firing ${magic3}`);
  }, magic3);
}

main();
