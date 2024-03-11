// 생성자 함수
const student1 = {
    name : '송재원',
    age : 28,
    getInfo : function() {
        return `${this.name}은 ${this.age}세 입니다.`
    }
};
const student2 = {
    name : '요넥스',
    age : 7,
    getInfo : function() {
        return `${this.name}은 ${this.age}세 입니다.`
    }
};

// 생성자 함수에 의한 객체 생성
// 객체를 생성하기 위한 템플릿처럼 생성자 함수를 사용하여 프로퍼티 구조가
// 동일한 객체 여러 개를 간편하게 생성할 수 있다.

function Student(name, age) {
        this.name = name;
        this.age = age;
        this.getInfo = function() {
            return `${this.name}(은)는 ${this.age}세 입니다.`;
        }
}
// 인스턴스 생성 가능
const student3 = new Student('헤라', 999);
const student4 = new Student('아테나', 99);

// 메서드 호출
console.log(student3.getInfo());
console.log(student4.getInfo());


function Racket(name, 땡땡한정도) {
       this.name = name;
       this.땡땡한정도 = 땡땡한정도;
       this.getInfo = function() {
        return `${this.name}에 강도${this.땡땡한정도} 입니다.`;
       }
}
const racket1 = new Racket('나노플레어555', 29);
const racket2 = new Racket('나노플레어 넥스테이지', 32);

console.log(racket1.getInfo());
console.log(racket2.getInfo());

