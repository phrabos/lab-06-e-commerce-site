// import { teasArray } from '../products/data.js';
import { calcItemTotal } from '../utils.js';

export function renderTableRow(cartItem, teaItem) {
    const tableRow = document.createElement('tr');
    
    const tdQuantity = document.createElement('td');
    const quantity = cartItem.quantity;
    tdQuantity.textContent = quantity;
    tableRow.append(tdQuantity);

    const tdName = document.createElement('td');
    const itemName = teaItem.name;
    tdName.textContent = itemName;
    tableRow.append(tdName);
    
    const tdPrice = document.createElement('td');
    const price = teaItem.price;
    tdPrice.textContent = `$${price.toFixed(2)}`;
    tableRow.append(tdPrice);

    const tdSubTotal = document.createElement('td');
    const subTotal = calcItemTotal(cartItem, teaItem);
    tdSubTotal.textContent = `$${subTotal.toFixed(2)}`;
    tableRow.append(tdSubTotal);

    

    return tableRow;
}