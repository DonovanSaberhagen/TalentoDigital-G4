/* VARIABLES Y TIPOS DE DATOS */
//Variables=> su nombre NO puede ser el mismo que una palabra reservada de JS.
//            su nombre NO puede repetirse.
//            su nombre NO puede empezar con un número.
//            su nombre NO puede empezar con símbolos EXCEPTO $ Y _ .
//            distingue mayúsculas de minúsculas.

//Declaración de una variable y asignación de valor a una variable
var oracion = "No usar var porque es antiguo"; /*💀 VAR ya no se usa  */

let oracionNueva = "Esto si se usa"; /*✅ variable con LET*/
const oracionNueva2 =
  "Esto tambien se usa pero no siempre "; /* variable con CONST : no se le puede reasignar el valor */

/* Declaración de una variable VS Asignación de un valor VS Reasignación de un valor de una variable */

let cadenaDeTexto; /* 💀 Declaración de la variable=> su valor por el momento undefined */
cadenaDeTexto =
  "Esto es un string"; /* Asignación de valor de una variable, luego de su declaración */

let numero = 5; /* ✅Declaración y asignación de valor a una variable */
numero = 10; /* Reasignación de valor */

/* -----------------------TIPOS DE DATOS------------------------- */
let entero = 10; //Number
let decimal = 2.5; //Number
let negativo = -2; //Number
let negativoDecimal = -2.5; //Number
let notAnumber = NaN; //Number

var frase = "Hola  ¿Como  estas?, \n amiguit@"; //String
var letra = "d"; //String
var caracter = "5"; //String

let verdadero = true; //Boolean
let falso = false; //Boolean

let nulo = null; //Null => null indica que su valor es nulo

let indefinido = undefined; //💀 Undefined

/* -----------------------OPERADORES MATEMÁTICOS------------------------- */
/* Las operaciones matemáticas arrojan un valor de salida único */
let numeroFavorito = 22;

let suma = numeroFavorito + 2; //24
let resta = 5 - 5; // 0
let multipliacion = 5 * 5; //25
let potencia = 2 ** 3; // 8
let division = 25 / 5; // 5

let residuoDeDivison = 20 % 5; // 25/5 => 0 sin resto
console.log(residuoDeDivison);
let esPar = 3 % 2; /* Si da 0 es par, sino es impar */
