import { handleNewUser, handleDisconnected } from "./notifications";
import { handleNewMessage } from "./chat";
import { handleBeganPath, handleStrokedPath, handleFill, handleLineWidth, handleWidth } from "./canvas";
import { handlePlayerUpdate, handleGameStarted } from "./player";

let socket = null;
// 6. 비어있는 함수 socket

export const getSocket = () => socket;
// 8. updateSocket 함수를 통해 새롭게 정의된 socket 값을 갖게 된 getSocket 함수.
// 9. 앞으로 해당 함수를 window.socket를 대신해 사용할 수 있음.
// 10. 결과적으로 앞으로는 websocket 서버로의 연결을 위해 'window.socket' 형태로 작성해 줄 필요 없음.


export const initSocket = (aSocket) => {
    const { events } = window;
    socket = aSocket;
    socket.on(events.newUser, handleNewUser)
    socket.on(events.disconnected, handleDisconnected)
    socket.on(events.newMsg, handleNewMessage)
    socket.on(events.beganPath, handleBeganPath)
    socket.on(events.strokedPath, handleStrokedPath)
    socket.on(events.filled, handleFill)
    socket.on(events.playerUpdate, handlePlayerUpdate),
    socket.in(events.gameStarted, handleGameStarted)
}
// 1. login.js에서 로그인시 initSocket이 실행되고, 이 때 그에 해당하는 socket의 값을 가져옴.
// 2. 이전 강의에 따라 socket은 서버에 접속 할 때, 각각 하나씩 부여 받게 됨.
// 3. 따라서 로그인 될 때 마다 socket은 다르게 부여됨.
// 4. 그렇게 부여된 socket(window.socket)을 initSocket이 가져옴.
// 5. 해당 socket의 값을 updateSocket을 통해 비어있는 'socket' 함수에 부여함.
