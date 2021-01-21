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
    return `$${total.toFixed(2)}`;
}