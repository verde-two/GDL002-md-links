const mdLinks = require('../index.js');

//Primer test, verifica que exista una ruta de archivo 
describe('pathInserted', () => {
  test('Should be a function', () => {
    expect(typeof mdLinks.pathInserted).toBe('function');
  });
  it('Should return false', () => {
    expect(mdLinks.pathInserted()).toBe(false);
  });
  it('Should return true', () => {
    expect(mdLinks.pathInserted('./README.md')).toBe(true);
  });
});

