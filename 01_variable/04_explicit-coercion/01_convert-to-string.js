// explicit-coercion 명시적 타입 변환
// 개발자의 의도에 따라 값의 타입을 변환하는 것이다.
// 자바스크립트에서 기본 제공하는 표준 빌트인 생성자 함수(String, Number, Boolean)를
// new 연산자 없이 호출하는 방법, 빌트인 메서드를 사용하는 방법, 암묵적 타입 변환을 이용하는 방법이 있다.

console.log('================ 문자열 타입으로 변환 =================');
// 1. String 생성자 함수를 new 연산자 없이 호출
console.log(String(10));   // "10"
console.log(typeof String(10)); 
console.log (String(NaN));  // "NaN"
console.log(String(Infinity)); // "Infinity"
console.log(String(true));   // ..
console.log(String(false));  // ..

// 2 Object.prototype.toString 메서드 사용
console.log((10).toString());  //"10"
console.log((NaN).toString()); //"NaN"
console.log('NaN');
