export function findByID(id, array){
    for (let tea of array) {
        if (tea.id === id) return tea;
        
        console.log(tea);
    }
    return null;
}
export function calcItemTotal(cartItem, teaItem){
    const total = cartItem.quantity * teaItem.price;
    return total;
}