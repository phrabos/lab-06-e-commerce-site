export function findByID(id, array){
    for (let tea of array) {
        if (tea.id === id) return tea;
        
        console.log(tea);
    }
    return null;
}