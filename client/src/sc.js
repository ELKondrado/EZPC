let products;

fetch('http://localhost:3001/api/get')
.then(res => res.json())
.then(data => products="eu")
.then(() => console.log(products))

console.log(products)