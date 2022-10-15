/* Proceed to buy button */
import React from "react"
import {useState, useEffect} from "react"
import Axios from 'axios'
/*
const [productList, setProductList] = useState([])

    useEffect(()=>{
        Axios.get('http://localhost:3001/api/get').then((response) => {
            setProductList(response.data);
        })
    },[])

let products = productList;

var newWindow;
function pay(){
    localStorage.clear();
    window.open('pay.html',"width=200,height=100");
    window.location.reload();
};
*/

/* Payment close button*/

function backToCart(){
  window.close();
}

/* Cart mechanism */

setTimeout(cartMech,1500);

function cartMech(){
  let carts = document.querySelectorAll(".shopcart");
  console.log(carts.length)
  for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener("click", function ()
    {
      console.log("GELL")
      cartNumbers(products[i]);
      totalCost(products[i]);
    });
  }
}

function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem("cartNumbers");
  if (productNumbers) {
    document.querySelector(".cart span").textContent = productNumbers;
  }
}

function cartNumbers(product) {
  let productNumbers = localStorage.getItem("cartNumbers");
  productNumbers = parseInt(productNumbers);
  if (productNumbers) {
    localStorage.setItem("cartNumbers", productNumbers + 1);
    document.querySelector(".cart span").textContent = productNumbers + 1;
  } else {
    localStorage.setItem("cartNumbers", 1);
    document.querySelector(".cart span").textContent = 1;
  }
  setItems(product);
}


function setItems(product) {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);

  if (cartItems != null) {
    if (cartItems[product.tag] == undefined) {
      cartItems = {
        ...cartItems,
        [product.tag]: product,
      };
    }
   
    cartItems[product.tag].inCart += 1;

  } else {
    product.inCart = 1;
    cartItems = {
      [product.tag]: product,
    };
  }

  localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}


function totalCost(product) {
  let cartCost = localStorage.getItem("totalCost");

  if (cartCost != null) {
    cartCost = parseInt(cartCost);
    localStorage.setItem("totalCost", cartCost + product.price);
  } else {
    localStorage.setItem("totalCost", product.price);
  }
}

function displayCart() {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  let productContainer = document.querySelector(".products-to-cart");
  let cartCost = localStorage.getItem("totalCost");

  if (cartItems && productContainer) {
    productContainer.innerHTML = "";
    Object.values(cartItems).map((item) => {
      productContainer.innerHTML += `
            <div>
                <tr>
                    <td><a><button class="remove" onclick="removeItemFromCart('Intel Core i9 12900KS')">Remove</button></a></td>
                    <td><img src="./img/Products/${item.tag}.jpg" alt=""></td>
                    <td>${item.name}</td>
                    <td>$${item.price}</td>
                    <td> <span>${item.inCart}</span> </td>
                    <td>$${item.price * item.inCart}</td>
                </tr>
            </div>
            `;
    });

    let productContainer2 = document.querySelector(".total-cost");
    productContainer2.innerHTML += `
            $${cartCost}
        `;
    let productContainer3 = document.querySelector(".total-cost-final");
    productContainer3.innerHTML += `
            $${cartCost}
        `;
  }
}



function removeItemFromCart(ProductTag)
{
  let cart = JSON.parse(localStorage.getItem("productsInCart"));

  let temp = cart.filter(item => item.tag != ProductTag);

  //localStorage.setItem("productsInCart",temp);
}

displayCart();
onLoadCartNumbers();