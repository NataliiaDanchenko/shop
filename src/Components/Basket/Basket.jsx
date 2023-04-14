import style from "./Basket.module.css";
import img1 from "./../../assets/Collection/card1.png";
import {useState} from "react";
import {NavLink} from "react-router-dom";
import logo from "../../assets/logo.png";
import basket from "../../assets/icon-basket.svg";

const buyBasket = {
    img: img1,
    title: "Decor Plate",
    price: 65 + "$",
    button: "Checkout",
    count: 1
}
const Basket = () => {

    const [counterBasket, setCounterBasket] = useState(1);

    const counterPlus = () => {
            setCounterBasket(counterBasket +1);
    };

    const counterMinus = () => {

        setCounterBasket(counterBasket -1);
        if(counterBasket < 2) {setCounterBasket(1)}
    };

    const [price, setPrice] = useState(65);

    const priceBasketPlus = () => {
        setPrice(price * counterBasket)
    }

    const [clear, setClear] = useState(price * counterBasket);

    const clearPrice = () => {
        console.log(clear);
        setClear(alert("Product add to basket"));
    }

    const priceBasketMinus = () => {
        setPrice(price / counterBasket)
    }

    const [addImg, setAddImg] = useState([]);
    console.log(addImg)
    const addBasketImg = () => {
        setAddImg([
            {img: logo}
        ])
    }


    return (
        <div className={style.basket}>
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
                <div className={style.content}>
                    <div>
                        <img src={buyBasket.img} alt="img"/>
                    </div>
                    <div className={style.text}>
                        <div>{buyBasket.title}</div>
                        <div className={style.buttons}>
                            <button onClick={counterPlus} onMouseDown={priceBasketPlus}>+</button>{counterBasket}
                            <button onClick={counterMinus}>-</button>
                        </div>
                        <div className={style.totalPrice} onMouseDown={priceBasketMinus}>{price} $</div>
                        <div className={style.button_buy} onClick={clearPrice} onMouseDown={addBasketImg}>Buy</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Basket;