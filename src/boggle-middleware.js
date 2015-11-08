var boggle = require('boggle');
// solve a dummy boggle to force dictionary load
boggle('zzzz zzzz zzzz zzzz');

function boggleMiddleware(req, res) {
  if (req.query.letters) {
    var str = decodeURIComponent(req.query.letters);
    console.log('solving', str);
    var words = boggle(str);
    console.log('writing response', words);
    var response = JSON.stringify(words);
    res.writeHead(200, {
      'Content-Length': response.length,
      'Content-Type': 'text/plain' });
    res.write(response);
    res.end();
  }
}

module.exports = boggleMiddleware;
