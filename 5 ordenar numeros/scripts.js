/*
Ordena 3 números de mayor a menor
Permutaciones con 3 elementos
Posibilidades 3! = 3*2*1 = 6
abc - 321
acb - 312
bac - 231
bca - 132
cab - 213
cba - 123
*/

 const numbers = document.getElementById('numbers');
 const result = document.getElementById('result');

 let a=prompt('Introduzca Primer Numero');
 let b=prompt('Introduzca segundo Numero');
 let c=prompt('Introduzca tercer Numero');

 numbers.textContent = `Los Numeros Intoducidos son ${a}, ${b}, ${c}`


// /* Ejercicio */

if(a>=b && a>=c){
    if(b>c){
        result.textContent = `el orden es: ${a}, ${b}, ${c}`
    }else{
        result.textContent = `el orden es: ${a}, ${c}, ${b}`
    }
}else if(b>=a && b>=c){
    if(a>c){
        result.textContent = `el orden es: ${b}, ${a}, ${c}`
    }else{
        result.textContent = `el orden es: ${b}, ${c}, ${a}`
    }
}else if(c>=a && c>=b){
    if(a>b){
        result.textContent = `el orden es: ${c}, ${a}, ${b}`
    }else{
        result.textContent = `el orden es: ${c}, ${b}, ${a}`
    }
}



