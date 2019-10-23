//PLANTILLAS DE TEXTO
let nombre = prompt('Nombre: ')
let apellido = prompt('Apellido: ');

//var texto = 'Mi nombre es: '+nombre+'. <br>Mi apellido es: '+apellido;

let texto = `
    <h1>Datos personales</h1>
    <h3>Nombre: ${nombre}</h3>
    <h3>Apellido: ${apellido}</h3>
`;

document.write(texto)

let val = `
    Hola amigos
    Qué tal?
`;

console.log(val)
document.write(val)