const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const mysql = require('mysql')

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'CRUD'
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/api/get",(req,res) => {
    const sqlSelect = "SELECT * FROM products";     
    db.query(sqlSelect,(err,result) => {
        res.send(result);
    })
})

app.post("/api/insert",(req,res) => {

    const productName = req.body.productName;
    const productImage = req.body.productImage;
    const productPrice = req.body.productPrice;
    const productDetails = req.body.productDetails;

    const sqlInsert = "INSERT INTO products (productName, productImage, productPrice, productDetails) VALUES (?,?,?,?)"     
    db.query(sqlInsert,[productName,productImage,productPrice,productDetails],(err,result) => {
        res.send(result)
    })
})

app.get("/",(req,res) => {})

app.listen(3001,() =>{
    console.log("running on 3001")
});