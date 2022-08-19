export class Person {
  static standardAge = 0;
  static standardCpf = '000.000.000-00';

  constructor(
    public name: string,
    public lastname: string,
    public age: number,
    public cpf: string,
  ) {}

  standardMethod(): void {
    console.log(Person.standardAge, Person.standardCpf);
  }

  static createPerson(name: string, lastname: string): Person {
    return new Person(name, lastname, Person.standardAge, Person.standardCpf);
  }
}

const person1 = new Person('Kauan', 'Hindlmayer', 17, '000.000.000-00');
const person2 = Person.createPerson('Luiz', 'Otávio');

console.log(person1);
console.log(person2);
person1.standardMethod();
