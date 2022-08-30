@decorator
export class Animal {
  constructor(public name: string, public color: string) {}
}

function decorator<T extends new (...args: any[]) => any>(target: T): T {
  return class extends target {
    name: string;
    color: string;

    constructor(...args: any[]) {
      super(...args);
      this.name = this.reverseString(args[0]);
      this.color = this.reverseString(args[1]);
    }

    reverseString(value: string): string {
      return value.toLocaleLowerCase().split('').reverse().join();
    }
  };
}

const animal = new Animal('Kauan', 'Yellow');
console.log(animal);
