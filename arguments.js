//  array like object

function sum(a, b, c) {
    const arg = [...arguments]
    // console.log(arg);
    const result = a + b + c;
    return result;
}
// console.log(arguments);
const total = sum(22, 55, 90, 33, 88);
// console.log(total);

console.log(sum.length);