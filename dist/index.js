"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const socket = require("socket.io");
// app setup
let app = express();
let server = app.listen(3000, () => {
    console.log('Server start');
});
app.use(express.static('public'));
let io = socket.listen(server);
io.on('connection', (newConnection) => {
    console.log('new connection:', newConnection.id);
    newConnection.on('mouse', (msg) => console.log(msg));
});
