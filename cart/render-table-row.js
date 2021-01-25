// import { teasArray } from '../products/data.js';
import { getCart, setCart } from '../cart-utils.js';
import { calcItemTotal, findByID } from '../utils.js';

export function renderTableRow(cartItem, teaItem) {
    const tableRow = document.createElement('tr');
    
    const tdQuantity = document.createElement('td');
    let quantity = cartItem.quantity;
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
   
    const updatedCart = getCart();
    const addButton = document.createElement('button');
    addButton.textContent = '+';
    tableRow.append(addButton);
    addButton.addEventListener('click', () => {
        getCart();
        const productToChange = findByID(cartItem.id, updatedCart);
        productToChange.quantity++;
        setCart(updatedCart);
        getCart();
        window.location.reload();
        // tdQuantity.textContent = quantity;
        
    });
  
    const subButton = document.createElement('button');
    subButton.textContent = '-';
    tableRow.append(subButton);
    subButton.addEventListener('click', () => {
        if (quantity < 1) return null;
        else {
            getCart();
            const productToChange = findByID(cartItem.id, updatedCart);
            productToChange.quantity--;
            setCart(updatedCart);
            getCart();
            window.location.reload();
        // tdQuantity.textContent = quantity;
        }
        
    });

    

    return tableRow;
}