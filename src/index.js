
export default function reversed(arr) {
  return {
    *[Symbol.iterator]() {
      for (let i = arr.length - 1; i >= 0; i--) {
        yield arr[i];
      }
    }
  };
}
