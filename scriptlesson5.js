// ООП

/*
const product = { // Создание объекта в ООП
    name: "Стол",
    productPrice: 2000
}
//console.log(product);

const productNew = { // Добавление нового объекта в ООП
    productImg:'photo.png',
    productText: 'крутое кресло'
}

//console.log(productNew);

let text = productNew.productText;  // Отображение значений объекта по параметрам: покажи свойство productText в объекте productNew

//console.log(text);


productNew.link = "product/linkname.html" // Добавление значений (свойств) в ранее созданный объект

//console.log(productNew);

delete productNew.productText; // Удаление значений (свойств) в ранее созданный объект

//console.log(productNew);

productNew.link = "catalog/linkname.html" // Изменение значений (свойств) в ранее созданном свойстве объекта

// console.log(productNew);*/

/*
const product = { // Создание объекта в ООП
    name: "Стол",
    productPrice: 2000
}

let productSale = product;
productSale.price = 1500; //  тут мы не дублируем объект, не создаем дубликат, а просто ссылкаемся на один и то же объект из разных мест, идет обращение по ссылке, поэтому если мы что-то меняем у первого, меняется и у второго, так как мы меняем один объект, а не его копию (дубликат), потому что объект один!!!
let productNew = product;
productNew.text = "lorem";
console.log(productSale);
console.log(product);
console.log(productNew);*/


// Если функция находится внутри объекта - то это МЕТОД!
/*
const product = {
    name: "Стол",
    price: 2000,
    count: 0,
    buy: function() {
        if (product.count > 0) {
            console.log("Вы купили данный товар");
        } else {
            console.log("Данный товар нельзя добавить в корзину");
        }
    
    }
}

product.buy(); // не забываем про () после вызова метода!!!*/

// Примеры методов объектов

/*const productNew = {
    name: "Стол",
    price: 2000,
    count: 0,
    userRegistred: false,
    reg: function  () {
        this.userRegistred = true;
    },
    countProduct: function() {
        if (this.count > 0) {
            console.log("Вы можете купить данный товар");
        } else {
            console.log("Данный товар нельзя добавить в корзину");
        }
    },
    buyProduct: function () {
        if (this.userRegistred) {
            console.log("Товар в корзине");
        } else {
            console.log("Вам необходимо зарегистрироваться, сначала выполнить profuct.reg()");
        }
    }
}

productNew.buyProduct();
productNew.reg();
productNew.buyProduct();*/

// Перебор значений: ключи в объекте

/*const productTest = {
    text: "hello",
    price: 1000
}

for (const key in productTest) {
    console.log(productTest[key]); // вывод ключей разных типов в консоль
}*/

// Mетод map

/*const car = {
    marke: "Audi",
    model: "A5",
    year: 2023,
    color: "red",
    passengers: 2,
    power: 249,
    odometr: 0,
};

console.log(Object.values(car)); // values - значение // Получаем: ['Audi', 'A5', 2023, 'red', 2, 249, 0]*/

// Object.entries(<исходный объект>)

/*const car = {
    marke: "Audi",
    model: "A5",
    year: 2023,
    color: "red",
    passengers: 2,
    power: 249,
    odometr: 0,
};

console.log(Object.entries(car));*/


//Работа с объектами и функциями высшего порядка. Методы.

// -> map - метод позволяет проитерировать весь массив и создать на его основе новый массив. Метод позволяет сделать "карту соответствия" исходного и нового массивов. Принимает аргумент-функцию, в которые передаются аргументы: текущий элемент массива, его индекс, полный м ассив. Функция - аргумент должна сделать необходимые вычисления и вернуть новые элементы, из которых и будет построен новый массив.

//map. Пример
/*
const studentsPracticeTime = [
    {
        firstName: "Ivanov",
        practiceTime: 56
    },
    {
        firstName: "Petrov",
        practiceTime: 120
    },
    {
        firstName: "Sidorov",
        practiceTime: 148
    },
    {
        firstName: "Belkin",
        practiceTime: 20
    },
    {
        firstName: "Avdeev",
        practiceTime: 160
    }
]

// Мы хотим вывести в таблицу студентов и информацию для каждого, прошел ли он уже практику. Практика считается пройденной, если студент отработал 120 часов или больше.

const dataForTanle = studentsPracticeTime.map((student) => {
    if (student.practiceTime < 120) {
        return { // Мы возвращаем новый объект, более удобный для вывода.
            Student: student.firstName,
            Practice: "Not passend"
        };
    } else {
        return {
            Student: student.firstName,
            Practice: "Passend"
        }
    }
});

console.table(dataForTanle);*/

