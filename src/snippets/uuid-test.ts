import * as uuid from 'uuid';
import { v4 as uuidV4 } from 'uuid';

uuid(); // type: string
uuid({ rng: uuid.whatwgRNG });
uuid.v4({ rng: uuid.nodeRNG }); // type: string
uuid.v4({ rng: uuid.mathRNG, buffer: [] }); // type: number[]
uuid.v4({
  rng: () => ([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
  buffer: new Buffer([])
}); // type: Buffer

uuidV4(); // type: string;



