var connect = require('connect')
  , http = require('http');

var boggleMiddleware = require('./src/boggle-middleware');

var port = 3000;

var app = connect()
  .use(connect.favicon())
  .use(connect.logger('dev'))
  .use(connect.static('public'))
  .use(connect.directory('public'))
  .use(connect.query())
  .use(boggleMiddleware);

http.createServer(app).listen(port);
console.log('listening to port', port);
