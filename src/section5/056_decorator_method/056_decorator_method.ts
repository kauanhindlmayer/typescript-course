function decorator(
  classPrototype: any,
  methodName: string,
  descriptor: PropertyDescriptor,
): PropertyDescriptor | void {
  console.log(classPrototype, methodName, descriptor);
  // return {
  //   value: function (...args: string[]) {
  //     return args[0].toUpperCase();
  //   },
  // };
}

export class OnePerson {
  name: string;
  lastName: string;
  age: number;

  constructor(name: string, lastName: string, age: number) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
  }

  @decorator
  method(message: string): string {
    return `${this.name} ${this.lastName}: ${message}`;
  }

  get fullName(): string {
    return `${this.name} ${this.lastName}`;
  }

  set fullName(value: string) {
    const words = value.split(/\s+/g);
    const firstName = words.shift();
    if (!firstName) return;
    this.name = firstName;
    this.lastName = words.join(' ');
  }
}

const person = new OnePerson('Kauan', 'Hindlmayer', 18);
// person.method = () => 'Hello!';
const method = person.method('Hello, World!');
console.log(method);
