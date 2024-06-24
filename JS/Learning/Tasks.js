let name = "Vova";
let age = "34";
let nameAge = name+age;
console.log(nameAge);

const studentName = "John";
studentName = "Paul";
console.log(studentName); // ошибка

var age = 25;
var age = 26;
console.log(age);//26

let age = 25;
let age = 26;
console.log(age);//ошибка

let age = 25;
console.log(age);//25
age = 30;
console.log(age);//30

console.log(age);//ошибка
let age = 25;

console.log(age);//undefined
var age = 25;

let num = "true";
console.log(typeof typeof 5); 

1. Чему будет равно выражение `typeof -5;` ?
2. Чему будет равно выражение `typeof false;` ?
3. Чему будет равно выражение `typeof "1";` ?
4. Чему будет равно выражение `typeof null;` ?
5. Чему будет равно выражение `typeof typeof 5;` ? и почему?

const name = "redev";
name === "rede1v" ? console.log(1) : console.log(2); 


Написать 3 любых примера с % и результат этого выражения (5%2 === 1).
console.log(7%3);//1
console.log(8%4);//0
console.log(247%120);//7

console.log(5%2 === 1);//true

Если переменная test равна true, то выведи “Верно”, иначе выведи “Неверно”. 
const test = true;
test == true?console.log("Верно"):console.log("Неверно");
Если переменная test не равна true, то выведи “Верно”, иначе выведи “Неверно”. 
const test = true;
!(test == true)?console.log("Верно"):console.log("Неверно");
Если переменная a больше нуля и меньше 5-ти, то выведи “Верно“, иначе выведи “Неверно“. 
const a = 6;
0<a && a<5 ?console.log("Верно"):console.log("Неверно");
Если переменная a равна нулю или равна двум, то прибавь к ней 7, иначе раздели ее на 3.
let a = 2;
(a==0 || a==2)?console.log(a+7):console.log(a/3);
Если переменная a равна или меньше 1, а переменная b больше или равна 3, то выведи сумму этих переменных, иначе выведи их разность. 
let a = 0;
let b = 2;
(a<=1 && b>=3)?console.log(a+b):console.log(a-b);
Если переменная a больше 2-х и меньше 11-ти, или переменная b больше или равна 6-ти и меньше 14-ти, то выведи “Верно”, в противном случае выведите “Неверно”.
let a = 2;
let b = 13;
((a>2 && a<11) && (b>=6 && b<14))?console.log("Верно"):console.log("Неверно");
Написать алгоритм который проверит, попадает ли число в заданный диапазон.
let a = 15;
if (a>0 && a<15) {
    console.log('a попадает в диапазон')
} else {
    console.log('a не попадает в диапазон')
}
Написать алгоритм, который выводит наименьшее из двух чисел.
let a = 23;
let b = 24;
if (a==b){
    console.log('b равно a')
}  else if (a>b){
    console.log('a больше b')
}  else {
    console.log('a меньше b')
}
Написать алгоритм, который определяет, является ли число положительным, отрицательным или равным нулю. 
let a = 0;
if (a==0){
    console.log('a равно 0')
}  else if (a>0){
    console.log('a положительное')
}  else {
    console.log('a отридцательное')
}
Что выведет в консоль и почему ?
let num = 5;
console.log(num == "5"); //true не строгое равно приводит к числу
console.log(num === "5"); //false строгое равно учитывает тип данных
console.log(num == true); //false, не строгое равно привело к числу true=1
​
Что выведет в консоль и почему ?
console.log(5 && 3); // 3 && выводит первый false или последний true?
console.log(0 && 3); // 0
console.log(5 || 3); // 5 || выводит первый true или последний false
console.log(0 || 3); // 3
console.log(0 || 3 && 6); //6 в начале берем 3 && 6 тут 6 потом 0||6 тут 0 (согластно приоритетам)
console.log(0 && 3 || 6); //6 в начале берем 0 && 3 тут 0 потом 0||6 тут 0 (согластно приоритетам)

Что выведет в консоль и почему ?
let count = 6;
console.log(count++); //?
console.log(++count); //?
console.log(count++); //?
console.log(count); //?
​
Что выведет в консоль и почему ?
let count = 4;
console.log(count--); //4 записть постфиксная
console.log(count--); //3 запись постфиксная
console.log(count); // 2 
console.log(--count); //1 запись префиксная

let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

let number = 5;
let factorial = 1;
do {
  factorial *= number;
  number--;
} while (number > 0);
console.log('Факториал числа 5 равен', factorial);

// можно написать так, но не нужно. Для этого есть цикл for
console.log("Hello world1");
console.log("Hello world2");
console.log("Hello world3");

// так лучше
for (let i = 1; i<=3; i++){
	console.log("Hello world"+i);
}

// или так (блок "начало" можно оставить пустым)
let i = 1;
for (; i<=3; i++){
	console.log("Hello world"+i);
}

# Задания

1. Выведи в консоль числа от 1 до 100.
for (let i=1;i<=100;i++){
    console.log(i);
}
2. Выведи в консоль числа от 11 до 33.
for (let i=11;i<=33;i++){
    console.log(i);
}
3. Выведи в консоль все целые числа от 10 до 1 в обратном порядке:
for (let i=10;i>=1;i--){
    console.log(i);
}
4. Выведи столбец четных чисел в промежутке от 0 до 100.
for (let i=0;i<=100;i++){
    if (i%2==0){
        console.log(i);
    }
   
}
5. Выведи в консоль таблицу умножения на 5. 

    ```jsx
    5 x 1 = 5
    5 x 2 = 10
    …
    5 x 10 = 50
    ```
    for (let i=1;i<=10;i++){
        console.log( '5 x '+i+' ='+ i*5);
      }

6. С помощью цикла найди сумму чисел от 1 до 100.
let summ=0;
for (let i=1;i<=100;i++){
     summ =summ+i;
  }
  console.log(summ);
7. Напиши switch, который проверит значение переменной **`a`** и выведет в консоль соответствующее сообщение `а равен 1`,`а равен 2`,`а равен 3`,`а не равен ничего из перечисленого` .
let a = 33;
switch (a) {
    case 1:
    console.log('а равен 1');
    break;
    case 2:
    console.log('а равен 2');
    break;
    case 3:
    console.log('а равен 3');
    break;
    default:
    console.log('а не равен ничего из перечисленого');
    break;    
}
8. Напиши `switch` который принимает на вход число от 1 до 7 и выводит в консоль соответствующий день недели (1 - понедельник, 2 - вторник и т.д.):
let a = 78;
switch (a) {
    case 1:
      console.log('понедельник');
      break;
    case 2:
      console.log('вторник');
      break;
    case 3:
      console.log('среда');
      break;
    case 3:
      console.log('среда');
      break;
    case 4:
      console.log('четверг');
      break;
    case 5:
      console.log('пятница');
      break;
    case 6:
      console.log('суббота');
      break;
    case 7:
      console.log('воскресенье');
      break;
    default:
    console.log('в неделе 7 дней!');
    break;    
}
9. Напиши `switch`, который принимает на вход символ латинского алфавита и выводит в консоль его порядковый номер (A - 1, B - 2 и т.д.)
let a = 8;
switch (a) {
    case 1:
      console.log('A');
      break;
    case 2:
      console.log('B');
      break;
    case 3:
      console.log('C');
      break;
    case 4:
      console.log('D');
      break;
    case 5:
      console.log('E');
      break;
    case 6:
      console.log('F');
      break;
    case 7:
      console.log('G');
      break;
      case 8:
        console.log('H');
        break;
      case 9:
        console.log('I');
        break;
      case 10:
        console.log('J');
        break;
      case 11:
        console.log('K');
        break;
      case 12:
        console.log('L');
        break;
      case 13:
        console.log('M');
        break;
      case 14:
        console.log('N');
        break;
      case 15:
        console.log('O');
        break;
        case 16:
            console.log('P');
            break;
          case 17:
            console.log('Q');
            break;
          case 18:
            console.log('R');
            break;
          case 19:
            console.log('S');
            break;
          case 20:
            console.log('T');
            break;
          case 21:
            console.log('U');
            break;
          case 22:
            console.log('V');
            break;
          case 23:
            console.log('W');
            break;
         case 24:
            console.log('X');
            break;
          case 25:
            console.log('Y');
            break;
          case 26:
            console.log('Z');
            break;
    default:
    console.log('В латинском алфавите 26 букв!');
    break;    
}
10. Напиши `switch`, который принимает на вход число от 1 до 12 и выводит в консоль соответствующее ему время года *(зима, лето, осень, весна)* **(потренируй объедине́ние case-ов)**
let a = 12;
switch (a) {
    case 1:
    case 2:
    case 12:
    console.log('Зима');
    break;
    case 3:
    case 4:
    case 5:
    console.log('Весна');
    break;
    case 6:
    case 7:
    case 8:
    console.log('Лето');
    break;
    case 9:
    case 10:
    case 11:
    console.log('осень');
    break;
    default:
    console.log('В году 12 месяцев!');
    break;    
}


function func (param){
	console.log(param);
}
function abc (a){
	console.log(a);
}

func(1);//number
func("Redev");//string
func(true);//boolean
func(null);//null
func({name:"Pasha"});//object
func([1,2,3]);//array
func(abc);//function

const sum1 = (a,b) =>{
  return a+b;
}
const sum2 = (a,b) =>{
  a+b;
}
const sum3 = (a,b) => a+b;
const sum4 = (a,b) => {a+b};

console.log(sum1(2,3));// 5
console.log(sum2(2,3));// undefined
console.log(sum3(2,3));// 5 
console.log(sum4(2,3));// undefined


function login(email, password = 123123){ 
	console.log(email);
	console.log(password);
}

login("pgutzu@gmail.com", "verystrongpassword");
login("pgutzu@gmail.com");
login();

1.Напиши функцию, которая проверяет, является ли число четным или нечетным.

function isEvenOrOdd(number) {
  if (number%2==0) {
    return ('Четное число');
  } else {
    return ('Нечетное число');
  }
 
}

console.log(isEvenOrOdd(4)); // Вывод: "Четное число"
console.log(isEvenOrOdd(7)); // Вывод: "Нечетное число"

2.Напиши функцию, которая определяет, является ли число положительным, отрицательным или равным нулю. 

function checkNumber(number) {
  if (number==0) {
    return ('Ноль')
  } else if (number>0){
    return ('Положительное число')
  } else {
    return ('Отрицательное число')
  }
 
}

