# Array 란
    - 하나의 변수 안에 많은 데이터를 저장할 때 사용한다. 
    - 배열 변수 안에 데이터 유형은 상관이 없으나 가급적이면 데이터 유형은 통일하여 저장하는 것이 좋다.

# 배열 선언방법
    1. let arr = new Array();
    2. let arr = [];

    const fruits  = ['바나나', '사과', '배'];
    
    console.log(fruits);    // ['바나나', '사과', '배'] 출력
    // 배열 데이터의 순서는 0 부터 시작한다.
    console.log(fruits[i]); // i 번째 에 데이터가 출력된다.

    // 배열 데이터를 바꾸고 싶을때 
    fruits[2] = '딸기';
    console.log(fruits);    // ['바나나', '사과', '딸기'] 출력

    // Array 연산
        
        1. length -> 배열의 개수
        console.log(fruits.length);      // 3 출력
        배열 데이터에서 마지막 데이터 출력하기
        console.log(fruits.[fruits.length-1]);  // 딸기 출력

        2. push -> 배열 끝에 데이터 추가
        const newFruit = fruits.push('포도');
        console.log(fruits);    // ['바나나', '사과', '딸기', '포도'] 출력

