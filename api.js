const API_BASE_URL = 'https://fakestoreapi.com';

// Function to get products
async function getProducts() {
    try {
        const response = await fetch(`${API_BASE_URL}/products`);
        if (!response.ok) throw new Error('Network response was not ok');
        return await response.json();
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

// Function to get product by ID
async function getProductById(id) {
    try {
        const response = await fetch(`${API_BASE_URL}/products/${id}`);
        if (!response.ok) throw new Error('Network response was not ok');
        return await response.json();
    } catch (error) {
        console.error('Error fetching product:', error);
    }
}

// Function to update a product (example with PUT request)
async function updateProduct(id, updatedData) {
    try {
        const response = await fetch(`${API_BASE_URL}/products/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedData)
        });
        if (!response.ok) throw new Error('Network response was not ok');
        return await response.json();
    } catch (error) {
        console.error('Error updating product:', error);
    }
}

// Additional functions for POST, DELETE, etc. can be added similarly

export { getProducts, getProductById, updateProduct };