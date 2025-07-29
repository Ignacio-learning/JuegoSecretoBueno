

let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numerodeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if(numerodeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${intentos === 1 ? 'Vez' : ' veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //el usuario no ha acertado.
        if(numerodeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El numero secreto es menor');
            }else {
                asignarTextoElemento('p', 'El numero secreto es mayor');
            }
            intentos++;
            limpiarCaja();
        }
        return;
    }

   function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
   }
    

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    console.log(numeroGenerado);
    console.log(listaNumeroSorteados);
// si ya sorteamos todos los numeros
    if (listaNumeroSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');

    } else {

    // si el numero generado ya fue sorteado, se vuelve a generar
    if (listaNumeroSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
        
        }  else {
        listaNumeroSorteados.push(numeroGenerado);
        // se retorna el numero generado
        // si el numero no fue sorteado, se agrega a la lista
        return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
    

function reiniciarJuego() {
    //limpiar la caja de texto
    limpiarCaja();
    //indicar mensaje de intervalos de numeros
    condicionesIniciales();

    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
    //todos los arreglos parten en la posicion 0
    // los [] sirven para acceder a los elementos de un arreglo y crear listas,
    

}
condicionesIniciales(); 



/*function hola() {
    console.log('Hola, mundo');
}

function mostrarNombre(nombre) {
console.log(`hola, ${nombre}!`);
}
mostrarNombre('Nacho');

function numeroPedido(numero) {
    return numero * 2;
}
let resultado = numeroPedido(5);
console.log(resultado);

function calcularpromedio(numero1 + numero2 + numero3) {
    return (numero1 + numero2 + numero3) / 3;

}
let resultadopromedio = calcularpromedio(5, 10, 15);
console.log(resultadopromedio);


function numeroMayor() {
    let numero1 = parseInt(prompt('Ingrese el numero 1';))
    let numero2 = parseInt(prompt('Ingrese el numero 2'));
    let resultado = numero1 > numero2 ? numero1 : numero2;
    alert(`El numero mayor es: ${resultado}`);
}

function encontrarMayor(a, b) {
  return a > b ? a : b;
}

let numeroMayor = encontrarMayor(15, 9);
console.log(numeroMayor);

function multiplicarNumeros(numero) {
    return numero * numero;
}
let resultadoMultiplicacion = multiplicarNumeros(4);
console.log(resultadoMultiplicacion);
*/


