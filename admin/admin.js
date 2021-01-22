import { getProducts, setProducts } from '../utils.js';

const formElement = document.getElementById('add-items-form');

formElement.addEventListener('submit', (e) =>{
    e.preventDefault();
    const data = new FormData(formElement);
    const itemId = data.get('id');
    const productName = data.get('product-name');
    const image = data.get('image');
    const description = data.get('description');
    const category = data.get('category');
    const price = data.get('price');

    const newTeaItem = {
        id: Number(itemId),
        name: productName,
        image: image,
        description: description,
        category: category,
        price: Number(price)
    };
    const parsedProducts = getProducts();

    parsedProducts.push(newTeaItem);
    setProducts(parsedProducts);
    
});

// const itemID = Number(itemIdInput.value);
// const productName = productNameInput.value;
// const image = imageInput.value;
// const description = descriptionInput.value;
// const category = categoryInput.value;
// const price = Number(priceInput.value);