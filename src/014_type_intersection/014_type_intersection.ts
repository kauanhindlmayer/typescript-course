type Name = { name: string };
type LastName = { lastname: string };
type Age = { age: number };
type Person = Name & LastName & Age;

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'A' | 'D';
type Intersection = AB & AC & AD;

const person: Person = {
  age: 17,
  name: 'Kauan',
  lastname: 'Hindlmayer',
};

console.log(person);

// Module mode
export { person };
