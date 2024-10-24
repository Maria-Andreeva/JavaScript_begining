/*
//alert("Hello script js")
function helloName (name) {
    console.log(name);
}

helloName("Maria");

//let count = 5;

function counter () {
    return count++; // count = count +1;
}

counter();
counter();

console.log(count);*/


//let age = Number(prompt("Сколько вам лет?"));

/*const lvlUpAge = () => {
    return age + 5;
}*/

//const lvlUpAge = () => age + 5;

//console.log(`Через 5 лет Вам будет ${lvlUpAge()}`);

/*
function hello() {
    console.log("Hello function");
}

hello();

const sum = (param1, param2) => {
    return param1 + param2;
}

console.log(sum(2,5));
*/

/*
const salary = (money) => {
    money = money * 0.87; // money - money * 0,13
    return money * 0.75;
}

const userMoney = Number(prompt("Сколько ты зарабатываешь?"));

let moneyMonth = salary(userMoney);

console.log(`Для расходов можно использовать ${moneyMonth}`);

console.log(`На еду желательно потратиить не более, чем ${moneyMonth * 0.30}`);*/

/*function sayHello () {
    alert("Привет");
    alert("Нажали на кнопку");
}*/


function askQuestion(answer, question) {
    const userAnswer= prompt(question);

    if (userAnswer.toLowerCase() === answer) {
        console.log("Угадал");
    } else {
        console.log("Не угадал");
    }

}

function puzzle() {
    askQuestion("лук", "Сидит дет во 100 шуб одет, кто его раздевает, тот слезы проливает");
    askQuestion("елка", "Зимой и летом одним цветом");
}