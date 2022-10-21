import React, { useState, useEffect } from "react";
import Axios from "axios";

function Orders() {
  const [tables,setTables] = useState([])
  let [tablesN,setTablesN] = useState([])

  function transferTableOrders()
  {
    Axios.get('http://localhost:3001/api/getTables').then((response) => {
      setTables(response.data);
    })

    let v=[];
    if(tables.length!=0)
    {
        let count = 0;
        Object.values(tables).map((item) => {
            if(tables.length-1 != count){  
              let tableName = item.table + item.id;
              v[count]=tableName;
              count++;
          }
        });

        let cartItems = localStorage.getItem("productsInCart");
        cartItems = JSON.parse(cartItems);
        console.log(cartItems )

        for(let i=0;i<v.length;i++)
        {
           
            Axios.post("http://localhost:3001/api/insertTableName",{
                orderTableName : v[i]
            })

            Axios.get("http://localhost:3001/api/getTableName",{params:{name:v[i]}}).then((response) => 
            {

                let orderContainer = document.querySelector(".orders-container");
                let j=0;
                Object.values(response.data).map((item) => 
                {
                  if(j==0)
                  {
                    j++;
                    orderContainer.innerHTML += `
                      <div className="tableHead">
                        <p>Order ${i+1}</p>
                        <div className="order-container">
                          <table width="100%">
                          <thead>
                              <tr>
                                  <td className="orderImage${i+1}">Image</td>
                                  <td className="orderName${i+1}">Product</td>
                                  <td className="orderPrice${i+1}">Price</td>
                                  <td className="orderQuantity${i+1}">Quantity</td>
                              </tr>
                          </thead>
                          <tbody className="products-to-cart">
                            <td><img src=${item.productImage} alt=""></td>
                            <td>${item.productName}</td>
                            <td>$${item.productPrice}</td>
                            <td>${item.productQuantity}</td>
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
                          
                          <tbody className="products-to-cart">
                            <td><img src=${item.productImage} alt=""></td>
                            <td>${item.productName}</td>
                            <td>$${item.productPrice}</td>
                            <td>${item.productQuantity}</td>
                          </tbody>
                          </table>
                        </div>
                      </div>
                      `;
                  }
                });
            })
        }
    }
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
