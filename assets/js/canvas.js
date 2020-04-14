import { getSocket } from "./sockets";

const canvas = document.querySelector("#js-canvas");
const controls = document.querySelector("#jsControls")
const ctx = canvas.getContext("2d");
const color = document.querySelectorAll(".jsColor");
const range = document.querySelector("#jsRange");
const mode = document.querySelector("#jsMode");
const save = document.querySelector("#jsSave");

const CANVAS_WIDTH = 500;
const CANVAS_HEIGHT = 500;

canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

ctx.fillStyle = "white";
ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

ctx.strokeStyle = "black";
ctx.lineWidth = 1;

let painting = false;
let filling = false;

function stopPainting() {
  painting = false;
}

function startPainting() {
  painting = true;
}

const beganPath = (x, y) => {
  ctx.beginPath();
  ctx.moveTo(x, y);
}

const strokePath = (x, y, color = null, width = null) => {
  let myColor = ctx.strokeStyle;
  let lineWidth = ctx.lineWidth
  if(color !== null) {
    ctx.strokeStyle = color;
  }
  if(width !== null) {
    ctx.lineWidth = width;
  }
  ctx.lineTo(x, y);
  ctx.stroke();
  ctx.strokeStyle = myColor
  ctx.lineWidth = lineWidth
}

function onMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  console.log(x,y)
  if (!painting) {
    beganPath(x, y)
    getSocket().emit(window.events.beginPath, { x, y })
  } else {
    strokePath(x, y, color)
    getSocket().emit(window.events.strokePath, { x, y, color: ctx.strokeStyle, width: ctx.lineWidth })
  }
}

const canvasFill = (color = null) => {
  let currentFillColor = ctx.fillStyle;
  if(color !== null) {
    ctx.fillStyle = color;
  }
  ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  ctx.fillStyle = currentFillColor;
}


function fillColor() {
  if (filling) {
    canvasFill(color)
    getSocket().emit(window.events.fill, { color: ctx.fillStyle })
  }
}

function changeColor(event) {
  const color = event.target.style.backgroundColor;
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
}

const lineWidth = (line = null) => {
  let currentLineWidth = ctx.lineWidth;
  if(line !== null) {
    ctx.lineWidth = line;
  }
  ctx.lineWidth = currentLineWidth
}

function rangeChange(event) {
  const value = event.target.value;
  ctx.lineWidth = value;
}

function modeChange() {
  if (filling === true) {
    filling = false;
    mode.innerText = "Fill";
  } else {
    filling = true;
    mode.innerText = "Paint";
  }
}

function saveImage() {
  const image = canvas.toDataURL();
  const link = document.createElement("a");
  link.href = image;
  link.download = "PaintJS[🖌]";
  link.click();
}

function preventCM(event) {
  event.preventDefault();
}


Array.from(color).forEach(function (e) {
  e.addEventListener("click", changeColor);
});

if (range) {
  range.addEventListener("input", rangeChange);
}

if (mode) {
  mode.addEventListener("click", modeChange);
}

if (save) {
  save.addEventListener("click", saveImage);
}

export const handleBeganPath = ({x, y}) => beganPath(x, y)
export const handleStrokedPath = ({x, y, color, width}) => strokePath(x, y, color, width)
export const handleFill = ({ color }) => canvasFill(color)
export const handleLineWidth = ({ line }) => lineWidth(line)

export const disableCanvas = () => {
  canvas.removeEventListener("mousemove", onMouseMove);
  canvas.removeEventListener("mousedown", startPainting);
  canvas.removeEventListener("mouseup", stopPainting);
  canvas.removeEventListener("mouseleave", stopPainting);
  canvas.removeEventListener("click", fillColor);
}

export const enableCanvas = () => {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
  canvas.addEventListener("click", fillColor);
}

export const hideControls = () => {
  controls.style.opacity = 0;
}

export const showControls = () => controls.style.opacity = 1;


if (canvas) {
  enableCanvas()
  canvas.addEventListener("contextmenu", preventCM);
}
