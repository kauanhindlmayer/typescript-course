export abstract class Character {
  protected abstract icon: string;

  constructor(
    protected name: string,
    protected attack: number,
    protected life: number,
  ) {}

  toAttack(character: Character): void {
    this.attackSpeech();
    character.decreaseLife(this.attack);
  }

  decreaseLife(attackPower: number): void {
    this.life -= attackPower;
    console.log(`${this.icon} ${this.name} now have ${this.life} HP...\n`);
  }

  abstract attackSpeech(): void;
}

export class Warrior extends Character {
  protected icon = '\u{1F9DD}';

  attackSpeech(): void {
    console.log(`${this.icon} Warrior is attacking with his spear...`);
  }
}
export class Monster extends Character {
  protected icon = '\u{1F9DF}';

  attackSpeech(): void {
    console.log(`${this.icon} Monster is attacking with his punches...`);
  }
}

const warrior = new Warrior('Warrior', 100, 1000);
const monster = new Monster('Monster', 87, 1000);

warrior.toAttack(monster);
monster.toAttack(warrior);

warrior.toAttack(monster);
monster.toAttack(warrior);
