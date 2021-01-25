import { getProducts } from '../utils.js';
import { renderTea } from './render-tea.js';
const teaList = document.getElementById('oolong-list');

getProducts();
const productsInStorage = getProducts();


for (const teaObject of productsInStorage) {
    const teaElement = renderTea(teaObject);
    teaList.append(teaElement);
}

