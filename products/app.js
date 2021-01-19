import { oolongTeas } from './data.js';
import { renderTea } from './render-tea.js';
const oolongList = document.getElementById('oolong-list');

for (const tea of oolongTeas) {
    const teaElement = renderTea(tea);
    oolongList.append(teaElement);
}
