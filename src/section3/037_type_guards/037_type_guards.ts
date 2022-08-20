export function add(x: unknown, y: unknown): string | number {
  return typeof x === 'number' && typeof y === 'number' ? x + y : `${x}${y}`;
}

console.log(add(1, 2));
console.log(add('a', 'b'));

type Person = { type: 'person'; name: string };
type Animal = { type: 'animal'; color: string };
type PersonOrAnimal = Person | Animal;

export class Student implements Person {
  type: 'person' = 'person';
  constructor(public name: string) {}
}

function showName(object: PersonOrAnimal) {
  // if ('name' in object) console.log(object.name);
  if (object instanceof Student) console.log(object.name);
  switch (object.type) {
    case 'person':
      console.log(object.name);
      break;
    case 'animal':
      console.log('This is an animal', object.color);
      break;
  }
}

showName(new Student('João'));
showName({ type: 'animal', color: 'Pink' });
