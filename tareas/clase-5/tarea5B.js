//Lamentablemente esto no lo pude hacer, pero lo tengo que aprender. 

botonCalcular = document.querySelector("#boton-calcular");





botonCalcular.onclick = function () {
    let horasTotales = document.querySelectorAll('.horas');
    let horTotArr = Array.prototype.slice.call(horasTotales);
    let contenedorHoras = 0;
    
    for (let i = 0; i < horTotArr.length; i++){
        contenedorHoras = contenedorHoras + Number(horTotArr[i].value)
        
    }




    let minutosTotales = document.querySelectorAll('.minutos');
    console.log(minutosTotales);
    let minTotArr = Array.prototype.slice.call(minutosTotales);
    let contenedorMinutos = 0;
    

    for (let i = 0; i < minTotArr.length; i++){
        
        contenedorMinutos = contenedorMinutos + Number(minTotArr[i].value)
        console.log(minTotArr.length);
        console.log(contenedorMinutos);
        
    }



    let segundosTotales = document.querySelectorAll('.segundos');
    console.log(segundosTotales);
    let segTotArr = Array.prototype.slice.call(segundosTotales);
    let contenedorSegundos = 0;
    

    for (let i = 0; i < minTotArr.length; i++){
        
        contenedorSegundos = contenedorSegundos + Number(segTotArr[i].value)
        console.log(segTotArr.length);
        console.log(contenedorSegundos);
        
    }

    


    while (contenedorSegundos > 59){
        contenedorSegundos = contenedorSegundos - 60
        contenedorMinutos++
    }

    while (contenedorMinutos > 59){
        contenedorMinutos = contenedorMinutos - 60
        contenedorHoras++
    }



    document.querySelector('#resultado-horas').value = contenedorHoras;
    document.querySelector('#resultado-minutos').value = contenedorMinutos;
    document.querySelector('#resultado-segundos').value = contenedorSegundos;
    
    
    
    
    
    
    
    return false;
}