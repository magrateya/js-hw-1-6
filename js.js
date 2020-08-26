// #1
// const name = '«Генератор защитного поля»'; // Write code in this line
// let price = 1000; // Write code in this line
// const firstMessage = `Выбран ${name}, цена за штуку ${price} кредитов`; // Write code in this line
// price = 2000;
// const secondMessage = `Выбран ${name}, цена за штуку ${price} кредитов`; // Write code in this line
// console.log(firstMessage);
// console.log(firstMessage);
// 'Выбран «Генератор защитного поля», цена за штуку 1000 кредитов'
// console.log(secondMessage);
// console.log(secondMessage);
// 'Выбран «Генератор защитного поля», цена за штуку 2000 кредитов'

// #2
// let invoice = 150;
// const stock = 100;

// const message =
//   invoice > stock
//     ? 'На складе недостаточно товаров!'
//     : 'Заказ оформлен, с вами свяжется менеджер';

// console.log(message);

// #3
// const userPassword = 'jqueryismyjam';
// const ADMIN_PASSWORD = 'jqueryismyjam';
// const CANCELED_BY_USER = 'Отменено пользователем!';
// const ACCESS_IS_ALLOWED = 'Добро пожаловать!';
// const ACCESS_DENIED = 'Доступ запрещен, неверный пароль!';
// let message;

// if (userPassword === ADMIN_PASSWORD) {
//   message = ACCESS_IS_ALLOWED;
// } else if (userPassword === null) {
//   message = CANCELED_BY_USER;
// } else {
//   message = ACCESS_DENIED;
// }
// console.log(message);

// #4
// const orderPieces = 4;

// const credits = 23580;
// const pricePerDroid = 3000;
// const CANCELED_BY_USER = 'Отменено пользователем!';
// const ACCESS_DENIED = 'Недостаточно средств на счету!';

// let totalPrice = pricePerDroid * orderPieces; // Write code in this line
// let balanceСredit = credits - totalPrice; // Write code in this line
// let message;

// if (orderPieces === null) {
//   message = 'Отменено пользователем!';
// } else if (balanceСredit > 0) {
//   message = `Вы купили ${orderPieces} дроидов, на счету осталось ${balanceСredit} кредитов`;
// } else {
//   message = 'Недостаточно средств на счету!';
// }
// console.log(message);

// #5
// const countryName = 'КитаЙ';
// const CANCELED_BY_USER = 'Отменено пользователем!';
// const NO_DELIVERY = 'В выбранную страну доставка недоступна.';
// const CHINA = 'Китай';
// const AUSTRALIA = 'Австралия';
// const INDIA = 'Индия';
// const JAMAICA = 'Ямайка';
// let message;
// let price = 0;
// let country;
// if (countryName === null) {
//   message = CANCELED_BY_USER;
// } else {
//   country = countryName[0].toUpperCase() + countryName.slice(1).toLowerCase(); // Write code on this line
//   switch (country) {
//     // Write code under this line
//     case 'Китай':
//       price = 100;
//       break;
//     case 'Австралия':
//       price = 170;
//       break;
//     case 'Индия':
//       price = 80;
//       break;
//     case 'Ямайка':
//       price = 120;
//       break;
//     default:
//       message = 'В выбранную страну доставка недоступна.';
//   }
// }
// if (price > 0) {
//   // Write code on this line
//   message = `Доставка в ${country} будет стоить ${price} кредитов`;
// }
// console.log(message);

// MODUL #2
// 2-1
// Напиши функцию getItemsString(array), которая получает массив и возвращает строку, полученную из объединения(конкатенации) строк в формате ${ номер элемента } - ${ значение элемента } \n, где \n - спецсимвол переноса.
// Нумерация должна начинаться с 1. К примеру для первого элемента массива['Mango', 'Poly', 'Ajax'] с индексом 0 будет выведено '1 - Mango', а для индекса 2 выведет '3 - Ajax'.
// Используйте вспомогательную переменную result для добавления(конкатенации) строк внутри цикла for

// const getItemsString = function (array) {
//   // Write code under this line
//   let result = '';
//   for (let i = 0; i < array.length; i += 1) {
//     result += `${i + 1} - ${array[i]}\n`;
//   }
//   return result;
// };

// console.log(getItemsString(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']));

// 2-2
// Напиши скрипт подсчета стоимости гравировки украшений.Для этого создай функцию calculateEngravingPrice(message = "", pricePerWord = 0) принимающую строку(в строке будут только слова и пробелы) и цену гравировки одного слова, и возвращающую цену гравировки всех слов в строке.

// Для решения этой задачи не используйте циклы.Т.е.никаких for, while, do while, for of, for in, forEach или функциональных методов.
// const calculateEngravingPrice = (message = '', pricePerWord = 0) =>
//   pricePerWord * message.split(' ').length;
// console.log(
//   calculateEngravingPrice(
//     'Proin sociis natoque et magnis parturient montes mus',
//     10,
//   ),
// ); // 80

// 2-3
// Напиши функцию findLongestWord(string = ""), которая принимает параметром произвольную строку(в строке будут только слова и пробелы)
// и возвращает самое длинное слово в этой строке.

// function findLongestWord(string = "") {
//
//     const array = string.split(' ');
//     let longest = array[0];
//     for (const long of array) {
//         if (long.length > longest.length) {
//             longest = long;
//         }

