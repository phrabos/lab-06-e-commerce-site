import { findByID } from './utils.js';

const CART = 'CART';

export function getCart(){
    const stringCart = localStorage.getItem(CART);
    if (stringCart){
        const parsedCart = JSON.parse(stringCart);
        return parsedCart;
    } else {
        const stringDefaultCart = JSON.stringify([]);
        localStorage.setItem(CART, stringDefaultCart);
    } return [];
}

export function setCart(cartArray){
    const stringCart = JSON.stringify(cartArray);
    localStorage.setItem(CART, stringCart);
}

export function clearCart(){
    const stringCart = JSON.stringify([]);
    localStorage.setItem(CART, stringCart);
}

export function addItemToCart(id){
    const updatedCart = getCart();
    const cartItem = findByID(id, updatedCart);
    if (cartItem) {
        cartItem.quantity++;
    } else {
        const newItem = {
            id: id,
            quantity: 1
        };
        updatedCart.push(newItem);
    }
    setCart(updatedCart);
}
