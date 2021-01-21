// IMPORT MODULES under test here:
import { renderTea } from '../products/render-tea.js';
import { findByID, calcItemTotal, calcOrderTotal } from '../utils.js';
import { renderTableRow } from '../cart/render-table-row.js';

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
    {
        id: 9, 
        name: 'Bingdao',
        image: 'bingdao.jpg',
        description: 'strawberry, bamboo shoots, beeswax',
        category: 'Pu\'erh',
        price: 40,
    },
];
const testCart = [
    {
        id: 3,
        quantity: 4,
    },
    {
        id: 2,
        quantity: 1,
    },
    {
        id: 9,
        quantity: 3,
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
test('should take in a cart item and a tea item and return total price', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 160.00;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = calcItemTotal(testCart[0], testArray[2]);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
test('should take in a cart item and a teaArrays item and return a table row element', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<tr><td>3</td><td>Bingdao</td><td>$40.00</td><td>$120.00</td></tr>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderTableRow(testCart[2], testArray[3]);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
test('should take in a cart item and a tea item and return total price', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 315.00;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = calcOrderTotal(testCart, testArray);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});