//     }
//     return longest;
// }
// console.log(findLongestWord('May the force be with you'));

// 2-4
// Напиши функцию formatString(string, maxLength = 40) которая принимает строку и форматирует ее если необходимо.

// Если длина строки не превышает maxLength, функция возвращает ее в исходном виде.
// Если длина больше maxLength, то функция обрезает строку до размера maxLength символов и
// добавляет в конец строки троеточие ..., после чего возвращает укороченную версию.
// function formatString(string, maxLength = 40) {
//   if (string.length > maxLength) {
//     const tip = '...';
//     return string.slice(0, maxLength) + tip;
//   } else {
//     return string;
//   }
// }
// console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));

// function formatString(string, maxLength = 40) {
//   let message = ``;

//   if (string.length < maxLength) {
//     message = string;
//   } else {
//     message = string.slice(0, maxLength) + '...';
//   }
//   return message;
// }

// 2-5
// Функция предикат
// Функция предикат возвращает true или false

// Напиши функцию checkForSpam(message), принимающую 1 параметр message - строку.Функция проверяет ее на содержание слов spam и sale.
// Если нашли запрещенное слово то функция возвращает true,
// если запрещенных слов нет функция возвращает false.Слова в строке могут быть в произвольном регистре.
// function checkForSpam(str) {
//   let message = str.toLowerCase();
//   if (message.includes('spam') || message.includes('sale')) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(checkForSpam('Latest sale technology news'));

// 2-6
// Создание нового массива на основе преобразования данных из старого массива
// Напиши функцию mapArray(array), принимающую 1 параметр array - массив чисел.
// Функция создает новый массив numbers размером в длину массива array и заполняет его числами из массива array умноженными на 10.
// Для перебора массива и добавления новых значений используй цикл for.По завершению перебора массива array возвращается массив numbers.
// function mapArray(array) {
//   const numbers = new Array();
//   for (let i = 0; i < array.length; i += 1) {
//     array[i] *= 10;
//     // numbers.splice(2, 0, array[i]); або
//     numbers.push(array[i]);
//   }
//   return numbers;
// }
// function mapArray(array) {
//   const numbers = new Array(array.length);
//   for (let i = 0; i < array.length; i += 1) {
//     // Write code under this line
//     numbers[i] = array[i] * 10;
//   }
//   return numbers;
// }
// console.log(mapArray([-2, 0, 2]));
// console.log(mapArray([-2.5, 0, 2.5]));

// 2-7
// Создание нового массива на основе отбора из исходного массива
// Напиши функцию filterArray(array), принимающую 1 параметр array - массив.
// Функция проверяет каждое значение массива - является ли значение конечным числом(Number.isFinite).Для проверки используй цикл for.
// Числа добавляются в новый массив numbers с помощью метода push, а не числа - игнорируются.
// По завершению проверки массива array возвращается массив numbers.
// function filterArray(array) {
//   const numbers = [];
//   for (let i = 0; i < array.length; i += 1) {
//     // Write code under this line
//     if (Number.isFinite(array[i])) {
//       numbers.push(array[i]);
//     }
//   }
//   return numbers;
// }
// console.log(filterArray([-2, 0, 2]));

// 2-8
// Напиши функцию reduceArray(array), которая принимает числовой массив array.
// Если массив array не пустой, необходимо посчитать сумму всех элементов массива, используя цикл for.
// Для подсчета суммы используй переменную total.
// Функция должна возвращать 0 если массив пустой и значение total в противном случае.
// function reduceArray(array) {
//   let total = 0;
//   // Write code under this line
//   if (array.length > 0) {
//     for (const number of array) {
//       total += number;
//     }
//   }
//   return total;
// }
// console.log(reduceArray([1, 2, 3]));

// 2-9
// Есть массив logins с логинами пользователей.Напиши скрипт добавления логина в массив logins.Добавляемый логин должен:

// проходить проверку на длину от 4 до 16 - ти символов включительно
// быть уникален, то есть отсутствовать в массиве logins
// Разбей задачу на подзадачи с помощью функций.
// Проверку на отсутствие аргументов или на правильный тип аргументов делать не нужно.

// Напиши функцию isLoginValid(login), в которой проверь количество символов параметра login и верни true или false в зависимости от того,
//   попадает ли длина параметра в заданный диапазон от 4 - х до 16 - ти символов включительно.

// Напиши функцию isLoginUnique(allLogins, login), которая принимает список всех логинов и добавляемый логин как параметры и проверяет
// наличие login в массиве allLogins, возвращая true если такого логина еще нет и false если логин уже используется.

// Напиши функцию addLogin(allLogins, login) которая:

// Принимает новый логин и массив всех логинов как параметры
// Проверяет валидность логина используя вспомогательную функцию isLoginValid
// Если логин не валиден, прекратить исполнение функции addLogin и вернуть строку 'Ошибка! Логин должен быть от 4 до 16 символов'
// Если логин валиден, функция addLogin проверяет уникальность логина с помощью функции isLoginUnique
// Если isLoginUnique вернет false, тогда addLogin не добавляет логин в массив и возвращает строку 'Такой логин уже используется!'
// Если isLoginUnique вернет true, addLogin добавляет новый логин в logins и возвращает строку 'Логин успешно добавлен!'
// 🔔 Принцип единственной ответственности функции - каждая функция делает что - то одно.Это позволяет переиспользовать код и изменять
// логику работы функции только в одном месте, не затрагивая работу программы в целом.

