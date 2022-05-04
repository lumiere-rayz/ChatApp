var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http,  { cors: { origin: '*' } });


app.get('/',(req, res)=> res.send('Hello Tonycode server!'));

io.on('connection',(socket)=>{
    console.log('some user is connected');
})
http.listen(3000,()=>{
    console.log('listening on *:3000')
})