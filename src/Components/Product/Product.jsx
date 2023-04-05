import style from "../Cards/Cards.module.css";
import card1 from "./../../assets/Collection/card1.png";

import {useParams} from "react-router-dom";

let products =
    {
        id: 1,
        img: card1,
        title: "Decor Plate",
        price: "$ 65.00 USD"
    }


const Product = () => {
    let {productId} = useParams();
    console.log(productId)


        return (
            <div>
                <div className={style.card}>
                    <img src={products.img} alt={`img-product ${products.id}`}/>
                    <div className={style.title_card}>{products.title}</div>
                    <div className={style.price}>{products.price}</div>
                </div>
            </div>
        )
}

export default Product;