import { getProducts, setProducts } from '../utils.js';
import { renderAdminProducts } from './render-admin-products.js';

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
    window.location.reload();
    
});


const teaList = document.getElementById('oolong-list');

getProducts();
const productsInStorage = getProducts();


for (const teaObject of productsInStorage) {
    const teaElement = renderAdminProducts(teaObject);
    teaList.append(teaElement);
}