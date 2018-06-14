var zoo;
(function (zoo) {
    var Rabbit = /** @class */ (function () {
        function Rabbit() {
        }
        return Rabbit;
    }()); // Error
    zoo.Rabbit = Rabbit;
    zoo.bunny = new Rabbit();
})(zoo || (zoo = {}));
