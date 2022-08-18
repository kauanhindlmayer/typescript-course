export class ShoppingCart {
  private readonly products: Product[] = [];

  insertProducts(...products: Product[]) {
    for (const product of products) {
      this.products.push(product);
    }
  }

  quantityProducts(): number {
    return this.products.length;
  }

  totalPrice(): number {
    return this.products.reduce((sum, product) => sum + product.price, 0);
  }
}

export class Product {
  constructor(public name: string, public price: number) {}
}

const product1 = new Product('T-shirt', 49.9);
const product2 = new Product('Mug', 20.0);
const product3 = new Product('Pen', 2.0);

const shoppingCart1 = new ShoppingCart();
shoppingCart1.insertProducts(product1, product2, product3);
console.log(shoppingCart1.totalPrice());
console.log(shoppingCart1.quantityProducts());
