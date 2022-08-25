//                                        Type Predicate
export function isNumber(value: unknown): value is number {
  return typeof value === 'number';
}

export function sumNumbers<T>(...args: T[]): number | null {
  const result = args.reduce((sum, value) => {
    if (isNumber(sum) && isNumber(value)) {
      return sum + value;
    }
    return sum;
  }, 0);

  return result;
}

console.log(sumNumbers(1, 2, 3));
console.log(sumNumbers(...[1, 2, 3, 'a', 'b', 'c', 1]));
console.log(sumNumbers('a', 'b', 'c'));