console.log(checkNumber(5)); // Вывод: "Положительное число"
console.log(checkNumber(-3)); // Вывод: "Отрицательное число"
console.log(checkNumber(0)); // Вывод: "Ноль"

3.Напиши функцию, которая выводит большее из двух чисел.

function findGreaterNumber(number1, number2) {
  if (number1==number2) {
    return ("Числа равны");
  } else if (number1>number2){
    return number1;
  } else{
    return number2;
  }
  
}

console.log(findGreaterNumber(5, 8)); // Вывод: 8
console.log(findGreaterNumber(10, 3)); // Вывод: 10
console.log(findGreaterNumber(7, 7)); // Вывод: "Числа равны"

4.Напиши функцию, которая проверяет, попадает ли переданное число в заданный диапазон.

function isNumberInRange(number, min, max) {
  return (number>min && number<max);
   
}

console.log(isNumberInRange(5, 1, 10)); // Вывод: true
console.log(isNumberInRange(15, 1, 10)); // Вывод: false
console.log(isNumberInRange(0, -5, 5)); // Вывод: true

5.Напиши функцию, которая принимает на вход два числа и выводит в консоль их сумму, если они оба положительны, и их разность, если одно из чисел отрицательное.

function performOperation(num1, num2) {
  if (num1>0 && num2>0 ) {
    return console.log(num1+num2);
  } else {
    return console.log(num1-num2);
  };
 
}

performOperation(5, 3); // Вывод: Сумма чисел: 8
performOperation(10, -3); // Вывод: Разность чисел: 13
performOperation(-2, 8); // Вывод: Разность чисел: -10

6.Напиши функцию, которая принимает на вход число и выводит в консоль таблицу умножения для этого числа от 1 до 10. 

function multiplicationTable(number) {
  for (let i=1; i<=10; i++){
    console.log(number+'*'+i+'='+(number*i));
  }
  return 
}

multiplicationTable(5);
7.Напиши функцию, которая принимает на вход число и возвращает его квадрат, если оно больше 10, и его куб, если оно меньше или равно 10.

function squareOrCube(number) {
  if (number>10) {
    return number**2;
  } else if (number<=10) {
    return number**3
  }
 
}

console.log(squareOrCube(5)); // Вывод: 125
console.log(squareOrCube(15)); // Вывод: 225
console.log(squareOrCube(10)); // Вывод: 1000

8.Напиши функцию, которая принимает на вход два числа и возвращает их сумму, если оба числа положительны, и их произведение, если одно или оба числа отрицательные.

function sumOrProduct(num1, num2) {
  if (num1>0 && num2>0) {
    return num1+num2;
  } else {
    return num1*num2;
  }
 
}

console.log(sumOrProduct(5, 3)); // Вывод: 8
console.log(sumOrProduct(-2, 8)); // Вывод: -16
console.log(sumOrProduct(10, -3)); // Вывод: -30
console.log(sumOrProduct(-4, -2)); // Вывод: 8


console.log(0||1)


console.log (a);

var a;

{
  var b=3
  let c=4
}

console.log(c);

let a=10;
while(a>=0){
  console.log (a--)
} 

for(a=1; a<10; a++){
  console.log(a)
}

1>2?console.log('верно'):console.log('не верно')

if (a>b){
  console.log('верно')
} else if (a==b) {
  console.log('не верно')
} 

==

===


const x = 1; 
const y = 2; 
switch (x + y) { 
    default: 
        console.log('Нет совпадений'); 
    case "1": 
        console.log('1'); 
        break; 
    case "2": 
        console.log('2'); 
        break; 
    case "3": 
        console.log('3'); 
        break; 
}


function sum(a, b) { 
  a + b; 
} 

console.log( 
  sum(1, 2), 
  typeof sum(1, 2), 
  typeof sum 
);

let count = 2; 
console.log(count++); //2
console.log(++count); //4
console.log(--count); //3
console.log(count++); //3
console.log(count--); //4
console.log(count);//3


console.log(2 && 3 && 4); //4
console.log(2 || 3 || 4); //2
console.log(2 || 3 && 4);//2 
console.log("pasha" || 0); //"pasha"
console.log("pasha" && 0); //0
console.log(0 && "pasha"); //0
console.log(0 || "pasha"); "pasha"
console.log(null || 7 && -4); //-4
console.log(null && 7 || -4); //-4
console.log(null && !7 || -4);//-4


1. Какой будет результат?
parseInt('17px'); // 17
parseInt('17px10'); // 17
parseInt('pas123'); // Nan
parseInt('   123px'); // 123
parseInt('6e6'); // 6


1. Напиши функцию, которая принимает два числа и возвращает их сумму.
function sum(a,b) {
  return a+b
}
2. Напиши функцию, которая принимает число и возвращает его квадрат.
function squared (a) {
  return a**2
}

3. Напиши функцию, которая принимает три числа и возвращает наименьшее из них.
function min (a,b,c) {
  return Math.min(a,b,c)
}
4. Напиши функцию, которая принимает число и возвращает его факториал (можно и нужно погуглить).
function factorial(a){
  let b = 1;
  while(n){
      b *= a--;
  }
  return b;
}

console.log(factorial(4))
5. Напиши функцию, которая принимает число и возвращает true, если оно четное, и false, если нечетное.
function eventNumber(a){
 if (a%2==0) {
  return "true"
 } else {
  return "false"
 }
}

function eventNumber(a){
  return (a%2==0) ? "true":"false"
 }
console.log(eventNumber(5))
6. Напиши функцию, которая сгенерирует рандомное число в диапазоне от 1 до 5 (можно и нужно погуглить).
function randomNumber(){
return (Math.floor(Math.random()*5)+1);
  
      
}
 console.log(randomNumber())
7. Перепиши предыдущую функцию с возможностью задавать диапазон через аргументы функции.


function randomNumberRange(min,max){
  return Math.floor((Math.random()*(max-min+1))+min);
    
        
  }
   console.log(randomNumberRange(1,20))

   const course = 'Redev Courses';

console.log(course.substring(1,3)) // "ed"
console.log(course.substring(3,1)) // "ed" *
console.log(course.substring(2,7)) // "dev C"
console.log(course.substring(6)) // "Courses"

1.Напиши функцию, которая ищет индекс первого вхождения заданной подстроки в строку и возвращает его.
function findIndexOfSubstring(mainString, substring) {
  return  mainString.indexOf(substring)
}

// Пример использования функции:
const mainString = "Это пример текста, и мы ищем слово 'пример'.";
const substring = "пример";

const index = findIndexOfSubstring(mainString, substring);
console.log(`Индекс первого вхождения "${substring}" в тексте: ${index}`);
​
2.Напиши функцию, которая возвращает длину строки без учета пробелов.
function lengthWithoutSpaces(inputString) {
  return (inputString.replaceAll(' ', '')).length;
}

// Пример использования функции:
const inputString = "Это строка с пробелами.";
const length = lengthWithoutSpaces(inputString);
console.log(`Длина строки без пробелов: ${length}`);
​
3.Напиши функцию, которая возвращает повторенную строку некоторое количество раз.
function repeatString(inputString, repeatCount) {
  return inputString.repeat(repeatCount)
}

// Пример использования функции:
const inputString = "Привет!";
const repeatCount = 3;

const repeatedText = repeatString(inputString, repeatCount);
console.log(`Повторенная строка: ${repeatedText}`);
​
3.Напиши функцию, которая принимает две строки в качестве аргументов и возвращает true, если первая строка является подстрокой второй строки, и false в противном случае.
function isSubstring(substring, string) {
  return string.includes(substring)
}

// Пример использования функции:
const substring = "apple";
const string = "I have an apple";

console.log(isSubstring(substring, string)); // Вывод: true
​
4.Напиши функцию, которая принимает строку в качестве аргумента и возвращает количество чисел, которые содержатся в этой строке.


    function countNumbersInString(inputString) {
 let c = inputString.split("");
 let a =0 ;
   for (i=0;i<=c.length; i++){
        if ((isNaN(parseInt (c[i])))){
        } else {
            a=a+1;
        }
    }
      return a;
    }
  

// Пример использования функции:

const inputString = "В этой строке 123 и 456, но нет 789.";
const count = countNumbersInString(inputString);
console.log(`Количество чисел в строке: ${count}`);
​
5.Напиши функцию, которая принимает число в качестве аргумента и возвращает это число в обратном порядке. Например, если передано число 123, функция должна вернуть число 321.
function reverseNumber(number) {
  return ((String(number)).split("").reverse().join(""))
  
   

}
// Пример использования функции:

const number = 123;
const reversed = reverseNumber(number);
console.log(`Число ${number} в обратном порядке: ${reversed}`);
​
6.Напиши функцию, которая принимает строку в качестве аргумента и возвращает количество слов в этой строке.
function countWordsInString(inputString) {
  let c = inputString.trim().split(" ");
  let a = 0 ;
   for (i=0;i<c.length; i++){
            a=a+1;
    }
      return a;
    }

// Пример использования функции:
const text = " Это пример строки с пятью словами.";
const wordCount = countWordsInString(text);
console.log(`Количество слов в строке: ${wordCount}`);
​
7.Напиши функцию, которая принимает три строки в качестве аргументов: 
первая строка - исходная строка, 
вторая строка - строка для поиска, 
третья строка - строка для замены. 
Функция должна вернуть исходную строку с замененной подстрокой.
function replaceSubstring(originalString, search, replacement) {
  return originalString.replace(search,replacement );
}

// Пример использования функции:
const originalString = "Это пример текста для замены.";
const search = "пример";
const replacement = "замена";

const modifiedString = replaceSubstring(originalString, search, replacement);
console.log(`Исходная строка: ${originalString}`);
console.log(`Строка после замены: ${modifiedString}`);
​
8.Напиши функцию, которая принимает строку в качестве аргумента и возвращает эту же строку, но со всеми буквами в верхнем регистре.
function toUpperCaseString(inputString) {
  return inputString.toUpperCase()
}

// Пример использования функции:
const inputString = "Пример строки в верхнем регистре.";
const upperCaseText = toUpperCaseString(inputString);
console.log(`Исходная строка: ${inputString}`);
console.log(`Строка в верхнем регистре: ${upperCaseText}`);

const person = {
  firstName: 'Pavel',
  lastName: 'Hutsu',
  age: 25,
  city: 'Minsk'
};

