// Declaration merging
interface Person {
  readonly name: string;
}

interface Person {
  readonly lastname: string;
}

interface Person {
  readonly age?: number;
}

interface Person {
  readonly address: readonly string[];
}

const person: Person = {
  name: 'Kauan',
  lastname: 'Hindlmayer',
  age: 17,
  address: ['Brasil'],
};

console.log(person);
