import getTableRows from "./getTableRows.js";
import { getExchangeRate } from "./getExchangeRate.js";
import { dollars, cordobas, money } from "./money.js";

getTableRows(dollars, '.tbl-rows-dollars');
getTableRows(cordobas, '.tbl-rows-cordobas');

// define variables
const inputExchangeRate = document.querySelector('#exchange-rate');
const clearAllButton = document.querySelector('#button-clear-all');

const clearDollarsButton = document.querySelector('#button-clear-dollars');
const dollarsDropdownButton = document.querySelector('#dropdown-dollars');
const dollarsTable = document.querySelector('.table-dollars');

const clearCordobasButton = document.querySelector('#button-clear-cordobas');
const cordobasDropdownButton = document.querySelector('#dropdown-cordobas');
const cordobasTable = document.querySelector('.table-cordobas');

const inputsValues = document.querySelectorAll('.money-qty');
const spansSubtotal = document.querySelectorAll('.money-subtotal');

const spanDetailDollars = document.querySelector('#detail-dollars');
const spanTotalDollars = document.querySelector('#total-dollars');
const spanCordobasInDollars = document.querySelector('#cordobas-in-dollars');
const spanTotalCordobas = document.querySelector('#total-cordobas');

const spanGeneralTotalDollars = document.querySelector('#general-total-dollars');
const spanGeneralTotalCordobas = document.querySelector('#general-total-cordobas');

//global variables
let detailDollars = 0;
let totalDollars = 0;
let cordobasInDollars = 0;
let totalCordobas = 0;
let generalDollars = 0;
let generalCordobas = 0;

// add event listeners
inputExchangeRate.addEventListener('input', calculateDollars);
clearAllButton.addEventListener('click', () => clearInputs(money));

clearDollarsButton.addEventListener('click', () => clearInputs(dollars));
dollarsDropdownButton.addEventListener('click', () => {
  dollarsTable.classList.toggle('hidden');
});

clearCordobasButton.addEventListener('click', () => clearInputs(cordobas));
cordobasDropdownButton.addEventListener('click', () => {
  cordobasTable.classList.toggle('hidden');
});

inputsValues.forEach((element) => {
  element.addEventListener('input', (event) => {
    let id = event.target.id;
    calculateOne(id);
  });
});

function clearInputs(array) {
  // reset money values
  for (const element of array) {
    element.quantity = 0;
    element.subtotal = 0;
    
    inputsValues[element.id].value = '';
    spansSubtotal[element.id].innerHTML = '-';
  }
  
  updateTotals();
  updateTotalSpans();
}

function setMoneyQuantity(id) {
  let unit = money[id];
  let quantity = inputsValues[id].valueAsNumber;

  if (quantity < 0 || isNaN(quantity)) {
    unit.quantity = 0;
  } else {
    // allow only integers **********************
    unit.quantity = quantity;
  }
}

function setMoneySubtotal(id) {
  let exchange = getExchangeRate();
  // if id is received
  if (id) {
    let unit = money[id];
    if (unit.symbol === '$') {
      unit.subtotal = (unit.value * unit.quantity) * exchange;
    } else {
      unit.subtotal = unit.value * unit.quantity;
    }
  } else {
    for (const unit of dollars) {
      unit.subtotal = (unit.value * unit.quantity) * exchange;
    }
  }
}

function updateSubtotalSpan(id) {
  let subtotalSpan;
  let subtotal;

  if (id) {
    subtotalSpan = spansSubtotal[id];
    subtotal = parseFloat(money[id].subtotal);
  
    if (subtotal === 0) {
      subtotalSpan.innerHTML = '-';
    } else {
      subtotal = subtotal.toFixed(2);
      subtotalSpan.innerHTML = subtotal;
    }
  } else {
    for (const unit of dollars) {
      subtotalSpan = spansSubtotal[unit.id];
      subtotal = parseFloat(unit.subtotal);

      if (subtotal === 0) {
        subtotalSpan.innerHTML = '-';
      } else {
        subtotal = subtotal.toFixed(2);
        subtotalSpan.innerHTML = subtotal;     
      }
    }
  }
}

function updateTotals() {
  let exchange = getExchangeRate();
  detailDollars = 0;
  totalDollars = 0;
  cordobasInDollars = 0;
  totalCordobas = 0;
  generalDollars = 0;
  generalCordobas = 0;
  
  // get total of dollars
  for (const unit of dollars) {
    detailDollars += unit.quantity * unit.value;
    totalDollars += unit.subtotal;
  }

  // get total of cordobas
  for (const unit of cordobas) {
    totalCordobas += unit.subtotal;
  }

  // get cordobas in dollars
  
  if (exchange === 0) {
    cordobasInDollars = 0;
  } else {
    cordobasInDollars = totalCordobas /exchange;
  }

  generalDollars = detailDollars + cordobasInDollars;
  generalCordobas = totalDollars + totalCordobas;
}

function updateTotalSpans() {
  spanDetailDollars.innerHTML = (
    detailDollars === 0 ? '-' : '$ ' + detailDollars.toFixed(2)
  );

  spanTotalDollars.innerHTML = (
    totalDollars === 0 ? '-' : 'C$ ' + totalDollars.toFixed(2)
  );
  
  spanCordobasInDollars.innerHTML = (
    cordobasInDollars === 0 ? '-' : '$ ' + cordobasInDollars.toFixed(2)
  );

  spanTotalCordobas.innerHTML = (
    totalCordobas === 0 ? '-' : 'C$ ' + totalCordobas.toFixed(2)
  );

  spanGeneralTotalDollars.innerHTML = (
    generalDollars === 0 ? '-' : '$ ' + generalDollars.toFixed(2)
  );

  spanGeneralTotalCordobas.innerHTML = (
    generalCordobas === 0 ? '-' : 'C$ ' + generalCordobas.toFixed(2)
  );
}

function calculateOne(id) {
  setMoneyQuantity(id);
  setMoneySubtotal(id);
  updateSubtotalSpan(id);
  updateTotals();
  updateTotalSpans();
}

function calculateDollars() {
  setMoneySubtotal();
  updateSubtotalSpan();
  updateTotals();
  updateTotalSpans();
}