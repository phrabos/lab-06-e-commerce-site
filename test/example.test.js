// IMPORT MODULES under test here:
import { renderTea } from '../products/render-tea.js';
import { findByID } from '../utils.js';

const test = QUnit.test;
const testArray = [
    {
        id: 1, 
        name: 'Da Hong Pao',
        image: 'dahongpao.jpg',
        description: 'roasted rock tea from Wuyi Mountain',
        category: 'Yancha',
        price: 35,
    },
    {
        id: 2, 
        name: 'Ali Shan',
        image: 'alishan.jpg',
        description: 'floral lightly oxidized from Ali Mountain',
        category: 'Taiwanese Oolong',
        price: 35,
    },
    {
        id: 3, 
        name: 'Gardenia Frangrence',
        image: 'gardenia.jpg',
        description: 'fruity and floral Phoenix single-bush',
        category: 'Dancong',
        price: 40,
    },
];
test('should take in a tea and return a li', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<li class="tea-item"><h3 class="tea-name">Ali Shan</h3><img src="../assets/alishan.jpg" class="tea-image"><p class="tea-category">Taiwanese Oolong</p><p class="tea-description">floral lightly oxidized from Ali Mountain</p><p class="tea-price">$35.00</p><button value="2">Add to Cart</button></li>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderTea(testArray[1]);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
test('should take in an id and array and return an object', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = {
        id: 2, 
        name: 'Ali Shan',
        image: 'alishan.jpg',
        description: 'floral lightly oxidized from Ali Mountain',
        category: 'Taiwanese Oolong',
        price: 35,
    };
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = findByID(2, testArray);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});