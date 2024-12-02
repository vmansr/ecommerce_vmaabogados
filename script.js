const productsContainer = document.getElementById("products-container");
const addProductForm = document.getElementById("add-product-form");
const apiURL = "http://localhost:3000/services";

// Cargar productos al iniciar
document.addEventListener("DOMContentLoaded", loadProducts);

function loadProducts() {
    fetch(apiURL)
        .then((response) => response.json())
        .then((products) => renderProducts(products));
}

function renderProducts(products) {
    productsContainer.innerHTML = "";
    products.forEach((product) => {
        const card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Precio: $${product.price}</p>
            <p>Jurisdicción: ${product.jurisdiction}</p>
        `;
        productsContainer.appendChild(card);
    });
}

// Agregar nuevo producto
addProductForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(addProductForm);
    const newProduct = {
        name: formData.get("name"),
        price: parseFloat(formData.get("price")),
        jurisdiction: formData.get("jurisdiction"),
        image: formData.get("image"),
    };

    fetch(apiURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProduct),
    })
        .then(() => {
            loadProducts();
            addProductForm.reset();
        });
});
