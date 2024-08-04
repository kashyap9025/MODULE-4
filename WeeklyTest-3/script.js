const Products = [
    { id: 1, name: 'Earpod-Skin', price: 100 },
    { id: 2, name: 'Mobile-Case', price: 200 },
    { id: 3, name: 'Laptop-Skin', price: 300 },
];

const cart = {};

function renderProducts() {
    const productsList = document.getElementById('products-list');
    productsList.innerHTML = '';
    Products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.className = 'product-item';
        productItem.innerHTML = `
            <span>${product.name}</span>
            <span>${product.price}</span>
            <div class="button-group">
                <button onclick="updateCart(${product.id}, -1)">-</button>
                <span id="quantity-${product.id}">0</span>
                <button onclick="updateCart(${product.id}, 1)">+</button>
            </div>
        `;
        productsList.appendChild(productItem);
    });
}

function renderCart() {
    const cartList = document.getElementById('cart-list');
    cartList.innerHTML = '';
    let totalPrice = 0;
    let isEmpty = true;

    for (let id in cart) {
        if (cart[id] > 0) {
            const product = Products.find(p => p.id === parseInt(id));
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <span>${product.name}</span>
                <span>${cart[id]} × ${product.price}</span>
            `;
            cartList.appendChild(cartItem);
            totalPrice += cart[id] * product.price;
            isEmpty = false;
        }
    }

    if (isEmpty) {
        cartList.innerHTML = '<p>No Product added to the cart</p>';
    }

    const totalPriceElement = document.getElementById('total-price');
    totalPriceElement.textContent = totalPrice;

    // Animation effect on total price
    totalPriceElement.style.color = '#2ecc71';
    totalPriceElement.style.transform = 'scale(1.2)';
    setTimeout(() => {
        totalPriceElement.style.color = '#2c3e50';
        totalPriceElement.style.transform = 'scale(1)';
    }, 300);
}

function updateCart(id, change) {
    if (!cart[id]) {
        cart[id] = 0;
    }
    cart[id] += change;
    if (cart[id] < 0) cart[id] = 0;
    document.getElementById(`quantity-${id}`).textContent = cart[id];
    renderCart();
}

function clearCart() {
    for (let id in cart) {
        cart[id] = 0;
        document.getElementById(`quantity-${id}`).textContent = 0;
    }
    renderCart();
}

document.getElementById('clear-cart').addEventListener('click', clearCart);

window.onload = function () {
    renderProducts();
    renderCart();
};