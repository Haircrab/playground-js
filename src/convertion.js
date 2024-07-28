// console.log(018-015)
// console.log(0o18 - 0o15)

console.log(typeof typeof 1); // string

const nums = [33, 2, 8];
// convert to string to sort
// reason: const array = ["1", true, 55, 1,23, "foo", {}]
// everything can be in an array
// everything can be converted to string
// in lexicographic order
nums.sort();
console.log(nums[1]); // 33

// Number(false) == '0' -> 0 == '0'
// 0 == '0' -> 0 == Number('0')
// 0 == 0 -> 0===0
console.log(false == "0"); // true

// false
// 0.1+0.2 = 0.300000000....4
console.log(0.1 + 0.2 == 0.3); //false

let arr = [1, 2, 3];
arr[6] = 9;
console.log(arr[5]); // undefined

const a = new Array(5);
console.log(a); // [<5 empty items>]
a.map((_) => 69); // [<5 empty items>]
a[3] = 69;
a.map((_) => 69); // [<3 empty items>, 69, <1 empty items>]

Number(""); // 0

const isTrue = true == [];
const isFalse = true == ![];
console.log(isTrue + isFalse);
