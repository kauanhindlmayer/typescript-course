function reverseNameAndColor(param1: string, param2: string) {
  // Closure
  return function <T extends new (...args: any[]) => any>(target: T): T {
    console.log("I'm the decorator and received", target);

    return class extends target {
      name: string;
      color: string;

      constructor(...args: any[]) {
        super(...args);
        this.name = this.reverseString(args[0]);
        this.color = this.reverseString(args[1]);
      }

      reverseString(value: string): string {
        return value.split('').reverse().join() + ' ' + param1 + ' ' + param2;
      }
    };
  };
}

@reverseNameAndColor('Value 1', 'Value 2')
export class Animal {
  constructor(public name: string, public color: string) {
    console.log("I'm the class");
  }
}

const animal = new Animal('Kauan', 'Yellow');
console.log(animal);
