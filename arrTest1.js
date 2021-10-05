// concat, map, filter
const grades = [
    {name: 'math', score: 90, grade:'A'}
    , {name: 'english', score: 96, grade:'A'}
    , {name: 'korean', score: 85, grade:'B'}
    , {name: 'science', score: 70, grade:'C'}
    , {name: 'social', score: 65, grade:'D'}
];

// concat
const grade = [{name:'history', score: 88, grade:'B'}];

const newGrade = grades.concat(grade);
console.log(newGrade);
console.log('----------------------');

// map
const newGrade2 = grades.map(function(a){
    return `${a.name} 과목은 ${a.grade} 학점이다. `
});
console.log(newGrade2);

console.log('----------------------');

// filter

const newGrade3 = grades.filter(function(b){
    return b.grade !== 'A';
});

console.log(newGrade3);
console.log('----------------------');

const num1 = [1,2,3]

const number = num1.concat(4,5,6);
console.log(number);



