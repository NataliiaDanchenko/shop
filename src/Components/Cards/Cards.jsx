
import style from "./Cards.module.css";
import card1 from "./../../assets/Collection/card1.png";
import card2 from "./../../assets/Collection/card2.png";
import card3 from "./../../assets/Collection/card3.png";
import card4 from "./../../assets/Collection/card4.png";
import card5 from "./../../assets/Collection/card5.png";
import card6 from "./../../assets/Collection/card6.png";
import {useNavigate} from "react-router-dom";



let products = [
    {
        id: 1,
        img: card1,
        title: "Decor Plate",
        price: "$ 65.00 USD"
    },
    {
        id: 2,
        img: card2,
        title: "Mint Pottery",
        price: "$ 75.00 USD"
    },
    {
        id: 3,
        img: card3,
        title: "Set Of Potters",
        price: "$ 125.00 USD"
    },
    {
        id: 4,
        img: card4,
        title: "Orange Ceramic",
        price: "$ 55.00 USD"
    },
    {
        id: 5,
        img: card5,
        title: "Dark Bowl",
        price: "$ 115.00 USD"
    },
    {
        id: 6,
        img: card6,
        title: "Square Pottery",
        price: "$ 75.00 USD"
    }
]

const Cards = () => {
    const navigate = useNavigate();
    const showHandler = () => {
        navigate("product")
    }

    return (
        <div className={style.cards}>
            <div className="container">
                <div className={style.titleTitle}>
                    <div className={style.overTitle}>OUR ONLINE STORE</div>
                    <div className={style.title}>Pottery Collection</div>
                    <div className={style.wrapper}>
                        {
                            products.map((pr) => {
                                return (
                                    <div className={style.card}>
                                        <img onClick={showHandler} src={pr.img} alt={`img-product ${pr.id}`}/>
                                        <div className={style.title_card}></div>
                                        <div className={style.price}>{pr.price}</div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Cards;