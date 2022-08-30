interface Constructor {
  new (...args: any[]): any;
}

function reverseNameAndColor(param1: string, param2: string) {
  return function (target: Constructor): Constructor {
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

function otherDecorator(param1: string) {
  return function (target: Constructor) {
    console.log("I'm the other decorator, " + param1);
    return target;
  };
}

@otherDecorator('The param of the other decorator') // 2
@reverseNameAndColor('Value 1', 'Value 2') // 1
export class Animal {
  constructor(public name: string, public color: string) {
    console.log("I'm the class");
  }
}

const animal = new Animal('Kauan', 'Yellow');
console.log(animal);
