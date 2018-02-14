
export interface Reversed<T> {
  [Symbol.iterator](): Iterator<T>
  entries(): Iterator<T>
  keys(): Iterator<T>
  values(): Iterator<T>
}
export class Array<T> implements Reversed<T> {
  constructor(value: T[])

  [Symbol.iterator](): Iterator<T>
  entries(): Iterator<T>
  keys(): Iterator<T>
  values(): Iterator<T>
}
export class ArrayLike<T> implements Reversed<T> {
  constructor(value: {length: number})

  [Symbol.iterator](): Iterator<T>
  entries(): Iterator<T>
  keys(): Iterator<T>
  values(): Iterator<T>
}

export default function reversed<T>(value: T[]): Reversed<T>
export default function reversed<T>(value: {length: number}): Reversed<T>
export default function reversed(value: any): never
