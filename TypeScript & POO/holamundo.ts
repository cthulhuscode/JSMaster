/*HOLA MUNDO */
console.log('Hola mundo con TypeScript');
console.log('Creo que ya lo arreglé ');


/*
 -- error ts6053 file '*.ts' not found
     tsc --init
     tsc -p ./ -w
*/


/*VARIABLES Y TIPOS DE DATOS */

//string
let cadena: string = 'enridev.com';

//number
let edad: number = 19;

//boolean
let flag: boolean = true;

//any - cualquier cosa
let xValor: any = 'xdxd';
xValor = 12; //sí se puede debido al tipo de valor que acepta cualquier cosa

//Array
let lenguajes: Array<string> = ["PHP", "Python", "C#", "Javascript"]; //Se crea un arreglo de cadenas
                    //any
                    //number

let lang: string[] = ['JS','Py']; //otra forma de definirlo
let years: number[] = [12.2, 31.5];

console.log(cadena, edad, flag, xValor, lenguajes, lang, years);

//MÚLTIPLES TIPOS DE DATOS
let texto: string | number = 'ora raza';
texto = 11;
console.log(texto);

//TIPOS DE DATOS PERSONALIZADOS
//se utiliza la palabra reservada type
type alfanumerico = string | number;
let parrafo: alfanumerico = 'Ora raza cómo andan. Cambiaré el valor a 8';
console.log('Tipo de datos: ' + typeof parrafo);
console.log(parrafo);

parrafo = 8;
console.log('Tipo de datos: ' + typeof parrafo);
console.log(parrafo);

//LET - utilizado a nivel de bloque
//VAR - es global

//FUNCIONES
function getFuncion(num = 1){ //Función normal en JS
    return 'Función normal de JS';
}
console.log(getFuncion());

//función en TS
function getNumero(num: number = 1):string{
    return 'El número es = ' + num;
}
console.log(getNumero(99));
