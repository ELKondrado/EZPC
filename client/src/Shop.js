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

    return(
        <div className="Shop">
            <h1>Welcome to my Shop</h1>

            {productList.map((val)=>{
                return(
                    <div>
                    <h1>
                        ProductName:{val.productName} | ProductImage:{val.productImage}
                    </h1>
                    </div>
                );
            })}
        </div>
    );
};

export default Shop;