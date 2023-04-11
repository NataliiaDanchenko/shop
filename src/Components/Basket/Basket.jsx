import style from "./Basket.module.css";
import img1 from "./../../assets/Collection/card1.png";
import {useState} from "react";

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

    const priceBasketMinus = () => {
        setPrice(price / counterBasket)
    }



    return (
        <div className={style.basket}>
            <div className="container">
                <div>
                    <img src={buyBasket.img} alt="img"/>
                </div>
                <div>{buyBasket.title}</div>
                <div>{buyBasket.price}</div>
                <div>{buyBasket.button}</div>
                <div>
                    <button onClick={counterPlus} onMouseDown={priceBasketPlus}>+</button>{counterBasket}
                    <button onClick={counterMinus}>-</button>
                </div>
                <div className={style.totalPrice} onMouseDown={priceBasketMinus}>{price}</div>
            </div>
        </div>
    )
}

export default Basket;