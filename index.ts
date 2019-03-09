import * as express from "express";
import * as socket from "socket.io";
let connections = [];
// app setup
let app = express();
let server = app.listen(3000,
  () => {
    console.log(`Server start, open your browser
    \n in localhost:3000`)
  });
app.use(express.static('public'));
let io = socket.listen(server);
io.on('connection', newConnection)

function newConnection(socket: socket.Socket) {
  connections.push(socket);
  console.log('new connection %', socket.id)
  console.log('%s connections:', connections.length);
  socket.on('mouse', mouseMsg);
  socket.on('send message', receiveMsg);
  function receiveMsg(data: any) {
    console.log(data);
  }
  function mouseMsg(data: any) {
    // send the message to all the connected clients
    // except the one that originated the message
    //
    socket.broadcast.emit('mouse', data);
    //io.emit('mouse', data);
    console.log(data);
  }
}

