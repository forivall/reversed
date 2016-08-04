
class ArrayLikeReversed {
  constructor(value) {
    this._value = value;
  }

  * [Symbol.iterator]() {
    for (let i = this._value.length - 1; i >= 0; i--) {
      yield this._value[i];
    }
  }

  * entries() {
    for (let i = this._value.length - 1; i >= 0; i--) {
      yield [i, this._value[i]];
    }
  }

  * keys() {
    for (let i = this._value.length - 1; i >= 0; i--) {
      yield i;
    }
  }

  * values() {
    for (let i = this._value.length - 1; i >= 0; i--) {
      yield this._value[i];
    }
  }
}

export default function reversed(value) {
  if ('length' in value) {
    return new ArrayLikeReversed(value);
  }
  throw new Error('Cannot reverse given object without length');
}

export {ArrayLikeReversed as ArrayLike};
export {ArrayLikeReversed as Array};
