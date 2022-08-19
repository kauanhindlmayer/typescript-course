export class Person {
  constructor(
    private name: string,
    private lastname: string,
    private age: number,
    private _cpf: string,
  ) {
    this.cpf = _cpf;
  }

  set cpf(value: string) {
    console.log('Setter called');
    this._cpf = value;
  }

  get cpf(): string {
    console.log('Getter called');
    return this._cpf.replace(/\D/g, '');
  }
}

const person = new Person('Kauan', 'Hindlmayer', 17, '000.000.000-00');
person.cpf = '111.111.111-11';
console.log(person.cpf);
