import React from "react"
import {useState, useEffect} from "react"
import Axios from 'axios'

function Shop(){
    const [productList, setProductList] = useState([])

    useEffect(()=>{
        Axios.get('http://localhost:3001/api/get').then((response) => {
            setProductList(response.data);
        })
    },[])

    function signUp(){
        let input = document.querySelector(".email");
        let inputValue = input.value;
        Axios.post('http://localhost:3001/api/insertEmail',
        {
            email : inputValue
        });
        alert("Email added successfully");
        input.value = ``
    }

    return(
    <div className="Shop">

        <section id="hero-shop">
            <div className="text">
            </div>

        </section>

        <section id="product1" className="section-p1">
            
            <div id="pro-container">
                
                {productList.map((val)=>{
                    
                    return(
                        
                            <div className="pro">
                                <div className="pro-imgdes">
                                <a href="http://localhost:3000/product"><img className="prod-image" src={val.productImage} alt=""/></a>
                                    <div className="des">
                                        <h5 className="prod-des">{val.productName} </h5>
                                        <span className="prod-details" hidden="hidden">{val.productDetails}</span>
                                        <div className="star">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </div>
                                        <h4 className="prod-price">{val.productPrice}</h4>
                                    </div>

                                        <a>
                                            <div className="shopcart"><img src="./img/shopping-cart.png" alt=""/></div>
                                        </a>

                                    </div>
                            </div>
                        
                    );
                })}
            
            </div>
                
        </section>

    <section id="newsletter" className="section-p1">
        <div className="newstext">
            <h4>Sign Up For Newsletters</h4>
            <p>Get E-mail updates about lastest shop and <span> special offers.</span></p>
        </div>
        <div className="form">
            <input className="email" type="text" placeholder="Your E-mail address"/>
            <button className="normal signUp" onClick={signUp}>Sign Up</button>
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

export default Shop;