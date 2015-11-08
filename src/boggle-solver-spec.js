/* global describe, it */
describe('boggle-solver', function () {
  var solver = require('./boggle-solver');

  it('is a function', function () {
    console.assert(typeof solver === 'function');
  });

  it('returns solution', function () {
    var input = 'aaaa bbbb cccc dddd';
    var words = solver(input);
    console.assert(words, 'could not solve input ' + input);
    console.assert(Array.isArray(words), 'returns a list of words');
  });

});
