import { PRODUCTS } from './constants.js';
import { teasArray } from './products/data.js';

export function findByID(id, array){
    for (let tea of array) {
        if (tea.id === id) return tea;
    }
    return null;
}
export function calcItemTotal(cartItem, teaItem){
    const total = cartItem.quantity * teaItem.price;
    return total;
}
export function calcOrderTotal(cartArray, productArray){
    let total = 0;
    for (const iterator of cartArray) {
        let teaObject = findByID(iterator.id, productArray);
        let subTotal = calcItemTotal(iterator, teaObject);
        total = total + subTotal;
    }
    return total.toFixed(2);
}
export function getProducts(){
    const stringProducts = localStorage.getItem(PRODUCTS);
    if (stringProducts){
        const parsedProducts = JSON.parse(stringProducts);
        return parsedProducts;
    } else {
        const stringDefaultProducts = JSON.stringify(teasArray);
        localStorage.setItem(PRODUCTS, stringDefaultProducts);
    } return teasArray;
}
export function setProducts(productsArray){
    const stringProducts = JSON.stringify(productsArray);
    localStorage.setItem(PRODUCTS, stringProducts);
}

// const productsArray = getProducts();
export function removeFromProductsList(item, arrayOfProducts){
    const arrayItem = findByID(item.id, arrayOfProducts);
    const indexToDelete = arrayOfProducts.indexOf(arrayItem);
    arrayOfProducts.splice(indexToDelete, 1);
    setProducts(arrayOfProducts);
    return arrayOfProducts;

}