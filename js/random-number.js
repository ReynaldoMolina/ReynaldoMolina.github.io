const buttonGenerate = document.querySelector('.verse-button');
buttonGenerate.addEventListener('click', generateNumber)

const buttonClear = document.querySelector('#button-clear');
buttonClear.addEventListener('click', clearLog)

const spanVerse = document.querySelector('#verse-display');

const min = document.querySelector("#min");
const max = document.querySelector("#max");
let numberList = [];

//variables for random numbers
const spanLog = document.querySelector('#verse-log-list');



//funcion para generar numeros aleatorios entre un rango
function numAleatorio(min, max) {
	let resultado = Math.floor(Math.random() * (max - min + 1)) + min;
	return resultado;
}


function clearLog() {
    spanLog.innerHTML = "";
}

function generateNumber() {
    let minimo = parseInt(min.value);
    let maximo = parseInt(max.value);

    if (typeof randomNumber == 'undefined') {
        randomNumber = numAleatorio(minimo, maximo);
        numberList.push(randomNumber);
    }
    else if (numberList.includes(randomNumber)) {
        randomNumber = numAleatorio(minimo, maximo);
    }
    
    

    //print verse
    spanVerse.innerHTML = randomNumber;

    //print log
    const createLogLi = document.createElement("li");
    const createLogLiText = document.createTextNode(randomNumber);

    createLogLi.appendChild(createLogLiText);

    spanLog.insertBefore(createLogLi, spanLog.children[0]);
}