/* Proceed to buy button */
let products;

fetch('http://localhost:3001/api/get')
.then(res => res.json())
.then(data => products=data)

var newWindow;
function pay() {
  localStorage.clear();
  window.open("http://localhost:3000/pay", "width=200,height=100");
  window.location.reload();
}

/* Payment close button*/

function backToCart() {
  window.close();
}

/* Cart mechanism */

setTimeout(cartMech, 1000);

function cartMech() {
  let carts = document.querySelectorAll(".shopcart");

  for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener("click", function () {
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
  console.log(product)
  if (cartItems != null) {
    if (cartItems[product.productName] == undefined) {
      product.inCart = 1;
      product.id=0;
      cartItems = {
        ...cartItems,
        [product.productName]: product,
      };
    }
    else{ 
      cartItems[product.productName].inCart += 1;
    }
  } else {
    product.inCart = 1;
    product.id=0;
    cartItems = {
      [product.productName]: product,
    };
  }

  localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product) {
  let cartCost = localStorage.getItem("totalCost");

  if (cartCost != null) {
    cartCost = parseFloat(cartCost);
    product.productPrice = parseFloat(product.productPrice);
    localStorage.setItem("totalCost", cartCost + product.productPrice);
  } else {
    localStorage.setItem("totalCost", product.productPrice);
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
      let pp = parseFloat(item.productPrice);
      let pn = item.productName.substring(0,45)
      if(item.productName.length>45)
      {
        pn = pn.concat(" ...")
      }
      productContainer.innerHTML += `
            <div>
                <tr>
                    <td><a><button class="remove" onclick='removeFromCart()'>Remove</button></a></td>
                    <td><img src=${item.productImage} alt=""></td>
                    <td>${pn}</td>
                    <td>$${item.productPrice}</td>
                    <td> <span>${item.inCart}</span> </td>
                    <td>$${pp * item.inCart}</td>
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

setTimeout(displayCart,100)
onLoadCartNumbers();