//definir variables
let tipoCambio = document.querySelector("#tipo-de-cambio");
tipoCambio.addEventListener('input', calculo);

const clearButton = document.querySelector('.button-clear');
clearButton.addEventListener('click', clearInputs);

const cantUnidadesInputs = document.querySelectorAll('.cant-unidad');
cantUnidadesInputs.forEach(function(element) {
    element.addEventListener('input', calculo);
})

let cantUnidadNode = document.querySelectorAll(".cant-unidad");
let spanSubtotalsNode = document.querySelectorAll(".subtotal");

const unidades = [100, 50, 20, 10, 5, 1, 1000, 500, 200, 100, 50, 20, 10, 5, 1, 0.5, 0.25, 0.1];
let subtotals = [];
const spanTotalCordoba = document.querySelector('#total-cordoba');
const spanTotalDolar = document.querySelector('#total-dolar');
const spanDetalleCordoba = document.querySelector('#detalle-cordoba');
const spanDetalleDolar = document.querySelector('#detalle-dolar');

function sumSubtotals(arr) {
    let sum = 0;
    for (let index = 0; index < arr.length; index++) {
        sum = sum + parseFloat(arr[index]);
    }
    return sum;
}

function sumaArray(arr, start, end) {
    let sum = 0;
    for (let index = start; index < end; index++) {
        sum = sum + parseFloat(arr[index]);
    }
    return sum;
}

function calculo() {
    //definir tipo de cambio
    tipoCambio = document.querySelector("#tipo-de-cambio");
    tipoCambio = parseFloat(tipoCambio.value);
    if (isNaN(tipoCambio)) {
        tipoCambio = 1;
    }

    //definir cantidad de unidades
    let cantUnidad = Array.from(cantUnidadNode);

    for (let index = 0; index < cantUnidad.length; index++) {
        cantUnidad[index] = parseInt(cantUnidad[index].value);

        if (isNaN(cantUnidad[index])) {
            cantUnidad[index] = 0;
        }
    }

    //realizar multiplicaciones
    for (let index = 0; index < cantUnidad.length; index++) {
        if (index < 6) {
            subtotals[index] = ((unidades[index] * cantUnidad[index]) * tipoCambio).toFixed(2);
        } else {
            subtotals[index] = (unidades[index] * cantUnidad[index]).toFixed(2);            
        }
    }

    let totalDolar = (sumSubtotals(subtotals) / tipoCambio).toFixed(2);
    let totalCordoba = sumSubtotals(subtotals).toFixed(2);

    //escribir spans
    let spanSubtotals = Array.from(spanSubtotalsNode);

    for (let index = 0; index < spanSubtotals.length; index++) {
        if (subtotals[index] == 0) {
            spanSubtotals[index].innerHTML = '-';
        }
        else {
            spanSubtotals[index].innerHTML = subtotals[index];
        }
    }

    //realizar detalle
    let detalleDolar = (sumaArray(subtotals, 0, 5) / tipoCambio).toFixed(2n );
    let detalleCordoba = sumaArray(subtotals, 6, subtotals.length).toFixed(2);

    //sum subtotals and print total
    spanTotalDolar.innerHTML = `$ ${totalDolar}`;
    spanTotalCordoba.innerHTML = `C$ ${totalCordoba}`;
    spanDetalleDolar.innerHTML = `$ ${detalleDolar}`;
    spanDetalleCordoba.innerHTML = `C$ ${detalleCordoba}`;
}

function clearInputs() {
    let cantUnidad = Array.from(cantUnidadNode);

    cantUnidad.forEach(function(element) {
        element.value = "";
    })
    calculo();
}