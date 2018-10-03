
export interface Reversed<T> {
  [Symbol.iterator](): Iterator<T>
  entries(): Iterator<T>
  keys(): Iterator<T>
  values(): Iterator<T>
}

declare class ArrayReversed<T> implements Reversed<T> {
  constructor(value: T[])

  [Symbol.iterator](): Iterator<T>
  entries(): Iterator<T>
  keys(): Iterator<T>
  values(): Iterator<T>
}
declare class ArrayLikeReversed<T> implements Reversed<T> {
  constructor(value: ArrayLike<T>)

  [Symbol.iterator](): Iterator<T>
  entries(): Iterator<T>
  keys(): Iterator<T>
  values(): Iterator<T>
}

export {
  ArrayLikeReversed as ArrayLike,
  ArrayReversed as Array
}

export default function reversed<T>(value: T[]): Reversed<T>
export default function reversed<T>(value: ArrayLike<T>): Reversed<T>
export default function reversed(value: any): never
