"use strict";
exports.__esModule = true;
var console_1 = require("./console");
function concatenate(text, other) {
    return [text].concat(other).join(', ');
}
var PrintService = /** @class */ (function () {
    function PrintService() {
    }
    PrintService.prototype.print = function (text) {
        var other = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            other[_i - 1] = arguments[_i];
        }
        console_1.logToConsole(concatenate(text, other));
    };
    return PrintService;
}());
exports.PrintService = PrintService;
var HelloWorldPrinter = /** @class */ (function () {
    function HelloWorldPrinter(prefix, printService) {
        this.prefix = prefix;
        this.printService = printService;
    }
    HelloWorldPrinter.prototype.helloWorld = function () {
        this.printService.print(this.prefix, 'Hello World!');
    };
    return HelloWorldPrinter;
}());
exports.HelloWorldPrinter = HelloWorldPrinter;
new HelloWorldPrinter('[HW]', new PrintService()).helloWorld();
