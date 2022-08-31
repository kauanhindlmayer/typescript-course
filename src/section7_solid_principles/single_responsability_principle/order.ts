import { OrderStatus } from './interfaces/order_status';
import { ShoppingCart } from './shopping_cart';

export class Order {
  private _orderStatus: OrderStatus = 'open';

  constructor(private readonly cart: ShoppingCart) {}

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log('Your shopping cart is empty');
      return;
    }

    this._orderStatus = 'closed';
    this.sendMessage(
      `Your request with total ${this.cart.total} has been received.`,
    );
    this.saveOrder();
    this.cart.clear();
  }

  sendMessage(message: string): void {
    console.log('Message sent: ', message);
  }

  saveOrder(): void {
    console.log('Order saved successfully...');
  }
}
