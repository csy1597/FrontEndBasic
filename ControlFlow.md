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