for (const key in person) {
  console.table(`${key}: ${person[key]}`);
}

Задачи
1.Напиши функцию, которая принимает объект и возвращает массив его ключей.
const obj = { firstName: "Pavel", age: 25, isMan: true };

const func = (obj) => {
  return Object.keys(obj)
  }
 

console.log(func(obj)); // ["firstName", "age", "isMan"]
​
2.Напиши функцию, которая сливает два объекта в один и возвращает новый объект со всеми свойствами из обоих объектов. Если ключи совпадают, приоритет отдать второму объекту.
const obj1 = { firstName: "Pavel" };
const obj2 = { age: 26, isMan: true };

const func = (obj1, obj2) => {
 return  Object.assign(obj1, obj2);
 
}

console.log(func(obj1, obj2)); // {firstName: "Pavel", age: 25, isMan: true}
​
3.Напиши функцию, которая принимает объект и возвращает сумму всех его значений. Значения могут быть только числа. Валидацию писать не нужно.
const obj = { a: 1, b: 2, c: 3 };

const func = (obj) => {
  let a=0
  for (const key in obj) {
    a+=obj[key]
  }
  return a
}

console.log(func(obj)); // 6
​
4.Напиши функцию, которая считает количество свойств в объекте и возвращает это число.
const obj = { a: 1, b: 2, c: 3 };

const func = (obj) => {
  let a=0
  for (const key in obj) {
    a+=1
  }
  return a
}

console.log(func(obj)); // 3
​
5.Напиши функцию, которая принимает два объекта и сравнивает их свойства. Если у обоих объектов есть одинаковые свойства с одинаковыми значениями, функция должна вернуть true, в противном случае - false.
const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { a: 3, b: 7, c: 3 };
const obj3 = { a: 3, b: 7, c: 4 };

const func = (obj1, obj2) => {
  let bool;
  for (const key in obj1) {
    console.log((obj1[key]),obj2[key])
    bool = obj1[key]==obj2[key]

}
  return bool;
}
console.log(func(obj1, obj2)); // true
console.log(func(obj1, obj3)); // false

​
6.Напиши функцию, которая принимает объект и возвращает массив его значений.
const obj = { firstName: "Pavel", age: 25, isMan: true };

const func = (obj) => {

  return Object.values(obj)
}


console.log(func(obj)); // ["Pavel", 25, true]
​
7.Напиши функцию, которая принимает объект и удаляет определенное свойство из него (ключ свойства передать в параметрах)
const obj = { a: 1, b: 2, c: 3 };
// delete obj.b
// console.log(obj)
const func = (obj1, key1) => {
  delete obj1[key1];
 return obj1
}

console.log(func(obj, "b")); // { a: 1, c: 3 }
console.log(func(obj, "a")); // { c: 3 }
​
8.Напиши функцию, которая принимает объект в котором все значения свойств это строки, и возвращает значение самого длинного свойства.
const obj = { a: "Redev", b: "Programming", c: "JavaScript" };

const func = (obj1) => {
let arrStr = Object.values(obj1)
let wordLength = 0;
let longestWord;
console.log(arrStr)
for (let i = 0; i < arrStr.length; i ++) {
  wordLength = arrStr[i].length;
  console.log( arrStr[i].length)
  if (arrStr[i].length > wordLength) {
    longestWord = arrStr[i];
    console.log( longestWord)
   
  }
  return longestWord;
}
} 
console.log(func(obj)); // "Programming"
​
9.Напиши функцию, которая принимает объект и выводит все свойства в виде строки "value: key"
const obj = { a: 1, b: 2 };

const func = (obj) => {
  for (const key in obj) {
    console.table(`${obj[key]}: ${key}`);
  }
}

func(obj);

// Вывод:
// "1: a"
// "2: b"
​
10.Напиши функцию, которая принимает объект и выводит имена методов.
const obj = { a: 1, b: 2, sum() {}, pow() {} };

const func = (obj) => {
   for (const key in obj) {    
  if (typeof(obj[key]) == 'function') {
    console.log (key)
 } 
}
}

func(obj);

// Вывод:
// "sum"
// "pow"
​
11.Создай объект car с методами start и stop, которые выводят в консоль сообщения "Starting the car" и "Stopping the car" соответственно и свойство isRunning, которое будет устанавливаться в true при вызове метода start и в false при вызове метода stop.
const car = {
  start: function() {
    console.log(`Starting the car`);
    this.isRunning = true;
  },
	stop: function() {
    console.log('Stopping the car');
    this.isRunning = false;
  }
};

car.start(); 
console.log(car.isRunning);

12.Создай объект book с методами open и close, которые выводят в консоль сообщения "Opening the book" и "Closing the book" соответственно и свойство currentPage, которое будет хранить текущую страницу, на которой находится пользователь. Еще добавь метод turnPage, который увеличивает currentPage на 1 и выводит в консоль сообщение "Turning page {page}", где {page} - номер текущей страницы. Используй this для доступа к свойству currentPage внутри метода turnPage.
const book = {
  currentPage: 1,
  open: function() {
    console.log(`Opening the book`);
    
  },
	close: function() {
    console.log('Closing the book');
    
  },
  turnPage: function() {
     
    console.log( `Turning page ${this.currentPage}`)
    this.currentPage +=1  
  }
};

book.open(); 
console.log(book.currentPage);
book.turnPage(); 
console.log(book.currentPage);
book.close(); 

13. Тебе нужно создать конструктор Person, который будет создавать объекты, представляющие людей. У каждого объекта Person должны быть следующие свойства:
name: строка, представляющая имя человека.
age: число, представляющее возраст человека.
gender: строка, представляющая пол человека.
Конструктор Person должен иметь два обязательных параметра: name и age. Пол (gender) будет задаваться по умолчанию как "не указан", если не передан третьим аргументом. Конструктор также должен иметь метод greet, который будет выводить приветствие, используя имя человека.
function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender || "не указан";
  this.greet = function() {
    console.log("Hello, my name is " + this.name);
  };
}


const person1 = new Person("Паша", 26, "мужской");
const person2 = new Person("Ангелина", 27);

person1.greet(); // Вывод: "Привет, меня зовут Паша."
person2.greet(); // Вывод: "Привет, меня зовут Ангелина."
console.log(person1.gender)
console.log(person2.gender)


1. Создай объект **`person`** с свойством **`name`** и методом **`greet`**, 
который выводит в консоль строку "Hello, my name is {name}". 
Используй **`this`** внутри метода **`greet`** для получения значения свойства **`name`** объекта **`person`**.

const person = {
  name: 'Vova',
  greet: function() {
    console.log(`Hello, my name is ${this.name}`);
  }
  };

person.greet();


2. Создай объект **`calculator`** с методами **`add`**, **`subtract`**, **`multiply`** и **`divide`**, 
которые выполняют соответствующие операции над двумя аргументами и возвращают результат. 
Добавь свойство **`result`**, которое будет хранить текущий результат вычислений. 
Используй **`this`** для доступа к свойству **`result`** внутри каждого метода.

const calculator = {
  result: ,
  add: function(b,c) {
   this.result = b+c;
  },
  subtract:function(b,c) {
    return a=b-c;
  },
  multiply:function(b,c) {
    return a=b*c;
  },
  divide:function(b,c) {
    return a=b*c;
  }
  };
calculator.add(1,2); 
console.log(calculator.result)


3. Создай объект **`game`** с методом **`play`**, который выводит в консоль "Playing {title} game". Используй метод **`call`** или **`apply`**, чтобы вызвать метод **`play`** с объектами **`basketballGame`** и **`chessGame`**, имеющими свойства **`title`**, которые представляют соответствующие игры.
const game = {
  result: [],
  play: function(a) {
      console.log(`Playing ${this.title} game`);
   }
  };
const basketballGame = {
  title:"basketballGame"
};

const chessGame = {
  title:"chessGame"
};

game.play.call(basketballGame)
game.play.call(chessGame)

4. Необходимо создать объект **`calculator`** с двумя числовыми свойствами: `**а**` и `**b**`. Инициализировать значениями по умолчанию.
    
    Так же нужно создать функцию **`calculate`**, которая принимает один аргумент **`operation`** (пример “**add”**, “**subtract**“, “**multiply**“ или “**divide**“). Функция должна выполнять математические операции на числах `**а**` и `**b**` в зависимости от значения аргумента **`operation`**.
    
    Используй метод **`call`** для вызова функции **`calculate`** с определенным контекстом выполнения (**`calculator`**) и передачи аргумента **`operation`**.
    
    Если значение аргумента **`operation`** не соответствует ни одной из доступных операций (“**add”**, “**subtract**“, “**multiply**“ или “**divide**“), выведи сообщение об ошибке в консоль.

    const calculator  = {
      a: 4,
      b: 2
  }
      calculate = function(operation) {
          switch(operation) {
              case 'add': 
              c = this.a+this.b;
                break;
              case 'subtract':  
              c = this.a-this.b
                break;
              case 'multiply':  
              c = this.a*this.b
                break;
              case 'divide':  
              c = this.a/this.b
                break;
              default:
              c =  "не верное значение операции"
                break;
            }
            return c
       }
  console.log(calculate.call(calculator,"add"))    
  console.log(calculate.call(calculator,"subtract"))
  console.log(calculate.call(calculator,"multiply"))
  console.log(calculate.call(calculator,"divide"))
  console.log(calculate.call(calculator,"divide1"))

5. Создай объект **`dog`** со свойством **`petName`** и методом **`bark`**. Метод **`bark`** должен возвращать строку, состоящую из значения **`petName`** и звука "Woof!". 
    
    Создать объект **`cat`** со свойством **`petName`** и методом **`meow`**. Метод **`meow`** должен возвращать строку, состоящую из значения **`petName`** и звука "Meow!". 
    
    Используя метод **`call`**, вызвать методы **`meow`** и **`bark`** с разными контекстами:
    
    - Вызвать метод **`meow`** с контекстом объекта **`dog`** с помощью. Результат должен быть строкой, соответствующей звуку кошки с именем собаки.
    - Вызвать метод **`bark`** с контекстом объекта **`cat`** с помощью. Результат должен быть строкой, соответствующей звуку собаки с именем кошки.

    const dog = {
      petName: 'Sharik',
      bark: function() {
          console.log(`${this.petName} "Woof!"`);
       }
      };
      
  const cat  = {
      petName: 'Myrka',
      meow: function() {
          console.log(`${this.petName}  "Meow!"`);
          }
      };
  
  dog.bark.call(cat)
  cat.meow.call(dog)

  console.log(typeof(Infinity))




