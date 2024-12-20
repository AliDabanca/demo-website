class Menu {
    constructor() {
        this.activeCategory = 'main';
        this.menuContainer = document.getElementById('menu-items');
        
        this.setupEventListeners();
        this.displayMenuItems();
    }

    setupEventListeners() {
        const tabs = document.querySelectorAll('.tab-button');
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                this.setActiveCategory(tab.dataset.category);
            });
        });
    }

    setActiveCategory(category) {
        this.activeCategory = category;
        
        // Update active tab
        document.querySelectorAll('.tab-button').forEach(tab => {
            tab.classList.toggle('active', tab.dataset.category === category);
        });

        this.displayMenuItems();
    }

    displayMenuItems() {
        const items = menuData[this.activeCategory];
        
        this.menuContainer.innerHTML = items.map(item => `
            <div class="menu-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="menu-item-content">
                    <h3 class="menu-item-title">${item.name}</h3>
                    <p class="menu-item-description">${item.description}</p>
                    <div class="menu-item-footer">
                        <span class="menu-item-price">${item.price.toFixed(2)} ₺</span>
                        <button class="add-to-cart" onclick="menu.addToCart('${item.id}')">
                            Sepete Ekle
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    }

    addToCart(itemId) {
        const item = menuData[this.activeCategory].find(item => item.id === itemId);
        if (item) {
            cart.addItem(item);
        }
    }
}