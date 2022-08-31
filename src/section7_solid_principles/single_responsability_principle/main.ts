import { Order } from './order';
import { ShoppingCart } from './shopping_cart';

const shoppingCart = new ShoppingCart();
const order = new Order(shoppingCart);
shoppingCart.addItem({ name: 'Camiseta', price: 49.99 });
shoppingCart.addItem({ name: 'Caderno', price: 9.99 });
shoppingCart.addItem({ name: 'Lápis', price: 1.99 });

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
