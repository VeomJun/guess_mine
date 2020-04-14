import events from "./events"
import { chooseWords } from "./words";

let sockets = [];
let inProgress = false;
let word = null;

const chooseLeader = () => sockets[Math.floor(Math.random() * sockets.length)]

const socketController = (socket, io) => {
    const broadcast = (event, data) => socket.broadcast.emit(event, data)
    const superbroadcast = (event, data) => io.emit(event, data)
    const sendPlayerUpdate = () => superbroadcast(events.playerUpdate, { sockets })
    const startGame = () => {
        if(inProgress === false) {
            inProgress = true
            const leader = chooseLeader();
            word = chooseWords()
            io.to(leader.id).emit(events.leaderNotif, { word })
            superbroadcast(events.gameStarted)
        }
    }
 
    socket.on(events.setNickName, ({nickname}) => {
        socket.nickname = nickname;
        sockets.push({id: socket.id , points: 0, nickname: nickname })
        broadcast(events.newUser, { nickname })
        sendPlayerUpdate()
        if(sockets.length === 1) {
            startGame()
        }
    })
    socket.on(events.disconnect, () => {
        sockets = sockets.filter((aSocket) => {
            return aSocket.id !== socket.id
        })
        broadcast(events.disconnected, { nickname: socket.nickname })
        sendPlayerUpdate()
    })
    socket.on(events.sendMsg, ({message}) => {
        broadcast(events.newMsg, { message, nickname: socket.nickname })
    })
    // socket io에서의 두번 째 파라미터 값은 object 형태로 입력되어야만 한다.
    // 따라서 해당 데이터 값을 가져올 때에는 '{}' 내부에 값을 넣어 
    // object 형태로 만들어야 한다.
    socket.on(events.beginPath, ({x, y}) => {
        broadcast(events.beganPath, { x, y })
    })
    socket.on(events.strokePath, ({x, y, color, width}) => {
        broadcast(events.strokedPath, { x, y, color, width })
    })
    socket.on(events.fill, ({ color }) => {
        broadcast(events.filled, { color })
    })
}


export default socketController