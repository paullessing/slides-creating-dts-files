"use strict";
exports.__esModule = true;
var MyClass = /** @class */ (function () {
    function MyClass() {
    }
    return MyClass;
}());
exports.MyClass = MyClass;
(function (MyClass) {
    function factory() {
        return null;
    }
    MyClass.factory = factory;
})(MyClass = exports.MyClass || (exports.MyClass = {}));
exports.MyClass = MyClass;
