// //пример 1
let a = 1, b = 1, c, d;
c = ++a;
alert(c); // ответ: 2
// будет 2, потому как а=1, ++ перед числом это префиксный тип увеличивает на единицу переменную.
//пример 2
d = b++;
alert(d); //ответ: 1
// будет 1, потому что тут суфисный вариант, он выводит b1, а затем прибавляет к нему единицу, как то так
//пример 3
c = 2 + ++a;
alert(c); //ответ: 5
// переменная а в ней число 2, используем префиксный тип и становится 3, 2+3 = 5
//пример 4
d = 2 + b++;
alert(d); //ответ: 4
// b мы так же увеличили выше на единицу, поэтому 2 + 2 = 4 
alert(a); //3
// мы дважды увеличивали суфиксным вариантом переменную а, она стала 3 
alert(b); //3
// дважды увеличивали префиксным вариантом переменную b стало 3 


// 2. Чему будут равны переменные x и a в примере ниже? Написать почему так произошло
// (описать последовательность действий).
let a = 2;
let x = 1 + (a *= 2);
// переменная a будет равнятся 4, потому что такая запись, она сначало умножает, потом что вышло записывает в переменную, т.к оно в скобках посчитает сначало его,
// а затем х = 1 + 4 что будет равнятся 5.
// a = 4
// x = 5

// 3. Объявить две переменные a и b и задать им целочисленные произвольные начальные
// значения.
// Затем написать скрипт, который работает по следующему принципу:
// - если a и b положительные, вывести их разность (ноль можно считать положительным числом);
// - если а и b отрицательные, вывести их произведение;
// - * (этот пункт по сложнее, делайте по желанию) если а и b разных знаков, вывести их сумму;

let a = 3;
let b = -4;

    if (a >= 0  & b >= 0) {
        alert(a + b);
    } else if (a < 0 & b < 0) {
        alert(a * b);
    } else if (a > 0 & b < 0 || b > 0 & a < 0) {
        alert(a + b);
    }



    // 4. Реализовать основные 4 арифметические операции (+, -, /, *) в виде функций с двумя
    // параметрами. Т.е. например, функция для сложения должна принимать два числа, складывать их
    // и возвращать результат.
    // Обязательно использовать оператор return


    function calculatePositivNum(a, b) {
        let c = 0;
        c = a + b;
        return (c);
    }

    
    function calculateNegativNum(a, b) {
        let c = 0;
        c = a - b;
        return (c);
    }

    function calculateDivisionNum(a, b) {
        let c = 0;
        c = a / b;
        return (c);
    }

    function calculateMultiplyNum(a, b) {
        let c = 0;
        c = a * b;
        return (c);
    }


function mathOperation(arg1, arg2, operation) { 
    let a = arg1;
    let b = arg2; 
    switch (operation) {
        case calculateDivisionNum:
            alert(calculateDivisionNum(a, b));
            break;
        case calculateMultiplyNum:
            alert(calculateMultiplyNum(a,b));
            break;
        case calculateNegativNum:
            alert(calculateNegativNum(a,b));
            break;
        case calculatePositivNum:
            alert(calculatePositivNum(a,b));
            break;    
    }
}

mathOperation(5, 5, calculateMultiplyNum);




let money = prompt("Здравствуйте, какое количевство денег вы хотите поставить на счет в банке?");
let str = String(money);
let strLegnht = str.length;
let lastNumber = (str.slice(-1) );


switch (lastNumber) {
    case "1":
        alert( `Ваша сумма в ${money} рубль успешно зачисленна` );
        break;
    case "2":
        alert(  `Ваша сумма в ${money} рубля успешно зачисленна` );
        break;
    case "3":
        alert(  `Ваша сумма в ${money} рубля успешно зачисленна` );
        break;
    case "4":
        alert(  `Ваша сумма в ${money} рубля успешно зачисленна` );
        break;
    case "5":
        alert(  `Ваша сумма в ${money} рублей успешно зачисленна` );
        break;
    case "6":
        alert(  `Ваша сумма в ${money} рублей успешно зачисленна` );
        break; 
    case "7":
        alert(  `Ваша сумма в ${money} рублей успешно зачисленна` );
        break; 
    case "8":
        alert(  `Ваша сумма в ${money} рублей успешно зачисленна` );
        break; 
    case "9":
        alert(  `Ваша сумма в ${money} рублей успешно зачисленна` );
        break;
    case "0":
        alert(  `Ваша сумма в ${money} рублей успешно зачисленна` );
        break; 
    default:
        alert("pizda");
}