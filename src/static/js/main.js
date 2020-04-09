(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.receiveMessage = void 0;

var receiveMessage = function receiveMessage(data) {
  var message = data.message,
      nickname = data.nickname;
  console.log("".concat(nickname, ": ").concat(message));
};

exports.receiveMessage = receiveMessage;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQuanMiXSwibmFtZXMiOlsicmVjZWl2ZU1lc3NhZ2UiLCJkYXRhIiwibWVzc2FnZSIsIm5pY2tuYW1lIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFPLElBQU1BLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsSUFBRCxFQUFVO0FBQUEsTUFDNUJDLE9BRDRCLEdBQ05ELElBRE0sQ0FDNUJDLE9BRDRCO0FBQUEsTUFDbkJDLFFBRG1CLEdBQ05GLElBRE0sQ0FDbkJFLFFBRG1CO0FBRXBDQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsV0FBZUYsUUFBZixlQUE0QkQsT0FBNUI7QUFDSCxDQUhNIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHJlY2VpdmVNZXNzYWdlID0gKGRhdGEpID0+IHtcclxuICAgIGNvbnN0IHsgbWVzc2FnZSwgbmlja25hbWUgfSA9IGRhdGE7XHJcbiAgICBjb25zb2xlLmxvZyhgJHtuaWNrbmFtZX06ICR7bWVzc2FnZX1gKVxyXG59XHJcbiJdfQ==
},{}],2:[function(require,module,exports){
"use strict";

var _chat = _interopRequireDefault(require("./chat"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var socket = io("/");

var sendMessage = function sendMessage(message) {
  socket.emit("newMessage", {
    message: message
  });
};

var makeName = function makeName(nickname) {
  socket.emit("nickName", {
    nickname: nickname
  });
};

socket.on("messageNotif", _chat["default"]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfNGU3MzczOS5qcyJdLCJuYW1lcyI6WyJzb2NrZXQiLCJpbyIsInNlbmRNZXNzYWdlIiwibWVzc2FnZSIsImVtaXQiLCJtYWtlTmFtZSIsIm5pY2tuYW1lIiwib24iLCJyZWNlaXZlTWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7OztBQUNBLElBQU1BLE1BQU0sR0FBR0MsRUFBRSxDQUFDLEdBQUQsQ0FBakI7O0FBRUEsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsT0FBRCxFQUFhO0FBQzdCSCxFQUFBQSxNQUFNLENBQUNJLElBQVAsQ0FBWSxZQUFaLEVBQTBCO0FBQUVELElBQUFBLE9BQU8sRUFBUEE7QUFBRixHQUExQjtBQUNILENBRkQ7O0FBSUEsSUFBTUUsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsUUFBRCxFQUFjO0FBQzNCTixFQUFBQSxNQUFNLENBQUNJLElBQVAsQ0FBWSxVQUFaLEVBQXdCO0FBQUVFLElBQUFBLFFBQVEsRUFBUkE7QUFBRixHQUF4QjtBQUNILENBRkQ7O0FBSUFOLE1BQU0sQ0FBQ08sRUFBUCxDQUFVLGNBQVYsRUFBMEJDLGdCQUExQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZWNlaXZlTWVzc2FnZSBmcm9tIFwiLi9jaGF0XCJcclxuY29uc3Qgc29ja2V0ID0gaW8oXCIvXCIpO1xyXG5cclxuY29uc3Qgc2VuZE1lc3NhZ2UgPSAobWVzc2FnZSkgPT4ge1xyXG4gICAgc29ja2V0LmVtaXQoXCJuZXdNZXNzYWdlXCIsIHsgbWVzc2FnZSB9KVxyXG59XHJcblxyXG5jb25zdCBtYWtlTmFtZSA9IChuaWNrbmFtZSkgPT4ge1xyXG4gICAgc29ja2V0LmVtaXQoXCJuaWNrTmFtZVwiLCB7IG5pY2tuYW1lIH0pXHJcbn1cclxuXHJcbnNvY2tldC5vbihcIm1lc3NhZ2VOb3RpZlwiLCByZWNlaXZlTWVzc2FnZSkiXX0=
},{"./chat":1}]},{},[2])