1. Напиши функцию, которая принимает массив и возвращает сумму четных элементов в массиве чисел.
arrTest = [1,2,3]
function sumArr(arr){
   let sum = 0;
   for (const num of arr){
    sum+=num;
   }
  return sum;
}

console.log(sumArr(arrTest));

2. Напиши функцию, которая принимает массив и возвращает среднее значение элементов в массиве чисел.
arrTest = [1,2,3]
function sumArr(arr){
   let sum = 0;
   for (const num of arr){
    sum+=num;
   }
  return sum/arr.length;
}

console.log(sumArr(arrTest));

3. Напиши функцию, которая принимает массив и элемент, а возвращает индекс заданного элемента в массиве.
arrTest = [1,2,3,"привет"]
function arrIn(arr,a){
  return arr.indexOf(a)
}

console.log(arrIn(arrTest,"привет"));
4. Напиши функцию, которая принимает массив строк и возвращает самую короткую строку в массиве.
arrTest = [1,2,3,0]
function arrMin(arr){
   return Math.min(...arr)
}
console.log(arrMin(arrTest));
5. Напиши функцию, которая принимает массив и возвращает новый массив перевернув его задом наперед.
const arrTest = [1,2,3,4,5,6,7,8];
function arrRevers(arr){

  return arr.reverse();
}
  console.log(arrRevers(arrTest));

6. Напиши функцию, которая принимает массив чисел и возвращает новый массив из элементов больше 18.

const arrTest = [1,24,3,44,5,67,7,8,18,45];

function arMore18(arr){
  const newArr = []
for (let i = 0; i < arr.length; i++) {
   if (arr[i]>18){
    newArr.push(arr[i])
   }
}
return newArr;

}
console.log(arMore18(arrTest)); 

# Задания

1. Напиши функцию, которая принимает массив строк и возвращает новый массив, в котором каждая строка записана в верхнем регистре.
const arrText = ["привет", "пароль", "слово"];

 function arrUpp(arr){
    arr.forEach(item => {
      const arrUp = item.toUpperCase()
        return 
    });
}
console.log(arrUpp(arrText)); 
//исправил

const arr = ["привет", "пароль", "слово"];
function arrUpp(arrWord){
  return  (arrWord.map((item) => ( item.toUpperCase())));  
};

console.log(arrUpp(arr)); // 
2. Напиши функцию, которая принимает массив объектов с полями **`name`** и **`age`** и возвращает новый массив, в котором каждый объект имеет дополнительное поле **`greeting`**, содержащее строку вида "Привет, {name} ({age})!".
const arrPerson = [{name:'Vova', age:30},{name:'Pavel', age:'25'}];

 function arrHi(arr){
    arr.forEach (function (item) {
        item.greeting = `Привет, ${item.name} (${item.age})!`;
    });
    return  arr;
}
console.log(arrHi(arrPerson));
3. Напиши функцию, которая принимает массив чисел и возвращает новый массив, в котором каждый элемент преобразован в строку и добавлен префикс "Number: ".
const numbers = [1,2,3,4,5];

function arrUpp(numbers){
    const newArr = [];
    numbers.forEach (function (item) {
        newArr.push(`Number: ${item}`)
    });
    return  console.log (newArr);
}    
arrUpp(numbers);
//исправил
const numbers = [1,2,3,4,5];

function arrUpp(num){
    return  (num.map((item) => (`Number: ${item}`)));  
  };
  console.log(arrUpp(numbers)); 
4. Напиши функцию, которая принимает массив строк и возвращает новый массив, в котором каждая строка обрезана до первых трех символов.
const arrText = ["привет", "пароль", "слово"];

 function arrCut(arr){
    const newArr = [];
    arr.forEach (function (item) {
        newArr.push(item.slice(0, 3))
    });
    return  newArr;
}    
console.log(arrCut(arrText));
5. Напиши функцию, которая принимает массив и возвращает новый массив из всех элементов, которые являются числами.
const arrText = ["привет", 1, 3, "пароль", 73, "слово"];

 function arrOnlyNum(arr){
    const newArr = [];
    arr.forEach (function (item) {
        if ( Number.isInteger(item)) {
        newArr.push(item)
 }});
    return  newArr;
}    
console.log(arrOnlyNum(arrText));
//исправил
const arrText = ["привет", 1, 3, "пароль", 73, "слово"];

function arrOnlyNum(arr){
  return  arr.filter((item) => ((Number.isInteger(item))));  
}    
console.log(arrOnlyNum(arrText));
6. Напиши функцию, которая принимает массив и возвращает новый массив из всех элементов в массиве, которые имеют четный индекс.
const arrText = [78, "привет", 1, 3, "пароль", 73, "слово", 6];

 function arrOnlyEven(arr){
    const newArr = [];
    arr.forEach (function (item) {
        if ( item%2 === 0) {
        newArr.push(item)
 }});
    return  newArr;
}    
console.log(arrOnlyEven(arrText));
//исправил
const arrText = [78, "привет", 1, 3, "пароль", 73, "слово", 6];

function arrOnlyNum(arr){
  return  arr.filter((item) => ((item%2 === 0)));  
}    
console.log(arrOnlyNum(arrText));


7. Напиши функцию, которая принимает массив объектов и возвращает новый массив из всех объектов в массиве, у которых свойство **`age`** больше 18.
const arrPerson = [{name:'Roma', age:'19'},
                   {name:'Vova', age:30},
                   {name:'Pavel', age:'25'},
                    {name:'Misha', age:'4'}];

 function arrPerson18(arr){
    const newArr = [];
    arr.forEach (function (item) {
        if ( item.age >18) {
        newArr.push(item)
 }} );
    return  newArr;
}    
console.log(arrPerson18(arrPerson));
8. Напиши функцию, которая принимает массив и возвращает новый массив из всех строк в массиве, которые содержат букву 'a'.
const arrText = ["привет", "пароль", "слово", "маракасы", "солод", "мак"];

 function arrOnlyA(arr){
    const newArr = [];
    arr.forEach (function (item) {
        if (item.includes("а") )
        newArr.push(item)
    });
    return  newArr;
}    
console.log(arrOnlyA(arrText));
//исправил

const arrText = ["привет", "пароль", "слово", "маракасы", "солод", "мак"];

function arrOnlyA(arr){
  return  arr.filter((item) => (item.includes("а")));  
}    
console.log(arrOnlyA(arrText));

9. Напиши функцию, которая принимает массив и возвращает новый массив из всех чисел в массиве, которые больше 10.
const numbers = [12, 1, 5, 60, 44, 0, 4];

 function arrMore10(arr){
    const newArr = [];
    arr.forEach (function (item) {
        if (item > 10)
        newArr.push(item)
    });
    return  newArr;
}    
console.log(arrMore10(numbers));
// исправил
const numbers = [12, 1, 5, 60, 44, 0, 4];

function arrMore10(arr){
  return  arr.filter((item) => (item > 10));  
}    
console.log(arrMore10(numbers));

10. Отсортировать массив объектов по возрастанию значения свойства `age`.
    
    ```jsx
    const people = [  
    	{ name: 'Pavel', age: 25 },  
    	{ name: 'Alex', age: 20 },  
    	{ name: 'Irina', age: 30 },
    ];
    ```
    const people = [  
      { name: 'Pavel', age: 25 },  
      { name: 'Alex', age: 20 },  
      { name: 'Irina', age: 30 },
  ];
  
   function arrSort(arr){
      arr.sort(function(a,b){
       return (a.age - b.age);
  });
  return arr;
  }
  console.log(arrSort(people));
11. Напиши функцию, которая принимает массив строк. Посчитать количество повторений каждого элемента в массиве. 
    
    ```jsx
    const array = ["a","b","c","b","a","b"];
    
    const counter = (arr)=> {};
    
    counter(array); // "a:2, b:3, c:1"
    ```
    var array  = ["a","b","c","b","a","b"];

    function counter (arr) {
    return arr.reduce(function (prev, item) {
        prev[item] = (prev[item] || 0)+1;
    return prev}, {} );
    
     }
    console.log (counter (array ))
12. Напиши функцию, которая принимает массив чисел и разделяет массив на две группы: четные и нечетные  `{even:[], odd:[]}` (через reduce)
var array  = [0, 1, 2, 3, 4, 5];

    function counter (arr) {
        var a = {even:[], odd:[]};
     return arr.reduce(function (prev, item) {
        if (item%2===0) {
            a.even.push(item)
        } else {
            a.odd.push(item)
        }
        return a
        })} ;
    console.log (counter (array ))

    
13. Создай объект **`player`** с методом **`play`**, который выводит в консоль сообщение "Playing {game}", где **`{game}`** - название игры. Добавь свойство **`games`**, которое будет содержать список игр, в которые игрок может играть. Используй цикл **`for...of`**, чтобы перебрать список игр и вызвать метод **`play`** для каждой игры. 
const player = {
  play: function (){
          for (const num of this.games) {
           const a =  num;
           console.log(`Playing ${a}`)
          }              
     return
  },
  games:['Mario','CS','Dota']
};
player.play()

const str = "Ваш новый сериал полный отстой!"; // Получить массив имен

function deleteVowels (str){
  return str.split('').filter(letter =>  !["а", "у", "о", "и", "э", "ы"].includes(letter.toLowerCase())).join('');
}

console.log(deleteVowels('Ваш новый сериал полный отстой!')); //"Вш нвый срл плный тстй!"
console.log(deleteVowels('Что за ужасное фото?!')); //"Чт з жсн фт?!"
console.log(deleteVowels('Этот сайт для лузеров ЛОЛ!')); //"тт сйт дл лзрв ЛЛ!"


function list (str){
  const arr = str.split(' ').sort((a, b) => a - b)
  return arr.shift()+" "+arr.pop();
 }
 console.log(list("4 5 29 54 4 0 -123 666 -64 1 -3 6 -6")); //"-123 666"
 console.log(list("-16 12 -100 5 100 12")); //"-100 100"
 console.log(list("-1 2 3 4 -6 66 10")); //"-6 66"
 
 
function accum(str) {
  return str.split('').map((item, index) => item.toUpperCase() +item.repeat(index).toLowerCase()).join('-')
};

