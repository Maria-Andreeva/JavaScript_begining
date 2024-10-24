// Задание 1

// a

/*const arr = [1, 2, 3];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}*/

// b

/*console.log(arr.length);*/

// c

/*arr[0] = 'a';
arr[1] = 'b';
arr[2] = 'c';

console.log(arr);*/

// Задание 2

// a

/*const arr =  [1, 2, 3];

for (let i = 0; i< arr.length; i++) {
   arr[i]++ // = arr[i]+1
}

console.log(arr);*/

// b

/*const arr = [];
arr [3] = 'a';
arr [8] = 'b';
console.log(arr);*/

// с, d

/*const arr = [1, 2, 3];

arr.push (4,5,6); // метод добавляет числа в массив после имеющихся
console.log(arr);

arr.pop(); // метод удаляет последнее значение из массива
console.log(arr);

arr.shift(); // метод удаляет первое значение из массива
console.log(arr);*/

// Задание 3

// a
/*for (let i = 11; i <= 33; i++) {
    console.log(i);
}*/

//b
/*for (let i = 1; i <= 99; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}
*/

//c
/*for (let i = 100; i >= 0; i--) {
    console.log(i);
}*/

//d

/*let num = 50;
let count = 0;
do {
    num = num * 3;
    console.log(num);
    count++;
} while (num < 1000);
console.log(count);*/

// Задание 4

// a

/*const arr = [2, 5, 9, 15, 1, 4];
for (let i = 0; i < arr.length; i++ ) {
    if (arr[i] > 3 && arr[i] < 10) {
        console.log(arr[i]);
    }
}*/

//b

/*let sum = 0;
for (let i = 2; i <= 100; i++) {
    if (i % 2 === 0) {
        sum += i; // sum =sum+ i
    }
}

console.log (sum);*/

//c

/*const arr = [2, 5, 9, 3, 1, 4];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    const element = arr [i];
    sum += element;
}

console.log (sum);*/

//d

/*let string = "-";
for (let i = 0; i < 9; i++) {
    string += i + "-";
}

console.log (string);*/

//e

/*const arr = [2, 5, 9, 0, 3, 1, 4];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    if (arr[i] === 0) {
        break;
    }
}*/