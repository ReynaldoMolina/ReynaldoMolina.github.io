window.addEventListener("load", iniciarBoton);

function iniciarBoton() {
    const botonCalculo = document.getElementById("boton-calcular")
    console.log("boton definido");
    botonCalculo.addEventListener("click", calculo)
}

//definir tipo de cambio
function calculo() {
    let tipoCambio = document.getElementById("tipo-de-cambio").value;

    let cantidadDolarCien = document.querySelector("#cantidad-dolar-cien").value;
    let cantidadCordobaMil = document.getElementById("cantidad-cordoba-mil").value;

    let spanDolarCien = document.querySelector("#subtotal-dolar-cien");
    let spanCordobaMil = document.getElementById("subtotal-cordoba-mil");
    let spanTotal = document.querySelector("#total-cordoba");

    let subtotalDolarCien = (100 * cantidadDolarCien) * tipoCambio;
    let subtotalCordobaMil = 1000 * cantidadCordobaMil;
    let totalCordoba = subtotalDolarCien + subtotalCordobaMil;

    spanDolarCien.innerHTML = subtotalDolarCien;
    spanCordobaMil.innerHTML = subtotalCordobaMil;
    spanTotal.innerHTML = totalCordoba;
}    