console.log(accum("cwAt")); //"C-Ww-Aaa-Tttt"
console.log(accum("abc")); //"A-Bb-Ccc"
console.log(accum("dog")); //"D-Oo-Ggg"

function correctPin(str) {
  return Boolean((str.split('').map((item) => Number(item)).every((item) => 
  !(Number.isNaN(item)=== true)) &((str.length==4)||(str.length ==6))));
};
 console.log(correctPin("5567")); //true
 console.log(correctPin("556711")); //true
 console.log(correctPin("12312312")); //false
 console.log(correctPin("qqqq")); //false
 console.log(correctPin("5oops1")); //false

 function printerError(str) {
  const good = str.split('').filter(letter =>  !['n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z'].includes(letter.toLowerCase())).join('')
  return `${str.length-good.length}`+'/'+ `${str.length}`
}
console.log(printerError('qqqTtssqdqwehwre')) // "12/16";
console.log(printerError('qdqwdqdqqqqwdwwwdasda')) // "13/21";
console.log(printerError('qaaawawweefffsssuuuu')) // "11/20";

function printerError(str) {
  const good = str.split('').filter(letter => letter.toLowerCase()<"m").join('')
  return `${str.length-good.length}`+'/'+ `${str.length}`
}
console.log(printerError('qqqTtssqdqwehwre')) // "12/16";
console.log(printerError('qdqwdqdqqqqwdwwwdasda')) // "13/21";
console.log(printerError('qaaawawweefffsssuuuu')) // "11/20";

function compare(arr) {
  arr.sort((a, b) => a - b);
  const a = [];
  a.push(arr.shift(), arr.pop());
    return a
};

console.log(compare([1, 5, 8, 10, 35, 100, 333, -123, -2, 243])) // [-123, 333]
console.log(compare([1, 2, 3, 4, -5, -10, -1, 123])) // [-10, 123]
console.log(compare([-1, -2, 3, -4, 15, 66, -666])) // [-666, 66]

function simple(str) {
  return str.split(' ').sort((a,b) => (a.length)-(b.length)).shift().length;
};
console.log(simple("qwe qwer qq q")) // 1
console.log(simple("qwwwwe awdad asdasd wqdqw")) // 5
console.log(simple("qwd ww qweqwe ww")) // 2


function sumMin(array) {
  const arraySort = array.filter((item) => item>0).sort((a,b) => a-b);
  return (arraySort.length <= 3)? "Мало положительных чисел!": arraySort[0]+arraySort[1];
};
console.log(sumMin([12,423,54,1235,3,15,2,52])) // 5
console.log(sumMin([12, 1, 2, -2])) // Мало положительных чисел!
console.log(sumMin([12, 12, 13, 1, 2])) // 3


function prevNumbers(num) {

  const arr = new Array(num)
  for (let i = 0; i < arr.length; i++) {
   (arr[i]=i+1);
  }
  return  arr.join(',')
};

console.log(prevNumbers(5)) // "5,4,3,2,1"
console.log(prevNumbers(1)) // "1"

function reverseWords(str) {
  return str.split('').map((item) => (item.split(''))).reverse().join('') ;
};

console.log(reverseWords("This is an example!")) // "sihT si na !elpmaxe"
console.log(reverseWords("emocleW ot vedeR") )// "Welcome to Redev"

function toSnakeCase(str) {
  return str.split('').map((letter) => (letter === letter.toUpperCase())? '_' + letter.toLowerCase()  : letter ) .join('');

}

console.log(toSnakeCase("redevCourses")) // "redev_courses"
console.log(toSnakeCase("yellowStoneField")) // "yellow_stone_field"

function countCats(arr) {
  return arr.flat(Infinity).filter((item) =>  item == "^^").length;
};
console.log(countCats([[0,1,"^^"],[9,"^^",2],["^^",8,7]])) //3
console.log(countCats([[0,1],[9,2],["^^",8,7]])) //1
console.log(countCats([[0,1],[9,2],[8,7]])) //0


function reverseWords(str) {
  return str.split(' ').map((item) => item.split('').reverse().join('')).join(' ') ;  
};

console.log(reverseWords("This is an example!")) // "sihT si na !elpmaxe"
console.log(reverseWords("emocleW ot vedeR") )// "Welcome to Redev"


function isPalindrom(str) {
  const strDelSpace = str.toLowerCase().split('').filter((item) => item !== " ").map((item) =>(item.split('')));
  return strDelSpace.join('') === strDelSpace.reverse().join(''); 
};
console.log(isPalindrom("10101")) //true
console.log(isPalindrom("Аргентина манит негра")) //true
console.log(isPalindrom("Авада кедавра")) //false

function createDreamTeam(arr) {
  let name =''
const arr1 = arr.filter((item) => {
  return typeof(item) === 'string';
})
for (const value of arr1) {
  name += value[0];
}
  return name;
}
console.log(createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max'])) // 'ADMM';
console.log(createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null])) // 'LOO';



function isUpperCase(str, character) {
  return str.at(character)===str.at(character).toUpperCase()? true:false;
}
console.log(isUpperCase('tasks JavaScript', 6)); // true
console.log(isUpperCase('tasks JavaScript', 7)); // false
console.log(isUpperCase('Tasks', 0)); // true

function capitalizeFirstLetter(str) {
  const arr = str.split('');
   arr.splice(0,0,arr.shift().toUpperCase());
   return arr.join('');
}

console.log(capitalizeFirstLetter('пример строки')); // Пример строки
console.log(capitalizeFirstLetter('программирование')); // Программирование


function replaceAll(find, replace, str) {
  const strReplase = []
  str.split(' ').map( (item) => {
    if (item === find) {
      strReplase.push(replace)
    } else {
      strReplase.push(item)
    }}
  ) 
  return strReplase.join(' ')
};

const str = 'abc def def lom abc abc def';
console.log(replaceAll('abc', 'x', str)); // x def def lom x x def
console.log(replaceAll('abc', 'redev', str)); // redev def def lom redev redev def


function removeDuplicate(str) {
  // return  [...new Set(str.split(', '))].join(', ')};
  const str1= str.split(', ')
  const noDublicate = str1.filter((element, index) => {
    return str1.indexOf(element) === index;  
})
return noDublicate.join(', ')
};

console.log(removeDuplicate("вишня, груша, слива, груша")); // "вишня, груша, слива"
console.log(removeDuplicate("redev, redev, str")); // "redev, str"


function uniqueLetters(str) {
  //   return  [...new Set(str.split(''))].join('')
  // };
    const str1= str.split('')
    const noDublicate = str1.filter((element, index) => {
      return str1.indexOf(element) === index;  
  })
  return noDublicate.join('')
  };
  
  console.log(uniqueLetters("anaconda")); // "вишня, груша, слива"
  console.log(uniqueLetters("redev")); // "redev, str"

  
  function alphabetize(str) {
    return str.split('').sort().join('')
  };
  
  console.log(alphabetize("Europe")); // "Eeopru"
  console.log(alphabetize("redev")); // "deerv"

  
  function cutString(str, n) {
    const arr = str.split(' ')
    arr.splice(n)
    return arr.join(' ')
  };
  
  let str = "Сила тяжести приложена к центру масс тела";
  console.log(cutString(str, 5)); // "Сила тяжести приложена к центру"
  console.log(cutString(str, 1)); // "Сила"
  


  function strip(str) {
    const arr = str.split(' ')
   const noDublicate = arr.filter((element) => {
     return !(element === '');  
 })
 return noDublicate.join(' ')
 };
 
 console.log(strip("    Pasha is  a   good   boy")); // "Pasha is a good boy"



  function comparison(str1, str2) {
    return (str1.toLowerCase() === str2.toLowerCase())
  };
  
  console.log(comparison("STrinG", "string")); // true
  console.log(comparison("ALfA", "alpha")); // false
  
  function anagrams(str, array){
    return array.filter((item) => item.split('').sort().join('') === str.split('').sort().join(''))};
  
  console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])) // ['aabb', 'bbaa']
  console.log(anagrams("cat", ["tac", "cta", "act", "dada"])) // [ 'tac', 'cta', 'act' ]

  function sortedStr(str) {
    const arr = str.split(' ');
    const sort = [];
    let a = arr.length+1;
    while (a) {
    for (let i = 0; i<arr.length; i++) {
       if (arr[i].split('').some((item) => parseInt(item) === a)){
          sort.unshift(arr[i])}};
        a--;
    };
    return sort;
 }
 console.log(sortedStr("is2 Thi1s T4est 3a")) // "Thi1s is2 3a T4est"
 console.log(sortedStr("1q 3d 2w 7g d6 qwe5")) // "1q 2w 3d qwe5 d6 7w"
 

 function sortedStr(str) {
  const arr = str.split(' ');
  return arr.sort((a,b) => a.split('').find(num => (parseInt(num)) % 1 === 0) - b.split('').find(num =>  (parseInt(num)) % 1 === 0)).join(' ')  
}
console.log(sortedStr("is2 Thi1s T4est 3a")) // "Thi1s is2 3a T4est"
console.log(sortedStr("1q 3d 2w 7g d6 qwe5")) // "1q 2w 3d qwe5 d6 7w"



function transform(arr) {
  const result = []
  for (let i = 0; i < arr.length; i++) {
    if ( typeof arr[i] === 'number'){
       result.push(arr[i])
    } else {
    //  console.log(arr[i]);
    switch (arr[i]) {
      case "--discard-prev":
        result.pop()
        break;
      case "--double-next":
        result.push(arr[i+1])
        break;
      case "--double-prev":
        result.push(arr[i-1])
        break;
      case "--discard-next":
        result.splice(i,2)
        break;
        default:
          // console.log(arr[i]);
        continue
    }}

  }
  return result
}


//  function transform(arr) {
//    while (!arr.every((element) => (typeof (element) === 'number' ))){
//   for (let i = 0; i < arr.length; i++) {
//    if (arr[i] === "--discard-prev"){
//     arr.splice(i-1,2)  
//   } else if (arr[i] === "--double-prev"){
//     arr.splice(i,1,arr[i-1])
//   } else if (arr[i] === "--double-next") {
//     arr.splice(i, 1, arr[i+1])
//    } else if (arr[i] === "--discard-next"){
//       arr.splice(i,2)
//       }
//   }
//     }
//     return arr
// }
console.log(transform([1, 3, '--double-next', 4])) // [1, 3, 4,4];
console.log(transform([1, 3, "--discard-prev", 4])) // [1, 4];
console.log(transform([1, 3, "--double-next", 4, "--double-prev", 5, "--discard-prev", 8, "--double-next", 10, ])) // [ 1, 3,  4,  4, 4, 8, 10, 10];




