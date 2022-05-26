const cartButton = document.querySelector('.cart-btn');
const closeCartBtn = document.querySelector('.cart-content');
const clearCartBtn = document.querySelector('.close-cart');
const cartDOM = document.querySelector('.clear-cart');
const cartOverlay = document.querySelector('.cart');
const cartItems = document.querySelector('.cart-overlay');
const cartTotal = document.querySelector('.cart-items');
const cartContent = document.querySelector('.cart-total');
const productsDOm = document.querySelector('.products-center');

let cart = [];
class Products {
    async getProducts() {
        try {
            let result = await fetch('products.json');
            return result;
        } catch (error) {
            console.log(error);
        }
    }
}
class UI {

}
class Storage {

}
document.addEventListener("DOMContentLoaded", () => {
    const ui = new UI();

    const products = new Products();
    products.getProducts().then(data => console.log(data));
});