// Предикатные функции возвращают только true или false.Такие функции принято называть начиная с is: isLoginUnique и isLoginValid в нашем
// случае.

// isLoginUnique только проверяет есть ли такой логин в массиве и возвращает true или false.
// isLoginValid только проверяет валидный ли логин и возвращает true или false.
// addLogin добавляет или не добавляет логин в массив.При этом для проверок условия добавления использует результаты вызовов других
// функций - isLoginUnique и isLoginValid.

// function isLoginValid(login, min = 4, max = 16) {

//   if (login.length >= min && login.length <= max) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function isLoginUnique(allLogins, login) {

//   if (allLogins.includes(login)) {
//     return false;
//   } else {
//     return true;
//   }
// }

// function addLogin(allLogins, login) {
//   const SUCCESS = 'Логин успешно добавлен!';
//   const REFUSAL = 'Такой логин уже используется!';
//   const ERROR = 'Ошибка! Логин должен быть размером от 4 до 16 символов';
//   let message;

//   if (!isLoginUnique(allLogins, login)) {
//     message = ERROR;
//   } else if (!isLoginValid(login)) {
//     message = REFUSAL;
//   } else {
//     allLogins.push(login);
//     message = SUCCESS;
//   }
//   return message;
// }

// const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

// console.log(addLogin(logins, 'Ajax'));

// function isLoginValid(login, min = 4, max = 16) {
//   // Write code under this line
//   const loginLength = login.length;
//   return loginLength >= min && loginLength <= max ? true : false;
// }
// function isLoginUnique(allLogins, login) {
//   // Write code under this line
//   return allLogins.includes(login) ? false : true;
// }
// function addLogin(allLogins, login) {
//   const SUCCESS = 'Логин успешно добавлен!';
//   const REFUSAL = 'Такой логин уже используется!';
//   const ERROR = 'Ошибка! Логин должен быть размером от 4 до 16 символов';
//   let message;
//   // Write code under this line
//   if (isLoginValid(login) === true) {
//     if (isLoginUnique(allLogins, login) === true) {
//       allLogins.push(login);
//       return SUCCESS;
//     } else return REFUSAL;
//   } else return ERROR;
// }
// const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];
// console.log(addLogin(logins, 'Ajax'));
// console.log(logins);

// додаткові задачі

// Создайте переменную num и присвойте ей значение '12345'.Найдите произведение(умножение) цифр этого числа.
// const num = '12345';
// const numArray = num.split('').map(Number);
// console.log(numArray);

// let total = 0;

// for (const number of numArray) {
//   total += number;
// }
// console.log(total);

// const sum = function (numArray) {
//   let total = 0;
//   for (const number of numArray) {
//     total += number;
//   }
//   return total;
// };

// const sum2 = sum(numArray);
// console.log(sum2);
// або
// console.log(sum(numArray));

// додати до кожного елемента значення першого і зсумувати
// const add = function (value, ...args) {
//   console.log(value); // первый аргумент
//   console.log(args); // массив всех остальных аргументов
//   let total = 0;

//   for (const arg of args) {
//     total += value + arg;
//   }
//   return total;
// };

// console.log(add(10, 1, 2, 3));
// add(15, 1, 2, 3, 4, 5);

// сортування від меншого до більшого!!!!!!!!
// let arrSort = [30, 5, 4, 3, 57, 45, 1, 2];
// let min;
// for (let i = 0; i < arrSort.length; i++) {
//   min = arrSort[i];
//   for (let j = i + 1; j < arrSort.length; j++) {
//     if (arrSort[j] >= min) {
//       continue;
//     }
//     arrSort[i] = arrSort[j];
//     arrSort[j] = min;
//     min = arrSort[i];
//   }
// }
// console.log(arrSort);

// МОДУЛЬ 3-1
// Напиши скрипт, который, для объекта user, последовательно:

// добавляет поле 'mood' со значением 'happy'
// добавляет поле 'full time' со значением true
// заменяет значение 'hobby' на 'skydiving'
// заменяет значение 'premium' на false
// в переменную message записывает содержимое объекта user:
// для переменной keys присваивает массив свойств объекта, используя метод Object.keys()
// с помощью оператора for...of
// в формате ключ: значение
// c переносом строки('\n')
// let message = '';
// const user = {
//   age: 20,
//   hobby: 'html',
//   name: 'Mango',
//   premium: true,
// };

// for (const key in user) {
//   user.mood = 'happy';
//   user['full time'] = true;
//   user.hobby = 'skydiving';
//   user.premium = false;
// }

// const keys = Object.keys(user);
// for (const key of keys) {
//   message += `${key}: ${user[key]}\n`;
// }
// console.log(message);

// або

// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
//   getString() {
//     for (let key of Object.keys(this)) {
//       if (key !== 'getString') {
//         console.log(`${key}: ${this[key]}`);
//       }
//     }
//   },
// };
// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;
// user.getString();

// 3-2
// Напиши функцию countProps(obj), считающую кол - во свойств в объекте.Функция возвращает число - количество свойств.
// const countProps = function (obj) {
// const propertys = Object.keys(obj);
// return propertys.length;
// };
// console.log(countProps({ name: 'Mango', age: 2 }));

// 3-3
// Напиши функцию findBestEmployee(employees), которая принимает объект сотрудников и возвращает имя самого
// продуктивного(который выполнил больше всех задач).
// Сотрудники и кол - во выполненных задач содержатся как свойства объекта в формате "имя": "кол-во задач".

