import { handleNewUser, handleDisconnected } from "./notifications";

let socket = null;
// 6. 비어있는 함수 socket

export const getSocket = () => socket;
// 8. updateSocket 함수를 통해 새롭게 정의된 socket 값을 갖게 된 getSocket 함수.
// 9. 앞으로 해당 함수를 window.socket를 대신해 사용할 수 있음.
// 10. 결과적으로 앞으로는 websocket 서버로의 연결을 위해 'window.socket' 형태로 작성해 줄 필요 없음.

export const updateSocket = aSocket => socket = aSocket;
// 7. initSocket 함수 내부에서 가져온 새로운 socket 값을 비어있는 socket 함수에 부여함.

export const initSocket = (aSocket) => {
    const { events } = window;
    updateSocket(aSocket)
    aSocket.on(events.newUser, handleNewUser)
    aSocket.on(events.disconnected, handleDisconnected)
}
// 1. login.js에서 로그인시 initSocket이 실행되고, 이 때 그에 해당하는 socket의 값을 가져옴.
// 2. 이전 강의에 따라 socket은 서버에 접속 할 때, 각각 하나씩 부여 받게 됨.
// 3. 따라서 로그인 될 때 마다 socket은 다르게 부여됨.
// 4. 그렇게 부여된 socket(window.socket)을 initSocket이 가져옴.
// 5. 해당 socket의 값을 updateSocket을 통해 비어있는 'socket' 함수에 부여함.
