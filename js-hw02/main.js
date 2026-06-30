console.log('JS #2. Домашнє завдання. Від простих до складних обчислень і рядків')

/*
 * #1
 *
 * Створіть змінну i, для якої виконайте префіксний та постфіксний інкремент та декремент.
 * Поекспериментуйте з результатами, виводячи їх у консоль.
 */

// i
var i = 7
console.log(i++)
console.log(i--)
console.log(i)

console.log(++i)
console.log(--i)
console.log(i)

/*
 * #2
 *
 * Створіть нову змінну myTest та присвойте їй значення 20.
 * Виконайте присвоєння з операцією, використовуючи оператори: +=, -=, *=, /=, %=.
 * Результати присвоюються в myTest, потім виводяться в консоль.
 * У розрахунках можна використовувати раніше оголошену змінну myNum та/або числа.
 */
var myNum = 10
var myTest = 20
console.log(myTest += 182)
console.log(myTest -= myNum)
console.log(myTest *= 53)
console.log(myTest /= myNum)
console.log(myTest %= myNum)


/*
 * #3
 *
 * Використовуючи властивості та методи об'єкта Math, присвойте змінним та відобразіть у консолі.
 */

// константа Pi → myPi
var myPi = Math.PI
console.log(myPi)
// округлене значення числа 89.279 → myRound
var myRound = Math.round(89.279)
console.log(myRound)
// випадкове число між 0..10 (10 не включено) → myRandom
var myRandom = Math.random() * 11
console.log(myRandom)
// 3 у 5 степені → myPow
var myPow = Math.pow(3, 5)
console.log(myPow)

/*
 * #4
 *
 * Створіть об'єкт з ім'ям strObj.
 * Присвойте ключу str рядок тексту "Мама мила раму, рама мила маму", ключу length встановіть довжину цього рядка.
 */

// Мама мила раму, рама мила маму
// strObj
var str = 'Мама мила раму, рама мила маму'
var strObj = {
  str: str,
  length: str.length
}

/*
 * #5
 *
 * Перевірте наявність тексту 'рама' у полі str об'єкта strObj (див.п.4).
 * Результат пошуку індексу збережіть у змінній isRamaPos, а перевірку наявності (булеве значення true/false) збережіть у змінній isRama. Виведіть обидва результати у консоль.
 * Результатом для isRamaPos має бути індекс входження.
 * Результатом для isRama має бути буль true.
 */

// isRamaPos
var isRamaPos = strObj.str.indexOf('рама')
console.log(isRamaPos)
// isRama
var isRama = strObj.str.includes('рама')
console.log(isRama)

/*
 * #6
 *
 * Виконайте перейменування підрядка у рядку.
 * Як вихідний рядок використовуйте значення поля str об'єкта strObj (див.п.4), результат збережіть у змінній strReplace та відобразіть у консолі.
 * Вихідний рядок: 'Мама мила раму, рама мила маму'
 *      Результат: 'Мама миє раму, Рама тримає маму'
 */

// strReplace
var strReplace = strObj.str.replaceAll('Мама мила раму, рама мила маму', 'Мама миє раму, Рама тримає маму')
console.log(strReplace)
/*
 * #7
 *
 * Перетворіть текст 'some STRING' у верхній, потім у нижній регістри, результат відобразіть у консолі.
 */

var someStr = 'some STRING'
var upperStr = someStr.toUpperCase()
console.log(upperStr)
var lowerStr = someStr.toLowerCase()
console.log(lowerStr)