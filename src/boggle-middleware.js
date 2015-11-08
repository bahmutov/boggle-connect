var boggleSolver = require('./boggle-solver');

function boggleMiddleware(req, res) {
  if (req.query.letters) {
    var str = decodeURIComponent(req.query.letters);
    console.log('solving', str);

    var words = boggleSolver(str);

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
