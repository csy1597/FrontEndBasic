# Variable(변수)

    ### 변수란

        - 변수는 데이터를 저장할 수 있는 메모리 공간이다.
        - 변수에는 오직 하나의 데이터만 저장할 수 있다.

    ### var, let, const 차이점

        1. var
            - 변수 선언 방식에 있어 큰 단점을 가지고 있다.
            - 변수를 여러번 선언해도 에러가 발생하지 않고 각각 다른 값을 출력한다.
            - 변수를 선언하고 간단한 테스트에는 편리할 수 있으나 코드량이 많아지면 
              어디에서 어떻게 사용 되는지도 파악하기 힘들고 값이 바뀔 우려가 있다.
        
        -> 그래서 ES6 이후, 이를 보완하기 위해서 '변수선언' 방식이 let, const 가 추가 되었다.

        2. let
            - 변수 재선언 불가능, 재할당 가능
            - 같은 변수명을 사용할 수 없으나, 값은 바꿀수 있다.
            - 한번 선언한 값을 바꿀 목적으로 사용한다.
            - 실무에서는 잘 사용하지 않는다.
        
        3. const
            - 변수 재선언, 재할당 불가능
            - 같은 변수명을 사용하거나, 값을 변경할 수 없다.
            - 한번 선언하면 바꾸지 않을 목적으로 사용한다.

# Hoisting(호이스팅)이란 

    - 자바스크립트는 절차지향형 언어이다. 순차적으로 읽어 내려간다.
      밑에서 함수, 변술,ㄹ 선언한 것을 호이스팅으로 적용해서 읽어 내려가도록 해준다.
    - var 선언문이나 function 선언문 등을 해당 스코프의 선두로 옮긴 것처럼 동작하는 
      특성을 말한다.
    - 자바스크립트는 ES6에서 도입된 let, const 를 포함하여 *모든선언을 호이스팅한다.
        *(var, let, const, function, function*, class)
    - var 로 선언된 변수와는 달리 let 으로 선언된 변수를 선언문 이전에 참조하면 
      에러(ReferenceError)가 발생한다.
    - let 으로 선언된 변수는 스코프의 시작에서 변수의 선언까지 *일시적사각지대에 빠지기 때문이다.
      *일시적사각지대(Temporal Dead Zone:TDZ)
    - var 로 선언된 변수는 선언 단꼐와 초기화 단계가 한번에 이루어 지지만, 
      let 으로 선언된 변수는 선언 단계화 초기화 단계가 분리되어 진행된다.

# import, export, export default 의 차이  

    ### import
        
        - 무언갈 가져오고 싶을 때 사용한다.
        - 한꺼번에 모든걸 가져오는 방식을 사용하면 코드는 짧아지지만,
          가져올 대상을 구체적으로 명시하는게 좋다.
    
    ### export 

        - 함수 또는 변수-> 모듈이라는 개념으로 다른 용도로 가져다 쓰는 개념
        
        - 여러개를 보내기 위해서 하나이상의 복수개념의 모듈을 보내기 위해서 사용한다,
        - javascript 모듈에서 함수, 객체, 원시값을 내보낼 때 사용한다.
          ES6 에서 선언한 내용을 다른 곳에서 import 하기 위해 사용한다.
        - import 할 때는, 무저간 export 한 객체/함수 이름을 사용한다.
        - 해당 변수만 export 하고 import 시에 중괄호로 사용한 이름을 감싸서 그대로 가져와야 한다.

        장점과 단점 -> 내보냈을 때 사용한 이름 그대로 가져오므로 관련 정보를 파악하기 쉽다.
    
    ### exports

        - 모듈에서 함수, 객체, *원시값을 객체의 형태로 내보낼 때 사용한다.
            * 원시값(primitive): 객체가 아니면서 메소드도 가지지 않는 데이터
              (string, number, bigint, boolean, undefined, symbol)
        - 겉보기엔 원시값처럼 보이는 null도 있지만,
          사실 모든 Object, 모든 구조화된 자료형은 프로토타입 체인에 따라 null 자손이다.
    
    ### expoer default

        - 개발자가 원하는 이름으로 import 할 수 있다.
        - 분리되어 있는 파일 내, 내볼낼 하나의 고정된 값만 내볼낼때 사용하고 
          export default 는 내보낸 값만 가져올 수 있다.

        * 장점 -> named export 와 다르게 default export 는 가져오기 할 때 
                  개발자가 원하는 대로 이름을 지정해 줄 수 있다.
        
        * 단점 -> import 하는 것이 정확히 어떤 건지 알 수 없다.
          보완점 -> named export 만 사용한다.
                    default export 한 것을 가져올 때 아래와 같이 파일이름과 동일한 이름을 
                    사용하도록 팀원들끼리 내부 규칙을 정할 수 있다.

    ### require 

        - module 객체에 담아 가져온다.(import 는 갑사 자체를 가져온다.)

