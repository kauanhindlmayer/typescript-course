/*
  Public    => Could be accessed anywhere
  Private   => Could be accessed only in the class
  Protected => Could be acessed in the superclass and the subclass
*/
export class Company {
  readonly name: string; // public isn't necessary
  protected readonly employees: Employe[] = [];
  private readonly ein: string;

  constructor(name: string, ein: string) {
    this.name = name;
    this.ein = ein;
  }

  addEmploye(employe: Employe): void {
    this.employees.push(employe);
  }

  showEmployees(): void {
    for (const employe of this.employees) {
      console.log(employe);
    }
  }
}

export class Udemy extends Company {
  constructor() {
    super('Udemy', '00.000.000/0000-00');
  }

  popEmploye(): Employe | null {
    const employe = this.employees.pop();
    if (employe) return employe;
    return null;
  }
}

export class Employe {
  constructor(public readonly name: string, public readonly lastname: string) {}
}

const myCompany = new Udemy();
const employe1 = new Employe('Kauan', 'Hindlmayer');
const employe2 = new Employe('Luiz', 'Otávio');
const employe3 = new Employe('João', 'Vieira');
myCompany.addEmploye(employe1);
myCompany.addEmploye(employe2);
myCompany.addEmploye(employe3);
const removedEmploye = myCompany.popEmploye();
console.log(removedEmploye);
console.log(myCompany);
