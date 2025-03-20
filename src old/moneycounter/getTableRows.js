function getTableRows(data, row) {
  const tableBody = document.querySelector(row);
  let tags = "";
    
  data.map(unit => {
    let formatedUnit = unit.value;
    
    if(formatedUnit < 1) {
      formatedUnit = formatedUnit.toFixed(2);
    }
    
    formatedUnit = formatedUnit.toLocaleString('en-US');
    let id = unit.id;

    tags += `
      <tr>
        <td class="money-unit">${formatedUnit}</td>
        <td><input id="${id}" type="number" class="money-qty" placeholder="-" min="0" step="1"></td>
        <td class="money-subtotal">-</td>
      </tr>
    `
  });

  tableBody.innerHTML = tags;
}

export default getTableRows;