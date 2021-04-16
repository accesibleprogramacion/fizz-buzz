/* 

FizzBuzz

Escribí un programa que imprima cada número del 1 al 100 en una nueva linea
Por cada múltiplo de 3, que imprima "Fizz" en lugar del número
Por cada múltiplo de 5, que imprima "Buzz" en lugar del número
Para número que múltiplos de 3 y 5, que imprima "FizzBuzz" en lugar del número

*/

// Solución larga
for (i = 1; i <= 100; i++) {
    let result = '';
    if (i % 3 === 0) {
        result += 'Fizz';
    }
    if (i % 5 === 0) {
        result += 'Buzz';
    }
    console.log(result || i);
}

// Solución de una línea
for (i = 1; i <= 100; i++) console.log(`${i % 3 ? '': 'Fizz'}${i % 5 ? '': 'Buzz'}` || i);
