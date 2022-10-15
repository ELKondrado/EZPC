import React ,{useState, useEffect} from "react"
import Axios from 'axios'

function Add(){

    const [productName, setProductName] = useState('')
    const [productImage, setProductImage] = useState('')
    const [productPrice, setProductPrice] = useState('')
    const [productDetails, setProductDetails] = useState('')

    const submitProduct = () => {
        Axios.post("http://localhost:3001/api/insert",
        {
            productName: productName,
            productImage: productImage,
            productPrice: productPrice,
            productDetails: productDetails
        }).then(()=>{
            alert("successful insert");
        })
    }

    return(
        <div className="Add">
            <h1>ADD PRODUCTS</h1>
            <div className="form">
                <label>Product Name:</label>
                <input type="text" name="productName" onChange={(e) => {
                    setProductName(e.target.value);
                }}/>
                <label>Product Image:</label>
                <input type="text" name="productImage" onChange={(e) => {
                    setProductImage(e.target.value);
                }}/>
                <label>Product Price:</label>
                <input type="text" name="productPrice" onChange={(e) => {
                    setProductPrice(e.target.value);
                }}/>
                <label>Product Details:</label>
                <input type="text" name="productDetails" onChange={(e) => {
                    setProductDetails(e.target.value);
                }}/>

                <button className="submitBtn" onClick={submitProduct}>Submit</button>
            </div>
            
        </div>
    );
};

export default Add;