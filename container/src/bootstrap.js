import { mount } from 'products/ProductsIndex';
import { mount as cartMount } from 'cart/cartItems';

console.log('Container!');

await cartMount(document.querySelector("#container-cart"))

mount(document.querySelector("#container-products"));