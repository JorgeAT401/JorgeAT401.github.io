/**
 * Class representing a vector in 2D space, with methods for vector addition, subtraction, and calculating its length.
 */
export class Vec {
  x = 0;
  y = 0;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  plus(vector: Vec) {
    const { x, y } = vector;
    return new Vec( this.x + x, this.y + y );
  }

  minus(vector: Vec) {
    const { x, y } = vector;
    return new Vec( this.x - x, this.y - y );
  }

  get length() {
    return Math.sqrt( this.x ** 2 + this.y ** 2 );
  }
}
