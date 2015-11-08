var boggle = require('boggle');
// solve a dummy boggle to force dictionary load
boggle('zzzz zzzz zzzz zzzz');

function boggleSolver(str) {
  return boggle(str);
}

module.exports = boggleSolver;
