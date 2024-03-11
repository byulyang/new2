// 02_method
// 자바스크립트의 함수는 객체이다. 함수는 값으로 취급할 수 있고 프로퍼티 값으로 사용할 수 있다.

var dog = {
    name : '뽀삐',
    eat : function(food) {
        console.log(`${this.name}은 ${food}를 맛있게 먹어요`);
    }
};

dog.eat('고구마');


var racket = {
    brandname : '요넥스',
    buy : function(buy) {
        console.log(`${this.brandname}라켓을 ${buy}에 구매 했어요`);
    }
}

racket.buy('209000');

var badminton = {
    exercise : '배드민턴',
    play : function(play) {
        console.log(`${this.exercise} ${play}을 했어요.`)
    }
}
badminton.play('복식');