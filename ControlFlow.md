# 제어문 
    - 프로그램의 흐름을 제어할 수 있도록 도와주는 문장을 말한다.
    - 조건을 만족하는지의 여부에 따라 코드를 제어하는 조건문
    - 변수에 일치하는 경우의 값을 따라 코드를 제어하는 선택문
    - 특정코드를 여러번 반복해서 실행할 수 있도록 하는 반복문

## 조건문(if, else if, else)
    - 조건식의 값이 참(turn)인지 거짓(false)인지에 따라 자바스크립트 코드를 제어한다.

```js
// if문 기본적인 선언방법1
if(조건식){
    자바스크립트 코드;
}

const num = 90;
if(num>=60){
    console.log('통과입니다.')
}
```
```js
// if문 기본적인 선언방법2
if(조건식){
    자바스크립트 코드;
} else{
    자바스크립트 코드
}

const korScore = 50;
if(korScore >=60){
    console.log('통과');
} else{
    console.log('탈락');
}
```
```js
// if문 기본적인 선언방법3
// else if 의 수는 상관없이 계속 늘어날수있다.
if(조건식){
    자바스크립트 코드;
} else if(조건식){
    자바스크립트 코드;
} else if(조건식){
    자바스크립트 코드;
} else{
    자바스크립트 코드;
}

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
```

## 선택문(switch)
    - 변수의 저장된 값과 switch 문에 있는 case 값을 검사하여 
      일치하는 값이 있을 때 그에 해당하는 코드가 실행된다.
```js
// switch 문 기본선언 방법
const 변수명 = 값;
switch(변수명){
    case 값: 자바스크립트 코드;
    break;
    case 값1: 자바스크립트 코드;
    break;
    case 값2: 자바스크립트 코드;
    break;
    case 값n: 자바스크립트 코드;
    break;
    default: 자바스크립트 코드;
}

const areaCode = 032
switch(areaCode){
    case 02 : console.log('서울');
    break;
    case 032 : console.log('인천');
    break;
    default : console.log('정보를 찾을 수 없습니다.');
}
```

## 반복문(for, while, do while)
    - 반복문은 원하는 횟수 만큼 가지가 원하는 값을 출력할 수 있다.

```js
// for문 기본적인 선언방법
for(변수값 선언; 조건식; 증감식){
    자바스크립트 코드
}

for(let i=0; i<5; i++){
    console.log(i);
}
```
```js
// whlie문 기본적인 선언방법
let 변수명 = 변수값
while(조건식){
    자바스크립트 코드;
    증감식;
}

let a = 3;
while(a>0){
    console.log(a);
    a--;
}
```
```js
// do while문 기본적인 선언방법
let 변수명 = 변수값;
do{
    자바스크립트 코드
    증감식
} while(조건식)

let num = 4
do{
    console.log('안녕하세요')
} while(num>10)
// while 조건식이 false 이기 때문에 '안녕하세요' 가 한번 출력되고 while문은 종료된다.
```

## for in
    - 상속된 열거 가능한 속성들을 포함하여 객체에서 문자열로 키가
      지정된 모든 열거 가능한 속서엥 대해 반복한다.
```js
const stuInfo = {
    name : 'bob'
    , stuNo: 1
    , age: 16
}
for (const info in stuInfo){
    console.log(`${info} : ${stuInfo[info]}`)
}
```

## for of
    - 반복가능한 객체에 대해서 반복하고 각 개별 속성값에 대해 실행
      되는 문이 있는 사용자 정의 반복 후크를 호출하는 루프를 생성한다.
```js
const arr = [1,2,3];
for(const num of arr){
    console.log(num);
}
```
