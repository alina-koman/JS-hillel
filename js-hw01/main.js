console.log('JS #1. Домашнє завдання. Основи JavaScript: Працюємо зі змінними, типами даних')

/*
 * Завдання #1
 *
 * Створіть змінні із зазначеними іменами та значеннями:
 * - myNum: число (number) зі значенням 10
 * - myStr: рядок (string) зі значенням 'some string'
 * - myBool: булеве значення (boolean) зі значенням true
 * - myArr: масив (array) з елементами [1, 2, 3, 4, 5]
 * - myObj: об'єкт (object) з властивостями first: 'First Name' та last: 'Last Name'
 */


// ім'я змінної: myNum (тип number), значення: 10
// ім'я змінної: myStr (тип string), значення: 'some string'
// ім'я змінної: myBool (тип boolean), значення: true
// ім'я змінної: myArr (тип array), значення: [1, 2, 3, 4, 5]
// ім'я змінної: myObj (тип object), значення: {first: 'First Name', last: 'Last Name'}
var myNum = 10;
var myStr = 'some string';
var myBool = true;
var myArr = [1, 2, 3, 4, 5];
var myObj = {
  first: 'First Name',
  last: 'Last Name',
}

/*
 * Завдання #2
 *
 * Відформатуйте ціле число, яке зберігається в змінній myNum, 
 * щоб отримати результат із двома знаками після коми.
 * Результат збережіть у змінній decimal2.
 * (Зверніть увагу: результатом форматування буде рядок)
 */

// ім'я змінної: decimal2, містить число myNum з 2 знаками після коми
var decimal2 = myNum.toFixed(2)

/*
 * Завдання #3
 *
 * Створіть змінну myBigInt і запишіть у неї число 123n (тип BigInt).
 * Потім збільште його на 1n та запишіть результат у цю саму змінну.
 */

// ім'я змінної: myBigInt (тип BigInt), початкове значення: 123n, потім збільшене на 1n
var myBigInt = BigInt(123);
var myBigInt2 =  myBigInt + 1n;
myBigInt = myBigInt2;