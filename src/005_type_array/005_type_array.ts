// Array<T> - T[]
export function multiplicaArgs(...args: Array<number>): number {
  return args.reduce((ac, valor) => ac * valor, 1);
}

export function concatenaStrings(...args: string[]): string {
  return args.reduce((ac, valor) => ac + valor);
}

export function toUpperCase(...args: string[]): string[] {
  return args.map((valor) => valor.toUpperCase());
}

const result = multiplicaArgs(1, 2, 3);
const resultConcat = concatenaStrings('a', 'b', 'c');
const resultUpperCase = toUpperCase('a', 'b', 'c');

console.log(result);
console.log(resultConcat);
console.log(resultUpperCase);