const chainMaker = {
  chain:[],
  flag: true,  
  addLink : function(value) {
     flag = true;
     this.chain.push(value)
     return this
  },
  finishChain: function(){
     if (flag){
     console.log(`(${this.chain.join(')~~(')})`)
     this.chain.length = 0
     return
     }
      },
  removeLink: function (value){
     if (Number.isInteger(value) && this.chain.includes(value)){
     this.chain.splice(value-1, 1)
  } else {
     flag = false;
     console.log(`Введено не допустимое значение в методе removeLink оно равно ${value}`)
     this.chain.length = 0
  }
     return this
  },
  reverseChain: function (){
     this.chain.reverse()
     return this
  }, 
  };
  
  
  chainMaker.addLink(1).addLink(2).addLink(3).addLink().removeLink(5).finishChain() // '(1)~~(2)~~(3)'
  chainMaker.addLink(1).addLink(2).addLink(3).addLink().removeLink('ф').finishChain() // '(1)~~(2)~~(3)'
  chainMaker.addLink(1).addLink(2).addLink(3).addLink().finishChain() // '(1)~~(2)~~(3)'
  chainMaker.addLink(1).addLink(2).addLink(3).finishChain() // '(1)~~(2)~~(3)'
  chainMaker.addLink(1).addLink(2).removeLink(1).addLink(3).finishChain () //=> '(2)~~(3)'
  chainMaker.addLink(1).addLink(2).reverseChain().addLink(3).finishChain () //=> '(2)~~(1)~~(3)'
  
  function find(arr){
    const obg = arr.reduce((acc, el) => {
       acc[el] = (acc[el] || 0) + 1   
       return acc;
     }, {})
     return Object.entries(obg).sort((a, b) => a[1] - b[1]).pop()[0]
      
  };
  
  console.log(find([7, 'z', 'z', 'z', 3, 7, 'z', 7, 'z', 3, 5, 7])) // "z"
 console.log(find([1, 1, 2, 2, 1, 7, 4, 7, 1, 3, 1, 7, 1, 1])) // 1
  

 function colonOdd(num) {
 const result =[];
 const num1 = num.toString().split('')
 console.log(num1)
   for (let i = 0; i < num1.length; i++) {
     if (num1[i]%2 == 1 && num1[i+1]%2 == 1 ) {
       result.push(num1[i])
       result.push(':')
     } else {
      result.push(num1[i])   }
   }
   return result.join('')
 };
 
 console.log(colonOdd(55639217))// "5:563:921:7"
 console.log(colonOdd(13565484647897518))// "1:3:56548464789:7:5:18
 
 Задания для закрепления темы деструктуризации с массивами:
1. Создай массив с элементами [1, 2, 3, 4, 5]. Используя деструктуризацию, присвой значения первых трёх элементов массива переменным a, b и c соответственно.

const arr1 = [1,2,3,4,5];
const[a,b,c] = arr1;
console.log(a,b,c)

2.Создай массив с элементами [1, 2, 3, 4, 5]. Используя деструктуризацию, пропусти первые два элемента массива, а затем присвой значения следующих двух элементов переменным a и b соответственно.

const arr1 = [1,2,3,4,5];
const[, ,a,b] = arr1;
console.log(a,b)

3.Создай массив с элементами [1, 2, 3, 4, 5]. Используя деструктуризацию, присвой значение последнего элемента массива переменной a.

const arr1 = [1,2,3,4,5];
const[, , , ,a] = arr1;
console.log(a)

4.Создай массив с элементами [1, 2, 3, 4, 5]. Используя деструктуризацию, присвой значения первых двух элементов массива переменным a и b, а оставшиеся элементы собери в массив rest.

const arr1 = [1,2,3,4,5];
const[a,b,...rest] = arr1;
console.log(a,b, rest)

5.Создай массив с элементами [1, 2, 3, 4, 5]. Используя деструктуризацию, присвой значения первых двух элементов массива переменным a и b, а оставшиеся элементы проигнорируй.

const arr1 = [1,2,3,4,5];
const[a,b, , , ,] = arr1;
console.log(a,b)

Задания для закрепления темы деструктуризации с объектами:

1.Создай объект myObject с двумя свойствами - name и age. Используя деструктуризацию, присвой значение свойства name переменной a, а значение свойства age переменной b.

const myObject = {name: 'Vova', age:35}
const{name,age} = myObject;
console.log(name,age)

2.Создай объект myObject с одним свойством - name. Используя деструктуризацию с установкой значения по умолчанию, присвой значение свойства age переменной b. При этом значение по умолчанию должно быть равно 30.

const myObject = {name: 'Vova'}
const{age:b = 30} = myObject;
console.log(b)

3.Создай объект myObject с тремя свойствами - name, age и city. Используя деструктуризацию, присвой значения свойств name и age переменным a и b соответственно, а все остальные свойства объекта проигнорируй.

const myObject = {name: 'Vova', age:35, city:'Vitebsk'}
const{name:a, age:b} = myObject;
console.log(a, b)

4.Создай объект myObject с полями name, age, city и country. Используя деструктуризацию, присвой значения полям name, age и city переменным userName, userAge и userCity соответственно, а поле country присвой переменной userCountry с помощью значения по умолчанию "Belarus".

const myObject = {name: 'Vova', age:35, city:'Vitebsk', country: 'USA'}
const{name:userName, age:userAge, city:userCity, contry:userCountry='Belarus'} = myObject;
console.log(userName, userAge, userCity, userCountry)

Задания для закрепления темы SPREAD:

1.Напиши функцию, которая принимает два массива и объединяет их. Затем отсортируй полученный массив и верни его.

function myfunction(arr1,arr2) {
  const arr3 =[...arr1, ...arr2];
  return arr3.sort((a,b)=>a-b)
}
myArr1 = [1,3,4,7]
myArr2 = [423,44,27] 
console.log(myfunction(myArr1, myArr2))
2.Напиши функцию, которая принимает массив чисел и возвращает максимальное число в этом массиве. Используй оператор spread для передачи массива в Math.max().

function myfunctionMax(arr1) {
  return Math.max(...arr1);
}
myArr1 = [1,3,4,7,5,25,345,3453]
console.log(myfunctionMax(myArr1))

3.Напиши функцию, которая принимает произвольное количество аргументов и возвращает массив, содержащий эти аргументы.

function myfunction(a) {
  return [...arguments];
}
console.log(myfunction(1,'b',3,'a',4,5,6))
4. Напиши функцию, которая принимает два объекта и возвращает новый объект, содержащий свойства из обоих объектов. Если свойства с одинаковыми ключами присутствуют в обоих объектах, используй значение свойства из первого объекта. 

function myfunction(obj1,obj2) {
  return{ ...obj2, ...obj1};
}
const myObj1 = {name:'Vova', age:35, city:"Vitebsk", skill:'Coding'}
const myObj2 = {name:'Pavel', age:25, city:"Minsk", street: 'Solnechnaya'}
console.log(myfunction(myObj1,myObj2))

5. Напиши функцию, которая принимает массив и возвращает новый массив с уникальными значениями из первого массива.

function myfunction(arr) {
  return[...new Set(arr)];
}
const myArr = [1,2,3,4,5,4,3,2,6,8,1]
console.log(myfunction(myArr))

function theSame(){
  const arr = [...arguments].map((item) => item.split('').sort().join(''))
  for (let i=0; i< arr.length; i++){
     if (arr[i]=== arr[i+1]){
         return true
     } else {
         return false
     }}};

console.log(theSame("кот", "ток", "кто")) // true
console.log(theSame("кот", "тк", "кто")) // false

String.prototype.toJadenCase = function (str) {
  const arr = this.split(' ')
  const arrBigLetter = []
  for (let i=0; i <arr.length; i++) {
    arrBigLetter.push(arr[i][0].toLocaleUpperCase()+arr[i].slice(1))
  }
  return arrBigLetter.join(' ')
};

console.log('The world is not what we think it is'.toJadenCase()) // "The World Is Not What We Think It Is";
console.log('let it be'.toJadenCase()) // "Let It Be";
console.log('is not what we think'.toJadenCase()) // "Is Not What We Think";


# Задача #34 (прототипы + функции)

Создайте метод класса String endsWith, который сравнивает подстроку str1 с окончанием исходной строки str и определяет, заканчивается ли строка символами подстроки.

String.prototype.endsWith = function(substring) {
  return
};

const str = "Каждый охотник желает знать";
str.endsWith("желает"); // false
str.endsWith("охотник"); // false
str.endsWith("знать"); // true

function theSame(){
  const arr = [...arguments].map((item) => item.split('').sort().join(''))
  return arr.every((element) => arr[0] === element)
     };

console.log(theSame("кот", "ток", "кто")) // true
console.log(theSame("кот", "тк", "кто")) // false

1.Напиши функцию, которая принимает на вход JSON-строку с объектом и возвращает количество свойств в объекте.

const userJson = '{	"surname": "Иванов","name": "Иван",	"patronymic": "Иванович","birthdate": "01.01.1990","birthplace": "Москва",	"phone": "8 926 766 48 48"}'

function numbersOfObj (text){
const obj =JSON.parse(text)
return Object.values(obj).length
}
console.log(numbersObj (userJson))

2.Напиши функцию, которая принимает на вход JSON-строку, содержащую информацию о студентах (имя, возраст), и возвращает массив их имен.
// const obj = [
//   { name: "Pasha", age: 25 },
//   { name: "Sasha", age: 30 },
//   { name: "Masha", age: 27 }
// ];

// const json = ...;

// const func = (json) => {
//   ...
// }

// console.log(func(json)); // ["Pasha", "Sasha", "Masha"]
​

const obj = [
  { name: "Pasha", age: 25 },
  { name: "Sasha", age: 30 },
  { name: "Masha", age: 27 }
];

const json = JSON.stringify(obj);

const func = (json) => {
  const arrTemp = JSON.parse(json);
  return arrTemp.map((item) => Object.values(item)).map((item)=> item[0])
}

console.log(func(json)); // ["Pasha", "Sasha", "Masha"]

