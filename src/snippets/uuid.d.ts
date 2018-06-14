/// <reference types="node" />

const uuid: typeof uuid.v4;
namespace uuid {
  interface ProvidedRng {
    __internal_rng_phantom__: never;
  }
  const mathRNG: ProvidedRng;
  const nodeRNG: ProvidedRng;
  const whatwgRNG: ProvidedRng;
  interface CustomRng { (): number[] } // Returns number[16];

  type Rng = ProvidedRng | CustomRng;
  type OutputBuffer = number[] | Buffer;

  interface V4Options {
    random?: number[];
    rng?: Rng;
  }
  interface V4WithBufferOptions<T extends OutputBuffer> extends V4Options {
    buffer: T;
  }

  function v1(): string;

  function v4(options?: V4Options): string;
  function v4<T extends OutputBuffer>(options: V4WithBufferOptions<T>): T;
  function v4<T extends OutputBuffer>(options: V4Options, buffer: T, offset?: number): T;
}

export = uuid;
