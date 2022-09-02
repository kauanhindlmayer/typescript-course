/*
  Dependecny Inversion Principle
  - Módulos de alto nível não devem ser dependentes do módulo de baixo nível. Ambos
  devem depender de abstrações.
  - Dependa de abstrações, não de implementações.
  - Abstrações não devem depender de detalhes. Detalhes devem depender de abstrações.
  - Classes de baixo nível são classes que executam tarefas (ou detalhes).
  - Classes de alto nível são classes que gerenciam as classes de baixo nível.
*/

import { Messaging } from './services/messaging';
import { Order } from './classes/order';
import { Persistency } from './services/persistency';
import { Product } from './classes/product';
import { ShoppingCart } from './classes/shopping_cart';
import { NoDiscount } from './classes/discount';
import { EnterpriseCustomer } from './classes/customer';
// import { MessagingProtocol } from './classes/interfaces/messaging_protocol';

// const fiftyPercentDiscount = new FiftyPercentDiscount();
// const tenPercentDiscount = new TenPercentDiscount();
const noDiscount = new NoDiscount();
const shoppingCart = new ShoppingCart(noDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
// const individualCustomer = new IndividualCustomer(
//   'Kauan',
//   'Hindlmayer',
//   '000.000.000-00',
// );
const enterpriseCustomer = new EnterpriseCustomer(
  'Company',
  '000.000.000.000-00',
);

// class MessagingMock implements MessagingProtocol {
//   sendMessage(): void {
//     console.log('Message sent by MessagingMock');
//   }
// }

// const messagingMock = new MessagingMock();

const order = new Order(
  shoppingCart,
  messaging,
  persistency,
  enterpriseCustomer,
);

shoppingCart.addItem(new Product('Camiseta', 49.99));
shoppingCart.addItem(new Product('Caderno', 9.99));
shoppingCart.addItem(new Product('Lápis', 1.99));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
