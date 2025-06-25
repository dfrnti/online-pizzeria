document.addEventListener('DOMContentLoaded', () => {
    function initCart() {
        let cartItems = JSON.parse(localStorage.getItem('cart')) || {};
        return cartItems;
    }

    let cart = initCart();

    function saveCart(cart) {
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    window.changeQuantity = function(id, action) {
        const itemDetails = cart[id];
        if (action === '+') {
            itemDetails.count++;
        } else if (action === '-' && itemDetails.count > 1) {
            itemDetails.count--;
        }
        saveCart(cart);
        renderCart();
    };

    window.removeFromCart = function(id) {
        delete cart[id];
        saveCart(cart);
        renderCart();
    };

    function renderCart() {
        const cartItemsContainer = document.getElementById('cartItems');
        const totalAmountSpan = document.querySelector('.total-amount');

        if (!cartItemsContainer) {
            console.error("Контейнер корзины (#cartItems) не найден!");
            return;
        }

        if (!totalAmountSpan) {
            console.error("Элемент суммарной стоимости (.total-amount) не найден!");
            return;
        }

        cartItemsContainer.innerHTML = '';
        let totalSum = 0;

        Object.entries(cart).forEach(([id, details]) => {
            const { count, info } = details;
            const price = info.price ? info.price : info.sizes[0].price;
            const subTotal = price * count;
            totalSum += subTotal;

            const productCard = `
                <div class="product-card" data-id="${id}">
                    <div class="image-container">
                        <img src="${info.image}" alt="${info.name}">
                    </div>
                    <div class="details">
                        <p>${info.name}</p>
                        <p class="price">Цена: ${price} ₽</p>
                    </div>
                    <div class="quantity-controls">
                        <button onclick="changeQuantity('${id}', '-')">-</button>
                        <span class="counter">${count}</span>
                        <button onclick="changeQuantity('${id}', '+')">+</button>
                    </div>
                    <button class="delete-button" onclick="removeFromCart('${id}')">Удалить</button>
                </div>
            `;

            cartItemsContainer.insertAdjacentHTML('beforeend', productCard);
        });

        totalAmountSpan.textContent = `${totalSum} ₽`;
    }

    renderCart();
});
