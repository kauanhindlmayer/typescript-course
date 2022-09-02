import { OrderStatus } from './interfaces/order_status';
import { CustomerOrder } from './interfaces/customer_protocol';
import { ShoppingCartProtocol } from './interfaces/shopping_cart_protocol';
import { MessagingProtocol } from './interfaces/messaging_protocol';
import { PersistencyProtocol } from './interfaces/persistency_protocol';

export class Order {
  // High-Level Class
  private _orderStatus: OrderStatus = 'open';

  constructor(
    // Dependency Injection
    private readonly cart: ShoppingCartProtocol,
    private readonly messaging: MessagingProtocol,
    private readonly persistency: PersistencyProtocol,
    private readonly customer: CustomerOrder,
  ) {}

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log('Your shopping cart is empty');
      return;
    }

    this._orderStatus = 'closed';
    this.messaging.sendMessage(
      `Your request with total ${this.cart.totalWithDiscount()} has been received.`,
    );
    this.persistency.saveOrder();
    this.cart.clear();
    console.log(
      'The client is: ',
      this.customer.getName(),
      this.customer.getIDN(),
    );
  }
}
