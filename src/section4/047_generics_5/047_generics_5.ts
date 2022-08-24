export class Person<T, U> {
  constructor(public name: T, public age: U) {}
}

export class Stack<T> {
  private counter = 0;
  private elements: { [k: number]: T } = {};

  push(element: T): void {
    this.elements[this.counter] = element;
    this.counter++;
  }

  isEmpty(): boolean {
    return this.counter === 0;
  }

  pop(): T | void {
    if (this.isEmpty()) return undefined;
    this.counter--;
    const element = this.elements[this.counter];
    delete this.elements[this.counter];
    return element;
  }

  length(): number {
    return this.counter;
  }

  showStack(): void {
    for (const key in this.elements) {
      console.log(this.elements[key]);
    }
  }
}

const myStack = new Stack<number>();
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);
myStack.showStack();

while (!myStack.isEmpty()) {
  console.log(myStack.pop());
}
