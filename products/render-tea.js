import { addItemToCart } from '../cart-utils.js';






export function renderTea(tea){
    const li = document.createElement('li');
    li.classList.add('tea-item');

    const h3 = document.createElement('h3');
    h3.classList.add('tea-name');
    h3.textContent = tea.name;
    li.append(h3);

    const img = document.createElement('img');
    img.src = `../assets/${tea.image}`;
    img.classList.add('tea-image');
    li.append(img);

    const pCategory = document.createElement('p');
    pCategory.classList.add('tea-category');
    pCategory.textContent = tea.category;
    li.append(pCategory);

    const pDescription = document.createElement('p');
    pDescription.classList.add('tea-description');
    pDescription.textContent = tea.description;
    li.append(pDescription);

    const pPrice = document.createElement('p');
    pPrice.classList.add('tea-price');
    pPrice.textContent = `$${tea.price.toFixed(2)}`;
    li.append(pPrice);

    const dropdown = document.createElement('select');
    let userQuantity = 0;
    dropdown.innerHTML = `<option>--quantity</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>`;
    li.append(dropdown);

    const button = document.createElement('button');
    button.textContent = 'Add to Cart';
    button.value = tea.id;
    li.append(button);



    dropdown.addEventListener('change', (e) =>{
        userQuantity = e.target.value;
        console.log(userQuantity);
    });

    button.addEventListener('click', () => {
        addItemToCart(tea.id, userQuantity);

    });


    return li;
}