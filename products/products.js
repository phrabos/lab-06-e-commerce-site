import { getProducts } from '../utils.js';
import { renderTea } from './render-tea.js';
const teaList = document.getElementById('oolong-list');


const productsInStorage = getProducts();
console.log(productsInStorage);

for (const teaObject of productsInStorage) {
    const teaElement = renderTea(teaObject);
    teaList.append(teaElement);
}
