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
        res.send(result)
    })
})

app.post("/api/insertTableProduct",(req,res) =>{
    const tableName = req.body.tableName;

    const sqlCreateTable = "CREATE TABLE `crud`.`?` (`id` INT NOT NULL AUTO_INCREMENT,`productName` VARCHAR(100) NOT NULL,`productImage` VARCHAR(100) NOT NULL,`productPrice` DOUBLE NOT NULL,`productQuantity` INT NOT NULL,PRIMARY KEY (`id`));";
    db.query(sqlCreateTable,[tableName],(err,result)=> {
        console.log(err);
    })
})

app.post("/api/insertOrder",(req,res) => {
    const tableNames = req.body.tableName;
    const productsNames = req.body.productName;
    const productsImages = req.body.productImage;
    const productsPrices = req.body.productPrice;
    const productQuantity = req.body.productQuantity;
    const sqlInsertOrder = "INSERT INTO `?` (`productName`, `productImage`, `productPrice`,`productQuantity`) VALUES (?,?,?,?);";
    db.query(sqlInsertOrder,[tableNames,productsNames,productsImages,productsPrices,productQuantity],(err,result) => {
        console.log(err)
    })
})

app.post("/api/insertTable",(req,res) =>{
    const sqlInsertTable = "INSERT INTO `crud`. `tables` (`table`) VALUES ('table');";
    db.query(sqlInsertTable,(err,result)=> {
        console.log(err);
    })
})

app.get("/api/getTables",(req,res) => {
    const sqlSelect = "SELECT * FROM tables";     
    db.query(sqlSelect,(err,result) => {
        res.send(result);
    })
})

app.get("/",(req,res) => {})

app.listen(3001,() =>{
    console.log("running on 3001")
});