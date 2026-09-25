// Вивести result в консоль. Перевірити тип змінної result= 5+5+’5’.

const result = 5 + 5 + "5";

console.log(result);
console.log(typeof(result));


// Створіть змінну email з вашою електронною адресою. Напишіть скрипт, який перевіряє чи містить змінна email символ @ і рахує загальну 
// кількість символів. Результат виведіть в консоль.

const email = "vikamajorenko@169gmail.com"

console.log(email.includes("@"));
console.log(email.length);


// Записати в окремих змінних кожне слово: My, name, is. Поєднати всі слова в змінну fullName. До змінної fullName додати ‘Viktor’. 
// fullName вивести в консоль.


const text1 = "My"
const text2 = "name"
const text3 = "is"

const fullName = text1 + " " + text2 + " " + text3 + "Viktor"

console.log(fullName);


// Створіть змінну userName з ім’ям користувача і змінну payment з сумою до оплати.
//  За допомогою шаблонного рядка виведіть на екран через alert повідомлення на прикладі цього: 
//  «Дякуємо, Олександро! До сплати 300 гривень»


const userName = "wika";
const payment = 100;

alert(`Дякуємо, ${userName} ! До сплати ${payment} гривень`) 



























