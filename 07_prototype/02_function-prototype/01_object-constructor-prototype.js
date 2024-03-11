// 생성자 함수 프로토타입
// new 연산자를 사용해 만든 객체는
// 생성자 함수의 프로토타입의 정보를 사용해 [[Prototype]]을 설정한다.
const user = {
    activate : true,
    login : function() {
        console.log('로그인 되었습니다.');
    }
};

function Racket(name) {
    this.name = name;
}

// 여기서의 prototype은 앞에서 배운 프로토타입과 이름만 같을 뿐
// 실제로는 일반적인 프로퍼티이다.
Racket.prototype = user;

const racket = new Racket('나노플레어555');
console.log(racket.activate);