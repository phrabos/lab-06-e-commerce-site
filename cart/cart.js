import { renderTableRow } from './render-table-row.js';
import { cart } from './cart-data.js';
import { teasArray } from '../products/data.js';
import { findByID } from '../utils.js';
const table = document.getElementById('cart-table');


for (const iterator of cart) {
    const teaObject = findByID(iterator.id, teasArray);
    let tableRow = renderTableRow(iterator, teaObject);
    table.append(tableRow);
}