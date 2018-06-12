namespace f2 {
  export interface X { b: string; }
  export class Y {}
}


namespace f2 {
  interface X { a: number; }
  interface Y {}

  const f: X;
}
