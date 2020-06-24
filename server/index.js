// Express, Socket.io, HTTP 설정
const express = require('express');
const socketio = require('socket.io');
const http = require('http');

// 포트(Port) 설정
const PORT = process.env.PORT || 5000;

// 라우터(Router) 설정 
const router = require('./router');

// Express -> app 할당
const app = express();

// 서버(Server) 생성
const server = http.createServer(app);

// Socket.io 서버(Server) 설정
const io = socketio(server);

// 라우터(Router) 사용
app.use(router);

// 서버(Server) 실행
server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));