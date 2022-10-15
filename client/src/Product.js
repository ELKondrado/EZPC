import React from "react"

function Product(){

    function cartNumbers() {
        const val = parseInt(document.getElementById("prod-input").value);
        let productNumbers = localStorage.getItem("cartNumbers");
        productNumbers = parseInt(productNumbers);
        if (productNumbers) {
          localStorage.setItem("cartNumbers", productNumbers + val);
          document.querySelector(".cart span").textContent = productNumbers + val;
        } else {
          localStorage.setItem("cartNumbers", val);
          document.querySelector(".cart span").textContent = val;
        }
      
        addBtn();
      }

    function addBtn(){
        let product = {id:"0", inCart:"0", productDetails:"",productImage:"",productName:"",productPrice:"0"};
        product.productDetails = localStorage.getItem("Product Details");
        product.productImage = localStorage.getItem("Product Image");
        product.productName = localStorage.getItem("Product Name");
        product.productPrice = localStorage.getItem("Product Price");
        product.productName = product.productName.substring(0,product.productName.length-1)

        let cartItems = localStorage.getItem("productsInCart");
        cartItems = JSON.parse(cartItems);
        const val = parseInt(document.getElementById("prod-input").value);
        let productNumbers = localStorage.getItem("cartNumbers");
        productNumbers = parseInt(productNumbers);

        if (cartItems != null) {
            if (cartItems[product.productName] == undefined) {
                console.log("UNDEF")
                product.inCart = val;
                cartItems = {
                ...cartItems,
                [product.productName]: product,
                
            }}
            else{
                cartItems[product.productName].inCart += val;
            }
            
        }else {
            product.inCart = val;
            cartItems = {
              [product.productName]: product,
            };
        }
        localStorage.setItem("productsInCart", JSON.stringify(cartItems));

        cartItems = localStorage.getItem("productsInCart");
        cartItems = JSON.parse(cartItems);
   
        let cartCost = localStorage.getItem("totalCost");
        product.productPrice = parseFloat(product.productPrice);
        
        
        product.inCart = val;

        if(cartCost != null) {
            cartCost = parseFloat(cartCost);
            localStorage.setItem("totalCost", cartCost + product.inCart * product.productPrice);
        }else{
            localStorage.setItem("totalCost", product.inCart * product.productPrice);
        }
    }



    return(
    <div className="Product"> 
        <section id="product-details" className="section-p1">
            <div className="single-pro-image" >
                <img id="product-image" width="100%" alt=""/>
            </div>

            <div className="single-product-details">

                <h6 id="product-name"></h6>
                <h4 id="product-description"></h4>
                <h2 id="product-price"></h2>
                <input id="prod-input" type="number" defaultValue="1" />
                <button className="addbutton normal" onClick={cartNumbers}>Add To Cart</button>
                <h4>Product Details</h4>
                <p id="product-detailss"></p>
                    
            </div>
        </section>

        <section id="newsletter" className="section-p1">
        <div className="newstext">
            <h4>Sign Up For Newsletters</h4>
            <p>Get E-mail updates about lastest shop and <span> special offers.</span></p>
        </div>
        <div className="form">
            <input type="text" placeholder="Your E-mail address"/>
            <button className="normal">Sign Up</button>
        </div>
    </section>

    <footer className="section-p1">
        <div className="col">
            <img className="logo" src="./img/logo1.png" alt=""/>
            <h4>Contact</h4>
            <p><strong>Adresa</strong>: Street Margelelor, number 8643</p>
            <p><strong>Phone</strong>: 0746054992</p>
            <p><strong>Hours</strong>: 8:00 - 22:00 Mon. - Sat</p>
            <div className="follow">
                <h4>Follow us</h4>
                <div className="icon">
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-pinterest-p"></i>
                    <i className="fab fa-youtube"></i>
                </div>
            </div>
        </div>

        <div className="col">
            <h4>About</h4>
            <a href="#">About us</a>
            <a href="#">Delivery Information</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Contact Us</a>
        </div>

        <div className="col">
            <h4>My Account</h4>
            <a href="#">Sign In</a>
            <a href="#">View Cart</a>
            <a href="#">My Wishlist</a>
            <a href="#">Track My Order</a>
            <a href="#">Help</a>
        </div>

        <div className="col install">
            <h4>Install App</h4>
            <p>From App Store or Google Play</p>
            <div className="row">
                <img src="./img/pay/app.jpg" alt=""/>
                <img src="./img/pay/play.jpg" alt=""/>
            </div>
            <p>Secured Payment Gateways</p>
            <img src="./img/pay/pay.png" alt=""/>
        </div>

        <div className="copyright">
            <p>©2022 - Condrat Radu-Cosmin CTI-EN</p>
        </div>

    </footer>
    
    <script type="module" src="scriptProd.js" async></script>
    <script type="module" src="scriptProd2.js" async></script>
    </div>
    );
};

export default Product;