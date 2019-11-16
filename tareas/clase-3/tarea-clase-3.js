// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!

const preguntarNombre = prompt("¿Cual es tu nombre?").toLowerCase();
const miNombre = "viktor";
const nombreTio = "pocho";

if (preguntarNombre === miNombre) {
    console.log(`Hola, Tocayo! Yo tambien me llamo Viktor`);
} else if (preguntarNombre === nombreTio) {
    console.log(`Hola Pocho, te llamas igual que mi tio`);
} else if (preguntarNombre.trim().length === 0) {
    console.log("No ingresaste ningun nombre")    
} else {
    console.log("Hola " + preguntarNombre + "!");
}



//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.

const preguntarEdad = prompt("¿Cuantos años tenes?");
const miEdad = 19;

if (preguntarEdad == miEdad) {
    console.log(`Ah! tenes la misma edad que yo`);
} else if (preguntarEdad < miEdad) {
    console.log("Mira vos che, sos menor que yo!");
} else if (preguntarEdad > miEdad) {
    console.log("Sos mas grande que yo!");
}

//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.


const verificacionDocumento = prompt("Contesta con un 'si' o un 'no', ¿Tenes documento?").toLowerCase();
if (verificacionDocumento === "si") {
    const verificacionEdad = Number(prompt("¿Cuantos años tenes?"));
    if (verificacionEdad >= 18) {
        console.log("Bienvenido, puede pasar");
    } else {
        console.log("Lo lamento, no tiene permitido entrar");
    }
} else if (verificacionDocumento === "no") {
    console.log("No tiene permitido entrar, disculpe.")
} else {
    console.log("No entiendo su respuesta");
}



