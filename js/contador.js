//Wait page load
window.addEventListener("load", iniciarBoton);

function iniciarBoton() {
    const cantUnidadesInputs = document.querySelectorAll('.cant-unidad');
    cantUnidadesInputs.forEach(function(element) {
        element.addEventListener('input', calculo);
    })

    const cantCambio = document.querySelector('#tipo-de-cambio');
    cantCambio.addEventListener('input', calculo);
}

function sumSubtotals(arr) {
    let sum = 0;
    for (let index = 0; index < arr.length; index++) {
        sum = sum + parseFloat(arr[index]);
    }
    return sum;
}

function calculo() {
    //definir tipo de cambio
    let tipoCambio = parseFloat(document.querySelector("#tipo-de-cambio").value);
    if (isNaN(tipoCambio)) {
        tipoCambio = 1;
    }

    //definir tipos de billetes
    let unidades = [100, 50, 20, 10, 5, 1, 1000, 500, 200, 100, 50, 20, 10, 5, 1, 0.5, 0.25, 0.1];

    //definir cantidad de unidades
    let cantUnidadNode = document.querySelectorAll(".cant-unidad");
    let cantUnidad = Array.from(cantUnidadNode);

    for (let index = 0; index < cantUnidad.length; index++) {
        cantUnidad[index] = parseInt(cantUnidad[index].value);

        if (isNaN(cantUnidad[index])) {
            cantUnidad[index] = 0;
        }
    }

    //definir spans HTML
    let spanSubtotalsNode = document.querySelectorAll(".subtotal");
    let spanSubtotals = Array.from(spanSubtotalsNode);

    //realizar multiplicaciones
    let subtotals = [];

    for (let index = 0; index < spanSubtotals.length; index++) {
        if (index < 6) {
            subtotals[index] = ((unidades[index] * cantUnidad[index]) * tipoCambio).toFixed(2);
        } else {
            subtotals[index] = (unidades[index] * cantUnidad[index]).toFixed(2);            
        }
    }

    //escribir spans
    for (let index = 0; index < spanSubtotals.length; index++) {
        if (subtotals[index] == 0) {
            spanSubtotals[index].innerHTML = '-';
        }
        else {
            spanSubtotals[index].innerHTML = subtotals[index];
        }
    }

    //sum subtotals and print total
    let totalCordoba = sumSubtotals(subtotals).toFixed(2);
    const spanTotal = document.querySelector('#total-cordoba');
    spanTotal.innerHTML = totalCordoba;
}    