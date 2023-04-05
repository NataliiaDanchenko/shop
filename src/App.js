
import './App.css';
import Header from "./Components/Header/Header";
import ProductCategories from "./Components/ProductCategories/ProductCategories";
import Cards from "./Components/Cards/Cards";
import Product from "./Components/Product/Product";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header/>
  },
  {
    path: "/about",
    element: <ProductCategories/>
  },
  {
    path: "/shop",
    element: <Cards/>
  },
  {
    path: "/product/:productId",
    element: <Product/>
  }
], {basename: "/shop"})

function App() {

  return (
      <div>
        <RouterProvider router={router}/>
      </div>
  )
}

export default App;

