
import style from "./Product.module.css"
import card1 from "../../assets/Collection/card1.png";
import {useParams} from "react-router-dom";


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
  let {productI} = useParams()
  console.log(productI)
    return (
        <div>
            <div className={style.card}>
                <div className="container">
                    <div className={style.product_content}>
                        <img src={card.img} alt={`img-product ${card.id}`}/>
                        <div className={style.text}>
                            <div className={style.title_card}>{card.title}</div>
                            <div className={style.price}>{card.price}</div>
                            <div className={style.description}>{card.description}</div>
                            <div className={style.stars}></div>
                            <button className={style.button}>{card.button}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product;