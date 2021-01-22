import { renderTableRow } from './render-table-row.js';
import { teasArray } from '../products/data.js';
import { findByID, calcOrderTotal } from '../utils.js';
import { clearCart, getCart } from '../cart-utils.js';
const table = document.getElementById('cart-table');
const orderButton = document.getElementById('order-button');
const message = document.getElementById('message');
const cart = getCart();
const orderTotal = calcOrderTotal(cart, teasArray);

function popup(msg, gfg) { 
    // eslint-disable-next-line no-undef
    const confirmBox = $('#container'); 
      
    /* Trace message to display */
    confirmBox.find('.message').text(msg); 
      
    /* Calling function */
    confirmBox.find('.yes').unbind().click(function()  
    { 
        confirmBox.hide();
        window.location.href = '../index.html';
    }); 
    confirmBox.find('.yes').click(gfg); 
    confirmBox.show();
}
orderButton.addEventListener('click', () => {
    message.textContent = 'Thank you, your order of ' + JSON.stringify(cart) + ' has been placed!';
    popup();
    clearCart();
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
td3.textContent = 'Order Total: ';
td3.classList.add('total');
td4.classList.add('total', 'total-amount');
td4.textContent = `$${orderTotal}`;
tr.append(td1, td2, td3, td4);
table.append(tr);
