const carArr = ['현대','기아', '쉐보레'];
console.log(carArr);

carArr[3] = '벤츠';
console.log(carArr);
console.log(carArr.length);

const push = carArr.push('BMW');
console.log(carArr);

const pop = carArr.pop();
console.log(carArr);

const shift = carArr.shift();
console.log(carArr);

const unshift = carArr.unshift('현대');
console.log(carArr);

const splice = carArr.splice(1,1);
console.log(carArr);