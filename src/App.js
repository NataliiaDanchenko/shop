
import './App.css';
import Header from "./Components/Header/Header";
import ProductCategories from "./Components/ProductCategories/ProductCategories";
import Cards from "./Components/Cards/Cards";
import Product from "./Components/Product/Product";
import Basket from "./Components/Basket/Basket";
import Contacts from "./Components/Contacts/Contacts";
import {Route, Routes} from "react-router-dom";



function App() {

  return (
      <div>
        <Routes>
          <Route path="/" element={<Header/>}/>
          <Route path="about" element={<ProductCategories/>}/>
          <Route path="shop" element={<Cards/>}/>
          <Route path="shop/product" element={<Product/>}/>
            <Route path="contacts" element={<Contacts/>}/>
            <Route path="shop/product/basket" element={<Basket/>}/>
        </Routes>
      </div>
  )
}

export default App;

