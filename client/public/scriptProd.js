setTimeout(transfer, 500);

function transfer(){
    const shopProducts = document.querySelectorAll(".prod-image");
    const productNames = document.querySelectorAll(".prod-des");
    const productPrices = document.querySelectorAll(".prod-price");
    const productImages = document.querySelectorAll(".prod-image");
    const productDetails = document.querySelectorAll(".prod-details");

    for(let i=0;i<shopProducts.length;i++)
    {
        shopProducts[i].addEventListener('click',function(e)
        {
            e.preventDefault();
            
            let prodName = productNames[i].textContent;
            let prodPrice = productPrices[i].textContent;
            let prodDetails = productDetails[i].textContent;
            let prodImage = productImages[i].getAttribute("src");

            localStorage.setItem("Product Name",prodName);
            localStorage.setItem("Product Price",prodPrice);
            localStorage.setItem("Product Details",prodDetails);
            localStorage.setItem("Product Image",prodImage);

            window.location.href='http://localhost:3000/product';
        });
    }
}