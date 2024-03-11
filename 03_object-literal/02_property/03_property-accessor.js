// 03_프로퍼티 접근

var dog = {
    name : '뽀삐',
    eat : function(food) {
        console.log(`${this.name}은 ${food}를 맛있게 먹어요`);
    }
};

console.log(dog.name);
dog.eat('장어');

// 대괄호 표기법
//console.log(dog[name]);
console.log(dog['name']);
dog['eat']('장어');

var obj = {
    'dash-key' : 'dash-value',
    0 : 1
};

//console.log(obj.dash-key);
//console.log(obj.dash-key);
console.log(obj['dash-key']);

// 프로퍼티 키가 숫자로 이뤄진 문자열인 경우 따옴표를 생략할 수 있다.
console.log(obj[0]);
console.log(obj['0']);

var racket = {
    brandname : '빅터',
    price : function(price) {
        console.log(`${this.brandname}라켓을 ${price}원을 주고 샀어요`);
    }
}
console.log(racket['brandname']);
racket.price(209000);









