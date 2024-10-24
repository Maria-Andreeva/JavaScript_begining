// Задание 1.
/*
// а)

const week = {
    1: "понедельник",
    2: "вторник",
    3: "среда",
    4: "четверг",
    5: "пятница",
    6: "суббота",
    7: "воскресенье",
}

console.log(week[2]);

// b)

const user = {
    name: "John",
    surname: "Ka",
    age: 30
}

console.log(`${user.name} - ${user.surname} - ${user.age}`);

// c)

user.patronimyc = prompt("Отчество");

console.log(user);

// d)

delete user.surname;

console.log(user);*/

// Задание 2.
/*
// а)

const arr1 = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
const arr2 = [1, 2, 3, 4, 5, 6, 7];
//const arr2 = [1, 2, 3, 4, 5, 6, 7, 8];

const week = {};

if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
        week[arr1[i]] = arr2[i];
    }
} else {
    console.log("Массивы не равны");
}

console.log(week);

// b)

const obj = {x: 1, y: 2, z: 3};

for (const item in obj) {  // у нас переменная item в объекте obj
    obj[item] = obj[item] ** 2; // чтобы понять ключи пишем не просто item, а obj[item]  // ** 2 возведение в квадрат
}

console.log(obj);*/

// Задание 3.
/*
const obj = {
    key1: {
        key1: 1,
        key2: 2,
        key3: 3,
    },

    key2: {
        key1: 4,
        key2: 5,
        key3: 6,
    },

    key3: {
        key1: 7,
        key2: 8,
        key3: 9,
    },
}
let sum = 0;

// var1

for (const keyUp in obj) {
    //console.log(obj[keyUp]);
    for (const keyIn in obj[keyUp]) {
        //console.log(obj[keyUp][keyIn]);
        sum += obj[keyUp][keyIn];
    }
}


// var2
console.log(Object.values(obj));*/


// Задание 4.
/*
const riddles = {
    question: "Зимой и летом одним цветом",
    answer: "елка",
    askQuestion() {
        let userAnswer = prompt(this.question);
        userAnswer = userAnswer.toLowerCase();
        if (userAnswer === this.answer) {
            console.log("Молодец!");
        } else {
            console.log("Вы проиграли!");
        }
    }
}

riddles.askQuestion();*/
