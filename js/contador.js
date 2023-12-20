window.addEventListener("load", definirValores);

//definir boton calculo total
function cargarBotonCalculo() {
    const botonCalculo = document.getElementById("boton-calcular")
    console.log("boton definido");
    botonCalculo.addEventListener("click", getTipoCambio)
}

//definir tipo de cambio
function getTipoCambio() {
    let tipoCambio = document.getElementById("tipo-de-cambio");
    console.log("tipo de cambio obtenido")

    multiplicacion(tipoCambio);
}

function definirValores() {
    //definir valores de billetes de dolar
    const dolarCien = 100;
    const dolarCincuenta = 50;
    const dolarVeinte = 20;
    const dolarDiez = 10;
    const dolarCinco = 5;
    const dolarUno = 1;

    //definir valores de billetes de cordoba
    const cordobaMil = 1000;
    const cordobaQuinientos = 500;
    const cordobaDoscientos = 200;
    const cordobaCien = 100;
    const cordobaCincuenta = 50;
    const cordobaVeinte = 20;
    const cordobaDiez = 10;
    
    //definir valores de monedas de cordoba
    const cordobaCinco = 5;
    const cordobaUno = 1;
    const cordobaCincuentaCentavos = 0.50;
    const cordobaVeinticincoCentavos = 0.25;
    const cordobaDiezCentavos = 0.10;

    console.log("valores definidos")
    definirCantidades();
}

function definirCantidades() {
    //definir cantidad de billetes de dolar
    let cantidadDolarCien = document.querySelector("#cantidad-dolar-cien")
    let cantidadDolarCincuenta = document.querySelector("#cantidad-dolar-cincuenta")
    let cantidadDolarVeinte = document.querySelector("#cantidad-dolar-veinte")
    let cantidadDolarDiez = document.querySelector("#cantidad-dolar-diez")
    let cantidadDolarCinco = document.querySelector("#cantidad-dolar-cinco")
    let cantidadDolarUno = document.querySelector("#cantidad-dolar-uno")

    //definir cantidad de billetes de cordoba
    let cantidadCordobaMil = document.getElementById("cantidad-cordoba-mil")
    let cantidadCordobaQuinientos = document.querySelector("#cantidad-cordoba-quinientos")
    let cantidadCordobaDoscientos = document.querySelector("#cantidad-cordoba-doscientos")
    let cantidadCordobaCien = document.querySelector("#cantidad-cordoba-cien")
    let cantidadCordobaCincuenta = document.querySelector("#cantidad-cordoba-cincuenta")
    let cantidadCordobaVeinte = document.querySelector("#cantidad-cordoba-veinte")
    let cantidadCordobaDiez = document.querySelector("#cantidad-cordoba-diez")

    //definir cantidad de monedas de cordoba
    let cantidadCordobaCinco = document.querySelector("#cantidad-cordoba-cinco")
    let cantidadCordobaUno = document.querySelector("#cantidad-cordoba-uno")
    let cantidadCordobaCincuentaCentavos = document.querySelector("#cantidad-cordoba-cincuenta-centavos")
    let cantidadCordobaVeinticincoCentavos = document.querySelector("#cantidad-cordoba-veinticinco-centavos")
    let cantidadCordobaDiezCentavos = document.querySelector("#cantidad-cordoba-diez-centavos")
    
    console.log("cantidades definidas")
    definirSpans();
}

