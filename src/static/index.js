const socket = io("/");


const sendMessage = (message) => {
    socket.emit("newMessage", { message })
}

const makeName = (nickname) => {
    socket.emit("nickName", { nickname })
}

const receiveMessage = (data) => {
    const { message, nickname } = data;
    console.log(`${nickname}: ${message}`)
}

socket.on("messageNotif", receiveMessage)