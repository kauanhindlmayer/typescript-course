interface TypeName {
  name: string;
}

interface TypeLastName {
  lastname: string;
}

interface TypeFullName {
  fullName: () => string;
}

type PersonType1 = TypeName & TypeLastName & TypeFullName;
interface PersonType2 extends TypeName, TypeLastName, TypeFullName {}

export class Person implements PersonType1 {
  constructor(public name: string, public lastname: string) {}

  fullName(): string {
    return this.name + ' ' + this.lastname;
  }
}

const person = new Person('Kauan', 'Hindlmayer');
console.log(person.fullName());

const personObject: PersonType2 = {
  fullName() {
    return this.name + ' ' + this.lastname;
  },
  name: 'Kauan',
  lastname: 'Hindlmayer',
};

console.log(personObject);
