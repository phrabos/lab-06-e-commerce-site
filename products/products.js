import { teasArray } from './data.js';
import { renderTea } from './render-tea.js';
const teaList = document.getElementById('oolong-list');

for (const tea of teasArray) {
    const teaElement = renderTea(tea);
    teaList.append(teaElement);
}
