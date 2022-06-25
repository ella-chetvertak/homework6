    // First

function fillArray(length, values) {
    someArr = [...Array(length)];
    myArr = someArr.map(el => el = values);
    return myArr;
}
const fillArr = fillArray(10, 'qwerty');
console.log(`This is the array with your own length and values: ${fillArr}`);

    // Second

let filtArr = [0, 1, 2, null, undefined, 'qwerty', false];
function filterArray(array, ...args) {
    return array.filter((el) => !args.includes(el))
}
const result = filterArray(filtArr, false, undefined, '', 0, null); 
console.log(`This is your filtered array: ${result}`);

    // Third

function calcSum() { 
    let result = 0;
    for (let i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result;
}
let sum1 = calcSum(0);
let sum2 = calcSum(1,2,3);
let sum3 = calcSum(5, 0, 10, 1, 5);
console.log(`That is sums of different numbers: ${sum1}, ${sum2}, ${sum3}`);

    // Fourth

function createPipe(x = '=====') {
    return function(text) {
        console.log(x, text, x);
    }
}
const pipeFunction = createPipe();
pipeFunction('some text you like');

    // Fifth

function outputFunc(text) {
    console.log(text)
} 
function alertFunc(text) {
    alert(text)
} 
function concFunc(text, func) {
    func(text)
}
concFunc('Hello from the console!', outputFunc);
concFunc('Hello from the alert!', alertFunc);

      



