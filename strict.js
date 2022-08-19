'use strict'; //El modo estricto hace que se sigan las reglas de JS estrictamente, es decir sino declaramos correctamente una variable, JS no declarara el var por default.
pi = 3.1416;
console.log(pi);

function myFunctionStrict(){
    'use strict';
    return pi = 3.1416;
}

console.log(myFunctionStrict());