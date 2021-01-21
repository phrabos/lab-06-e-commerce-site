import { renderTableRow } from './render-table-row.js';
import { cart } from './cart-data.js';
import { teasArray } from '../products/data.js';
import { findByID, calcOrderTotal } from '../utils.js';
const table = document.getElementById('cart-table');
const orderTotal = calcOrderTotal(cart, teasArray);
const orderButton = document.getElementById('order-button');

orderButton.addEventListener('click', () => {
    alert('Thank you, your order has been placed!');
});

for (const iterator of cart) {
    const teaObject = findByID(iterator.id, teasArray);
    let tableRow = renderTableRow(iterator, teaObject);
    table.append(tableRow);
}

const tr = document.createElement('tr');
const td1 = document.createElement('td');
const td2 = document.createElement('td');
const td3 = document.createElement('td');
const td4 = document.createElement('td');
td4.textContent = orderTotal;
tr.append(td1, td2, td3, td4);
table.append(tr);