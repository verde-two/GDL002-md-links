//const mdLinks = require('../');


//describe('mdLinks', () => {

//  it('should...', () => {
//    console.log('FIX ME!');
//  });

//});

// __tests__/index.test.js
describe('initial', () => {
  test('first tests', () => {
     expect(true).toBe(true)
 })
})

//Test de links
require("./README.md");
  .then(links => {
    // => [{ href, text, file }]
  })
  .catch(console.error);