// const findBestEmployee = function (employees) {
//   const max = Math.max(...Object.values(employees));

//   for (const key in employees) {
//     if (employees[key] === max) {
//       return key;
//     }
//   }
//   return '';
// };
// const developers = {
//   ann: 20,
//   ban: 2,
// };
// console.log(findBestEmployee(developers));

// 3-4
// Напиши функцию countTotalSalary(employees) принимающую объект зарплат.
// Функция считает общую сумму зарплаты работников и возвращает ее.
// Каждое поле объекта, передаваемого в функцию, имеет вид "имя": "зарплата".

// const countTotalSalary = function (employees) {
//   const salaryValues = Object.values(employees);
//   let total = 0;
//   for (const val of salaryValues) {
//     total += val;
//   }
//   return total;
// };

// // Объекты и ожидаемый результат
// const developers = {
//   mango: 300,
//   poly: 250,
//   alfred: 450,
// };

//  3-5
// Напиши функцию getAllPropValues(arr, prop),
// которая получает массив объектов и имя свойства.
// Функция возвращает массив значений определенного свойства prop
// из каждого объекта в массиве.
// Используй метод push для добавления значения в массив и
// оператор in для проверки наличия свойства в объекте.

// function getAllPropValues(array, prop) {
//   const result = [];
//   for (const keys of array) {
//     console.log(keys);
//     for (const key in keys) {
//       if (key === prop) {
//         result.push(keys[prop]);
//       }
//     }
//     // або
//     //   if (prop in keys) {
//     //     result.push(keys[prop]);
//     //   }
//   }
//   return result;
// }

// // Объекты и ожидаемый результат
// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Радар', price: 1280, quantity: 2 },
//   { name: 'Радар', price: 1320, quantity: 1 },
//   { name: 'Сканер', price: 2700, quantity: 1 },
//   { name: 'Сканер', price: 2500, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 2 },
// ];
// console.log(getAllPropValues(products, 'name'));
// ['Радар', 'Радар', 'Радар', 'Сканер', 'Сканер', 'Дроид', 'Захват'];

// 3-6
// Напиши функцию calculateTotalPrice(allProdcuts, productName),
// которая получает массив объектов и имя продукта(значение свойства name).
// Возвращает общую стоимость продукта(цена умноженная на количество).

// function calculateTotalPrice(array, prop) {
//   let sum = [];
//   for (const product of products) {

//     if (product.name === prop) {
//       let total = product.price * product.quantity;
//       sum.push(total);
//     }
//   }
//   let totalSum = 0;
//   for (const s of sum) {
//     totalSum += s;
//   }

//   return totalSum;

// або
// let totalPrice = 0;

// for (const item of array) {
//     if (item.name === prop) {
//         totalPrice += item.price * item.quantity;
//     }
// }
// }

// // Объекты и ожидаемый результат
// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Радар', price: 1280, quantity: 2 },
//   { name: 'Радар', price: 1320, quantity: 1 },
//   { name: 'Сканер', price: 2700, quantity: 1 },
//   { name: 'Сканер', price: 2500, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 2 },
// ];
// console.log(calculateTotalPrice(products, 'Радар'));

/*
 * Работем с коллекцией товаров в корзине:
 * - getItems()
 * - add(product)
 * - remove(productName)
 * - clear()
 * - countTotalPrice()
 * - increaseQuantity(productName)
 * - decreaseQuantity(productName)
 *
 * { name: '🍎', price: 50 }
 * { name: '🍇', price: 70 }
 * { name: '🍋', price: 60 }
 * { name: '🍓', price: 110 }
 */

// const cart = {
//   items: [],
//   getItems() {
//     return this.items;
//   },
//   add(product) {
//     for (const item of this.items) {
//       if (item.name === product.name) {
//         item.quantity += 1;
//         return;
//       }
//     }
//     const newProduct = {
//       ...product,
//       quantity: 1,
//     };

//     this.items.push(newProduct);
//   },
//   remove(productName) {
//     const { items } = this;
//     for (let i = 0; i < items.length; i += 1) {
//       const { name } = items[i];
//       if (name === productName) {
//         items.splice(i, 1);
//       }
//     }
//   },
//   clear() {
//     this.items = [];
//   },
//   countTotalPrice() {
//     const { items } = this;
//     let total = 0;
//     for (const { price, quantity } of items) {
//       total += price * quantity;
//     }
//     return total;
//   },
//   increaseQuantity(productName) {
//     for (const item of this.items) {
//       if (item.name === productName) {
//         item.quantity += 1;
//         return;
//       }
//     }
//   },
//   decreaseQuantity(productName) {
//     // for (const item of this.items) {
//     //   if (item.name === productName) {
//     //     item.quantity -= 1;
//     //     return;
//     //   }
//     // }

//     //   або

//     const { items } = this;
//     for (let i = 0; i < items.length; i += 1) {
//       if (items[i].name === productName) {
//         items[i].quantity -= 1;
//         if (items[i].quantity === 0) {
//           items.splice(i, 1);
//         }
//         return;
//       }
//     }
//   },
// };

// console.log(cart.getItems());