function definirSpans() {
    //definir spans HTML
    //subtotal de billetes de dolar
    let spanDolarCien = document.querySelector("#subtotal-dolar-cien")
    let spanDolarCincuenta = document.querySelector("#subtotal-dolar-cincuenta")
    let spanDolarVeinte = document.querySelector("#subtotal-dolar-veinte")
    let spanDolarDiez = document.querySelector("#subtotal-dolar-diez")
    let spanDolarCinco = document.querySelector("#subtotal-dolar-cinco")
    let spanDolarUno = document.querySelector("#subtotal-dolar-uno")

    //subtotal de billetes de cordoba
    let spanCordobaMil = document.getElementById("subtotal-cordoba-mil")
    let spanCordobaQuinientos = document.querySelector("#subtotal-cordoba-quinientos")
    let spanCordobaDoscientos = document.querySelector("#csubtotalcordoba-doscientos")
    let spanCordobaCien = document.querySelector("#subtotal-cordoba-cien")
    let spanCordobaCincuenta = document.querySelector("#subtotal-cordoba-cincuenta")
    let spanCordobaVeinte = document.querySelector("#subtotal-cordoba-veinte")
    let spanCordobaDiez = document.querySelector("#subtotal-cordoba-diez")

    //subtotal de monedas de cordoba
    let spanCordobaCinco = document.querySelector("#subtotal-cordoba-cinco")
    let spanCordobaUno = document.querySelector("#subtotal-cordoba-uno")
    let spanCordobaCincuentaCentavos = document.querySelector("#subtotal-cordoba-cincuenta-centavos")
    let spanCordobaVeinticincoCentavos = document.querySelector("#subtotal-cordoba-veinticinco-centavos")
    let spanCordobaDiezCentavos = document.querySelector("#subtotal-cordoba-diez-centavos")

    console.log("spans definidos")
    cargarBotonCalculo();
}

function multiplicacion(tipoCambio) {
    let subtotalCordobaMil = 1000 * 1;
    console.log("multiplicacion hecha");

    //realizar multiplicaciones
    //multiplicacion de billetes de dolar
    /*
    let subtotalDolarCien = (dolarCien * cantidadDolarCien) * tipoCambio;
    let subtotalDolarCincuenta = (dolarCincuenta * cantidadDolarCincuenta) * tipoCambio;
    let subtotalDolarVeinte = (dolarVeinte * cantidadDolarVeinte) * tipoCambio;
    let subtotalDolarDiez = (dolarDiez * cantidadDolarDiez) * tipoCambio;
    let subtotalDolarCinco = (dolarCinco * cantidadDolarCinco) * tipoCambio;
    let subtotalDolarUno = (dolarUno * cantidadDolarUno) * tipoCambio;
    //multiplicacion de billetes de cordoba
    let subtotalCordobaMil = cordobaMil * cantidadCordobaMil;
    /*
    let subtotalCordobaQuinientos = cordobaQuinientos * cantidadCordobaQuinientos;
    let subtotalCordobaDoscientos = document.innerHTML("#csubtotalcordoba-doscientos")
    let subtotalCordobaCien = document.innerHTML("#subtotal-cordoba-cien")
    let subtotalCordobaCincuenta = document.innerHTML("#subtotal-cordoba-cincuenta")
    let subtotalCordobaVeinte = document.innerHTML("#subtotal-cordoba-veinte")
    let subtotalCordobaDiez = document.innerHTML("#subtotal-cordoba-diezz")
    //multiplicacion de monedas de cordoba
    let subtotalCordobaCinco = document.innerHTML("#subtotal-cordoba-cinco")
    let subtotalCordobaUno = document.innerHTML("#subtotal-cordoba-uno")
    let subtotalCordobaCincuentaCentavos = document.innerHTML("#subtotal-cordoba-cincuenta-centavos")
    let subtotalCordobaVeinticincoCentavos = document.innerHTML("#subtotal-cordoba-veinticinco-centavos")
    let subtotalCordobaDiezCentavos = document.innerHTML("#subtotal-cordoba-diez-centavos")
    */

    escribirSpans(subtotalCordobaMil);
}

//escribir span HTML
function escribirSpans(subtotal) {
    /*
    spanDolarCien.innerHTML = subtotalDolarCien;
    spanDolarCincuenta.innerHTML = subtotalDolarCincuenta;
    spanDolarVeinte.innerHTML = subtotalDolarVeinte;
    spanDolarDiez.innerHTML = subtotalDolarDiez;
    spanDolarCinco.innerHTML = subtotalDolarCinco;
    spanDolarUno.innerHTML = subtotalDolarUno;
    */
    let spanCordobaMil = document.getElementById("subtotal-cordoba-mil")
    spanCordobaMil.innerHTML = subtotal;
/*
    spanCordobaQuinientos.innerHTML = subtotalCordobaQuinientos;
*/
    console.log("spans escritos");
}