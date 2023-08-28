let number1 = 'number' + 23 + 32;

console.log(number1); // = number2332;  number + 23 = number23, number23 + 32 = number2332


let number2 = 41 + 1 + 'number';

console.log(number2); // = 42number; 41 + 2 = 42, 42 + number = 42number


let number3 = null + 1;

console.log(number3); // = 1; null(пустое значение) + 1 = 1


let number4 = 'five' + + 'two';

console.log(number4); // fiveNaN; при прибавлении двух строк, вторая автомотически становится NaN


let number5 = 2 && 7;

console.log(number5); // 7; обе строки true, по этому вернется последний операнд


let number6 = +'40' + +'2';

console.log(number6); // 42; При применении унарного оператора мы получаем сумму строк


let number7 = '10' - 5 === 6;

console.log(number7); // false; при применинении "-" происходит численная операция, при которой от строки 10 отнимается число 5, получается 5, а 5 не равняется 6


let number8 = true + false;

console.log(number8); // 1; в данном примере true приравнивается к 1, а false к 0, соответственно 1+0 = 1


let number9 = '4px' - 3;

console.log(number9); // NaN; поскольку строка 4px не может быть преобразована в число


let number10 = '4' - 3;

console.log(number10); // 1; строка "4" преобразовывается в число 4 в случае отнимание и выходит 4 - 3 = 1


let number11 = '2' + 3 ** 2;

console.log(number11); // 29; 3 ** 2 означает 3 во второй степени = 9, строка "2" + 9 = 29


let number12 = 12 / '6';

console.log(number12); // 2; строка 6 преобразовывается в число 6 и происходит деление


let number13 = 23 + 42 + 'number';

console.log(number13); //65number; происходит сложение 23+42 = 65, а после 65 + 'number' = 65number


let number14 = '10' + (5 === 6);

console.log(number14); // 10false; выражение в скобках не явлется правдивым, по этому итог будет false, далее происходит сложение строки '10' и false


let number15 = 'number' + 15 + 3;

console.log(number15); // number153; операция проводится с лева направо, поскольку number является строкой, то числа также преобразуются в троки и поочередно добавляются
