class Cart {
    constructor() {
        this.items = [];
        this.sidebar = document.getElementById('cart-sidebar');
        this.itemsContainer = document.getElementById('cart-items');
        this.totalElement = document.getElementById('cart-total-price');
        this.countElement = document.querySelector('.cart-count');
        
        this.setupEventListeners();
    }

    setupEventListeners() {
        document.getElementById('cart-icon').addEventListener('click', () => this.toggleCart());
        document.getElementById('close-cart').addEventListener('click', () => this.toggleCart());
        document.getElementById('checkout-button').addEventListener('click', () => this.checkout());
    }

    toggleCart() {
        this.sidebar.classList.toggle('cart-visible');
    }

    addItem(item) {
        const existingItem = this.items.find(i => i.id === item.id);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.items.push({ ...item, quantity: 1 });
        }

        this.updateCart();
    }

    removeItem(itemId) {
        this.items = this.items.filter(item => item.id !== itemId);
        this.updateCart();
    }

    updateQuantity(itemId, newQuantity) {
        if (newQuantity <= 0) {
            this.removeItem(itemId);
            return;
        }

        const item = this.items.find(i => i.id === itemId);
        if (item) {
            item.quantity = newQuantity;
            this.updateCart();
        }
    }

    updateCart() {
        this.itemsContainer.innerHTML = this.items.map(item => `
            <div class="cart-item">
                <div class="cart-item-info">
                    <h3>${item.name}</h3>
                    <p>${(item.price * item.quantity).toFixed(2)} ₺</p>
                </div>
                <div class="cart-item-controls">
                    <div class="quantity-control">
                        <button class="quantity-btn" onclick="cart.updateQuantity('${item.id}', ${item.quantity - 1})">-</button>
                        <span>${item.quantity}</span>
                        <button class="quantity-btn" onclick="cart.updateQuantity('${item.id}', ${item.quantity + 1})">+</button>
                    </div>
                    <button onclick="cart.removeItem('${item.id}')" class="remove-item">🗑️</button>
                </div>
            </div>
        `).join('');

        const total = this.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
        this.totalElement.textContent = `${total.toFixed(2)} ₺`;
        this.countElement.textContent = this.items.reduce((sum, item) => sum + item.quantity, 0);
    }

    checkout() {
        if (this.items.length === 0) {
            alert('Sepetiniz boş!');
            return;
        }

        const total = this.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
        alert(`Toplam Tutar: ${total.toFixed(2)} ₺\nSiparişiniz alındı!`);
        
        this.items = [];
        this.updateCart();
        this.toggleCart();
    }
}