import React, { useState, useEffect } from "react";
import Axios from "axios";

function Orders() {
  let [tablesN,setTablesN] = useState([])

  function transferTableOrders()
  {
      Axios.get('http://localhost:3001/api/getProducts').then((response) => {
        let products = response.data;

        Axios.get('http://localhost:3001/api/getOrderProds').then((response) => {
          let ordersData = response.data;
          let orderContainer = document.querySelector(".orders-container");
          orderContainer.innerHTML += ` 
            <div>
              <p>Order ${1}</p>
            </div>
          `
          let ok;

          ok = ordersData[0].idorder;
          for(let i=0;i<ordersData.length;i++)
          {
              let oki = ordersData[i].idorder;
              for(let j=0;j<products.length;j++)
                if(products[j].id == ordersData[i].idprod)
                {
                  let pn = products[j].productName;
                  if(pn.length>60)
                  { 
                      pn = pn.substring(0,60)
                      pn = pn.concat(" ...")
                  }
                  console.log(ok + " " + oki)
                  if(ok!=oki)
                  {
                    orderContainer.innerHTML += `
                      <div className="tableHead">
                        <p>Order ${ordersData[i].idorder}</p>
                        <div className="order-container">
                          <table width="100%">
                          <thead>
                              <tr>
                                  <td className="">Image</td>
                                  <td className="">Product</td>
                                  <td className="">Price</td>
                                  <td className="">Quantity</td>
                              </tr>
                          </thead>
                          <tbody className="products-to-cart">
                                <td><img src=${products[j].productImage} alt=""></td>
                                <td>${pn}</td>
                                <td>$${products[j].productPrice}</td>
                                <td>${ordersData[i].inCart}</td>
                          </tbody>
                          </table>
                        </div>
                      </div>
                      `;
                  }
                  else
                  {
                    orderContainer.innerHTML += `
                    <div className="tableHead">
                      <div className="order-container">
                        <table width="100%">
                        <thead>
                            <tr>
                                <td className="">Image</td>
                                <td className="">Product</td>
                                <td className="">Price</td>
                                <td className="">Quantity</td>
                            </tr>
                        </thead>
                        <tbody className="products-to-cart">
                              <td><img src=${products[j].productImage} alt=""></td>
                              <td>${pn}</td>
                              <td>$${products[j].productPrice}</td>
                              <td>${ordersData[i].inCart}</td>
                        </tbody>
                        </table>
                      </div>
                    </div>
                    `;
                  }
                }
            ok=oki;
          }
        })

       
    })
  }

  return(
    <div className="Orders">

        <div className="orders-container numb">

            <button className="showOrders normal" onClick={transferTableOrders}>Show Orders</button>
        </div>

    </div>
  );
}

export default Orders;
