//Wait page load
window.addEventListener("load", iniciarBoton);

const botonCalculo = document.querySelector("#boton-calcular")
//definir spans HTML
let spanDolarCien = document.querySelector("#subtotal-dolar-cien");
let spanDolarCincuenta = document.querySelector("#subtotal-dolar-cincuenta");
let spanDolarVeinte = document.querySelector("#subtotal-dolar-veinte");
let spanDolarDiez = document.querySelector("#subtotal-dolar-diez");
let spanDolarCinco = document.querySelector("#subtotal-dolar-cinco");
let spanDolarUno = document.querySelector("#subtotal-dolar-uno");
//span de billetes de cordoba
let spanCordobaMil = document.querySelector("#subtotal-cordoba-mil");
let spanCordobaQuinientos = document.querySelector("#subtotal-cordoba-quinientos");
let spanCordobaDoscientos = document.querySelector("#subtotal-cordoba-doscientos");
let spanCordobaCien = document.querySelector("#subtotal-cordoba-cien");
let spanCordobaCincuenta = document.querySelector("#subtotal-cordoba-cincuenta");
let spanCordobaVeinte = document.querySelector("#subtotal-cordoba-veinte");
let spanCordobaDiez = document.querySelector("#subtotal-cordoba-diez");
//span de monedas de cordoba
let spanCordobaCinco = document.querySelector("#subtotal-cordoba-cinco");
let spanCordobaUno = document.querySelector("#subtotal-cordoba-uno");
let spanCordobaCincuentaCentavos = document.querySelector("#subtotal-cordoba-cincuenta-centavos");
let spanCordobaVeinticincoCentavos = document.querySelector("#subtotal-cordoba-veinticinco-centavos");
let spanCordobaDiezCentavos = document.querySelector("#subtotal-cordoba-diez-centavos");
//span para total de cordobas
let spanTotal = document.querySelector("#total-cordoba");
console.log("spans definidos");



function iniciarBoton() {
    console.log("boton iniciado");
    botonCalculo.addEventListener("click", calculo)
}

