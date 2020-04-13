import events from "../../src/events"
import { initSocket } from "./sockets"


const body = document.querySelector("body")
const loginForm = document.querySelector("#jsLogin")

const NICKNAME = "nickname"
const LOGGED_OUT = "loggedOut"
const LOGGED_IN = "loggedIn"

const nickname = localStorage.getItem(NICKNAME)

const logIn = (nickname) => {
    const socket = io("/");
    socket.emit(window.events.setNickName, { nickname })
    initSocket(socket)
}

if(nickname === null) {
    body.className = LOGGED_OUT
} else {
    body.className = LOGGED_IN
    logIn(nickname)
}


const handleForm = (e) => {
    e.preventDefault()
    const input = loginForm.querySelector("input") 
    const { value } = input;
    console.log(value);
    input.value = "";
    localStorage.setItem(NICKNAME, value)
    body.className = LOGGED_IN;
    // 자주 실수하는 부분
    // 즉각적인 실행을 위해서는 실행되는 함수에도 해당되는 명령을 입력해 주어야 한다.
    // 즉, 위의 if문에서 nickname을 가지고 있는 것을 알게 되면 gameContainer가 보이도록 한다.
    // 하지만 이러한 명령은 아직 w/s가 실행되지 않은 상태이므로 http와 같다 보면 된다.
    // 즉, 새로고침을 하기 전까지는 명령이 전달되지 않는 것이다.
    // 그렇기 때문에 즉각적인 명령 전달을 위해서는 해당 함수가 실행되는 중간에 
    // 위와 같은 body.className = LOGGED_IN을 넣어 주어야 한다.
    logIn(value);
}

if(loginForm) {
    loginForm.addEventListener("submit", handleForm)
}