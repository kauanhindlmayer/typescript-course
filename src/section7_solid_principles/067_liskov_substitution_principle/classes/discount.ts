export abstract class Discount {
  protected discount = 0;

  calculate(price: number): number {
    // return +(price - price * (this.discount / 100)).toFixed(2);
    throw new Error('Not implemented Error');
  }
}

export class FiftyPercentDiscount extends Discount {
  protected readonly discount = 50;
}

export class TenPercentDiscount extends Discount {
  protected readonly discount = 10;
}

export class NoDiscount extends Discount {
  calculate(price: number): number {
    return price; // Retorno diferente do esperado quebra o princípio
  }
}
