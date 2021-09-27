// function 함수

// 1. 함수 선언

function hello(){
    console.log('hello');
}
hello();    // hello 출력

function hello2(msg){
    console.log(msg);
}
hello2('hi');       // hi 출력
hello2('안녕');     // 안녕 출력

// 2. 파라미터
// -> 원시값 파라미터, 객체 파라미터

function changeName(obj){
    obj.name = 'cha';
}
const dom = { name: 'coder' };

changeName(dom);
console.log(dom);   

// 3. default parameter 
function showMsg(msg, from){
    console.log(`${msg} by ${from}`);

}
showMsg('hi');  // hi by undefined 출력

//4. Rest parameter 
// '... 이것은 배열형태로 전달된다'라는 의미한다. 
function printAll(...arg){
    for(const i =1;i<arg.length;i++){
        console.log(arg[i]);
    }
    /* 
    for(arg of args){   args -> 배열의 모든 데이터
        console.log(arg);
    }
    */
}
printAll('안녕', 'hello', 'hi');    // '안녕', 'hello', 'hi' 출력

// 5. local scope   범위
// 함수 안에서는 함수 밖이든 안이든 상관없이 사용가능하나 함수 안에 있는걸 밖으로 끄집어내서 사용할 수 없다.
const globalMsg = 'global';
function printMsg(){
    const msg = 'hello';
    console.log(msg);
    console.log(globalMsg);
}
printMsg()

// 6. Return value
// 함수 중에 return 같이 없는거는 생략이 가능해서 사용을 하지 않은 것이다.
function sum(a,b){
    retunr a+b;
}
const result = sum(1,2);
console.log(`sum-> ${sum(1,2)}`);

