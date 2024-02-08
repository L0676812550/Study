//***1***/
// Робота зі змінними 
// Оголосіть дві змінні: name та city. 
// Присвойте значення "Іван" змінній name. 
// Скопіюйте значення зі змінної name в city. 
// Виведіть значення змінної city, використовуючи функцію console.log (яка повинна показати “Іван”).

// let user = {
//   name: 'Іван',
//   city: 'кіїв',
// };
// user.city = user.name;

// console.log (user.city); //Іван

//***2***/
//Який буде результат виконання скрипта? 
// let name = "Olga"; 
// console.log(`привіт ${1}`); //привіт 1
// console.log(`привіт ${"name"}`); // привіт name
// console.log(`привіт ${name}`); //привіт Olga

//***3***/
//Видобути число зі змінних 
// let a = "5"; 
// let b = "13cvb"; 
// let c = "12.9sxdcfgv"; 
//  вивести в консоль тип
// console.log(typeof Number(a));

// console.log(Number.parseInt(b));
// console.log(typeof Number.parseInt(b));

// console.log(Number.parseFloat(c));
// console.log(typeof Number.parseFloat(c));


//***4*** 
//Зробіть, щоб 0.1 + 0.2 = 0.3 
// console.log((0.1*10 + 0.2*10) / 10);

//***5** 
//Поверніть найбільше число с набору 20, 10, 50, 40
// console.log(Math.max(20, 10, 50, 40));

//***6** 
//Поверніть випадкове число в діапазоні від 2 до 4 
// console.log(Math.random() * (4 - 2) + 2);

//***7** 
//дізнатись довжину message 
// const message = "Welcome to Bahamas!"; 
// console.log(message.length);

//***8** 
//вивести в консоль message великими літерами 
// console.log(message.toUpperCase());

//***9** 
// створити пустий об*єкт 
// додати туди ім*я, вік і місто 
// вивести результат в консоль 
// видалити місто 
// додати буль з ключем: like flowers 
// вивести результат в консоль 

// let user = {};
// user.name = 'Oleg';
// user.age = 30;
// user.city= "Kyiv";
// console.log(user);
// delete user.city;
// user['like flowers'] = true;
// console.log(user);

//***10** 
// За допомогою циклу “for…in” вивести в консоль ключі і значення об*єкта
// for (key in user) {
//   console.log(key);
//   console.log(user[key]);
// }

// ___________________________________________________________________________

// Урок №2

//***1**------------------
// Якщо змінна більше нуля - виведіть true, менше - false 
//Перевірте це на варіантах  1, 0, -3.

// console.log(-3 > 0);

// ***2**-----------------
// Якщо змінна ="test" - виведіть true, 
// Перевірте це на варіантах  'test', "qwerty", true 

//const a = "test";

// switch (a) {
//   case "test":
//     console.log("test");
//     break;
//   case 'test':
//     console.log('test');
//     break;
//   case "qwerty":
//     console.log("qwerty");
//     break;
//   case true:
//     console.log(true);
//     break;
// }

//***3**----------------
// Якщо змінна більше 10 -  відніміть 5, 
//менше - додайте 5, результат виведіть в консоль 
//Перевірте це на варіантах  1, 10, 13. 

// let a = 1;
// let b = 10;
// let c = 13;

// console.log(a > 10 ? a + 5 : a - 5);
// console.log(b > 10 ? b + 5 : b - 5);
// console.log(c > 10 ? c + 5 : c - 5);

//***4**-----------------
//Зробіть сервіс який отримує число від 1 до 12 
// виведіть місяць який дорівнює числу 

// const month = {
//   1: "J",
//   2: "F",
//   3: "M",
// };

// const m = prompt("Enter");

// console.log(month[m]);

//***5**-------------------- 
// Зробіть сервіс який отримує тризначне число 
// Поверніть користувачу сумму цих чисел

// const num = prompt('Enter a number of 3 symbols');
// if (num.length < 3) {
//   alert("Please enter a correct 3-digit number.");
// } else {
//   const result = Number(num[0]) + Number(num[1]) + Number(num[2]);
//   alert(`The sum of the digits in ${num} is: ${result}`);
// };

//!! Варіанти запису (Маша):
// +'11' === Number('11');
// String(11) === `${11}` === 11 + '';

//№2 Рішення, з Машею:
// const input = prompt('Enter number of 3 symbols');
// const a = Number(input.charAt(0));
// const b = +input.charAt(1);
// const c = +input.charAt(2);
// console.log(a + b + c);

//______________________________________________________________

//Урок №3

//***1** -- 
// У вас є масив об’єктів fruts, і в кожному з них є name 
// Напишіть код, який перетворює їх в масив імен. 
// const fruts = [ //   { id: 0, name: "Apple" }, 
//   { id: 1, name: "Tomat" }, 
//   { id: 2, name: "Cherry" }, 
//   { id: 3, name: "Orange" }, 
// ]; 

// const names = fruts.map(frut => frut.name);
// console.log(names);

//  *** 2 ** 
//Виведіть парні числа від 2 до 10, використовуючи цикл for. 

for (let a = 2; a <= 10; a++) {
  if (a % 2) continue;
  console.log(a);
}

//  *** 3 ** 
//Замініть цикл "for" на "while" 
// for (let i = 0; i < 5; i++) { 
//     console.log( `цифра ${i}!` ); 
//   } 

// let i = 0;
// while (i < 5) {
//   console.log(`цифра ${i}!`);
//   i++;
// }
//  *** 4 ** 
//Напишіть цикл, який пропонує prompt ввести число більше за 100. 
//Якщо відвідувач введе менше число – попросити ввести ще раз, і так далі. 
//Цикл повинен запитувати число доти, доки відвідувач не введе число, 
// більше за 100, або не скасує ввід/введе порожній рядок. 

// let number;

// while (true) {
//   number = prompt('Enter a number greater than 100');

//   if (number === null) {
//     alert("Ви скасували введення.");
//     break;
//   }

//   if (isNaN(number)) {
//     alert('You entered not number. Try again.');
//     continue;
//   }

//   if (+number > 100) {
//     alert('You entered a number greater than 100: ' + number);
//     break;
//   } else {
//       alert('You entered a number that is less than or equal to 100. Please try again.')
//     }
// }

  

//  *** 5 ** 
// Вирахуйте середній вік 
// const girls = [ 
//   { age: 23, name: "Оля" }, 
//   { age: 29, name: "Аня" }, 
//   { age: 10, name: "Юля" },
//   { age: 20, name: "Катя" }, 
// ];
// const


280 800 60 ---20 180