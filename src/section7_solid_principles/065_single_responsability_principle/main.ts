import { Messaging } from './services/messaging';
import { Order } from './entities/order';
import { Persistency } from './services/persistency';
import { Product } from './entities/product';
import { ShoppingCart } from './entities/shopping_cart';

const shoppingCart = new ShoppingCart();
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCart, messaging, persistency);

shoppingCart.addItem(new Product('Camiseta', 49.99));
shoppingCart.addItem(new Product('Caderno', 9.99));
shoppingCart.addItem(new Product('Lápis', 1.99));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
