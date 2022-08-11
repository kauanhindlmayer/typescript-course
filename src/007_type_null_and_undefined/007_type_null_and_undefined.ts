let x;
if (typeof x === 'undefined') x = 20;
console.log(x * 2);

export function createPerson(
  firstName: string,
  lastName?: string,
): {
  firstName: string; // type annotation
  lastName?: string;
} {
  return {
    firstName,
    lastName,
  };
}

export function squareOf(x: unknown) {
  if (typeof x === 'number') return x * x;
  return null;
}

const result = squareOf(2);

if (result === null) {
  console.log('Conta inválida!');
} else {
  console.log(result);
}
