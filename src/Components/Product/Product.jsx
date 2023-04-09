import style from "../Cards/Cards.module.css";
import card1 from "../../assets/Collection/card1.png";
import {Link, useParams} from "react-router-dom";


let card =
    {
        id: 1,
        img: card1,
        title: "Decor Plate",
        price: "$ 65.00 USD"
    }

const Product = () => {
  let {productI} = useParams()
  console.log(productI)
    return (
        <div>
            <div className={style.card}>
                <Link to="shop/products"><img src={card.img} alt={`img-product ${card.id}`}/></Link>
                <div className={style.title_card}>{card.title}</div>
                <div className={style.price}>{card.price}</div></div>
        </div>
    )
}

export default Product;