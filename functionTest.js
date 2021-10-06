//  function

//  사칙연산
function add(num1,num2){
    return num1 + num2
};
const result1 = add(5,4);
console.log(result1);
console.log('--------------------------')

function subtract(num1,num2){
    return num1 - num2
}
const result2 = subtract(5,4);
console.log(result2);
console.log('--------------------------')

function multiply(num1, num2){
    return num1 * num2;
}
const result3 = multiply(5,2);
console.log(result3);
console.log('--------------------------')

function division(num1, num2){
    return num1 / num2;
}
const result4 = division(5,2);
console.log(result4);
console.log('--------------------------')

// callback 

function stuGrade(score, pass, fail){
    if(score >= 60){
        pass();
    } else{
        fail();
    }
}

function pass(){
    console.log('pass');
}
function fail(){
    console.log('fail');
}

stuGrade(60, pass, fail);