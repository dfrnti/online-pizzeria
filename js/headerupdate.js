function updateHeaderCart() {
    let cartItems = JSON.parse(localStorage.getItem('cart')) || {};
    let totalCount = 0;
    let totalSum = 0;

    Object.values(cartItems).forEach(item => {
        totalCount += parseInt(item.count);
        const price = item.info.price !== undefined ? item.info.price : item.info.sizes[0].price;
        totalSum += price * item.count;
    });

    const totalSumElement = document.querySelector('.total-sum');
    const itemCountElement = document.querySelector('.item-count');

    if (totalSumElement) {
        totalSumElement.textContent = `${totalSum.toFixed(2)} ₽`;
    }
    if (itemCountElement) {
        itemCountElement.textContent = `${totalCount} шт.`;
    }
}

window.onload = function() {
    updateHeaderCart(); 
};

if ('onstorage' in window) {
    window.onstorage = function(event) {
        if (event.key === 'cart') {
            updateHeaderCart();
        }
    };
}

function addToCart(productId, count) {
    let cartItems = JSON.parse(localStorage.getItem('cart')) || {};
    cartItems[productId] = { info: productInfo, count }; 
    localStorage.setItem('cart', JSON.stringify(cartItems));
    updateHeaderCart();
}

function removeProduct(productId) {
    let cartItems = JSON.parse(localStorage.getItem('cart')) || {};
    delete cartItems[productId];
    localStorage.setItem('cart', JSON.stringify(cartItems));
    updateHeaderCart();
}

function changeQuantity(productId, newCount) {
    let cartItems = JSON.parse(localStorage.getItem('cart')) || {};
    cartItems[productId].count = newCount;
    localStorage.setItem('cart', JSON.stringify(cartItems));
    updateHeaderCart();
}
