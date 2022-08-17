export class Writer {
  private _tool: Tool | null = null;

  constructor(private _name: string) {}

  get name(): string {
    return this._name;
  }

  set tool(tool: Tool | null) {
    this._tool = tool;
  }

  get tool(): Tool | null {
    return this._tool;
  }

  write(): void {
    if (this.tool === null) {
      console.log(`It's impossible write without a tool.`);
      return;
    }
    this.tool.write();
  }
}

export abstract class Tool {
  constructor(private _name: string) {}

  get name(): string {
    return this._name;
  }

  abstract write(): void;
}

export class Pen extends Tool {
  write(): void {
    console.log(`${this.name} is writing...`);
  }
}

export class WritingMachine extends Tool {
  write(): void {
    console.log(`${this.name} is typing...`);
  }
}

const writer = new Writer('Kauan');
const pen = new Pen('Bic');
const writingMachine = new WritingMachine('Writing Machine');

console.log(writer.name);
console.log(pen.name);
console.log(writingMachine.name);

writer.tool = pen;
writer.write();

writer.tool = writingMachine;
writer.write();
