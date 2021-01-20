// IMPORT MODULES under test here:
import { renderTea } from '../products/render-tea.js';
import { oolongTeas } from '../products/data.js';

const test = QUnit.test;

test('should take in a tea and return a li', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<li class="tea-item"><h3 class="tea-name">Ali Shan</h3><img src="../assets/alishan.jpg" class="tea-image"><p class="tea-category">Taiwanese Oolong</p><p class="tea-description">floral lightly oxidized from Ali Mountain</p><p class="tea-price">$35.00</p><button value="2">Add to Cart</button></li>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderTea(oolongTeas[1]);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
