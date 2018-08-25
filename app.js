var express = require('express');
 var path = require('path');
 var app = express();
 var http = require('http').Server(app);
 var io = require('socket.io')(http);

 var publicPath = path.resolve(__dirname,'./public');

app.use(express.static(publicPath))

app.get('/', function(req, res){
  res.send('index.html',{root: publicPath});
  // res.send('mobile.html');
});

var nsp = io.of('/test');

nsp.on('connection', function(socket){
  socket.on('input', function(msg){
    nsp.emit('input', msg);
  });
  console.log('a user connected');
});



http.listen(8080, function(){
  console.log('listening on *:8080');
});