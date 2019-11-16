/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

const botonIngreso = document.querySelector('#ingresar-numero');
const cantitadDeFamiliares = document.querySelector('#caja-familiares');
const botonCalcular = document.querySelector('#calcular');





function crearFormulario(numero1) {
    const nodoPagina = document.querySelector('body');
    const nuevoForm = document.createElement('form');
    const nuevoLabel = document.createElement('label');
    const nuevoBr = document.createElement('br');
    const textoParrafo = document.createTextNode('Edad: ');
    const nuevoInput = document.createElement('input');
    nuevoInput.setAttribute("class", "edad-familias")



    nodoPagina.appendChild(nuevoForm);
    nuevoForm.appendChild(nuevoBr);
    nuevoForm.appendChild(nuevoBr);
    nuevoForm.appendChild(nuevoLabel);
    nuevoLabel.appendChild(textoParrafo);
    nuevoLabel.appendChild(nuevoInput).type = "number";




}

function edadMasBajaYAlta(numbers) {
    numbers.sort();
    return [numbers[0], numbers[numbers.length - 1]];
}

function promedioEdad(numbers) {
    let total = 0, i;
    for (i = 0; i < numbers.length; i += 1) {
        total += numbers[i];
    }
    return total / numbers.length;
}






botonIngreso.onclick = function () {

    for (i = 0; i < cantitadDeFamiliares.value; i++) {
        crearFormulario(cantitadDeFamiliares[i]);


    }


    botonCalcular.onclick = function () {
        let edadFamilias = document.querySelectorAll('.edad-familias');
        let edadFamiliasArr = Array.prototype.slice.call(edadFamilias);
        let contenedorArray = [];


        for (i = 0; i < edadFamiliasArr.length; i++) {
            contenedorArray.push(Number(edadFamiliasArr[i].value))
            console.log(contenedorArray)
            

        }
        
        document.querySelector('#resultados').innerText = `La edad mas baja y la mas alta son: ${edadMasBajaYAlta(contenedorArray)}`
        document.querySelector('#promedio').innerText = `El promedio de edad de tu familia es de: ${promedioEdad(contenedorArray)}`

        return false;
    }




    return false;
}





/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/
/*
botonIngreso = document.querySelector('#ingresar-numero');
cantitadDeFamiliares = document.querySelector('#caja-familiares');
botonCalcular = document.querySelector('#calcular');
resultados = document.querySelector('#resultados');
contenedor = 0;


 */