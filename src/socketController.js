import events from "./events"

const socketController = (socket) => {
    socket.on(events.setNickName, ({nickname}) => {
        console.log(nickname)
    })
}

export default socketController