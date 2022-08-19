export class Person {
  constructor(
    public name: string,
    public lastname: string,
    private age: number,
    private cpf: string,
  ) {}

  getAge(): number {
    return this.age;
  }

  getCpf(): string {
    return this.cpf;
  }

  getFullName(): string {
    return `${this.name} ${this.lastname}`;
  }
}

export class Student extends Person {
  getFullName(): string {
    return `Student: ${this.name} ${this.lastname}`;
  }
}
export class Customer extends Person {
  getFullName(): string {
    return `Customer: ${this.name} ${this.lastname}`;
  }
}

const person = new Person('Kauan', 'Hindlmayer', 17, '000.000.000-00');
const student = new Student('Kauan', 'Hindlmayer', 17, '000.000.000-00');
const customer = new Customer('Kauan', 'Hindlmayer', 17, '000.000.000-00');

console.log(person.getFullName());
console.log(student.getFullName());
console.log(customer.getFullName());