// cart.add({ name: '🍎', price: 50 });
// cart.add({ name: '🍇', price: 60 });
// cart.add({ name: '🍋', price: 60 });
// cart.add({ name: '🍋', price: 60 });
// cart.add({ name: '🍓', price: 110 });
// cart.add({ name: '🍓', price: 110 });
// cart.add({ name: '🍓', price: 110 });

// console.table(cart.getItems());

// console.log('Total: ', cart.countTotalPrice());

// cart.remove('🍓');
// console.table(cart.getItems());

// // cart.clear();
// // console.log(cart.getItems());

// console.log('Total: ', cart.countTotalPrice());

// cart.increaseQuantity('🍎');
// console.table(cart.getItems());
// console.log('Total: ', cart.countTotalPrice());

// cart.decreaseQuantity('🍋');
// cart.decreaseQuantity('🍋');
// console.table(cart.getItems());
// console.log('Total: ', cart.countTotalPrice());

// 4-1 МОДУЛЬ
// Функция mapArray(array, cb), принимает 1 - м параметром array - массив чисел,
// а вторым параметром cb - функцию обратного вызова(callback).Функция mapArray
// создает новый массив numbers и заполняет его числами из массива array преобразованными функцией cb.
// Оформи создание массива numbers нужной длины используя new Array() и необходимый аргумент для задания длины,
//     равной длине array.
// Напиши функцию обратного вызова addIndex, которая принимает два параметра - element и index и возвращает число
// - сумму element и index(сложение).
// Напиши функцию обратного вызова subIndex, которая принимает два параметра - element и index и возвращает число
// - разность element и index(вычитание).

// Write code under this line
// const addIndex = (element, index) => element + index;
// const subIndex = (element, index) => element - index;

// function mapArray(array, cb) {
//   const numbers = new Array(array.length);
//   for (let i = 0; i < array.length; i += 1) {
//     const element = array[i];
//     const index = i;
//     numbers[i] = cb(element, index);
//   }
//   return numbers;
// }

// const arr = [1, 2, 3, 4, 5];

// console.log(mapArray(arr, addIndex));
// [1, 3, 5, 7, 9];

// 4-2
// Callback функция и метод push
// Функция isUniq принимает три параметра - element, index и arr.Функция возвращает true или false в зависимости от того
// встречается ли элемент первый раз в массиве(true) или этот элемент в массиве уже встречался(false).

// Функция isEven принимает один параметр - element.Функция возвращает true или false в зависимости от того является ли элемент
// четным числом или нет.

// Функция filterArray(array, cb), принимает 1 - м параметром array - массив чисел, а вторым параметром cb - функцию
// обратного вызова(callback).Дополни тело функции так, чтобы функция filterArray заполняла новый пустой массив numbers только
// теми элементами из массива array, для которых вызов функции cb вернет true.

// const isUniq = (element, index, arr) => arr.indexOf(element) === index;
// const isEven = element => element % 2 === 0;

// function filterArray(array, cb) {
//   'use strict';
//   const numbers = [];
//   for (let i = 0; i < array.length; i += 1) {
//     const element = array[i];
//     const index = i;
//     // Write code under this line
//     if (cb(element, index, array)) {
//       numbers.push(element);
//     }
//   }
//   return numbers;
// }

// const arr = [1, 2, 3, 4, 5, 1, 2, 5];
// const arr = [1, 1, 2];

// console.log(filterArray(arr, isUniq));
// [1, 2, 3, 4, 5]
// console.log(filterArray(arr, isEven));
// [2, 4, 2]

// 4-3
// Callback функция для получения одного вычисляемого значения массива
// Функции add, sub и mult принимают два параметра - accum и element, возвращает число - сумму, разность или произведение параметров.

// Дополни тело функции reduceArray строкой присвоения accum вызова функции cb.
// Функция reduceArray должна будет подсчитать сумму или разность или
// произведение всех элементов массива в зависимости от того какая именно из трех функция(add, mult, sub) будет передана в качестве cb.

// const add = (accum, element) => accum + element;
// const mult = (accum, element) => accum * element;
// const sub = (accum, element) => accum - element;

// function reduceArray(array, cb, initial) {
//   'use strict';
//   let i;
//   let accum;
//   if (arguments.length >= 3) {
//     accum = initial;
//     i = 0;
//   }
//   if (arguments.length === 2) {
//     accum = array[0];
//     i = 1;
//   }
//   for (i; i < array.length; i += 1) {
//     const element = array[i];
//     accum = cb(accum, element);
//   }
//   return accum;
// }

// const arr = [1, 2, 3, 4, 5];

// console.log(reduceArray(arr, add)); // 15
// console.log(reduceArray(arr, add, 10)); // 25

// console.log(reduceArray(arr, mult)); // 120
// console.log(reduceArray(arr, mult, 10)); // 1200

// console.log(reduceArray(arr, sub)); // -13
//console.log(reduceArray(arr, sub, 10)); // -5

// 4-5
// bind для замены this в методах объекта
// Оформи вызов метода invokeInventoryAction таким образом, чтобы в качестве this для методов

// inventory.add
// inventory.remove выступал объект inventory

// const inventory = {
//   items: ['Knife', 'Gas mask'],
//   add(itemName) {
//     this.items.push(itemName);
//     return `Adding ${itemName} to inventory`;
//   },
//   remove(itemName) {
//     this.items = this.items.filter(item => item !== itemName);
//     return `Removing ${itemName} from inventory`;
//   },
// };

// const invokeInventoryAction = function (itemName, action) {
//   const act = action(itemName);
//   const msg = `Invoking action on ${itemName}`;
//   return { act, msg };
// };

