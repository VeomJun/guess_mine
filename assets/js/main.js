import receiveMessage from "./chat"
const socket = io("/");

const sendMessage = (message) => {
    socket.emit("newMessage", { message })
}

const makeName = (nickname) => {
    socket.emit("nickName", { nickname })
}

socket.on("messageNotif", receiveMessage)