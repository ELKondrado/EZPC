import "./App.css";
import Home from "./Home";
import Shop from "./Shop";
import Product from "./Product";
import Cart from "./Cart";
import Add from "./Add";
import Pay from "./Pay"
import {Route,Routes,Link} from 'react-router-dom'

function App() {
  return(
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/shop" element={<Shop/>}/>
        <Route exact path="/product" element={<Product/>}/>
        <Route exact path="/cart" element={<Cart/>}/>
        <Route exact path="/add" element={<Add/>}/>
        <Route exact path="/pay" element={<Pay/>}/>
      </Routes>

    </div>
  );
}

export default App;
