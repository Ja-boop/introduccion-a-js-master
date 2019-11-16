const $botonIngreso = document.querySelector("#introducir-datos");

$botonIngreso.onclick = function () {
    const nombreDeUsuario = document.querySelector('#primer-nombre').value;
    let bienvenida = document.querySelector("h1") 
    bienvenida.innerText = ("Bienvenido, " + nombreDeUsuario + "!");  
    
    const $primerNombre = document.querySelector('#primer-nombre').value
    const $segundoNombre = document.querySelector('#segundo-nombre').value
    const $apellido = document.querySelector('#apellido').value
    const $edadUsuario = document.querySelector('#edadUsuario').value
    
   const datosUsuario = [$primerNombre, $segundoNombre, $apellido, $edadUsuario]

   
   document.querySelector('#resultado').value=datosUsuario;
    
    return false;
}