# 비동기(Asynchronous)란     

    1. 먼저 동기식 작업부터 확인한다.
       먼저 시작된 하나의 작업이 끝날 때까지 다른 작업을 시작하지 않고 기다렸다가 
       다 끝나면 새로운 작업을 시작하는 방식이다.
       작업이 직렬로 배치되어 실행되며 작업 실행의 순서가 확실히 정해져 있는 것을 '동기식 처리'라 부른다.
    
       비동기식은 동기식 방식솨는 다르게 먼저 시작된 작업의 완료 여부와 상관없이 새로운 작업을
       시작하는 방식이다. 작업이 병렬로 배치되어 실해되며 작업의 순서가 확실하지 않아 나중에
       시작된 작업이 먼저 끝나는 경우도 발생한다. 이와 같은 방식을 '비동기식 처리'라고 부른다

    2. 비동기식의 callback / promise / async / await

        - 주로 백엔드와 통신을 하기 위한 기술로써 데이터를 요청하고 응답받는데 내부적으로 처리하는데 
          순서와 상관없이 상요하는 기술로써 먼저 호출을 하더라도 순서가 보장되지 않는다.
        - 화면 전환이 이루어지지 않고 이루어지기 때문에 현대 서비스에 맡는 기술

        1) callback 함수
            - callback 함수는 남용하게 되면 가독성과 에러처리 등에서 불편함이 발생된다.
              이를 해결하기 위해 ES6 에서 비동기 처리의 새로운 방법으로 promisr 객체가 등장한다.
        
        2) promise 객체
            - 비동기 통신에 적용하는 기수린데 순서가 보장되지 않는 비동기 통신에 순서를 지키고자 적용하는 개념이다.
            - 비동기 작업의 최종완료(또는 실패) 와 그 결과 값을 나타낸다.
            - 자바스크립트 비동기 처리에 사용되는 객체이다. 이를 사용하면 비동기 작업이 종료된 이후에
              성공 결과 값이나 실패에 대해 처리할 수 있다.
            - promise 는 다음 중 하나의 상태를 가진다.
                *대기(panding): 이행하거나 거부되지 않은 초기상태
                *이행(fulfilled): 연산이 성공적으로 완료됨
                *거부(rejected): 연산이 실패함
            - new Promise() 객체를 사용하여 callback 함수를 선언할 수 있다.
              이 때의 인자는 resolve, reject 를 사용한다.
              resolve 는 결과가 성공인 promise 객체를 반환
              reject 는 결과가 실패인 promise 객체를 반환
              반환된 promise 객체를 처리할 때 성공시 then 을 사용하고 실패시 catch를 사용하여 처리한다.

            *정리: Promise 객체 
                - 성공: resolve / then
                - 실패: reject / catch

              - Promise 방식이 callback 함수보다 좋은점: then 을 연결하여 코드가 간단해진다.

        3) Promise 를 활용한 async / await
            - ES2017 에 새로 추가된 async / await 는 Promise 객체를 기반으로 사용한다.
            - resolve, reject, then, catch 를 사용하지 않는다.

        4) async 
            - 기본 메소드 앞에 async 만 붙이면 반환값은 promise 객체가 된다.

        5) await
            - await 가 붙으면 반환된 Promise 객체에서 실제 메소드의 반환값을 가져오게 된다.

        6) 결과 처리 방법
            - 기존에 then 과 catch 로 성공과 실패를 확인 했다면 async / await 에소는 
              try-catch  로 확인하게 된다.
              성공일 때는 try 부분이 실행되고 실패일 경우는 catch 부분이 실행된다.

