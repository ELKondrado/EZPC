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

app.get("/api/getOrder",(req,res) => {
    const sqlSelect = "SELECT * FROM orders";     
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
        res.send(result);
    })
})

app.post("/api/insertInOrderTable",(req,res) =>{
    const sqlInsert = "INSERT INTO orders () VALUES ();"
    db.query(sqlInsert,(err,result) => {
        console.log(err);
    })
})

app.get("/api/getOrderID",(req,res) =>{
    const sqlSelect = "SELECT idorders FROM orders;";
    db.query(sqlSelect,(err,result) => {
        res.send(result);
    })
})

app.post("/api/insertOrdersProd",(req,res) =>{
    const orderID = req.body.orderID;
    const productID = req.body.productID;
    const inCart = req.body.inCart;
    const sqlInsert = "INSERT INTO orderprods (idorder, idprod, inCart) VALUES (?,?,?);"
    db.query(sqlInsert,[orderID,productID,inCart],(err,result) => {
        console.log(err);
    })
})

app.post("/api/insertOrder",(req,res) => {
    const tableNames = req.body.tableName;
    const productsNames = req.body.productName;
    const productsImages = req.body.productImage;
    const productsPrices = req.body.productPrice;
    const productQuantity = req.body.productQuantity;
 

    if(productsNames!=undefined)
    {
        const sqlInsertOrder = "INSERT INTO ?? (`productName`, `productImage`, `productPrice`, `productQuantity`) VALUES (?,?,?,?);";
        db.query(sqlInsertOrder,[tableNames,productsNames,productsImages,productsPrices,productQuantity],(err,result) => {
            console.log(err);
        })
    }
})

app.get("/api/getOrderProds",(req,res) =>{
    const sqlTableName = "SELECT * FROM orderprods";
    db.query(sqlTableName,(err,result) => {
        res.send(result);
    })
})

app.get("/api/getProducts",(req,res) =>{
    sqlGetProducts = "SELECT * FROM products"
    db.query(sqlGetProducts,(err,result) =>{
        res.send(result);
    })
})

app.post("/api/insertEmail",(req,res) =>{
    const email = req.body.email;
    const sqlInsert = "INSERT INTO newsletters (email) VALUES (?);"
    db.query(sqlInsert,[email],(err,result) => {
        console.log(err);
    })
})

app.get("/",(req,res) => {})

app.listen(3001,() =>{
    console.log("running on 3001");
});