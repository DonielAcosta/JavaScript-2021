
/* 
Array -Metodos II

.from(iterable) - Convierte en array el elemento iterable

.sort([callback]) - Ordena los elementos de un array alfabeticamnete (valor Unicode), si le pasamos un callback los ordena en funcion del algoritmo que le pasemos.

.forEach(callbak(currentValue,[index])) - ejecuta la funcion indicada una vez por cada elemento del array.

.some(callback) - comprueba si al menos un elemento del array cumple la condicion.

.every(callback) - Comprueba si todos los elementos del array cumplen la condicion.

.map(callback) - transforma todos los elementos del array y devuelve un array.

*/

let word = 'Hola mundo';

console.log(Array.from(word));
console.log(word.split(' '))