// const invokeAdd = invokeInventoryAction(
//   'Medkit',
//   inventory.add.bind(inventory), // Write code in this line
// );
// const arrayAdd = [...inventory.items];

// console.log(invokeAdd);
// // { act: 'Adding Medkit to inventory', msg: 'Invoking action on Medkit' }

// console.log(arrayAdd);
// // ['Knife', 'Gas mask', 'Medkit']

// const invokeRemove = invokeInventoryAction(
//   'Gas mask',
//   inventory.remove.bind(inventory), // Write code in this line
// );

// const arrayRemove = [...inventory.items];

//console.log(invokeRemove);
//{ act: 'Removing Gas mask from inventory', msg: 'Invoking action on Gas mask' }

//console.log(arrayRemove);
// ['Knife', 'Medkit']

// function findEvenIndex(arr) {
//   for (let i = 0; i < arr.length; i += 1) {
//     let leftSum = 0;
//     let rigthSum = 0;
//     let left = arr.slice(0, i);

//     for (let j = 0; j < left.length; j += 1) {
//       leftSum += left[j];
//     }
//     let rigth = arr.slice(i + 1);

//     for (let j = 0; j < rigth.length; j += 1) {
//       rigthSum += rigth[j];
//     }
//     if (leftSum === rigthSum) {
//       return i;
//     }
//   }

//   return -1;
// }
// findEvenIndex([1, 2, 3, 4, 3, 2, 1]);
// findEvenIndex([1, 100, 50, -51, 1, 1]);
// findEvenIndex([1, 2, 3, 4, 5, 6]);

// MODUL 5
// 5-1
// function-constructor
// Напиши функцию - конструктор Account, которая создает объект со свойствами login и email.
// В prototype функции - конструктора добавь метод getInfo(), который возвращает строку со
// значениями свойств login и email объекта.

// const Account = function (login, email) {
//   this.login = login;
//   this.email = email;
// };
// Account.prototype.getInfo = function () {
//   //   console.log(`login : ${this.login}, email: ${this.email}`);
//   return `login : ${this.login}, email: ${this.email}`;
// };
// console.log(typeof Account.prototype.getInfo);
// const mango = new Account('Mangozedog', 'mango@dog.woof');
// console.log(mango.getInfo());

// Задача 5 - 2
// class
// Напиши класс User для создания пользователя со следующим свойствами:
// name - строка
// age - число
// followers - число
// Добавь метод getInfo(), который, выводит строку: User ${ имя } is ${ возраст } years old and has ${ кол - во фоловеров } followers

// class User {
//   constructor(name, age, followers) {
//     this.name = name;
//     this.age = age;
//     this.followers = followers;
//   }
//   getInfo() {
//     return `User ${this.name} is ${this.age} years old and has ${this.followers} followers`;
//   }
// }
// console.log(typeof User);
// 'function'

// const mango = new User('Mango', 2, 20);
// console.log(mango.getInfo());
// 'User Mango is 2 years old and has 20 followers'

// Задача 5 - 3
// использование методов класса
// Напиши класс Storage, который будет создавать объекты для управления складом товаров.
// При вызове будет получать один аргумент - начальный массив товаров, и записывать его в свойство items.

// Добавь методы класса:

// getItems() - возвращает массив текущих товаров
// addItem(item) - получает новый товар и добавляет его к текущим
// removeItem(item) - получает товар и, если он есть, удаляет его из текущих

// class Storage {
//   constructor(items = []) {
//     this.items = items;
//   }
//   getItems() {
//     return this.items;
//   }
//   addItem(item) {
//     return this.items.push(item);
//   }
//   removeItem(item) {
//     return (this.items = this.items.filter(itemName => itemName !== item));
//   }
// або
// removeItem(item){
// const { items } = this;

// for (let i = 0; i < items.length; i += 1) {

//     if (item === items[i]) {
//         return items.splice(i, 1);
//     }
// }
// }

// }
// const goods = ['Нанитоиды', 'Пролонгер', 'Железные жупи', 'Антигравитатор'];
// const storage = new Storage(goods);

// console.log(storage.getItems());

//Задача 5-4
// переиспользование методов класса
// Напиши класс StringBuilder.На вход он получает один параметр - строку, которую записывает в свойство _value.

// Добавь классу следующий функционал:

// Геттер value - возвращает текущее значение поля _value
// Метод append(str) - получает параметр str(строку) и добавляет ее в конец _value
// Метод prepend(str) - получает параметр str(строку) и добавляет ее в начало value
// Метод pad(str) - получает параметр str(строку) и добавляет ее в начало и в конец _value
// Метод pad должен использовать методы append и prepend

// class StringBuilder {
//   constructor(string = '') {
//     this._value = string;
//   }

//   get value() {
//     return this._value;
//   }

//   append(str) {
//     this._value += str;
//   }

//   prepend(str) {
//     this._value = str + this._value;
//   }

//   //   pad(str) {
//   //     return str + this.append(str) + this.prepend(str) + str;
//   //   }

// !!!!!!!!!!!!!!!!!!!!!!!!або!!!!!!!!!
//   pad(str) {
//     this.append(str);
//     this.prepend(str);
//   }
// }

// const builder = new StringBuilder('.');

