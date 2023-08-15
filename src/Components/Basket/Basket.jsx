
//import { useState, useEffect } from "react";
//import { useParams } from 'react-router-dom';
import style from "./Basket.module.css";




const Basket = (props) => {
   

   {/*} const [counterBasket, setCounterBasket] = useState(1);

    const counterPlus = () => {
        setCounterBasket(counterBasket + 1);
    };

    const counterMinus = () => {

        setCounterBasket(counterBasket - 1);
        if (counterBasket < 2) { setCounterBasket(1) }
    };

    const [price, setPrice] = useState(0);

    const priceBasketPlus = () => {
        setPrice(price * counterBasket)
    }

    const [clear, setClear] = useState('');

    const clearPrice = () => {
        console.log(clear);
        setClear(alert("Product add to basket"));
    }

    const priceBasketMinus = () => {
        setPrice(price / counterBasket)
    }

    {/*const [addImg, setAddImg] = useState([]);
    console.log(addImg)
    const addBasketImg = () => {
        setAddImg([
            { img: logo }
        ])
    }
let param = useParams()
console.log(param)

    useEffect(() => {
          
        const x = (item) => {
            item = props.basket.find(pr => pr.id == param.id);
            console.log(item)
            setAddBasket(item)
            return item;
        }
        console.log(x())
            
    }, [])*/}

    return (
        <div className={style.basket}>
            {/*<div className="container">
             
                <div className={style.content}>
                    <div>
                        <img src={props.basket.img} alt="img" />
                    </div>
                    <div className={style.text}>
                        <div>{props.basket.title}</div>
                        <div className={style.buttons}>
                            <button onClick={counterPlus} onMouseDown={priceBasketPlus}>+</button>{counterBasket}
                            <button onClick={counterMinus}>-</button>
                        </div>
                        <div className={style.totalPrice} onMouseDown={priceBasketMinus}>{price}</div>
                        <div className={style.button_buy} onClick={clearPrice}>Buy</div>
                    </div>
    </div>
    </div>*/}
        </div>
    )
}

export default Basket;