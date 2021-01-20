export function findByID(id, array){
    for (let tea of array) {
        if (tea.id === id) return tea;
    }
    return null;
}
export function calcItemTotal(cartItem, teaItem){
    const total = cartItem.quantity * teaItem.price;
    return `$${total.toFixed(2)}`;
}