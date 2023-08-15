
import './App.css';
import Header from "./Components/Header/Header";
import ProductCategories from "./Components/ProductCategories/ProductCategories";
import Cards from "./Components/Cards/Cards";
import Basket from "./Components/Basket/Basket";
import Contacts from "./Components/Contacts/Contacts";
import { Route, Routes } from "react-router-dom";
import Menu from './Components/menu/Menu';
import { state } from './data/data';
import Product from './Components/Product/Product';



function App () {
 
  return (
    <div>
      <Menu nav={state.header.links} logoImg={state.header.logo} basket={state.header.basket}/>
      <Routes>
        <Route path="/" element={<Header title={state.header.titleH1}/>} />
        <Route path="/about" element={<ProductCategories prodCat={state.productCategories} potAndCer={state.potteryAndCeramic}/>} />
        <Route path="/cards" element={<Cards title={state.productData} cards={state.productData.cards}/>} />
        <Route path="/card/:id" element={<Product product={state.productData.cards}/>} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/basket/:id" element={<Basket basket={state.productData.cards}/>} />
      </Routes>
    </div>
  )
}

export default App;

