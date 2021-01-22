import { teasArray } from './data.js';
import { renderTea } from './render-tea.js';
const teaList = document.getElementById('oolong-list');

for (const teaObject of teasArray) {
    const teaElement = renderTea(teaObject);
    teaList.append(teaElement);
}
