import { getProducts } from './api.js';
import { renderProducts, handleSearch } from './ui.js';

// Initialize the application
async function initApp() {
    try {
        const products = await getProducts();
        renderProducts(products);
        setupEventListeners();
    } catch (error) {
        console.error('Error initializing app:', error);
    }
}

// Setup event listeners (e.g., for search functionality)
function setupEventListeners() {
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (event) => {
        handleSearch(event.target.value);
    });
}

// Add more functions as needed for managing application state, user interactions, etc.

// Initialize the app on page load
document.addEventListener('DOMContentLoaded', initApp);

export { initApp };
