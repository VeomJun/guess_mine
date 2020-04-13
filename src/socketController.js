import events from "./events"

const socketController = (socket) => {
    const broadcast = (event, data) => socket.broadcast.emit(event, data)
    socket.on(events.setNickName, ({nickname}) => {
        socket.nickname = nickname;
        broadcast(events.newUser, { nickname })
    })
    socket.on(events.disconnect, () => {
        broadcast(events.disconnected, { nickname: socket.nickname })
    })
    socket.on(events.sendMsg, ({message}) => {
        broadcast(events.newMsg, { message, nickname: socket.nickname })
    })
    // socket io에서의 두번 째 파라미터 값은 object 형태로 입력되어야만 한다.
    // 따라서 해당 데이터 값을 가져올 때에는 '{}' 내부에 값을 넣어 
    // object 형태로 만들어야 한다.
}

export default socketController