# 함수선언 방법
    - function 이라는 키워드를 선언하고 구현하는 전통적인 방법이다.
    - 변수를 선언하고 함수를 적용하는 방식이다.
        *화살표함수 방식
        *function 키워드를 선언하는 방식

    - 함수: 자주 사용하는 코드를 필요할 때 호출해 사용하기 위해 정의 해 둔 코드
    - 선언된 함수는 즉시 실행 안함, 사용을 위해 함수를 호출할 때만 실행됨
    - js 에서 ;(세미콜론) 은 실행구문을 분리할 때 사용하는데 함수는 바로 실행되는 건 아니므로 
      ;(세미콜론) 으로 끝내지 않는 것이 일반적이다.
    
    1) function 키워드를 사용해 함수 선언(=함수정의)
        -> function [함수명](){자스실행소스 코드}
           # [] 는 생략가능
    2) 함수선언 방식(function declaration): 함수명 사용 방식(Hoisting 가능)
        -> 함수에 이름을 붙여, 함수명으로 함수 호출
        -> 실행문이 아니므로 끝에 ;(세미콜론) 을 안붙이는게 일반적이다.
        -> Hoisting 가능(즉, 함수 정의 전 호출코드 사용 가능)
        -> 자체 호출불가
    3) 함수식 방식(function expression): 변수 사용 방식 (Hoisting 불가능)
        -> 함수를 변수에 담아, 변수명으로 함수 호출
        -> 실행문이므로 끝에 ;(세미콜론) 을 붙여야한다.
        -> Hoisting 불가능(즉, 함수 정의 전 호출 코드 사용불가)
        -> 자체 호출 가능
    4) function 생성자 이용방식: 객체 선언을 이요한 변수 사용방식(거의 사용x)
        -> js 내장 키워드인 Function() 메소드 이용
        -> 첫글자는 대문자 나머지는 소문자
        -> 매개변수 실행코드가 모두 매개변수 임에 주의
        -> 보통 이 방법 대신 함수식 선언 방식 이용함.

# 일반함수와 화살표함수의 차이

    1) 일반함수
        -> 함수 호출방식에 의해 this 에 바인딩할 어떤객체가 동적으로 결정한다.
        -> 함수를 선언할 때 this 에 바인딩할 객체가 정적으로 결정되는 것이 아니고
           함수를 호출할 때(런타임 시) 함수가 어떻게 호출되었는지에 따라 this 에 
           바인딩할 객체가 동적으로 결정된다.
    
    2) 화살표함수
        -> ES6 문법
        -> 함수를 선언할 때 this 에 바인딩할 객체가 정적으로 결정된다.
        -> 항상 화살표함수의 상위 스코프의 this를 가리킴
        -> 화살표 함수는 call, apply, bind 메소드를 사용하여 this 를 변경할 수 없다.
        -> 구현부에서 중괄호 생략이 가능하다. 가독성이 더 좋아지는 이점이 있고 한줄로 선언했을 시 
           리턴까지 생략할 수 있는 장점이 있다.
        
        - 화살표 함수를 사용해서는 안되는 경우
            -> 메소드
            -> prototype
            -> 생성자함수
            -> addEventListener 함수의 콜백함수

