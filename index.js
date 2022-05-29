var app = require('express')();
var http = require('http').Server(app);
const cors = require('cors')
var io = require('socket.io')(http);

app.use(cors())

app.get('/', function(req, res){ res.send("Something");
});

//Whenever someone connects this gets executed
io.on('connection', function(socket){
   console.log('A user connected');
   
   //Whenever someone disconnects this piece of code executed
   socket.on('disconnect', function () {
      console.log('A user disconnected');
   });
});
var port = process.env.PORT || 5000;
http.listen(port, function(){
   console.log('listening on *:'+port+'');
});