const obj = [
  { name: "Pasha", age: 25 },
  { name: "Sasha", age: 30 },
  { name: "Masha", age: 27 }
];

const json = JSON.stringify(obj);

const func = (json) => {
  const nameArr= []
  const obj = JSON.parse(json, (key, value) => {
      if (key === 'name') {
        return nameArr.push(value);
      }})
      return nameArr
}

console.log(func(json)); // ["Pasha", "Sasha", "Masha"]

3.Создай объект в формате JSON, который содержит информацию о погоде в твоем городе на следующие 5 дней. Каждый день должен содержать информацию о температуре, влажности и скорости ветра.
const weather = {  
  weatherWednesday: {
    tempDay: '+23°',
    tempNigth: '+9°',
    humidity: '32%',
    wind: '3,7 м/с'
  },
  weatherThursday: {
    tempDay: '+20°',
    tempNigth: '+5°',
    humidity: '24%',
    wind: '3,9 м/с'
  },
  weatherFriday: {
    tempDay: '+17°',
    tempNigth: '+5°',
    humidity: '28%',
    wind: '2,5 м/с'
  },
  weatherSaturday: {
    tempDay: '+19°',
    tempNigth: '+5°',
    humidity: '32%',
    wind: '3,4 м/с'
  },
  weatherSunday: {
    tempDay: '+19°',
    tempNigth: '+9°',
    humidity: '32%',
    wind: '4 м/с'
  }}

  // console.log(JSON.stringify(weather,null,"\t")){
  //   "weatherWednesday": {
  //     "tempDay": "+23°",
  //     "tempNigth": "+9°",
  //     "humidity": "32%",
  //     "wind": "3,7 м/с"
  //   },
  //   "weatherThursday": {
  //     "tempDay": "+20°",
  //     "tempNigth": "+5°",
  //     "humidity": "24%",
  //     "wind": "3,9 м/с"
  //   },
  //   "weatherFriday": {
  //     "tempDay": "+17°",
  //     "tempNigth": "+5°",
  //     "humidity": "28%",
  //     "wind": "2,5 м/с"
  //   },
  //   "weatherSaturday": {
  //     "tempDay": "+19°",
  //     "tempNigth": "+5°",
  //     "humidity": "32%",
  //     "wind": "3,4 м/с"
  //   },
  //   "weatherSunday": {
  //     "tempDay": "+19°",
  //     "tempNigth": "+9°",
  //     "humidity": "32%",
  //     "wind": "4 м/с"
  //   }
  // }

4.Напиши функцию, которая принимает на вход JSON-строку, содержащую информацию о пользователях социальной сети, и возвращает только имена пользователей, у которых более 1000 подписчиков.
// const obj = [
//   { name: "Pasha", followers: 777 },
//   { name: "Sasha", followers: 1085 },
//   { name: "Masha", followers: 11435 },
//   { name: "Kasha", followers: 3 }
// ];

// const json = ...;

// const func = (json) => {
//   ...
// }

// console.log(func(json)); // ["Sasha", "Masha"]

const obj = [
  { name: "Pasha", followers: 777 },
  { name: "Sasha", followers: 1085 },
  { name: "Masha", followers: 11435 },
  { name: "Kasha", followers: 3 }
];

const json =JSON.stringify(obj);

const func = (json) => {
  const arrTemp = JSON.parse(json);
  return arrTemp.map((item) => Object.values(item)).filter((item)=> item[1]>1000).map((item) => item[0])
  };

console.log(func(json)); // ["Sasha", "Masha"]
​
5.Напиши функцию, которая принимает на вход JSON-строку, содержащую информацию о пользователях социальной сети, и возвращает массив пользователей, с увеличенным количеством подписчиков на 5000 у каждого.
// const obj = [
//   { name: "Pasha", followers: 777 },
//   { name: "Sasha", followers: 1085 },
//   { name: "Masha", followers: 11435 },
//   { name: "Kasha", followers: 3 }
// ];

// const json = ...;

// const func = (json) => {
//   ...
// }

// console.log(func(json)); 

// // Вывод:
// // [
// //   { name: "Pasha", followers: 5777 },
// //   { name: "Sasha", followers: 6085 },
// //   { name: "Masha", followers: 16435 },
// //   { name: "Kasha", followers: 5003 }
// // ]

const obj = [
  { name: "Pasha", followers: 777 },
  { name: "Sasha", followers: 1085 },
  { name: "Masha", followers: 11435 },
  { name: "Kasha", followers: 3 }
];

const json = JSON.stringify(obj);

const func = (json) => {
 const blogers = JSON.parse(json, (key, value) => {
    if (key === 'followers') {
      return value + 5000;
    } else {
      return value;
    }
  });
  return blogers
}

console.log(func(json)); 

1. Напиши функцию, которая принимает на вход два числа и возвращает их сумму. В случае, если аргументы не являются числами, функция должна бросать исключение.
function sum(a,b) {
  if (typeof a == 'string' || typeof b == 'string') {
    throw "Должны быть только цифры!";
  } else if (typeof a == 'undefined'|| typeof b == 'undefined'){
      throw "Должны быть указаны все значения";
  }

  return a+b
}

try {
  const result = sum(4, "a");
  console.log(result);
} catch (error) {
  console.error(error);
}

try {
  const result = sum(4, 8);
  console.log(result);
} catch (error) {
  console.error(error);
}

try {
  const result = sum(4, );
  console.log(result);
} catch (error) {
  console.error(error);
}
//
function sum(a,b) {
  try {
    if  (isNaN(a) && isNaN(b)){
      throw new Error ('a и b не указаны')
    } else if  (isNaN(a)){
      throw new Error ('a не указано')
    } else if (isNaN(b)){
      throw new Error('b не указано')
    } else if (!(Number.isFinite(a)&&Number.isFinite(b))){
      throw  new Error ('Для ввода доступны только циФры')
    }
    return console.log(a+b);
  } catch (Error) {
    console.log(Error.message);
  }

}
  
sum(undefined,4);
sum();
sum(" ",3);
sum(" ",NaN);
sum(4,NaN);
sum(7,4);

2. Напиши функцию, которая принимает на вход массив чисел и возвращает среднее арифметическое. В случае, если массив пустой, функция должна бросать исключение.


function calculateAverage(arr) {
  if (arr.length === 0) {
    throw "Массив пуст";
  } 
  const sum = arr.reduce((sum, item) => sum+item,0)
  return sum/arr.length
}

try {
  const result = calculateAverage([1,5,6,8,7]);
  console.log(result);
} catch (error) {
  console.error(error);
}

try {
  const result = calculateAverage([]);
  console.log(result);
} catch (error) {
  console.error(error);
}
//
function calculateAverage(arr) {

  try {
    if (arr.length === 0) {
    throw  new Error ("Массив пуст");
    }
  const sum = arr.reduce((sum, item) => sum+item,0)
  return console.log(sum/arr.length)
    } catch (Error) {
      console.log(Error.message);
  }
 
}


calculateAverage([1,5,6,8,7])
calculateAverage([])
3. Напиши функцию, которая принимает на вход объект со свойствами **`x`** и **`y`** и возвращает их сумму. В случае, если объект не содержит полей **`x`** и **`y`**, функция должна бросать исключение.

function findXandY(obj) {
  if (!Object.keys(obj).includes('x','y')) {
    throw "отсутствует х или у";
  } else if (Object.values(obj).filter((item) => typeof item !== 'number').length) {
    throw "значение не число"; 
  }
  const sum = Object.values(obj).reduce((sum, item) => sum+item,0)
  return sum
}
const obj1 ={x:1,
             y:2}
try {
  const result = findXandY(obj1);
  console.log(result);
} catch (error) {
  console.error(error);
}
const obj2 ={z:1,
  y:2}
try {
  const result = findXandY(obj2);
  console.log(result);
} catch (error) {
  console.error(error);
}

const obj3 ={x:'a',
  y:2}
try {
  const result = findXandY(obj3);
  console.log(result);
} catch (error) {
  console.error(error);
}
//
function findXandY(obj) {
  try {
  if (!Object.keys(obj).includes('x','y')) {
    throw new Error ("отсутствует х или у");
  } else if (Object.values(obj).filter((item) => typeof item !== 'number').length) {
    throw  new Error ("значение не число"); 
  }
  const sum = Object.values(obj).reduce((sum, item) => sum+item,0)
  return  console.log(sum)
} catch (Error) {
  console.error(Error.message)};
}

obj1 ={x:1,y:2}
obj2 ={z:1,y:2}
obj3 ={x:'a',y:2}

findXandY (obj1)
findXandY (obj2)
findXandY (obj3)
4. Напиши функцию, которая принимает на вход строку и возвращает ее длину. В случае, если аргумент не является строкой, функция должна бросать исключение.
function findString(string) {
  if (typeof string !== 'string') {
    throw "Не строка";
  }
  return string.length
}
const str1 ={x:1,
             y:2}
try {
  const result = findString(str1);
  console.log(result);
} catch (error) {
  console.error(error);
}
const str2 ='User'
try {
  const result = findString(str2);
  console.log(result);
} catch (error) {
  console.error(error);
}

const str3 =123
try {
  const result = findString(str3);
  console.log(result);
} catch (error) {
  console.error(error);
}
//
function findString(string) {
  try {
  if (typeof string !== 'string') {
    throw new Error ("Не строка");
  }
  return console.error(string.length)
} catch (Error) {
  console.error(Error.message);
}
}
const str1 ={x:1,y:2}
const str2 ='User'
const str3 =123
findString(str1)
findString(str2)
findString(str3)

5. Напиши функцию, которая принимает на вход число и возвращает его факториал. В случае, если аргумент не является положительным целым числом, функция должна бросать исключение.


function factorial(num) {
  if (num < 0 ) {
    throw "Отридцательное число!";
  } else if (!Number.isInteger(num)){
      throw "Hе целое число!";   
  }

  let result = 1;
  while(num){
      result *= num--;
  }
  return result;
}

try {
  const result = factorial(3);
  console.log(result);
} catch (error) {
  console.error(error);
}

try {
  const result =factorial(-3);
  console.log(result);
} catch (error) {
  console.error(error);
}