# axios 라이브러리 개념 및 사용법

    - 비동기 통신을 지원하는 라이브러리 주로 SPA 개념이 적용된 프레임워크에서 사용이 된다.

    1) 개념
        -> node.js 와 브라우저를 위한 http 통신 라으비러리
            (Jquery Ajax, fetch) 중 가장 인기 있는 라이브러리
    2) 특징
        -> 구혀브라우저를 지원한다.
        -> 응답시간 초과를 설정하는 방법이 있다.
        -> JSON 데이터의 자동변환이 가능하다.
        -> node.js 에서의 사용이 가능하다.
        -> request aborting(요청취소) 가 가능하다.
        -> catch 에 걸렷을 때 consloe 에 자동으로 로그 삽입
        -> promisr 객체 형태로 return 한다.
        -> 비동기 방식으로 HTTP 데이터을 요청할 수 있다.
        -> 내부적으로 직접적인 XMLHttpRequest 를 다루지 않고 'Ajax 호출' 을 할 수 있다. 
        -> axios 로 받아오는 response 객체를 확인해보면, data 속성이 일반 문자열 형식이
           아닌 객체 형태이기 때문에 별도로 JSON.parse() 를 사용하여 객체로 변환할 필요가 없다.
    3) axios 사용법
        -> 터미널을 열고 현재 진행중인 프로젝트에 axios 를 설치한다.
            npm install --save axios
            npm i install axios
        -> 설치 후 서버파일이 될 js 파일을 상단에 호출해 준다.
            const axios = eequire("axios");
        -> GET API / POST API / PUT API / DELETE API 호출

# 전개연산자 개념 및 사용법 (배열 / 객체)
    
    - 기본 데이터를 지키고 특정값만 바꾼다.
    - 원본 데이터를 사본을 만들어 바꾼다.
    - 불변성유지 / 불변성유지방법 / 전개연산자는 하나이다.

    - 전개연산자(Spread Operator) 는 객체나 배열, 함수의 인자 등 나열형 자료를 연결하거나
      추출하는데 사용되는 문법이다
    - 배열이나 객체 또는 인자의 표현식 내부에서 배열이나 객체, 변수명 앞에 ... 을 붙여 사용한다.
    - 배열ㄱ과 함수에서 사용
        -> 할당(assign)
        -> 추출(Extract)
    - 함수에서의 사용
        -> 전개연산자는 함수의 인자(parameter)에도 사용이 가능하다.
        -> 전개 연산자는 배열을 풀어서 뿌려주는 역할 뿐 아니라, 뿌려져 있던 요소들을 하나의
           배열로 묶어서 전달해주기도 한다.
           중요한 것은, 전개연산자가 배열로부터나 인자들로부터 어떤 요소들을 뽑아내 배열로 담아
           전달해주는 즉, extract(추출) 하는 용도로 사용될 때에는 반드시 표현식의 가장 마지막에
           사용 되어야 한다.
    - 객체에서의 사용
        -> 배열에서의 사용과 비슷하나 key-value 의 쌍으로 구성되는 특성상 배여롸 약간은 남다른 방법도 있다.
    
    1) 배열 전개연산자
        -> ES6 에서 새로 나온 문법 
        -> 기존 배열 요소를 다룰 때는 index 를 사용하여 풀어쓰거나, 내장 메소드를 사용했다.
        -> 전개연산자를 사용하면 간단하게 내용을 전달하고 표현 할 수 있다.
    2) 객체 전개연산자
        -> 배열이든 객체든 전개 연산자는 내용물을 잘풀어서 예쁘게 포장해준다.

# 비구조할당 개념 및 사용법
    - 다른 말로는 '구조분해'
    - 객체에서는 객체 구조분해
    - 배열에서는 배열 구조분해

    -비구조할당 문법
        - 배열에서 값(value)이나 객체에서 프로퍼티를  별개의 변수의 형태로 꺼내오는 것을
          가능하게 하는 하나의 자바스크립트 표현이다.
        - 변수명이 연결고리가 되는 모습으로 보여진다.
        - 함수의 파라미터를 이용할 수 도 있다
    - 비구조화할당은 재할당하는 개념과 같다
        - 변수를 통해서 다시 정의해주고 불러오는 개념이다
    - 비구조화할당을 두 번 이상 사용하는 것도 가능하다.

