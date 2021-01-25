import { getProducts, removeFromProductsList } from '../utils.js';
export function renderAdminProducts(tea){
    const li = document.createElement('li');
    li.classList.add('tea-item');
    
    const pID = document.createElement('p');
    pID.classList.add('tea-price');
    pID.textContent = `ID: ${tea.id}`;
    // pID.value = tea.id;
    li.append(pID);
    
    const h3 = document.createElement('h3');
    h3.classList.add('tea-name');
    h3.textContent = tea.name;
    li.append(h3);
    
    const img = document.createElement('img');
    img.src = `../assets/${tea.image}`;
    img.alt = 'tea-picture';
    img.onerror = ()=>img.src = '../assets/orange.jpg';
    img.classList.add('tea-image');
    li.append(img);
    
    const button = document.createElement('button');
    button.textContent = 'Remove';
    button.value = tea.id;
    li.append(button);
    
    const updatedProductsArray = getProducts();
    button.addEventListener('click', () => {
        
        removeFromProductsList(tea, updatedProductsArray);
        window.location.reload();
        
    });

    return li;
}
