export class MyClass {
  public static PROPERTY: string;
}

export namespace MyClass {
  export function factory(): MyClass {
    return null;
  }
}

export interface IThing {
  a: string;
}

export interface IThing {
  b: number;
}

export namespace n {
  interface F {
    a: string;
  }
}
export namespace n {
  interface F {
    a: number;
  }
}