# 함수형 프로그래밍이란?
    - 함수형 프로그래밍이란 함수를 조합하여 소프트웨어를 개발하는 방식을 의미한다.
    - java 와 같은 객체지향 프로그램들은 객체들을 조합하여 소프트웨어를 개발했지만 
      함수형 프로그래밍은 함수를 조합하는 것 이다.
    - 함수형 프로그래밍의 장점은 순수함수를 강조하여 오류를 줄이고 순수함수를 조합하여
      모듈화 수준을 높인다는 점이다.
    
    -순수함수와 일급함수
        1) 순수함수
            -> 동일한 input 에는 항상 같은 output 을 반환한다.
            -> 함수의 실행이 프로그램에 영향을 주지 않는다.
        2) 일급함수
            -> 변수 안에 함수를 할당할 수 있다.
            -> 함수의 인자로 함수를 사용할수 있다.
            -> 함수의 반환값으로 함수를 사용할 수 있다.
    
    - 커링함수
        - 함수형 프로그래밍에서는 커링함수를 자주 사용한다.
          커링함수는 코드의 간결함을 높이고 가독성을 높이기 위해 사용한다.
    
    - 다향성
        - 함수형 프로그래밍에서는 다향성을 중요하게 생각한다. 함수를 연속적으로 사용하는데
          형 체크와 예외처리를 하면 가독성을 떨어뜨리기 때문이다.
        - 함수형 프로그래밍에서는 함수 자체가 의도하지 않은 형태의 인자를 받았을 때도 
          정상적으로 작동할 수 있도록 프로그래밍한다.
    
    - 불변성
        -불변성은 함수형 프로그래밍의 핵심개념이다.

# 불변성 유지란?

    - 데이터의 원본이 훼손되는 것을 막는 것이다.
        - 데이터를 불변하게 다루면 데이터들 간의 간섭으로 인한 버그의 가능성을 획기적으로 낮출수 있다.
          또 데이터가 변경되었는지 여부를 쉽게 체크할 수 있으며  CRUD 작업시 불변성을 보장하는 것은 중요하다.
    - 이름데 대한 불변
        - 이름을 불면하게 하는 방법은 const 를 사용하는 것이다.
    - 내용에 대한 불변

# ES6 이전과 이후의 차이 
    
    1) var vs let, const
        - var: 함수에 대해서만 scope 를 가지고 있다.
        - let: 블럭단의 scope 를 가진다.
        - const: let 과 동일 하나 불변
    
    2) 화살표 함수 \
        const 변수명 = ([매개뱐스]) => 소스코딩
        const 변수명 = ([매개뱐스]) => { return 소스코딩} // 중괄호 사용시 return 은 필수
    
    3) for, for in, for of
        - for: forEach 의 단점은 return, break 을 통한 루프 탈출이 불가능하다는 점이다.
        - for in: 배열을 컨트롤 하는 구문이 아니라 객체(object)를 컨트롤 하기 위한 구문이다.
                    * property chain 도 순회한다.
                    * 순서가 무작위이다.
                    * var index 값이 String 이다.
        - for of: forEach 와 다르게 break, continue, return 등을 통하여 루프제어가 가능하다.
                    * for in 과 다르게 배열의 데이터를 컨트롤 하기위한 루프이다.
                      (순서대로 돌며 배열 요소들만 루프에 포함된다.)
          => 배열은 for of / 객체는 for in

