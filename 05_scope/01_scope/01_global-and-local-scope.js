// 전역과 지역 스코프   scope = 범위
// 전역은 코드의 가장 바깥 영역을 말하며 전역은 전역 스코프를 만든다.
// 전역에 변수를 선언하면 전역 스코프를 갖는 전역 변수가 되며 전역 변수는 어디서든지 참조할 수 있다.
// 지역이란 함수 몸체 내부를 말하며 지역은 지역 스코프를 만든다.
// 지역에 변수를 선언하면 지역 스코프를 갖는 지역 변수가 되며 자신의 지역 스코프와 함위 스코프에서 유효하다.

var x = 'global x';
var y = 'global y';

function outer() {

    var z = 'outer local z'

    console.log(x);
    console.log(y);
    console.log(z);
    console.log('--------------------');
    function inner() {
    
        var x = 'inner local x ';

        console.log(x);
        console.log(y);
        console.log(z);
    console.log('--------------------');

    }

    inner();
}

outer();

console.log(x);
console.log(y);
// console.log(z);
