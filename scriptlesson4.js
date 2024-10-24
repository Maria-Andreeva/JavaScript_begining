// цикл while
/*let count = 0;
while (count < 3) {
    console.log("Hello");
    count++;
}*/


// цикл for
/*
for (let i = 0; i < 3; i++) {
    console.log("Hello for");
}

for (let j= 0; j <= 2; j++) {
    console.log(j);
}*/

// цикл do while
/*
let pass;
let count = 0;

do {
    if (count >= 3) {
        alert("Пароль неверный!");
    }
    pass = Number(prompt("Введите пароль"));
    count ++;
    
} while (pass !== 234);*/

/* массивы

const arr = []; // самое правильное объявление массива
//arr = 5; // неправильное объявление элементов в массив
arr.push(1); // правильное объявление элементов в массив
console.log(arr);
// let arrNew = []; // неправильное объявление массива
// arrNew = 6;*/

/*const arr = [1, 2, "hello", 4, 5, 9];
console.log(arr);
console.log(arr[0]); //[i] - индекс элемента массива
console.log(arr.length); // способ вычислить сколько всего элементов находится в массиве
console.log(arr[arr.length-1]); // какой последний элемент массива = arr.pop()*/

/*
const user = [];

//const userName = prompt("Ваше имя");
//const userAge = prompt("Ваш возраст");
//user.push(userName);
//user.push(userAge);

user.push(prompt("Ваше имя"));
user.push(Number(prompt("Ваш возраст")));

console.log(user);*/

/*
const numbers = [2, 3, 19, 15];

//console.log(numbers);
//alert(numbers);

alert(`Запомни цифры ${numbers}`);

console.log(numbers.pop()); // = numbers[numbers.length - 1])*/


const word = "example";
//console.log(word.split(","));
//console.log(word.split(""));
const arrWord = word.split("");
//console.log("Element " + arrWord.pop() + " has been deleted");
const upWord = arrWord.pop();
//console.log(upWord.toLocaleUpperCase());
arrWord.push(upWord.toLocaleUpperCase());
console.log(arrWord.join(""));


/*const arr = [1, 2, 3, 4];
-undefined
arr
-(4) [1, 2, 3, 4]
arr.slice(0, 2);
-(2) [1, 2]
arr
-(4) [1, 2, 3, 4]
arr.slice(1, 2);
-[2]*/

/*
const arr = [5, 2, 3, 7, 19, 7, 13, 3];

for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element >= 5) {
        console.log(element);
    } else {
        continue;
    }
}

//console.log(arr.indexOf("3"));*/


/*
const arrAnswers =  ["елка", "ёлка", "ель"];
const userAnswer =  prompt("Зимой и летом одним цветом")

for (let i = 0; i < arrAnswers.length; i++) {
    const element = arrAnswers[i];
    if (element === userAnswer.toLowerCase()) {
        console.log("Молодец!");
        break;
    } else {
        continue;
    }
}
*/