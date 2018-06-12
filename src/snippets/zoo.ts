namespace zoo {
  export interface Mammal { legs: number; }
  interface Dinosaur {}
}
namespace zoo {
  export interface Mammal { furType: string; }
  export class Rabbit implements Mammal { legs: number; furType: string; friend: Dinosaur; } // Error
  export const bunny = new Rabbit();
}
