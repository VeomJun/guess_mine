import events from "../"


const body = document.querySelector("body")
const loginForm = document.querySelector("#jsLogin")

const NICKNAME = "nickname"
const LOGGED_OUT = "loggedOut"
const LOGGED_IN = "loggedIn"
const nickname = localStorage.getItem(NICKNAME)

const logIn = (nickname) => {
    window.socket = io("/");
    window.socket.emit(window.events.setNickName, { nickname })
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
    logIn(value);
}

if(loginForm) {
    loginForm.addEventListener("submit", handleForm)
}