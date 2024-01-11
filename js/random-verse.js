//Wait page load
window.addEventListener("load", iniciarBoton);

//funcion para generar numeros aleatorios entre un rango
function numAleatorio(min, max) {
	let resultado = Math.floor(Math.random() * (max - min + 1)) + min;
	return resultado;
}

function iniciarBoton() {
    const buttonGenerate = document.querySelector('.verse-button');
    buttonGenerate.addEventListener('click', randomVerse)
}

function randomVerse() {

    const spanVerse = document.querySelector('#verse-display');

    //constructor for books
    function Book(name, chapters, verses) {
        this.name = name;
        this.chapters = chapters;
        this.verses = verses;
    }

    //create book objects
    const genesis = new Book('Génesis', 50,
        [
            31,25,24,26,32,22,24,22,29,32,32,20,18,24,21,16,27,33,38,18,//1-20
            34,24,20,67,34,35,46,22,35,43,55,32,20,31,29,43,36,30,23,23,//21-40
            57,38,34,34,28,34,31,22,33,26
        ]
    )

    //variables for random numbers
    let randomBook = 0, randomChapter = 0, randomVerse = 0;

    //generate random verse
    randomBook = numAleatorio(0, 1);
    randomChapter = numAleatorio(1, 50);
    randomVerse = numAleatorio(1, 10);

    //print verse
    let generatedVerse = `Génesis ${randomChapter}:${randomVerse}`;
    spanVerse.innerHTML = generatedVerse;

    //print log
    const spanLog = document.querySelector('#verse-log-list');
    const createLogLi = document.createElement("li");
    const createLogLiText = document.createTextNode(generatedVerse);

    createLogLi.appendChild(createLogLiText);

    spanLog.appendChild(createLogLi);
}