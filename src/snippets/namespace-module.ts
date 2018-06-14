export namespace n {
  interface X { a: number; }
  interface Y {}

  const f: X = { a: 1 };
}

export namespace n {
  export interface X { b: string; }
  export class Y {}
  export function f(s) {
    return s + 'x';
  }
  export const g = (s) => 'x' + s;
}

export module m {
  export interface Z { z: string }
  const myZ: Z = { z: 'hello' };
}