# SPA(single page application) 개념
    - 1개의 페이지만 있는 어플리케이션
    - 단일 페잊 어플리케이션은 모던 웹의 패러다임이다.
        
        => SPA 는 기본적으로 단일페이지로 구성되며 기존의 서버 사이드 랜더링과 비교할 때, 배퐇가 간다하며
           네이티브 앱과 유사한 사용자 경험을 제공할 수 잇는 장접이 있다.
        
        => link tag 를 사용하는 전동적인 웹 방식은 새로운 페이지 요청시마다 정적 리소드가 다운로드 되고,
           전체 페이지를 다시 렌더링하는 방식을 사용하므로 새로고침이 발생되어 사용성이 좋지않다.
           그리고 변경이 필요없는 부분을 포함하여 전체 페이지를 갱신하므로 비효율적이다.
        
        => SPA 는 기본적으로 웹애플리케이션에 필요한 모든 정적 리소스를 최초에 한번 다운로드 한다. 이후
           새로운 페이지 요청 시, 갱신에 필요한 데이터만을 전달 받아 페이지를 갱신하므로 전체적인 
           트래픽을 감소할 수 있고, 전체 페이지를 다시 랜더링 하지않고 변경되는 부분만을 갱신하므로
           새로고침이 발생하지 않아 네이티브 앱과 유사한 사용자 경험을 제공할 수 있다.
        
        => 모바일의 사용이 증가하고 있는 현 시점에 트래픽의 감소와 속도, 사용성, 반응성의 향상은 매우 중요한
           이슈이다. SPA의 핵심 가치는 사용자 경험(UX) 향상에 있으며 부가적으로 애플리케이션 속도의 향상도를 
           기대할 수있어서 모바일 퍼스트 전략에 부합한다.

        => 모든 소프트웨어 아키텍처에는 trade-off 가 존재하며 모든 어플리케이션에 적합한 것은 부분은 없다.
           SPA 또한 구조적인 단점을 가지고 있다. 대표적인 단점은 아래와 같다

           - 초기 구동 속도
              * SPA 는 웹 어플리케이션에 필요한 모든 정적 리소드를 최초에 한 번 다운로드 하기때문에 초기 구동
                속도가 상대적으로 느리다. 하지만 SPA 는 웹페이지보다는 어플리케이션에 적합한 기술이르모 트래픽의 
                감소와 속도, 사용성, 반응성의 향상 등의 장점을 생각한다면 결정적인 단점이라고 할 수는 없다.
            
            - SEO(검색엔진 최적화) 문제
                * SPA 는 서버 랜더링 방식이 아닌 자바스크립트 기반 비동기 모델(클라이언트 랜더링 방식) 이다.
                  따라서 SEO 는 언제나 단점으로 부각되어 왔던 이슈이다. 하지만 SPA는 정보의 제공을 위한
                  웹페이지 보다는 어플리케이션에 적합한 기술이므로 SEO 이슈는 심각한 문제로 볼 수는 없다.
                  Angular 또는 React 등의 SPA 프레임워크는 서버 랜더링 을 지원하는 SEO 대응 기술이 이미
                  존재하고 있어 SEO 대응이 필요한 페이지에 대해서는 선별적 SEO 대응이 가능하다.

