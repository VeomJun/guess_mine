import { disableCanvas, hideControls } from "./canvas";

const board = document.querySelector("#jsPBoard")

const addPlayers = (players) => {
        board.innerHTML = "";
        players.forEach(player => {
        const playerElement = document.createElement("span")
        playerElement.innerText = `${player.nickname}: ${player.points}`
        board.appendChild(playerElement)
    })
}
export const handlePlayerUpdate = ({ sockets }) => addPlayers(sockets);
export const handleGameStarted = () => {
    disableCanvas();
    hideControls()
}