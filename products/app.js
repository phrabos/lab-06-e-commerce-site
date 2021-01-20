import { teasArray } from './data.js';
import { renderTea } from './render-tea.js';
const oolongList = document.getElementById('oolong-list');

for (const tea of teasArray) {
    const teaElement = renderTea(tea);
    oolongList.append(teaElement);
}
