export const receiveMessage = (data) => {
    const { message, nickname } = data;
    console.log(`${nickname}: ${message}`)
}
