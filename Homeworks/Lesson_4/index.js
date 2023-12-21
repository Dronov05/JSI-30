// Проверяем себя, если не понимаем почему так а не иначе пишем в чат или в ЛС, желательно объяснять почему то или иное решение

// Типы данных

console.log([1, 2, 3] + ' is the answer.'); //  Массив [1, 2, 3] будет преобразован в строку "1, 2, 3" => 1, 2, 3" + " is the answer." ==> "1, 2, 3 is the answer."
console.log(false || true * 2); // Логическое или выбирает первый true, который всетречает => при умножении true преобразуется к числу 1 => 1 * 2 ==> 2
console.log({ valueOf: () => 42 } * 2); // Метод valueOf возвращает число 42 => 42 * 2 ==> 84
console.log(parseInt('7.5') + parseFloat('2.5')); // parseInt возьмёт только целую часть числа 7 => 7 + 2.5 ==> 9.5
console.log(!!'Hello' - 1); // операторы !! преобразуют "Hello" к логическому true, при разности true преобразуется к числу 1 => 1 - 1 ==> 0
console.log(new String('hello') instanceof Object); // объект String принадлежит классу объекта Object ==> true
console.log((true ^ false) === (false ^ true)); // в обоих выражениях будет 1 ==> true
console.log(true && '5' + 5); // Логическое && выбирает первый false или если его нет, выбирает последнее значение => true && '5' => '5' => '5' + 5 ==> '55'
console.log({ valueOf: () => '10', toString: () => '20' } + 5); // Метод valueOf имеет приоритет при математических операциях и вернёт '10' => '10' + 5 ==> '105'
console.log((5).toString() === '5'); // Преобразование числа 5 к строке '5' => '5' === '5' ==> true
console.log(null || false || undefined); // Логическое или выбирает первый true или если его нет выбирает последнее значение => null || false => false => false || undefined ==> undefined
console.log(0 || 2 || NaN); // Логическое или выбирает первый true 0 || 2 => 2 => 2 || NaN ==> 2
console.log(1 && null && 2); // Логическое && выбирает первый false или если его нет, выбирает последнее значение 1 && null => null => null && 2 ==> null

//

function xy() {}

console.log(typeof xy); // ==> function
console.log(xy instanceof Object); // функция принадлежит классу объекта Object ==> true

var str1 = String(123);
var str2 = new String(123);

console.log(typeof str1 === typeof str2); // строка не равна объекту => string === object ==> false
console.log(str1 === str2); // строка(примитив) не равна строке(объекту) => '123' === String{'123'} ==> false
console.log(str1 === String(123)); // строка '123' равна строке '123' => '123' === '123' ==> true
console.log(str2 === new String(123)); // здесь сравнение двух объектов у которыхх разные ссылки ==> false
console.log(str1 === 123); // строгое сравние строки с числом => '123' === 123 ==> false
console.log(str1 === '123'); // строгое сравнение одинаковых строк ==> true
console.log(str1 == str2); // true
console.log(str1 == 123); // нестрогое сравнение строки "123" с числом 123. == равенство сравнивает с приведением типов, и приведёт оба операнда к одному типу => 123 == 123 => true
console.log(str1 == '123'); // нестрогое сравнение строки "123" со строкой '123' => '123' == '123' ==> true

var arr = [];
console.log(typeof arr); // массив является объектом ==> object

var str3 = '123';
str3[0] = '2';
console.log(str3); // Строку нельзя изменить таким способом ==> '123'

var p = 1 + 2 + 3 + '';
var z = '' + 1 + 2 + 3;

console.log(p, typeof p); // конкатенация ==> '6', string
console.log(z, typeof z); // конкатенация ==> '123', string

var o = '123x';
console.log(Number(o)); // невозможно пребразовать к числу ==> NaN
console.log(parseInt(o, 10)); // отбросит 'x' и вернет число в дестичной системе ==> 123
console.log(+o); // невозможно пребразовать к числу ==> NaN
console.log(typeof +o); // NaN относится к типу number ==> number
console.log(Boolean(String(false))); // false станет строкой 'false', что в приведении к булевому типу даст true т.к. непустая строка ==> true

