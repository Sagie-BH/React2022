const nums = [2,4,6];
let state = 0;

function sum(value) {
    state += value;
}
// Foreach modify state outside of the scope
nums.forEach(sum);

console.log(state);

const initialValue = 0;

function reducer (state, value) {
    return state + value;
}
const total = nums.reduce(reducer, initialValue);

console.log(total);