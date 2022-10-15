setTimeout(receiveProduct, 500);
function receiveProduct(){
    let productName;
    let productPrice;
    let productDetails;
    let productImage;

    if(window.location.href == "http://localhost:3000/product"){
        productName = localStorage.getItem("Product Name");
        productPrice = localStorage.getItem("Product Price");
        productDetails = localStorage.getItem("Product Details");
        productImage = localStorage.getItem("Product Image");

        document.querySelector("#product-name").textContent = productName;
        document.querySelector("#product-price").textContent = `$${productPrice}`;
        document.querySelector("#product-detailss").textContent = productDetails;
        document.querySelector("#product-image").src = productImage;
    }
}