# React / Vue 개념
    - 둘 다 컴포넌트 기반 Virtual Dom 방식, 가볍고 빠르다는 공통점이 있다.
        1) 컴포너트 기반
            -> 웹 UI를 작은 컴포넌트 단위로 구성
            -> 컴포넌트 는 다른 프로젝트에서도 재사용 가능
            -> 컴포넌트 갬슐화와 확장이 가능해 개발이 유연해 지는 장점
        2) Virtual Dom
            -> Virtual Dom 은 실제 Dom 변화를 최소화 시켜주는 역할응 한다.
               Dom: 브라우저는 HTML 파일을 스크린에 보여주기 위해 Dom 노드 트리를 생성, 랜더트리 생성,
                    레이아웃, 페인팅 과정을 거친다. Dom 노드는 HTML 의 각 앨리먼트와 연관되어 있기
                    때문에 HTML 파일에 20개씩의 변화가 생기면 Dom 노드가 변경되고 그 이후의 과정 역시
                    20회 다시 이루어진다. 작은 변화에도 매우 복잡한 과정들이 다시 실행되기 때문에
                    Dom 변화ㅏ 작을 경우 성능이 저하된다.
               Virtual Dom: View 에 변화가 있다면 그 변화가 실제 Dom 에 적용되기 전에 Virtual Dom 에 
                            적용시키고 최종 결과만 실제 Dom 에 전달한다. 따라서 20개의 변화가 있다면 
                            Virtual Dom 은 변화된 부분만 가려내어 실제 Dom 에 전달하고 실제 Dom 은 
                            그 변화를 1회로 인식하여 단 한번의 랜더링 과정만 거치게 된다.
        -> React 와 Vue 는 모두 Virtual Dom 방식을 통해 성능을 향상 시킨다.

    1. React 
        - 선언형이다.
        - 배우고 사용하기 쉬우며 빠른 개발 가능
        - 컴포넌트 (state, props) 를 통한 재사용이 가능한 UI 개발 가능
        - 거대 커뮤니티
            -> 페이스북의 지원을 받는 만큼 지속적인 버전 관리가 이루어지고, React 사용자가 많아
               다양한 래퍼런스, 확장 라이브러리가 많다. 또한 이미 React 를 사용하고 있는 개발 프로젝트가 
               많기 때문에 개발자 채용 시, React 를 다를 줄 안다는 것이 장점으로 작용할 수 있다.
        - JSX 기반 컴포넌트 구문
            -> 템플릿 방식으로 관리하는 Vue 와는 달리, React 는 JSX 코드로 컴포넌트를 작성하고 컴포넌트의 
               상태(state) 를 변화시키지 않고 관리한다. 변화가 일어나면 실제 브라우저의 Dom에 새로운 것을 
               적용하는 것이 아니라, 자바스크립트로 이루어진 Virtual Dom 에 랜더링을 하고 기존의 Dom과 비교하여 
               변화가 일어난 곳만 업데이트 한다.
            -> 템플릿은 재구조화가 어렵고, 에러에 취약하지만 React 는 상태를 고유 속성대로 유지하기 때문에 
               대규모 프로젝트에서도 관리가 수월하고 테스트에도 적합하다.
        - 서버 사이드랜더링(SSR) 지원 
            -> 서버 사이드 랜더링은 검색엔진 최적화(SEO)에 도움이 되며 초기 로딩시간을 단축시켜 준다. 
    2. Vue
        - 단일 파일 컴포넌트(Single File Component)
            -> Vue 는 단일 파일 컴포넌트 기반의 프레임워크이다. 웹이 View 를 구성하는 요선인 HTML, CSS,
               Javascript 코드를 .vue 확장자를 가진 하나의 파일에 모두 정의하난 방식, 이러한 방식은
               적당한 규모의 프로젝트에서 관리의 생산성을 높이고, 협업을 수월하게 한다는 장점이 있다.
        - HTML 기반 템플릿 구문
            -> Vue 는 개발한 프론트엔드 파일을 사용자가 볼 수 있도록 브라우저 화면에 랜더링 하는 과정에
               템플릿이란 문법을 사용한다. 이 템플릿을 구성하는 문법이 HTML 기반으로 이뤄져 있어 배우기
               쉽다는 특징이 있다.
        -  Javascript Framework 로 MVVM(Model-View-ViewModel) 패턴 기반의 UI 라이브러리 
            -> 데이터 바인딩과 화면 단위를 컴포넌트 형태로 제공하며, 관련된 API 를 지원한다.
            -> 양방향 데이터 바인딩 지원(Component <-> Model)
            -> 컴포넌트간의 통신은 React 와 같이 단방향 데이터 흐름(Parent<->Child) 사용
            -> Angular, React 등과 비교해서 상대적으로 가볍고 빠르다.
            -> Single File Component 지원
            -> View 에 최적화 되어 있어 jQuery 등을 이용한 Dom 조작이 필요없다
            -> 많은 모듈들의 지원과 한글화된 정보들이 많이 존재한다.
				-> Vuex : 중앙집중식 상태관리 저장소
				-> Vue-router : SPA 를 위한 라우터
				-> Vue-resource : HTTP, Ajax...
				-> Vue-devtools : Vue 에 최적화된 개발자 모드
    
    -> 사용성과 생산성에 있어서는 Vue / 트렌드나 범용성에 있어서는 React

# HTTP 프로토콜과 Rest API
    - 웹에서 통한시가 위한 통신 규격
        -> 보낸ㄹ때 내가 누군지 
        -> 받는 사람은 누구인지
    - 규칙
        -> header
            - 보내는 사람과 받는 삼에 대한 URL
            - 권한정보(토큰, 쿠키)
        -> body
            - 데이터
    -REST API 
        - HTTP 포로토콜에 내장되어 있는 메소드 
          get / post / put / delete 에 맞춰서 비동기 통신 API 를 작성하는 것


        

