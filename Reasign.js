var firstName; //undefined
firstName = 'Daniel' //asignacion

console.log(firstName);

var lastName = 'Castillo'; // declarar / asignar
lastName ='Snow'; // reasignar
console.log(lastName);

var secondName = 'David'; // declarar / asignar
var secondName = 'Ana'; //reasignar

console.log(secondName);

//Let

let fruit = 'Apple'; //declarar/asignar
fruit = 'Pera'; // reasignar
console.log(fruit);
let fruit = 'Banana'; // error, no se repite la reasignacion utilizando let.

//Const

const animal = 'dog'; // declarar / asignar
animal = 'cat'; //ERROR. no se permite el reasignar cuando se utiliza const.

const vehicles = []; // En este caso si se pueden asignar diferentes valores con const, dado que no es una reasignacion, sino un renderizado.
vehicles.push('Tesla');
console.log(vehicles);