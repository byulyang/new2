// 즉시 실행 함수
// 함수 정의와 동시에 즉시 호출되는 함수로 단 한번만 호출 되며 다시 호출할 수 없다.

// 즉시 실행 함수는 반드시 () - 그룹연산자로 감싸야 한다.
(function() {
    console.log(`익명 즉시 실행! 함수 정의와 도시에 호출!`)
})();
// 함수 이름을 작성할 수도 있지만 해당 이름ㄴ으로 다시 호출할 수는 없다.
// 즉시 실행 함수 내에 코드를 모아두면 혹시 있을수도 있는 변수나 함수의 이름 충돌을 방지할 수 있다.
(function hello(name) {
    console.log(`${name}님 안녕하세요!`);
})('홍길동');

// hello('홍길동');

// (function() {
//     console.log(`${나노 플레어} 라켓 너무 좋아!`);
// })();

// racket('나노플레어');

(function yonex(racket) {
    console.log(`${racket} 라켓 너무 좋아요`);
})('나노플레어 555');

(function victor(racket) {
    console.log(`${racket} 라켓 너무 좋아요`);
})('브레이브 소드 12번');