// -> filter - метод filter для фильтрации элементов массива по правилу, которое задаем сами. Позволяет исключить из исходного массива лишние элементы и получить новый массив. В качестве аргумента получает функцию обратного вызова с теми же аргументами. Только эта функция возвращает false, если элемент нужно исключить, и true, чтобы он попал в новый массив.

/*const studentsPracticeTime =  [
    {
        firstName: "Ivanov",
        practiceTime: 56
    },
    {
        firstName: "Petrov",
        practiceTime: 120
    },
    {
        firstName: "Sidorov",
        practiceTime: 148
    },
    {
        firstName: "Belkin",
        practiceTime: 20
    },
    {
        firstName: "Avdeev",
        practiceTime: 160
    }
]

// Мы хоти отфильтровать массив студентов, оставив в новом массиве только тех, кто уже прошел практику. Практика будет считаться пройденной, если студент отработал 120 часов или больше.

const studentPassedPractice = studentsPracticeTime.filter((student) => {
    if (student.practiceTime < 120) return false
    return true
});

console.log(studentPassedPractice);  // Получаем новый массив, в котором уже только те студенты, кто уже прошел практику.*/

// -> reduce - метод называют свёрткой, так как он проходится по всему массиву и позволяет собрать и обработать его значения в новую форму. Например, в одно значение (допустим сумму значений всех элементов).

// Без reduce
/*
const studentsPracticeTime =  [
    {
        firstName: "Ivanov",
        practiceTime: 56
    },
    {
        firstName: "Petrov",
        practiceTime: 120
    },
    {
        firstName: "Sidorov",
        practiceTime: 148
    },
    {
        firstName: "Belkin",
        practiceTime: 20
    },
    {
        firstName: "Avdeev",
        practiceTime: 160
    }
]

// Посчитаем сколько всего часов практики обработали студенты.
let totalTime = 0; // Объявим переменную для хранения суммы всех часов.

for (let i = 0; i < studentsPracticeTime.length; i++) {
    totalTime =  totalTime + studentsPracticeTime[i].practiceTime;
}

console.log(totalTime); // 504*/

// C reduce

// Метод принимает два аргумента.
// 1. Функция обратного вызова с четырьмя аргументами (обычно используют два, реже три):
// ➜ аккумулятор,
// ➜ текущий элемент массива,
// ➜ индекс этого элемента,
// ➜ весь массив.
// Функция обратного вызова должна вернуть обновлённое значение аккумулятора, которое будет передано в следующую итерацию.
// 2. Первоначальное значение аккумулятора.

/*const studentsPracticeTime =  [
    {
        firstName: "Ivanov",
        practiceTime: 56
    },
    {
        firstName: "Petrov",
        practiceTime: 120
    },
    {
        firstName: "Sidorov",
        practiceTime: 148
    },
    {
        firstName: "Belkin",
        practiceTime: 20
    },
    {
        firstName: "Avdeev",
        practiceTime: 160
    }
]

// Посчитаем сколько всего часов практики обработали студенты.

const totalTime = studentsPracticeTime.reduce((acc, element) => { // Первое значение - это функция обратного вызова, которая будет получать значение аккумулятора (асс) при каждой итерации; и текущий элемент массива (student).
    return acc + element.practiceTime;
}, 0); // Второй аргумент - это первоначальное значение аккумулятора - 0.

console.log(totalTime); // 504

let sumTime = 0;

console.log("Method for i");
for (let index = 0; index < studentsPracticeTime.length; index++) 
{
    console.log(studentsPracticeTime[index].firstName);
}

console.log("Reduce method");

studentsPracticeTime.reduce((acc, element) => { // Первое значение - это функция обратного вызова, которая будет получать значение аккумулятора (асс) при каждой итерации; и текущий элемент массива (student).
    console.log(element);
}, 0)

//console.log("Reduce method 2");

//let filteredStundes = studentsPracticeTime.filter(element2 => element2.practiceTime > 100 );
//console.log(filteredStundes);
*/

/*
let array1 = [1, 2, 3];
//let summ1 = 0;

//let array2 = array1.map(el => summ1 += el);


let array2 = array1.reduce(function(summ, el){return summ += el*2}, 0);


console.log(array2);
*/


