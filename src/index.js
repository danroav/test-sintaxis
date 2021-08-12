import "./styles.css";
import { User, diego, daniel } from "./objetos.js";

var e = new User();
diego.desdeAfuera();
daniel.desdeDentro();

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
//Al mostrar en consola mostrar el resultado y también el tipo de datos del resultado

//Utilizar nombres de variables y funciones en terminos significativos, es decir
//evitar nombrar las variables a, b, x, i, j sino mas bien indice, listaDeItems,
//numeroElementos

/*
IDENTIFICADORES, VARIABLES Y TIPOS DE DATOS
 */
//1. Escribir comentarios de 2 formas
//holla
/*hola
Abad Beniz Sossa
 munod
 1
*/
//2. Definir una variable, de 2 formas y definir una constante Alejandro Chile
var x = 1;
let y = "hola";
const z = 2;
y = 2;

//3. Mostrar en consola y definir un arreglo de 2 formas
//Fidel Moises Aldana Mejia
var a = new Array();
var b = [2, 3, 4, 5, "abc"];
console.log(a);
console.log(b);

//4. Mostrar en consola y definir objetos de 3 formas
var obj = new Object();
var obj2 = { nombre: "pepe", edad: 20 };
var obj3 = { "123": a }; // luis Rueda

//5. Mostrar en consola y definir cadenas de 2 formas
//Jacqueline Guerrero Quiroga
var cadena = "Hola Mundo";

console.log(cadena);

var cad = String("Hola");
console.log(cad);
//6. Mostrar en consola y definir cadenas en multiples
//lineas
// Mauricio Aramayo / Erlan Mendoza
var x =
  "hola mundooooooooooooooooo" + "oooooooooooooooooooooooooooooooooooooooooo ";
console.log(x);
var a = `ssssssssssssssssss
ssssssssss;`;
console.log(a);
var cadena2 = "sssssssssssssssssssssss\
sssss";
console.log(cadena2);
//7. Mostrar en consola y definir una cadena con caracteres especiales \,',"
//Joan Saravia / Kevin Acosta
var cadena = '"hola"';
var cadenaescape1 = " \\ Escape";
var cadenaescape2 = " 'esto es una comilla simple'";
console.log(cadena);
console.log(cadenaescape1);
console.log(cadenaescape2);
//8. Declarar dos variables con los nombres [minombre] es igual a [Minombre] con
// valores de numeros diferentes y mostrar en consola la siguiente expresion
// [minombre]==[minombre]
//Brenda Flores Aleluya
var minombre = 1;
var Minombre = 8;
console.log(minombre === Minombre);

//9. Mostrar en consola un texto de Cierto o Falso si el nombre de una variable
//puede comenzar con un numero Alexandro Gorena

//var 1asd=23;
console.log(
  "nose puede definir una variable con un nombre que comience con un numero"
);

//10. Mostrar en consola y definir el valor de una variable del tipo entero
//bryan villegas
var numero = 5;
console.log(numero);
//11. Mostrar en consola y definir el valor de una variable del tipo double y un
//numero double menor a 1
//Juan Jose Torrico S.
var double = 0.5;
var double2 = 10.45;
var double3 = 100.0;
console.log("Valor tipo Double  menor a uno: " + double);
console.log("Valor tipo Double  mayor a uno: " + double2);
console.log("valor de un double " + double3);

//12. Mostrar en consola y definir el valor de una variable numero con el formato de
//exponente base 10
//Royer Mendez Tarifa
var valor = Math.pow(3, 10); //3^10
var valorNotacionCientifica = 34.1234e3; //34123.4
console.log(valorNotacionCientifica);
//13. Monstrar en consola y definir un numero BigInt
//marco silva
var num = 20n;
console.log(num.toString());
//14. Mostrar en consola y definir dos variable booleanas con los posibles valores
//booleanos
// Jhon Rodrigo Acuña

//15. Mostrar en consola y declarar una variable con valor indefinido
// Oscar Aguilar

//16. Mostrar en consola y declarar una variable con valor nulo
// Mauricio Aramayo

//17. Declarar una funcion llamarA[Apellido] que devuelva [Apellido]
//  Carlos Arce

//18. Declarar una variable con referencia a la funcion definida
//anteriormente (ejercicio 17)  y mostrar en consola la ejecucion de esa variable
// Sergio Barrios

//19. Declarar una variable con la fecha de hoy, agregar 30 dias a la fecha y
//mostrar en consola el resultado
// Jose Campero

//20. Declarar una funcion probarArgumentos(argumentos) que utilice el objeto
//arguments de la función para mostrar en consola todos los valores de argumentos
//concatenados. Mostrar en consola el siguiente caso probarArgumentos(6,"abc",true)
// Luis Chipana

//21. Declarar una funcion agregarElementoArray(arreglo) que reciba un arreglo de
//argumentos y muestre en consola la longitud del arreglo, luego que
//agregue tres elementos "aaa", 12, {x:true},.45,1E10 al arreglo, luego que muestre
//en consola el contenido del arreglo y luego que quite el ultimo elemento de la
//lista, luego que quite el elemento en el indice 2 y finalmente muestre en
//consola el arreglo resultante
// Ivan Figueroa

/*
OPERADORES ARITMETICOS Y LOGICOS
 */
//22. Mostrar en consola y declarar una funcion que calcule la potencia de una base
//y un exponente
//Renato Francachs

//23. Mostrar en consola y declarar una funcion que calcule si un numero es par o
//impar
//Manuel Jimenez

//24. Mostrar en consola y declarar una funcion con 3 parametros de distinto tipo
// que devuelva la concatenación de esos parametros, de 2 formas posibles
//Pablo Martinez

//25. Mostrar en consola y declarar el resultado de una operacion ternaria
// Marisol Mendieta
/*
SENTENCIAS SELECTIVAS Y REPETITIVAS
*/
//26. Mostrar en consola y declarar el resultado de una sentencia selectiva
//de 2 formas posibles
// Robert Miranda

//27. Mostrar en consola y declarar el resultado de una sentencia repetitiva
//de 4 formas posibles
//  Joaquin Ponce

/*
TIPOS DE REFERENCIA
*/

//28. Crear una clase Persona con un constructor que reciba el nombre y apellido
//las propiedades nombre y apellido y un metodo nombreCompleto que concatene las dos propiedades
// Richard Quispe

//29. Instanciar la clase Persona con el nombre de usted como alumno y mostrar el resultado en consola
// Michael Titizano

/*
FUNCIONES ANONIMAS
*/

//30. Declarar una variables con una funcion anonima con un parametro y
// otra funcion anonima con 2 parametros, mostrar los resultados
// de ejecutar ambas variables
// Karen Vargas
