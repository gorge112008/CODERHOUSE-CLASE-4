/*
//FUNCIÓN MOSTRANDO NOMBRE:
function saludar(momento, nombre) {
    console.log('Buenas ' +momento+","+nombre);
}

saludar('noches','Jorge');

let nombre = prompt ("Ingresa tu nombre");
saludar('noches',nombre);

//FUNCIÓN SUMANDO NÚMEROS:
function sumar(numeroA,numeroB) {
    let resultado = numeroA+numeroB;
    return resultado;
}

function mostrar(mensaje) {
    console.log(mensaje);
}

let numeroA = parseInt(prompt('Ingresa el primer operando de la suma'));
let numeroB = parseInt(prompt('Ingresa el segundo operando de la suma'));
mostrar(sumar(numeroA,numeroB));
*/

//FUNCIÓN ELABORANDO UN CALCULADORA:

function sumar(numeroA,numeroB) {
    resultado = numeroA+numeroB;
    return resultado;
}
function restar(numeroA,numeroB) {
    resultado = numeroA-numeroB;
    return resultado;
}
function multiplicar(numeroA,numeroB) {
    resultado = numeroA*numeroB;
    return resultado;
}
function dividir(numeroA,numeroB) {
    resultado = numeroA/numeroB;
    return resultado;
}

function mostrar(mensaje) {
    console.log(mensaje);
    alert("El resultado es: "+mensaje);
}

function calcular(numeroA,numeroB,signo) {
   let resultado=0;
switch (signo) {
    case "+":
        resultado = sumar (numeroA,numeroB);
        break;
    case "-":
        resultado = restar (numeroA,numeroB);
        break;
    case "*":
        resultado = multiplicar (numeroA,numeroB);
        break;
    case "/":
        resultado = dividir (numeroA,numeroB);
        break;
    default:
        console.log('Dato no valido');
        alert('Dato no valido');
}
return resultado;
}


let numero1 = parseInt(prompt('Ingresa el primer operando'));
let numero2 = parseInt(prompt('Ingresa el segundo operando'));
let operacion = prompt ("Ingresa el signo de la operacion: + - * /");
mostrar(calcular(numero1,numero2, operacion));

/*
//FUNCIÓN ANÓNIMA:
function mostrar(mensaje) {
    console.log(mensaje);
}

const suma= function (a,b){
    return a+b;
}

mostrar (suma(50,50));

//FUNION FLECHA:

const resta = (a,b) => {
    return a-b;
}
mostrar (resta(50,50));

//REDUCCIÓN DE FUNCIONES FLECHA:
const division = (a,b) => {return a/b};
const multiplicacion = (a,b) =>a*b;
const comision = x => x*0.5;
const mensaje = x => 'El mensaje es'+x;
*/