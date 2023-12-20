//Wait page load
window.addEventListener("load", iniciarBoton);

function iniciarBoton() {
    const botonCalculo = document.querySelector("#boton-calcular")
    console.log("boton iniciado");
    botonCalculo.addEventListener("click", calculo)
}

function calculo() {
    //definir tipo de cambio
    let tipoCambio = document.querySelector("#tipo-de-cambio").value;
    console.log("tipo cambio obtenido");

    //definir cantidad de billetes de dolar
    let cantidadDolarCien = document.querySelector("#cantidad-dolar-cien").value;
    let cantidadDolarCincuenta = document.querySelector("#cantidad-dolar-cincuenta").value;
    let cantidadDolarVeinte = document.querySelector("#cantidad-dolar-veinte").value;
    let cantidadDolarDiez = document.querySelector("#cantidad-dolar-diez").value;
    let cantidadDolarCinco = document.querySelector("#cantidad-dolar-cinco").value;
    let cantidadDolarUno = document.querySelector("#cantidad-dolar-uno").value;
    //definir cantidad de billetes de cordoba
    let cantidadCordobaMil = document.querySelector("#cantidad-cordoba-mil").value;
    let cantidadCordobaQuinientos = document.querySelector("#cantidad-cordoba-quinientos").value;
    let cantidadCordobaDoscientos = document.querySelector("#cantidad-cordoba-doscientos").value;
    let cantidadCordobaCien = document.querySelector("#cantidad-cordoba-cien").value;
    let cantidadCordobaCincuenta = document.querySelector("#cantidad-cordoba-cincuenta").value;
    let cantidadCordobaVeinte = document.querySelector("#cantidad-cordoba-veinte").value;
    let cantidadCordobaDiez = document.querySelector("#cantidad-cordoba-diez").value;
    //definir cantidad de monedas de cordoba
    let cantidadCordobaCinco = document.querySelector("#cantidad-cordoba-cinco").value;
    let cantidadCordobaUno = document.querySelector("#cantidad-cordoba-uno").value;
    let cantidadCordobaCincuentaCentavos = document.querySelector("#cantidad-cordoba-cincuenta-centavos").value;
    let cantidadCordobaVeinticincoCentavos = document.querySelector("#cantidad-cordoba-veinticinco-centavos").value;
    let cantidadCordobaDiezCentavos = document.querySelector("#cantidad-cordoba-diez-centavos").value;
    console.log("cantidades definidas");

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

    //realizar multiplicaciones
    //multiplicacion de billetes de dolar
    let subtotalDolarCien = (100 * cantidadDolarCien) * tipoCambio;
    let subtotalDolarCincuenta = (50 * cantidadDolarCincuenta) * tipoCambio;
    let subtotalDolarVeinte = (20 * cantidadDolarVeinte) * tipoCambio;
    let subtotalDolarDiez = (10 * cantidadDolarDiez) * tipoCambio;
    let subtotalDolarCinco = (5 * cantidadDolarCinco) * tipoCambio;
    let subtotalDolarUno = (1 * cantidadDolarUno) * tipoCambio;
    //multiplicacion de billetes de cordoba
    let subtotalCordobaMil = 1000 * cantidadCordobaMil;
    let subtotalCordobaQuinientos = 500 * cantidadCordobaQuinientos;
    let subtotalCordobaDoscientos = 200 * cantidadCordobaDoscientos;
    let subtotalCordobaCien = 100 * cantidadCordobaCien;
    let subtotalCordobaCincuenta = 50 * cantidadCordobaCincuenta;
    let subtotalCordobaVeinte = 20 * cantidadCordobaVeinte;
    let subtotalCordobaDiez = 10 * cantidadCordobaDiez;
    //multiplicacion de monedas de cordoba
    let subtotalCordobaCinco = 5 * cantidadCordobaCinco;
    let subtotalCordobaUno = 1 * cantidadCordobaUno;
    let subtotalCordobaCincuentaCentavos = 0.5 * cantidadCordobaCincuentaCentavos;
    let subtotalCordobaVeinticincoCentavos = 0.25 * cantidadCordobaVeinticincoCentavos;
    let subtotalCordobaDiezCentavos = 0.1 * cantidadCordobaDiezCentavos;
    console.log("multiplicacion hecha");

    let totalCordoba = (
        subtotalDolarCien + subtotalDolarCincuenta + subtotalDolarVeinte + subtotalDolarDiez +
        subtotalDolarCinco + subtotalDolarUno +
        subtotalCordobaMil + subtotalCordobaQuinientos + subtotalCordobaDoscientos + subtotalCordobaCien +
        subtotalCordobaCincuenta + subtotalCordobaVeinte + subtotalCordobaDiez + 
        subtotalCordobaCinco + subtotalCordobaUno + subtotalCordobaCincuentaCentavos + subtotalCordobaVeinticincoCentavos + subtotalCordobaDiezCentavos
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
    spanCordobaCincuentaCentavos = subtotalCordobaCincuentaCentavos;
    spanCordobaVeinticincoCentavos = subtotalCordobaVeinticincoCentavos;
    spanCordobaDiezCentavos = subtotalCordobaDiezCentavos;

    spanTotal.innerHTML = totalCordoba;
}    