function calculo() {
    //definir tipo de cambio
    let tipoCambio = parseFloat(document.querySelector("#tipo-de-cambio").value);
    console.log("tipo cambio obtenido");

    //definir cantidad de billetes de dolar
    let cantidadDolarCien = parseInt(document.querySelector("#cantidad-dolar-cien").value);
    let cantidadDolarCincuenta = parseInt(document.querySelector("#cantidad-dolar-cincuenta").value);
    let cantidadDolarVeinte = parseInt(document.querySelector("#cantidad-dolar-veinte").value);
    let cantidadDolarDiez = parseInt(document.querySelector("#cantidad-dolar-diez").value);
    let cantidadDolarCinco = parseInt(document.querySelector("#cantidad-dolar-cinco").value);
    let cantidadDolarUno = parseInt(document.querySelector("#cantidad-dolar-uno").value);
    //definir cantidad de billetes de cordoba
    let cantidadCordobaMil = parseInt(document.querySelector("#cantidad-cordoba-mil").value);
    let cantidadCordobaQuinientos = parseInt(document.querySelector("#cantidad-cordoba-quinientos").value);
    let cantidadCordobaDoscientos = parseInt(document.querySelector("#cantidad-cordoba-doscientos").value);
    let cantidadCordobaCien = parseInt(document.querySelector("#cantidad-cordoba-cien").value);
    let cantidadCordobaCincuenta = parseInt(document.querySelector("#cantidad-cordoba-cincuenta").value);
    let cantidadCordobaVeinte = parseInt(document.querySelector("#cantidad-cordoba-veinte").value);
    let cantidadCordobaDiez = parseInt(document.querySelector("#cantidad-cordoba-diez").value);
    //definir cantidad de monedas de cordoba
    let cantidadCordobaCinco = parseInt(document.querySelector("#cantidad-cordoba-cinco").value);
    let cantidadCordobaUno = parseInt(document.querySelector("#cantidad-cordoba-uno").value);
    let cantidadCordobaCincuentaCentavos = parseInt(document.querySelector("#cantidad-cordoba-cincuenta-centavos").value);
    let cantidadCordobaVeinticincoCentavos = parseInt(document.querySelector("#cantidad-cordoba-veinticinco-centavos").value);
    let cantidadCordobaDiezCentavos = parseInt(document.querySelector("#cantidad-cordoba-diez-centavos").value);
    console.log("cantidades definidas");

    //realizar multiplicaciones
    //multiplicacion de billetes de dolar
    let subtotalDolarCien = ((100 * cantidadDolarCien) * tipoCambio).toFixed(2);    
    let subtotalDolarCincuenta = ((50 * cantidadDolarCincuenta) * tipoCambio).toFixed(2);
    let subtotalDolarVeinte = ((20 * cantidadDolarVeinte) * tipoCambio).toFixed(2);
    let subtotalDolarDiez = ((10 * cantidadDolarDiez) * tipoCambio).toFixed(2);
    let subtotalDolarCinco = ((5 * cantidadDolarCinco) * tipoCambio).toFixed(2);
    let subtotalDolarUno = ((1 * cantidadDolarUno) * tipoCambio).toFixed(2);
    //multiplicacion de billetes de cordoba
    let subtotalCordobaMil = (1000 * cantidadCordobaMil).toFixed(2);
    let subtotalCordobaQuinientos = (500 * cantidadCordobaQuinientos).toFixed(2);
    let subtotalCordobaDoscientos = (200 * cantidadCordobaDoscientos).toFixed(2);
    let subtotalCordobaCien = (100 * cantidadCordobaCien).toFixed(2);
    let subtotalCordobaCincuenta = (50 * cantidadCordobaCincuenta).toFixed(2);
    let subtotalCordobaVeinte = (20 * cantidadCordobaVeinte).toFixed(2);
    let subtotalCordobaDiez = (10 * cantidadCordobaDiez).toFixed(2);
    //multiplicacion de monedas de cordoba
    let subtotalCordobaCinco = (5 * cantidadCordobaCinco).toFixed(2);
    let subtotalCordobaUno = (1 * cantidadCordobaUno).toFixed(2);
    let subtotalCordobaCincuentaCentavos = (0.5 * cantidadCordobaCincuentaCentavos).toFixed(2);
    let subtotalCordobaVeinticincoCentavos = (0.25 * cantidadCordobaVeinticincoCentavos).toFixed(2);
    let subtotalCordobaDiezCentavos = (0.1 * cantidadCordobaDiezCentavos).toFixed(2);
    console.log("multiplicacion hecha");

    let totalCordoba = (
        parseFloat(subtotalDolarCien) + parseFloat(subtotalDolarCincuenta) + parseFloat(subtotalDolarVeinte) + parseFloat(subtotalDolarDiez) +
        parseFloat(subtotalDolarCinco) + parseFloat(subtotalDolarUno) +
        parseFloat(subtotalCordobaMil) + parseFloat(subtotalCordobaQuinientos) + parseFloat(subtotalCordobaDoscientos) + parseFloat(subtotalCordobaCien) +
        parseFloat(subtotalCordobaCincuenta) + parseFloat(subtotalCordobaVeinte) + parseFloat(subtotalCordobaDiez) + 
        parseFloat(subtotalCordobaCinco) + parseFloat(subtotalCordobaUno) + parseFloat(subtotalCordobaCincuentaCentavos) + parseFloat(subtotalCordobaVeinticincoCentavos) + parseFloat(subtotalCordobaDiezCentavos)
    );
    console.log("total calculado");

    //escribir spans
    spanDolarCien.innerHTML = subtotalDolarCien;
    spanDolarCincuenta.innerHTML = subtotalDolarCincuenta;
    spanDolarVeinte.innerHTML = subtotalDolarVeinte;
    spanDolarDiez.innerHTML = subtotalDolarDiez;
    spanDolarCinco.innerHTML = subtotalDolarCinco;
    spanDolarUno.innerHTML = subtotalDolarUno;
    spanCordobaMil.innerHTML = subtotalCordobaMil;
    spanCordobaQuinientos.innerHTML = subtotalCordobaQuinientos;
    spanCordobaDoscientos.innerHTML = subtotalCordobaDoscientos;
    spanCordobaCien.innerHTML = subtotalCordobaCien;
    spanCordobaCincuenta.innerHTML = subtotalCordobaCincuenta;
    spanCordobaVeinte.innerHTML = subtotalCordobaVeinte;
    spanCordobaDiez.innerHTML = subtotalCordobaDiez;
    spanCordobaCinco.innerHTML = subtotalCordobaCinco;
    spanCordobaUno.innerHTML = subtotalCordobaUno;
    spanCordobaCincuentaCentavos.innerHTML = subtotalCordobaCincuentaCentavos;
    spanCordobaVeinticincoCentavos.innerHTML = subtotalCordobaVeinticincoCentavos;
    spanCordobaDiezCentavos.innerHTML = subtotalCordobaDiezCentavos;

    spanTotal.innerHTML = totalCordoba;
}    