var h = [];
console.log(h ? 1 : 2); // h это массив, при логическом преобразовании даст true, следовательно вернётся операнд перед двоеточием ==> 1

// Переменные

let a = a + 1;
console.log(a); // ошибка, так как в выражении a + 1, a не сушествует(не объявлена)

//

var b = b + 1;
console.log(b); // из-за особеностей ключевого слова var, значение переменной b всплывает и равно undefined => undefined + 1 ==> NaN

//

function foo(c) {
  if (c > 0) {
    var c = c + 10; // Значение переменной var c всплывает в начало функции как undefined, далее выполнится блок if и вернется занчение переменной c из этого блока, до второго return функция не дойдёт
    return c;
  }
  return c;
}
console.log(foo(15)); // ==> 25

//

function foo() {
  console.log(d2); // ищет d2 в функции foo, не находит, ищет  снаружи и находит переменную d2 со значением '2'
  let d1 = '1';
  return function () {
    console.log(d1); // ищет d1 в возвращаемой безымянной функции, не находит, ищет во внешней ф-и foo, находит переменную d1 co значением '1'
    console.log(d2); // ищет d2 в в возвращаемой безымянной функции, не находит, ищет во внешней ф-и foo, не находит, ищет  снаружи и находит переменную d2 со значением '2'
  };
}

const d2 = '2';
const x = foo();

x();

// ==> '2', '1', '2'

function giveMeX(showX) {
  if (showX) {
    let x = 5;
  }
  return x;
}

console.log(giveMeX(false)); // условие if не выполнится, так как передано аргументом false. ошибка, так как переменная x объявленная через let имеет блочную область видимости и происходит ошибка при прпытке вернуть переменную x
console.log(giveMeX(true)); // ошибка, так как переменная x объявленная через let имеет блочную область видимости и происходит ошибка при прпытке вернуть переменную x

//

console.log(x); // не понял к какому блоку кода относится этот косоль.лог, результат referenceError

var y = 1;

console.log(y); // ==>1 значение переменной выше

function car() {
  if (false) {
    var y = 2;
  }
  console.log(y);
}

car(); // ==> undefined т.к. значение переменной объявленной через var всплывает и условие if не будет выполнено, отсюда переменная -y- будет undefined
console.log(y); // ==> 1 значение переменной со строки 15

//

var i = 1;
var j = {};

(function () {
  i++;
  j.j = 1;
})();
console.log(i, j); // 2, j = {j: 1} - i увеличивается на единицу, добавление свойства в объект j = {}

(function (i, j) {
  i++;
  j.k = 1;
})(i, j);
console.log(i, j); // 2, j = {j: 1, k: 1} - i увеличивается на единицу, добавление свойства в объект j = {j: 1}

//

// Бонус

// Создать объект всеми возможными способами

const obj1 = {};
const obj2 = Object.create(obj1)
const obj3 = Object.assign({}, obj1)

function CreateObjWithFunction(name){
  this.name = name
}
const obj4 = new CreateObjWithFunction('')

class CreateObjWithClass {
  constructor(name) {
    this.name = name
  }
}
const obj5 = new CreateObjWithClass('')


//

// Написать функцию глубокого сравнения двух объектов:
// объекты могут быть любыми, и иметь любой уровень вложенности

const firstObj = { here: { is: 'on', other: '3' }, object: 'any' };
const secondObj = { here: { is: 'on', other: '2' }, object: 'any' };

const deepEqual = (firstObj, secondObj) => {
  const typeOfObjects = typeof firstObj === 'object' && typeof secondObj === 'object'
  const objectsNotNull = firstObj !== null && secondObj !== null

  if (typeOfObjects && objectsNotNull) {
    for(let key in firstObj) {
      if (!secondObj.hasOwnProperty(key)) return false
      if (typeof firstObj[key] === 'object' && typeof secondObj[key] === 'object') {
        const result = deepEqual(firstObj[key], secondObj[key])
        if (!result) return false
      } else {
        if (firstObj[key] !== secondObj[key]) return false
      }
    }
    return true
  } else {
    return firstObj === secondObj
  }
};

//

console.log(deepEqual(firstObj, secondObj)); // false;
