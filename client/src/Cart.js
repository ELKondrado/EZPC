import React from "react"

function Cart(){
    
    function pay(){
        localStorage.clear();
        window.open("http://localhost:3000/pay", "width=200,height=100");
        window.location.reload();
    }

    return(
    <div className="Cart">
        
        <section id="hero-shop">
            <div className="text">
            </div>
        </section>

        <section id="cart" className="section-p1">
        
            <div className="products-container">
                <table width="100%">
                <thead>
                    <tr>
                        <td>Remove</td>
                        <td>Image</td>
                        <td>Product</td>
                        <td>Price</td>
                        <td>Quantity</td>
                        <td>Subtotal</td>
                    </tr>
                </thead>
                <tbody className="products-to-cart">
                    
                </tbody>
                </table>
            </div>
        </section>

        <section id="cart-add" className="section-p1">
            <div id="coupon">
                <h3>Apply Coupon</h3>
                <div>
                    <input type="text" placeholder="Enter your coupon"/>
                    <button className="normal">Apply</button>
                </div>
            </div>

            <div id="subtotal">
                <h3>Cart Total</h3>
                <table>
                    <tbody>
                        <tr>
                            <td>Cart Subtotal</td>
                            <td className="total-cost">

                            </td>
                        </tr>
                        <tr>
                            <td>Shipping</td>
                            <td>$0</td>
                        </tr>
                        <tr>
                            <td><strong>Total</strong></td>
                            <td><strong className="total-cost-final">

                            </strong></td>
                        </tr>
                    </tbody>
                </table>
                <button className="clearcart normal" onClick={pay}>Proceed to Buy</button>
                
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

    </div>
    );
};

export default Cart;