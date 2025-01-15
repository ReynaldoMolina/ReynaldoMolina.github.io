const inputExchangeRate = document.querySelector('#exchange-rate');

function getExchangeRate() {
  let exchangeRate;
  if (isNaN(inputExchangeRate.valueAsNumber)) {
    exchangeRate = 1;  
  } else {
    if (inputExchangeRate.value >= 0) {
      exchangeRate = parseFloat(inputExchangeRate.value);
    } else {
      exchangeRate = 0;
    }
  }
  return exchangeRate;
}

export { getExchangeRate };