"use strict";
exports.__esModule = true;
var uuid = require("uuid");
var uuid_1 = require("uuid");
uuid(); // type: string
uuid({ rng: uuid.whatwgRNG });
uuid.v4({ rng: uuid.nodeRNG }); // type: string
uuid.v4({ rng: uuid.mathRNG, buffer: [] }); // type: number[]
uuid.v4({
    rng: function () { return ([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]); },
    buffer: new Buffer([])
}); // type: Buffer
uuid_1.v4(); // type: string;
