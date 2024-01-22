const buttonGenerate = document.querySelector('.verse-button');
buttonGenerate.addEventListener('click', generateVerse)

const buttonClear = document.querySelector('#button-clear');
buttonClear.addEventListener('click', clearLog)

const spanVerse = document.querySelector('#verse-display');

const testamentSelect = document.querySelector('#testament-select');

//variables for random numbers
let randomBook = 0, randomChapter = 0, randomVerse = 0, generatedVerse = 0;
const spanLog = document.querySelector('#verse-log-list');

//constructor for books
function Book(name, chapters, verses) {
    this.name = name;
    this.chapters = chapters;
    this.verses = verses;
}

//old testament books ----------------------------------
const genesis = new Book('Génesis', 50,
    [
        31,25,24,26,32,22,24,22,29,32,32,20,18,24,21,16,27,33,38,18,//1-20
        34,24,20,67,34,35,46,22,35,43,55,32,20,31,29,43,36,30,23,23,//21-40
        57,38,34,34,28,34,31,22,33,26
    ]
)

const exodo = new Book('Éxodo', 40,
    [
        22,25,22,31,23,30,25,32,35,29,10,51,22,31,27,36,16,27,25,26,//1-20
        36,31,33,18,40,37,21,43,46,38,18,35,23,35,35,38,29,31,43,38
    ]
)

//new testament books ----------------------------------
const mateo = new Book('Mateo', 3,
    [
        10, 20, 50
    ]
)

const marcos = new Book('Marcos', 3,
    [
        10, 20, 50
    ]
)

const oldTestament = [genesis, exodo];
const newTestament = [mateo, marcos];
const bible = oldTestament.concat(newTestament);

//funcion para generar numeros aleatorios entre un rango
function numAleatorio(min, max) {
	let resultado = Math.floor(Math.random() * (max - min + 1)) + min;
	return resultado;
}

//funcion para generar libro, capitulo y versiculo aleatorio
function randomNumbers(array) {
    randomBook = numAleatorio(0, (array.length - 1));
    randomChapter = numAleatorio(1, array[randomBook].chapters - 1);
    randomVerse = numAleatorio(1, array[randomBook].verses[randomChapter]);

    generatedVerse = `${array[randomBook].name} ${randomChapter}:${randomVerse}`;
}

function clearLog() {
    spanLog.innerHTML = "";
}

function generateVerse() {
    let testamentSelection = testamentSelect.value;

    //generate random verse
    switch (testamentSelection) {
        case 'old-testament':
            randomNumbers(oldTestament);
            break;
        case 'new-testament':
            randomNumbers(newTestament);
            break;
        case 'both-testaments':
            randomNumbers(bible);
            break;
        default:
            break;
    }

    //print verse
    spanVerse.innerHTML = generatedVerse;

    //print log
    const createLogLi = document.createElement("li");
    const createLogLiText = document.createTextNode(generatedVerse);

    createLogLi.appendChild(createLogLiText);

    spanLog.insertBefore(createLogLi, spanLog.children[0]);
}