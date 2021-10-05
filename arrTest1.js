// concat, map, filter
const grades = [
    {name: 'math', score: 90, grade:'A'}
    , {name: 'english', score: 96, grade:'A'}
    , {name: 'korean', score: 85, grade:'B'}
    , {name: 'science', score: 70, grade:'C'}
    , {name: 'social', score: 65, grade:'D'}
];

const concat = [{name:'history', score: 88, grade:'B'}];

const newGrade = grades.concat(concat);
console.log(newGrade);

