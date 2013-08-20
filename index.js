var connect = require('connect')
  , http = require('http');

var boggle = require('boggle');
// solve a dummy boggle to force dictionary load
boggle('zzzz zzzz zzzz zzzz');

var port = 3000;

var app = connect()
  .use(connect.favicon())
  .use(connect.logger('dev'))
  .use(connect.static('public'))
  .use(connect.directory('public'))
  .use(connect.query())
  .use(function(req, res){
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
  });

http.createServer(app).listen(port);
console.log('listening to port', port);