import { getProducts, getProductById } from './api.js';

// Function to create product card HTML
function createProductCard(product) {
    return `
        <div class="col-md-4 mb-3">
            <div class="card">
                <img src="${product.image}" class="card-img-top" alt="${product.title}">
                <div class="card-body">
                    <h5 class="card-title">${product.title}</h5>
                    <p class="card-text">${product.description}</p>
                    <button class="btn btn-primary" onclick="addToCart(${product.id})">Add to Cart</button>
                </div>
            </div>
        </div>
    `;
}

// Function to render products on the page
function renderProducts(products) {
    const productsContainer = document.getElementById('products');
    productsContainer.innerHTML = '';
    products.forEach(product => {
        productsContainer.innerHTML += createProductCard(product);
    });
}

// Function to handle search (example)
async function handleSearch(query) {
    const allProducts = await getProducts();
    const filteredProducts = allProducts.filter(product => product.title.toLowerCase().includes(query.toLowerCase()));
    renderProducts(filteredProducts);
}

// Add more UI functions as needed, e.g., pagination handling, addToCart function, etc.

export { renderProducts, handleSearch };