"use strict";

const $ = require("jquery");
const helloimport = require("../src/say-hello.js");

const sayHello = function(){ (console.log("hello"))};


sayHello();
helloimport();

$("body").css("background-color","blue");