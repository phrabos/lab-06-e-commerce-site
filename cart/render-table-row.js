import { teasArray } from '../products/data.js';
export function renderTableRow(cartItem) {
    const quantity = cartItem.quantity;
    const tea = findById(cartItem.id, teasArray);
    

    return tableRow;
}