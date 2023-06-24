const appendProduct = (product) => {
    let productsTable = document.getElementById("table")

    productsTable.innerHTML += `
        <p>${product.name}</p>
        <p>${product.quantity}</p>
        <p>$ ${product.price}</p>
    `;

    let currentSubtotal = document.getElementById("subtotal");
    currentSubtotal.innerHTML = (parseFloat(currentSubtotal.innerHTML) + product.subtotal).toFixed(2);

    let currentTotal = document.getElementById("total");
    currentTotal.innerHTML = (parseFloat(currentTotal.innerHTML) + product.total).toFixed(2);
};

const createProductEntry = (name, price, qty) => {
    let subtotal = price * qty;

    return {
        name: name,
        price: price,
        quantity: qty,
        subtotal: subtotal,
        total: subtotal * 1.08,
    };
};

const createEntry = () => {
    let productName = prompt("Enter the product's name: ");
    let productPrice = parseFloat(prompt("Enter the product's price: "));
    let productQty = parseInt(prompt("Enter the quantity to get: "));

    if(!productName || !productPrice || !productQty){
        alert("One or more elements are null!")
    }else{
        let product = createProductEntry(productName, productPrice, productQty);
        appendProduct(product);
    }
};