try {
  const result =factorial(3.2);
  console.log(result);
} catch (error) {
  console.error(error);
}
//
function factorial(num) {
  try {  
  if (num < 0 ) {
    throw new Error( "Отридцательное число!");
  } else if (!Number.isInteger(num)){
      throw  new Error("Hе целое число!");   }
  let result = 1;
  while(num){
      result *= num--;
  }
  return console.log(result);
} catch (Error) {
  console.error(Error.message);
  }
}

factorial(3);
factorial(-3);
factorial(3.2);
Каждое задание можно усложнить, добавив дополнительные условия или проверки. Например, для первого задания можно добавить проверку на наличие обоих аргументов, для третьего задания можно добавить проверку на тип значений полей **`x`** и **`y`**, и т.д.


1. Создать объект с помощью функции-конструктора и добавить ему свойства и методы через прототип.
let animal = {
  breathe:true,
  say: function(){
    console.log(`Hi my name ${this.name}`)
  }
}
function Pet(name,voice){
  this.name = name;
  this.voice = voice;
}
 Pet.prototype = animal;
Pet.prototype.petVoice = function () {
  console.log(`My pet ${this.name} ${this.voice}`)
};

let pet1 = new Pet("Sharik", "woof")
let pet2 = new Pet("Mursik","meow")
console.log(pet1.breathe)
pet1.petVoice()
pet2.petVoice()
pet1.say()
pet2.say()

2. Создать цепочку объектов (3 шт.) с помощью прототипов и вызвать методы из всех объектов в цепочке.

const people = {
  think:true,
  talk: function(){
    console.log('Bla-bla-bla!')
  },
  hi: function(){
    console.log(`My name ${this.name}`)
  }
}

const peopleVasua = Object.create(people);
  peopleVasua.drink = true;
  peopleVasua.name = 'Vasua'
  peopleVasua.say = function(){
    console.log(`${this.name} like life!`)
  }

const peopleTanya = Object.create(peopleVasua);
peopleTanya.work = true;
peopleTanya.name = 'Tanya'

people.talk()
console.log(peopleVasua.think)
peopleVasua.talk()
peopleVasua.hi()
peopleTanya.talk()
peopleTanya.hi()
peopleTanya.say()


3. Что выведет в консоль? Почему?

const obj = {
  a: "AAA",
  __proto__: {
      a: "BBB",
      funcA() {
          return this.a;
      }
  }
}

console.log(obj.__proto__.funcA());//"AAA"
В консоль выведет "AAA". Потому что у объекта obj есть портотип с методом funcA().
А при вызове в консоле obj.funcA() значение this будет "AAA". Потому, что перед точкой объект obj.
console.log(obj.__proto__.funcA());//"BBB"
4.Что выведет в консоль? Почему? 

const obj = {
  a: "AAA",
}
const obj2 = {
  a: "BBB",
  funcA() {
      return this.a;
  }
}

obj.__proto__ = obj2;

console.log(obj.funcA());//"AAA"
Выведет "AAA" портотипом obj является obj2 и у него есть метод funcA(). Значение this при таком вызове "AAA", т.к. объект перед точкой obj.
5. Написать полифил для метода массива .map.

Array.prototype.myMap = function(callback, thisArg){
  const arrMap = [];
  for (let i = 0; i < this.length; i++) {
    arrMap.push(callback.call(thisArg, this[i], i, this))
}
 return arrMap
}

const arr = [1,2,3];

//такой код должен сработать
const result = arr.myMap((item)=> item +1);

console.log(result); //[2,3,4]

6.Написать полифил для метода массива .filter.

Array.prototype.myFilter = function(callback, thisArg){
  const arrFilter = [];
  for (let i = 0; i < this.length; i++) {
    if (callback.call(thisArg, this[i], i, this)) {
      arrFilter.push(this[i]);
    }
}
 return arrFilter
}

const arr = [1,2,3,4];

//такой код должен сработать
const result = arr.myFilter(item=> item > 2);

console.log(result); //[3,4]
7.Откуда у строки взялся метод .slice?
// Примитивы также хранят свои методы в прототипах объектов-обёрток: Number.prototype, String.prototype, Boolean.prototype.
// Только у значений undefined и null нет объектов-обёрток.
// в консоле браузера если ввести
// String.prototype
// можно посмотреть все методы строки
console.log(String.slice === Array.slice)//true как я понимаю что метод slice наследует от Array
console.log(String.slice === Object.slice)//true как я понимаю что метод slice наследует от Object
8.Докажи, что утверждение “в js один тип данных - объект” правдивое.
//Из предыдущего ответа. Примитивы также хранят свои методы в прототипах объектов-обёрток: Number.prototype, String.prototype, Boolean.prototype.
// Только у значений undefined и null нет объектов-обёрток.
//При запуске любого кода даже примитивные значения оборачиваются в портотипы объекты-обёртки и выполняется код.


1. Напиши функцию, которая будет принимать на вход дату и время и возвращать ближайшее время в формате "ЧЧ:ММ", кратное 5 минутам. Например, если на вход подано "17.03.2023 12:13", то функция должна вернуть "12:15".

function timeFiveMinutes (date){
  if (date.slice(-1)>=3){
      return  `${date.slice(0,date.length-1)}`+`${Math.ceil(date.slice(-1) / 5) * 5}`;
  } else{
      return  `${date.slice(0,date.length-1)}`+`${Math.floor(date.slice(-1) / 5) * 5}`;
  }
}
console.log(timeFiveMinutes("17.03.2023 12:13"))
console.log(timeFiveMinutes("17.03.2023 12:14"))
console.log(timeFiveMinutes("17.03.2023 12:21"))

2. Напиши функцию, которая будет принимать на вход две даты и возвращать разницу между ними в днях.
function difDays (date1, date2){
  const date1Obj = new Date (date1);
  const date2Obj = new Date (date2);
  console.log(date1Obj)
 return (date1Obj-date2Obj)/(1000*60*60*24)*-1
 }
 console.log(difDays("2023-03-17", "2023-03-20"))
 console.log(difDays("2023-03-17", "2023-04-20"))
 console.log(difDays("2023-03-17", "2024-03-20"))
3. Напиши функцию, которая будет принимать на вход дату в формате "ММ/ДД/ГГГГ" или "ГГГГ/ММ/ДД" и возвращать ее представление в формате "ДД.ММ.ГГГГ".
function correctDate (date1){
  const dateArr = date1.split('/')
  if (dateArr[0].length==2){
      return(`${dateArr[1]}.${dateArr[0]}.${dateArr[2]}`)
  } else{
      return(`${dateArr[2]}.${dateArr[1]}.${dateArr[0]}`)
  }
  }
  console.log(correctDate("03/17/2024"))
  console.log(correctDate("2024/05/20"))
  
4. Напиши функцию, которая будет принимать на вход дату и время и возвращать строку, содержащую информацию о том, сколько времени прошло с момента заданной даты до текущего момента. Например, "2 дня назад", "3 часа назад", "10 минут назад" и т.д.
function dateLate (datePast){
  let timeDif = (new Date()-new Date(datePast))/1000
  const days = Math.floor(timeDif/(24*60*60))
  timeDif-=days*24*60*60
  const hours = Math.floor((timeDif/(60*60))%24)
  timeDif-=hours*60*60
  const mins =  Math.floor((timeDif/60)%60)
  timeDif-=mins*60
  const seconds = Math.floor(timeDif%(60))
  
  return  `${days}дней, ${hours}часов, ${mins}минут, ${seconds}секунд`
}

console.log(dateLate("2024-05-16T11:21:12.928Z"), new Date())


1. Создай класс `Rectangle` с двумя свойствами: `width` и `heigh` и метод `getArea()`, который будет возвращать площадь прямоугольника.
class Rectangle {
  constructor(width, heigth) {
    this.width = width;
    this.heigth = heigth;
  }
    
  getArea() {
    return this.width*this.heigth
  }
}

const myRectangle = new Rectangle(5, 25);

console.log(myRectangle.getArea());

2. Создай класс `Square`, который наследует свойства и методы класса `Rectangle` и имеет дополнительное свойство `sideLength`. Переопредели метод `getArea()` так, чтобы он возвращал площадь квадрата.
class Rectangle {
  constructor(width, heigth) {
    this.width = width;
    this.heigth = heigth;
  }



  getArea() {
    return this.width*this.heigth
  }
}
class Square extends Rectangle {
  constructor (sideLength, width, heigth){
  super (width, heigth);
   this.sideLength=sideLength;
  
}

getArea(){
  return Math.pow(this.sideLength, 2)
}
}

const mySquare = new Square(7);
const myRectangle = new Rectangle(5, 25);

console.log(myRectangle.getArea());
console.log(mySquare.getArea());
3. Создай класс `Teacher` с свойствами `name` и `ratings` , а так же методом `gradeStudent(grade)`, который будет добавлять оценку `grade` в массив оценок студента `ratings`.

class Teacher  {
  constructor (name, rating){
    this.name = name;
    this.rating = rating || []
  }

  gradeStudent(grade){
    this.grade=grade
    this.rating.push(grade)
  }
}

const Vova = new Teacher ('Misha')

Vova.gradeStudent(4)
Vova.gradeStudent(4)


console.log(Vova.rating)

4. Создай класс `BankAccount` с двумя свойствами: `balance` и `ownerName`. Добавь методы `deposit(amount)` и `withdraw(amount)`, которые будут добавлять и снимать сумму `amount` со счета соответственно. Добавь метод `getBalance()`, который будет возвращать текущий баланс счета.
class BankAccount {
  constructor (balance, ownerName){
    this.balance = balance;
    this.ownerName = ownerName;
  }

  deposit(amount){
    this.amount=amount;
    this.balance= this.balance+this.amount
  }

  withdraw(amount){
    this.amount= amount;
    this.balance= this.balance-this.amount
  }
  getBalance(){
    return this.balance
  }
}

const myBank = new BankAccount (0, 'Vova')

console.log(myBank.getBalance())

myBank.deposit(100)

console.log(myBank.getBalance())
myBank.withdraw(10)
console.log(myBank.getBalance())

5. Создай класс `Product` с двумя свойствами: `name` и `price`. Добавь метод `priceWithTax`, который будет возвращать цену товара с учетом налога на продажи в размере 10%. Процентную ставку нужно хранить в приватном свойстве.
class Product {

  constructor (name,price){
    this.name=name;
    this.price=price
  }

  #tax=10;
  priceWithTax (){
    return this.price+this.price/100*this.#tax
  }
}

const myProduct = new Product('meat', 100)

console.log(myProduct.priceWithTax())