// builder.append('^');
// console.log(builder.value); // '.^'
// builder.prepend('^');
// console.log(builder.value);
// builder.pad('=');
// console.log(builder.value); // '=^.^='

// Задача 5 - 5
// класс
// Напиши класс Car с указанными свойствами и методами.

// class Car {
//     /*
//      * Добавь `статический` метод
//      * `getSpecs(car)`, который принимает
//      * объект-машину как параметр
//      * и возвращает шаблонную строку
//      * со свойствами и значениями объекта.
//      * Свойства:
//      *   maxSpeed,
//      *   speed,
//      *   isOn,
//      *   distance,
//      *   price
//      * Пример строки, полученной этим методом:
//      * 'maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000'
//      */

//     /*
//      * Конструктор получает объект настроек.
//      *
//      * Добавь свойства будущеего экземпляра класса:
//      *  speed - текущая скорость,
//      *          начальное значение `0`
//      *  price - цена автомобиля
//      *  maxSpeed - максимальная скорость
//      *  isOn - заведен ли автомобиль.
//      *         Значения `true` или `false`,
//      *         начальное значение false
//      *  distance - пробег в километрах,
//      *             начальное значение `0`
//      */
//     constructor() { }

//     /*
//      * Добавь геттер и сеттер
//      * для свойства `price`, который будет
//      * работать с свойством цены автомобиля.
//      *
//      * ВАЖНО: для записи методов get и set
//      * значение параметра записывают с
//      * подчеркиванием. См. ниже пример 1.
//      */

//     /*
//      * Метод, который заводит автомобиль
//      * Записывает в свойство `isOn` значение `true`
//      */
//     turnOn() { }

//     /*
//      * Метод, чтобы заглушить автомобиль
//      * Этот метод должен записывать
//      * в свойство isOn значение false,
//      * и сбрасывать текущую скорость до 0
//      */
//     turnOff() { }

//     /*
//      * Этот метод должен добавлять
//      * к свойству `speed` полученное
//      * значение, при условии,
//      * что результирующая скорость
//      * не больше чем значение свойства `maxSpeed`
//      */
//     accelerate(value) { }

//     /*
//      * Этот метод должен отнимать
//      * от свойства `speed`
//      * полученное значение, при условии,
//      * что результирующая скорость не меньше 0
//      */

//     decelerate(value) { }

//     /*
//      * Этот метод должен добавлять к свойству
//      * `distance` пробег в километрах,
//      * т.е. hours * speed,
//      * но только в том случае,
//      * если машина заведена!
//      */
//     drive(hours) { }
// }

// #### Пример 1.

//     ```js
// class Guest {
//   // Собственные свойства класса размещаем в конструкторе
//   constructor(name, roomNumber) {
//     /* параметр name не должен
//      *   совпадать с названием свойства
//      *   но должен быть похож.
//      *   Поэтому используют прием смены
//      *   названия добавляя символ '_'.
//      *   Хотя это может любой другой символ
//      */
//     this._name = name;
//   }

//   // Используем геттеры и сеттеры для описания интерфейса доступа к свойствам
//   get name() {
//     return this._name;
//   }

//   set name(value) {
//     this._name = value;
//   }
// }

// class Car {
//   //   static getSpecs(car) {
//     return `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car._price}`;
//   }

// constructor(({ maxSpeed, speed = 0, isOn = false, distance = 0, price } = {}))
// або

//   constructor(obj, speed = 0, isOn = false, distance = 0) {
//     this.maxSpeed = obj.maxSpeed;
//     this.speed = speed;
//     this.isOn = isOn;
//     this.distance = distance;
//     this._price = obj.price;
//   }

//   get price() {
//     return this._price;
//   }
//   set price(value) {
//     this._price = value;
//   }
//   turnOn() {
//     return (this.isOn = true);

//     //   якщо без return, то в DRIVE буде ! turnOn()
//   }
//   turnOff() {
//     this.isOn = false;
//     this.speed = 0;
//   }
//   accelerate(value) {
//     if (this.speed + value <= this.maxSpeed) {
//       this.speed += value;
//     } else {
//       this.speed = this.maxSpeed;
//     }
//   }
//   decelerate(value) {
//     if (this.speed - value >= 0) {
//       this.speed -= value;
//     } else {
//       this.speed = 0;
//     }
//   }
//   drive(hours) {
//     if (this.turnOn()) {
//       this.distance += hours * this.speed;
//     }
//   }
// }

// const mustang = new Car({ maxSpeed: 200, price: 2000 });
// mustang.turnOn();
// mustang.accelerate(50);
// mustang.drive(2);

// console.log(Car.getSpecs(mustang));
// 'maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000'

// mustang.decelerate(20);
// mustang.drive(1);
// mustang.turnOff();

// console.log(Car.getSpecs(mustang));
// 'maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000'

// console.log(mustang.price);
// mustang.price = 4000;
// console.log(mustang.price);

// Задача 6 - 1
// map
// Получи массив имен всех пользователей(свойство name)
// используя деструктурирующее присваивание для параметра функции({ name }) без пробелов и переносов на новую строку.

// Используй только перебирающие методы массива которые не изменяют(не мутируют) исходный массив.
//     Т.е.нельзя использовать for, splice, push и т.п.мутирующие методы.

// const getUserNames = array => array.map(({ name } = user) => name);

// Задача 6 - 2
// filter
// Получи массив объектов пользователей, отобранный по цвету глаз(свойство eyeColor),
//     используя деструктурирующее присваивание для параметра функции({ eyeColor }) без пробелов и переносов на новую строку.

