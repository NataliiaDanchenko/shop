
import './App.css';
import Header from "./Components/Header/Header";
import ProductCategories from "./Components/ProductCategories/ProductCategories";
import Cards from "./Components/Cards/Cards";
import Product from "./Components/Product/Product";
import {Route, Routes} from "react-router-dom";



function App() {

  return (
      <div>
        <Routes>
          <Route path="/" element={<Header/>}/>
          <Route path="about" element={<ProductCategories/>}/>
          <Route path="shop" element={<Cards/>}/>
          <Route path="product:productId" element={<Product/>}/>
        </Routes>
      </div>
  )
}

export default App;

