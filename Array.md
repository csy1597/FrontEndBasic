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
        const push = fruits.push('포도');
        console.log(fruits);    // ['바나나', '사과', '딸기', '포도'] 출력

        3. pop -> 배열 끝에 데이터 삭제
        const pop = fruits.pop();
        console.log(fruits);    // ['바나나', '사과', '딸기'] 출력

        4. shift -> 배열 앞에 데이터 삭제
        const shift = fruits.shift();
        console.log(fruits);    // ['사과', '딸기'] 출력

        5. unshift -> 배열 앞에 데이터 추가
        const unshift = fruits.unshift('바나나');
        console.log(fruits)     // ['바나나', '사과', '딸기'] 출력

        6. indexOf -> 배열 안 데이터의 인덱스 번호 찾기
        console.log(fruits.indexOf('사과'));    // 1 출력

        7. splice -> 인덱스 위치에 있는 항목 삭제
                     splice(인덱스번호, 삭제개수)
                     삭제개수가 없으면 지정한 인덱스번호 이후에 데이터는 삭제된다.
        const splice = fruits.splice(0,1);
        console.log(fruits);    // ['사과', '딸기'] 출력

        8. slice -> 배열 복사
        console.log(fruits.slice);      // ['사과', '딸기'] 출력

        9. concat -> 새로운 배열 데이터를 다른 배열에 추가

        const concat = ['키위', '망고'];
        const newFruits = fruits.concat(concat);
        console.log(newFruits);

        10. include -> 배열 데이터의 유무를 확인
        console.log(newFruits.includes('키워'));
        
        const car = [
            {name:'텔루라이드', size:'대형', money:15,000}
            , {name:'쏘렌토', size:'중형', money:5,000}
            , {name:'아반떼', size:'준중형', money:2,000}
            , {name:'스파크', size:'소형', money:1,000}
        ];

        11. map -> 
        12. filter ->
        13. reduce ->

