(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

require("./login");

console.log(window.socket);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfZGQ2OGM4ZTQuanMiXSwibmFtZXMiOlsiY29uc29sZSIsImxvZyIsIndpbmRvdyIsInNvY2tldCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFFQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlDLE1BQU0sQ0FBQ0MsTUFBbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuL2xvZ2luXCJcclxuXHJcbmNvbnNvbGUubG9nKHdpbmRvdy5zb2NrZXQpIl19
},{"./login":2}],2:[function(require,module,exports){
"use strict";

var _events = _interopRequireDefault(require("../../src/events"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var body = document.querySelector("body");
var loginForm = document.querySelector("#jsLogin");
var NICKNAME = "nickname";
var LOGGED_OUT = "loggedOut";
var LOGGED_IN = "loggedIn";
var nickname = localStorage.getItem(NICKNAME);

var logIn = function logIn(nickname) {
  window.socket = io("/");
  window.socket.emit(window.events.setNickName, {
    nickname: nickname
  });
};

if (nickname === null) {
  body.className = LOGGED_OUT;
} else {
  body.className = LOGGED_IN;
  logIn(nickname);
}

var handleForm = function handleForm(e) {
  e.preventDefault();
  var input = loginForm.querySelector("input");
  var value = input.value;
  console.log(value);
  input.value = "";
  localStorage.setItem(NICKNAME, value);
  logIn(value);
};

if (loginForm) {
  loginForm.addEventListener("submit", handleForm);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbImJvZHkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJsb2dpbkZvcm0iLCJOSUNLTkFNRSIsIkxPR0dFRF9PVVQiLCJMT0dHRURfSU4iLCJuaWNrbmFtZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJsb2dJbiIsIndpbmRvdyIsInNvY2tldCIsImlvIiwiZW1pdCIsImV2ZW50cyIsInNldE5pY2tOYW1lIiwiY2xhc3NOYW1lIiwiaGFuZGxlRm9ybSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImlucHV0IiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwic2V0SXRlbSIsImFkZEV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7QUFHQSxJQUFNQSxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixNQUF2QixDQUFiO0FBQ0EsSUFBTUMsU0FBUyxHQUFHRixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsVUFBdkIsQ0FBbEI7QUFFQSxJQUFNRSxRQUFRLEdBQUcsVUFBakI7QUFDQSxJQUFNQyxVQUFVLEdBQUcsV0FBbkI7QUFDQSxJQUFNQyxTQUFTLEdBQUcsVUFBbEI7QUFDQSxJQUFNQyxRQUFRLEdBQUdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQkwsUUFBckIsQ0FBakI7O0FBRUEsSUFBTU0sS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0gsUUFBRCxFQUFjO0FBQ3hCSSxFQUFBQSxNQUFNLENBQUNDLE1BQVAsR0FBZ0JDLEVBQUUsQ0FBQyxHQUFELENBQWxCO0FBQ0FGLEVBQUFBLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjRSxJQUFkLENBQW1CSCxNQUFNLENBQUNJLE1BQVAsQ0FBY0MsV0FBakMsRUFBOEM7QUFBRVQsSUFBQUEsUUFBUSxFQUFSQTtBQUFGLEdBQTlDO0FBQ0gsQ0FIRDs7QUFLQSxJQUFHQSxRQUFRLEtBQUssSUFBaEIsRUFBc0I7QUFDbEJQLEVBQUFBLElBQUksQ0FBQ2lCLFNBQUwsR0FBaUJaLFVBQWpCO0FBQ0gsQ0FGRCxNQUVPO0FBQ0hMLEVBQUFBLElBQUksQ0FBQ2lCLFNBQUwsR0FBaUJYLFNBQWpCO0FBQ0FJLEVBQUFBLEtBQUssQ0FBQ0gsUUFBRCxDQUFMO0FBQ0g7O0FBR0QsSUFBTVcsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsQ0FBRCxFQUFPO0FBQ3RCQSxFQUFBQSxDQUFDLENBQUNDLGNBQUY7QUFDQSxNQUFNQyxLQUFLLEdBQUdsQixTQUFTLENBQUNELGFBQVYsQ0FBd0IsT0FBeEIsQ0FBZDtBQUZzQixNQUdkb0IsS0FIYyxHQUdKRCxLQUhJLENBR2RDLEtBSGM7QUFJdEJDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO0FBQ0FELEVBQUFBLEtBQUssQ0FBQ0MsS0FBTixHQUFjLEVBQWQ7QUFDQWQsRUFBQUEsWUFBWSxDQUFDaUIsT0FBYixDQUFxQnJCLFFBQXJCLEVBQStCa0IsS0FBL0I7QUFDQVosRUFBQUEsS0FBSyxDQUFDWSxLQUFELENBQUw7QUFDSCxDQVJEOztBQVVBLElBQUduQixTQUFILEVBQWM7QUFDVkEsRUFBQUEsU0FBUyxDQUFDdUIsZ0JBQVYsQ0FBMkIsUUFBM0IsRUFBcUNSLFVBQXJDO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXZlbnRzIGZyb20gXCIuLi8uLi9zcmMvZXZlbnRzXCJcclxuXHJcblxyXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIilcclxuY29uc3QgbG9naW5Gb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNqc0xvZ2luXCIpXHJcblxyXG5jb25zdCBOSUNLTkFNRSA9IFwibmlja25hbWVcIlxyXG5jb25zdCBMT0dHRURfT1VUID0gXCJsb2dnZWRPdXRcIlxyXG5jb25zdCBMT0dHRURfSU4gPSBcImxvZ2dlZEluXCJcclxuY29uc3Qgbmlja25hbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShOSUNLTkFNRSlcclxuXHJcbmNvbnN0IGxvZ0luID0gKG5pY2tuYW1lKSA9PiB7XHJcbiAgICB3aW5kb3cuc29ja2V0ID0gaW8oXCIvXCIpO1xyXG4gICAgd2luZG93LnNvY2tldC5lbWl0KHdpbmRvdy5ldmVudHMuc2V0Tmlja05hbWUsIHsgbmlja25hbWUgfSlcclxufVxyXG5cclxuaWYobmlja25hbWUgPT09IG51bGwpIHtcclxuICAgIGJvZHkuY2xhc3NOYW1lID0gTE9HR0VEX09VVFxyXG59IGVsc2Uge1xyXG4gICAgYm9keS5jbGFzc05hbWUgPSBMT0dHRURfSU5cclxuICAgIGxvZ0luKG5pY2tuYW1lKVxyXG59XHJcblxyXG5cclxuY29uc3QgaGFuZGxlRm9ybSA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIGNvbnN0IGlucHV0ID0gbG9naW5Gb3JtLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKSBcclxuICAgIGNvbnN0IHsgdmFsdWUgfSA9IGlucHV0O1xyXG4gICAgY29uc29sZS5sb2codmFsdWUpO1xyXG4gICAgaW5wdXQudmFsdWUgPSBcIlwiO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oTklDS05BTUUsIHZhbHVlKVxyXG4gICAgbG9nSW4odmFsdWUpO1xyXG59XHJcblxyXG5pZihsb2dpbkZvcm0pIHtcclxuICAgIGxvZ2luRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGhhbmRsZUZvcm0pXHJcbn0iXX0=
},{"../../src/events":3}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var events = {
  setNickName: "setNickName"
};
var _default = events;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50cy5qcyJdLCJuYW1lcyI6WyJldmVudHMiLCJzZXROaWNrTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsSUFBTUEsTUFBTSxHQUFHO0FBQ1hDLEVBQUFBLFdBQVcsRUFBRTtBQURGLENBQWY7ZUFJZUQsTSIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGV2ZW50cyA9IHtcclxuICAgIHNldE5pY2tOYW1lOiBcInNldE5pY2tOYW1lXCJcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZXZlbnRzIl19
},{}]},{},[1])