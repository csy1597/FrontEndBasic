// for, for of, forEach, if, swich, while

// if, else if, else
const math = 83;
if(math >= 90){
    console.log('A학점');
} else if(math >= 80){
    console.log('B학점');
} else if(math >= 70){
    console.log('C학점');
} else if(math >= 60){
    console.log('D학점');
} else{
    console.log('F학점');
}

// for
for(let i =0;i<5;i++){
    console.log(i);
}

// for in
const stuInfo = {
    name: 'corn'
    , age: 15
}

for(let info in stuInfo){
    console.log(`${info} : ${stuInfo[info]}`)
}

const stuInfo1 = {
    name : 'bob'
    , stuNo: 1
    , age: 16
}
for (const info in stuInfo1){
    console.log(`${info} : ${stuInfo1[info]}`)
}