// let Tc = 3;
// let Tf = (9 / 5) * Tc + 32;
// alert (Tf);

  
// let name = "Василий";
// let admin = name;
// alert(admin); 


// Задание No3

// let result = 10 + 10 + "10";
// alert(result);
// 1. 10 прибавляем 10 как числа = 20,
// затем 20 как число прибавляем к 10(строке) выходит 2010

// let result = 10 + "10" + 10;
// alert(result);
//  10 как число прибавляем к строке 10, тоже самое и с последней десяткой.

// let result = 10 + 10 + +"10";
// alert(result);
// две десятки первые это числа они прибавляются = 20, 
// а следующая десяточка приводится к числу т.к перед ней стоит + это как Nubmer 

// let result = 10 / -"";
// alert(result);
// пустая строка это 0, а деление числа на ноль = infinity, поэтому передается -бесконечность

// let result = 10 / +"2.5";
// alert(result);
// выведет NaN, потому что js пытается строку 2 и 5 перевести в число и поделить на 10, но оно не может перевести как то так, если бы была точка, всебы  работало