// -> some - этот метод используется, когда нужно проверить, что в массиве есть хоть один подходящий нам элемент. Например, есть ли среди всех студентов хоть кто-то кто прошел практику. Принимает функцию обратного вызова, которая вызывается для каждого элемента массива с аргументами:
// ➜ текущий элемент массива,
// ➜ его индекс,
// ➜ весь исходный массив;
// Функция должна проверить условие и вернуть true, если элемент подходит, и false, если не подходит. Когда будет найден первый подходящий элемент, выполнение метода some прекратится, он вернёт true. Иначе метод пройдёт по всем элементам массива и вернёт false. Если исходный массив пустой, метод сразу вернёт false.
// Метод удобен для проверки больших массивов, так как останавливается сразу после нахождения подходящего элемента, не тратит ресурсы зря.
/*

const studentsPracticeTime = [
    {
        firstName: "Ivanov",
        practiceTime: 56
    },
    {
        firstName: "Petrov",
        practiceTime: 120
    },
    {
        firstName: "Sidorov",
        practiceTime: 148
    },
    {
        firstName: "Belkin",
        practiceTime: 20
    },
    {
        firstName: "Avdeev",
        practiceTime: 160
    }
];
// -> find
// Мы хотим найти студента Belkin и посмотреть сколько времени он отработал на практике.

const studentBelkin =  studentsPracticeTime.find((student) => {
    return student.firstName === "Belkin";
});
console.log(studentBelkin.practiceTime); // 20*/

/*

const array = [1, 2, 3, 10, 15];

// map

const arryUp = array.map(item => item * 2); // item - придумал сам название

console.log(arryUp);

// filter

arrayFilter = array.filter (item => item >= 10); // item - придумал сам название

console.log(arrayFilter);

// some - нужно понимать есть ли такие, не надо сами элементы, выдает значение true/false

arraySome = array.some (item => item >= 20);
console.log(arraySome);

// reduce

arrayReduce = array.reduce((a,b) =>  a + b) / array.length; // a,b придумал значение сам, a - куда складываем значения, b - какие складываем значения , в данном примере нашли среднее арифметическое
console.log(arrayReduce);*/

// Деструктизация 


//При обращении к определённым элементам массива или ключам объекта в нашем алгоритме, чтобы каждый раз не писать имя массива/объекта с путём до нужного элемента, мы можем сохранить его данные в отдельную переменную.
// Новый стандарт ES2015 позволил легко получать данные из массивов и объектов, сохраняя их в новые переменные, деструктуризируя массив или объект.

/*

// Вариант БЕЗ деструктуризации

// Сбор данных из ОБЪЕКТА

const student = {
    firstName: "Ivan",
    lastName: "Petrov",
    age: 21,
}

const firstName =  student.firstName; // мы объявлеяем отдельно переменную, под каждый нужный нам параметр.
const lastName = student.lastName;
const age = student.age;

// Сбор данных из МАССИВА

const students = ["Ivanov", "Petrov", "Belkin"];
const student1 = students[0];
const student2 = students[1];
const student3 = students[2];*/

// Вариант С деструктуризацией

// Сбор данных из ОБЪЕКТА
/*
const student = {
    firstName: "Ivan",
    lastName: "Petrov",
    age: 21,
};

const { firstName, lastName, age } = student; // Деструктуризация - мы объявляем все переменные в фигурных скобках, название должно совпадать с нужным нам параметром.

// Сбор данных из МАССИВА

const students = ["Ivanov", "Petrov", "Belkin"];
const [student1, student2, student3] = students; // Деструктуризация - тут мы указываем имена переменных в квадратных скобках, и в них по порядку будут записаны элементы массива.


// Теперь мы можем объявлять все нужные переменные в одном месте и получать данные из объектов или массивов одной строкой.
// Деструктуризация также позволяет задавать значения по умолчанию для переменных на случай, если в объекте не окажется ключа, который мы запрашиваем, или в элементе массива будет значение undefined.
//При деструктуризации объекта можно переименовать переменные, в которые будут сохраняться ключи, если мы, например, не хотим или не можем использовать переменную с таким же именем как и ключ.*/



// Сбор данных из ОБЪЕКТА

const student = {
    firstName: "Ivan",
    lastName: "Petrov",
    age: 21,
};
// Деструктцрируем значение ключа firstName в переменную studentName, и зададим для возраста значение по умолчанию, равное 20.

const { firstName: studentName, lastName, age = 20 } = student; 


// Сбор данных из МАССИВА

const students = ["Ivanov", "Petrov", "Belkin"];
const [student1, student2, student3] = students; // Тут мы указываем имена переменных в квадратных скобках, и в них по порядку будут записаны элементы массива.