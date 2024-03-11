/* 숫자 타입으로 변환*/
console.log('==============숫자 타입으로 변환===============')

// 산술 연산자의 피연산자는 모두 숫자여야하므로
// 숫자가 아닌 피연산자를 숫자 타입으로 암묵적 타입 변환한다.
console.log(10 - '5');
console.log(10 * '5');
console.log(10 / '5');
console.log(10 % 'javascript');

// 비교 연산자로 크기를 비교하기 위해 모두 숫자 타입이여야 하므로
// 숫자가 아닌 피연산자를 숫자 타입으로 암묵적으로 타입 변환한다.
console.log(10 > '5');

console.log(+'');
console.log(+'1');
console.log(+true); // 자바랑 같음 트루값 1 폴스값 0
console.log(+false);
console.log(+null); // 널값도 0
//console.log(+Symbol);
console.log(+{});
console.log(+[1]);
console.log(+function() {});

// 빈 문자열, 빈 배열, null, false는 0으로 true 1로 변환
// 객체와 undefined는 변환되지 않아 NaN


