// Задание 1
/* a)
function allUserInfo (name, surname, age) {
    console.log(`Привет, ${name} ${surname}, с возрастом ${age}`);
}

allUserInfo("Иван", "Петров", 17);*/

/* b)
function power(num) {
    console.log(num ** 2);
}

power(3);*/

/* c)
function positiveNegative(num) {
    if (num >= 0) {
        console.log("+++");
    } else {
        console.log("---");
    }
}

positiveNegative(5);
positiveNegative(-1);*/

// Задание 2
/*
// а)

function sum(num1, num2, num3) {
    console.log(num1 + num2 + num3);
}

sum(1,5,10);

// b)

function sumParam() {
    console.log(param1+param2+param3);
}

let param1 = 1;
let param2 = 2;
let param3 = 3;

sumParam(param1,param2,param3);

// c)

function func(num = 5) {
    console.log(num * num);
}

func(2);
func(3);
func();*/

// Задание 3

// а)
/*
function square(num) {
    return Math.sqrt(num);
}

console.log(Math.round(square(3)+square(4)));

// b)

function minNum(num1, num2) {
    if (num1 < num2) {
        console.log(`${num1} минимальное`);
    } else {
        console.log(`${num2} минимальное`)
    }
}

minNum(121,12);*/

// Задание 4

// a)
/*
function dayOfWeek(day) {
    switch (day) {
        case 1:
            return "понедельник"
            break;
        case 2:
            return "вторник"
            break;
        case 3:
            return "среда"
            break;
        case 4:
            return "четверг"
            break;
        case 5:
            return "пятница"
            break;
        case 6:
            return "суббота"
            break;
        case 7:
            return "воскресенье"
            break;
    
        default:
            return "Число не от 1 до 7"
            break;
    }
}

console.log(dayOfWeek(1));

// b)

function hello(time, name) {
    if (time >= 4 && time <= 11) {
        console.log(`Доброе утро, ${name}`);
    } else if (time >= 12 && time <= 16) {
        console.log(`Добрый день, ${name}`);
    } else if (time >= 17 && time <= 23) {
        console.log(`Добрый вечер, ${name}`);
    } else {
        console.log(`Доброй ночи, ${name}`);
    }
}

hello(10, "John");*/

// Домашняя работа

// Функция возведения числа в куб
/*
function cube(number) {
    return number ** 3;
    }
    // Вычисление результатов
    let result = cube(2) + cube(3);
    // Вывод результата в консоль
    console.log(result);


// Функция вычисления 13% от числа
function calculateSalaryAfterTax(salary) {
    return salary * 0.87;
    }
    // Получение ввода от пользователя
    let input = prompt('Введите число:');
    let number = parseFloat(input);
    if (isNaN(number)) {
    console.log('Значение задано неверно');
    } else {
    // Вычисление и вывод результата
    let afterTax = calculateSalaryAfterTax(number);
    console.log(`Размер заработной платы за вычетом налогов равен
    ${afterTax}`);
    }
    

    // Функция нахождения максимального числа
function findMax(a, b, c) {
    let max = a; // Начинаем с предположения, что a - максимальное
    значение
    if (b > max) {
    max = b; // Если b больше, обновляем max
    }
    if (c > max) {
    max = c; // Если c больше, обновляем max
    }
    return max;
    }
    // Получение ввода от пользователя
    let num1 = parseFloat(prompt('Введите первое число:'));
    let num2 = parseFloat(prompt('Введите второе число:'));
    let num3 = parseFloat(prompt('Введите третье число:'));
    // Нахождение максимального значения
    let max = findMax(num1, num2, num3);
    // Вывод результата в консоль
    console.log('Максимальное значение:', max);
    
    //2 версия используем встроенную функцию Math.max:
    // Функция нахождения максимального числа
    function findMax(a, b, c) {
    return Math.max(a, b, c);
    }
    // Получение ввода от пользователя
    let num1 = parseFloat(prompt('Введите первое число:'));
    let num2 = parseFloat(prompt('Введите второе число:'));
    let num3 = parseFloat(prompt('Введите третье число:'));
    // Нахождение максимального значения
    let max = findMax(num1, num2, num3);
    // Вывод результата в консоль
    console.log('Максимальное значение:', max);

    // Функция сложения
function add(a, b) {
    return a + b;
    }
    // Функция вычитания
    function subtract(a, b) {
    return a > b ? a - b : 0;
    }
    // Функция умножения
    function multiply(a, b) {
    return a * b;
    }
    // Функция деления
    function divide(a, b) {
    return b !== 0 ? a / b : 'Деление на ноль недопустимо';
    }
    // Примеры использования функций
    console.log(add(2, 6)); // 8
    console.log(subtract(5, 3)); // 2
    console.log(multiply(4, 7)); // 28
    console.log(divide(10, 2)); // 5
    console.log(divide(10, 0)); // Деление на ноль недопустимо
    */