// Используй только перебирающие методы массива которые не изменяют(не мутируют) исходный массив.
//     Т.е.нельзя использовать for, splice, push и т.п.мутирующие методы.

// const getUsersWithEyeColor = (array, color) => array.filter(({ eyeColor } = user) => eyeColor === color);

// console.log(getUsersWithEyeColor(users, 'blue'));

// Задача 6 - 3
// filter, map
// Получи массив имен пользователей(значение свойства name) по полу(значение свойства gender).

// Используй деструктурирующее присваивание для параметра функции({ name })
// без пробелов и переносов на новую строку.

// Используй только перебирающие методы массива которые не изменяют(не мутируют) исходный массив.
// Т.е.нельзя использовать for, splice, push и т.п.мутирующие методы.

// const getUsersWithGender = (array, gend) =>
//   array
//     .filter(({ gender } = user) => gender === gend)
//     .map(({ name } = user) => name);

// const users = [
//   {
//     name: 'Moore Hensley',
//     gender: 'male',
//   },
//   {
//     name: 'Ross Vazquez',
//     gender: 'female',
//   },
//   {
//     name: 'Carey Barr',
//     gender: 'male',
//   },
//   {
//     name: 'Blackburn Dotson',
//     gender: 'male',
//   },
// ];
// console.log(getUsersWithGender(users, 'male'));

// Задача 6 - 4
// filter и оператор!
// Получи массив только неактивных пользователей(отфильтруй по значению свойства isActive)
// Используй деструктурирующее присваивание для параметра функции({ isActive })
// без пробелов и переносов на новую строку.

// const getInactiveUsers = array => array.filter(({ isActive } = users) => !isActive);

// Задача 6 - 5
// find
// Получи объект пользователя(не массив) по уникальному значению свойства email.

// const getUserWithEmail = (array, mail) => array.find(({ email } = users) => email === mail);
// const getUserWithEmail = (array, mail) => array.find(({ email }) => email === mail);

// Задача 6 - 6
// filter, map и создание анонимных объектов
// Получи массив из объектов, которые состоят только из свойств name и email тех пользователей,
// которые попадают в возрастную категорию от min до max лет(значение свойства age).

// const getUsersWithAge = (array, min, max) => array
//     .filter(({ age }) => age > min && age < max)
//     .map(({ name, email }) => ({ name, email }));

// Задача 6 - 7
// reduce
// Получи общую сумму баланса(сумму значений свойства balance) всех пользователей.

// const calculateTotalBalance = array => array.reduce((acc, { balance }) => acc + balance, 0);

// Задача 6 - 8
// filter, includes и map
// Получи массив имен всех пользователей у которых есть друг с заданным именем.
// Используй деструктурирующее присваивание для параметра функции { friends } и({ name }) без пробелов и переносов на новую строку

// const getUsersWithFriend = (array, friendName) => array.filter(({ friends }) => friends.includes(friendName)).map(({ name }) => name);

// Задача 6 - 9
// sort и map
// Получи массив имен(поле name) людей, отсортированных в зависимости от количества их друзей(поле friends)
// Избегаем мутации исходного массива: т.к.метод sort изменяет(мутирует) исходный массив,
// то следует сделать копию массива и сортировать уже копию, а не исходный массив.

// const getNamesSortedByFriendsCount = (array) => array.slice().sort((a, b) => a.friends.length - b.friends.length).map(({ name }) => name);

// Задача 6 - 10
// reduce, filter, sort
// Получи массив всех умений всех пользователей(поле skills),
// при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.
// const users = [
//   {
//     id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     skills: ['ipsum', 'lorem'],
//     gender: 'male',
//     age: 37,
//   },
//   {
//     id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
//     gender: 'female',
//     age: 34,
//   },
//   {
//     id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
//     gender: 'male',
//     age: 24,
//   },
//   {
//     id: '249b6175-5c30-44c6-b154-f120923736f5',
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     skills: ['adipisicing', 'irure', 'velit'],
//     gender: 'female',
//     age: 21,
//   },
//   {
//     id: '334f8cb3-eb04-45e6-abf4-4935dd439b70',
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     skills: ['ex', 'culpa', 'nostrud'],
//     gender: 'male',
//     age: 27,
//   },
//   {
//     id: '150b00fb-dd82-427d-9faf-2879ea87c695',
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     skills: ['non', 'amet', 'ipsum'],
//     gender: 'male',
//     age: 38,
//   },
//   {
//     id: 'e1bf46ab-7168-491e-925e-f01e21394812',
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     skills: ['lorem', 'veniam', 'culpa'],
//     gender: 'female',
//     age: 39,
//   },
// ];
// const getSortedUniqueSkills = users =>
//   users
//     .reduce((allSkills, { skills } = {}) => {
//       console.log(skills);
//       return allSkills.concat(skills);
//     }, [])
//     .filter((skill, ind, arr) => arr.indexOf(skill) === ind)
//     .sort();

// або
// const getSortedUniqueSkills = users =>
//   users
//     .reduce((allSkills, { skills } = user) => {
//       console.log(skills);
//       allSkills.push(skills);
//       return allSkills.flat();
//     }, [])
//     .filter((skill, ind, arr) => arr.indexOf(skill) === ind)
//     .sort();
// console.log(getSortedUniqueSkills(users));
