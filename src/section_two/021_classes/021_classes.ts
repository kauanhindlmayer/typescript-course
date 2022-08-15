export class Company {
  public readonly name: string; // public isn't necessary
  private readonly employees: Employe[] = [];
  protected readonly ein: string;

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

export class Employe {
  constructor(public readonly name: string, public readonly lastname: string) {}
}

const myCompany = new Company('Company', '00.000.000/0000-00');
const employe1 = new Employe('Kauan', 'Hindlmayer');
const employe2 = new Employe('Luiz', 'Otávio');
const employe3 = new Employe('João', 'Vieira');
myCompany.addEmploye(employe1);
myCompany.addEmploye(employe2);
myCompany.addEmploye(employe3);
console.log(myCompany);
myCompany.showEmployees();
