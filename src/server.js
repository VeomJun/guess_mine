import { join } from "path";
import express from "express";
import socketIO from "socket.io";
import morgan from "morgan";
import socketController from "./socketController";
import events from "./events";

const app = express();

app.set("view engine", "pug")
app.set("views", join(__dirname, "views"))
app.use(morgan('dev'))
app.use(express.static(join(__dirname, "static")))

app.get("/", (req, res) => res.render("home", { events: JSON.stringify(events) }))

const hello = () => {
    console.log("hello!")
}

const server = app.listen(3000,hello)

const io = socketIO.listen(server)
// socketIO를 통해 하나의 포트 위에 두개의 서버를 올릴 수 있다.
// 먼저 존재하는 http 형식의 서버와 ws 형식의 서버
// io 변수를 만든 이유
// io, 즉 socket이 모든 이벤트를 알아야 하기 때문이다.(실시간, real-time)

io.on("connection", (socket) => socketController(socket))
// 이 부분이 socket을 이용한 서버간의 통신에 시작점. 'connection'
// 위의 코드가 의미하는 것.
// 현재 서버는 socketIO를 통해 연결되어 있기 때문에
// 서버가 연결되면 콘솔창에 해당 내용이 표시됨.
// 하지만 현재는 서버, 즉 백엔드 부분에서만 연결이 되어 있음
// 따라서 프론트엔드 부분에도 연결을 시켜줘야 함.

// 지금 만들고 있는 socket을 이용한 이 사이트는 '이벤트'에 의해 반응하고
// 그에 따른 결과를 내 놓는다.
// 여기서는 서버에 들어와 있는 것 또한 이벤트로 간주할 수 있는데,
// 그에 따라 만약 서버를 껐다가 다시 켠다면 
// http 통신 방식을 이용할 경우 서버에 입장한 이들에 대해 알 수 없으나,
// socket 통신 방식을 이용할 경우, 서버에 사용자가 입장한 것을 알 수 있다.

// socket은 일종의 request 객체.
// express 서버에서 보내는 http 요청과 같다.

// 서버에서는 이벤트를 발생시키고 클라이언트, 유저 쪽에서는 그러한 이벤트를 듣고 있다.
// 따라서 socket이 서버 재시작에도 이벤트를 확인할 수 있는 이유는 바로
// 서버 측에서 이벤트를 계속적으로 발생시키면 그걸 클라이언트 측에서 듣게 되기 때문이다.