
import Reviews from "./Reviews/Reviews";
import style from "./Product.module.css"
import card1 from "../../assets/Collection/card1.png";
import {NavLink, useNavigate, useParams} from "react-router-dom";
import {useState} from "react";
import logo from "../../assets/logo.png";
import basket from "../../assets/icon-basket.svg";


let card =
    {
        id: 1,
        img: card1,
        title: "Decor Plate",
        price: "$ 65.00 USD",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod sit amet mi id scelerisque. Maecenas interdum lectus elementum eros porttitor, nec convallis est iaculis. Donec iaculis a nunc at sagittis. Cras pharetra lorem in tempor mollis. Nullam in est sed mi vulputate mattis. Duis dignissim blandit massa vel dictum. Vivamus semper pretium hendrerit. Nulla facilisi. Vestibulum dignissim cursus volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at auctor velit. Nullam posuere augue leo. Fusce lobortis est eros, nec fermentum nisl blandit eget.",
        button: "Buy"
    }


const Product = () => {
  let {product} = useParams()
  console.log(product)

    const [isProductBasket, setIsProductBasket] = useState([false]);

    const addProductToBasket = () => {
      alert(`${card.title} add to basket`);
      setIsProductBasket([true])
    }

    const navigateBasket = useNavigate();

    const showBasket = () => {
        navigateBasket ("basket")
    }

    return (
        <div>
            <div className={style.card}>
                <div className="container">
                    <div className={style.header_nav}>
                        <img src={logo} alt="img"/>
                        <div className={style.menu}>
                            <NavLink to="/">HOME</NavLink>
                            <NavLink to="about">ABOUT</NavLink>
                            <NavLink to="shop">SHOP</NavLink>
                            <NavLink to="contacts">CONTACTS</NavLink>
                        </div>
                        <img src={basket} alt="basket"/>
                    </div>
                    <div className={style.product_content}>
                        <img src={card.img} alt={`img-product ${card.id}`}/>
                        <div className={style.text}>
                            <div className={style.title_card}>{card.title}</div>
                            <div className={style.price}>{card.price}</div>
                            <div className={style.description}>{card.description}</div>
                            <div className={style.stars}></div>
                            {
                                isProductBasket ?
                                    <button className={style.button} onMouseDown={showBasket} onClick={addProductToBasket}>Add To Basket</button> :
                                    <button className={style.button} onClick={addProductToBasket}>Product In the Basket</button>
                            }
                        </div>
                    </div>
                    <Reviews name={card.title}/>

                </div>
            </div>
        </div>
    )
}

export default Product;