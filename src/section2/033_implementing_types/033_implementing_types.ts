type TypeName = {
  name: string;
};

type TypeLastName = {
  lastname: string;
};

type TypeFullName = {
  fullName: () => string;
};

export class Person implements TypeName, TypeLastName, TypeFullName {
  constructor(public name: string, public lastname: string) {}

  fullName(): string {
    return this.name + ' ' + this.lastname;
  }
}

const person = new Person('Kauan', 'Hindlmayer');
console.log(person.fullName());
