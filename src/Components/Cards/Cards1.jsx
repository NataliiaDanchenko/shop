{/*import Card from "./Card/Card";
//import Select from "../../UI/select/Select";
import style from "./Cards.module.css";
import { useEffect, useState } from "react";

import card1 from "../../assets/Collection/card1.png";
import card2 from "../../assets/Collection/card2.png";
import card3 from "../../assets/Collection/card3.png";
import card4 from "../../assets/Collection/card4.png";
import card5 from "../../assets/Collection/card5.png";
import card6 from "../../assets/Collection/card6.png";



const Cards1 = (props) => {

    const cardsAll = [
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

    let x = [];
    x = cardsAll.map(n => n.id === n.id ? { ...n, price: parseInt(n.price.replace(/[^1-9,\s]/g, '')) } : null)
    console.log(x)
    let sort = x.sort((a, b) => a.price > b.price ? 1 : -1);
console.log(sort)



    const arrCopy = structuredClone([props.cards]); // Глубокая копия массива карточек
    const cardsMap = cardsAll.map((card, index) => <Card card={card} key={index} />)
    console.log(arrCopy)

    const [cards, setCards] = useState(cardsAll);
    //const [sortSelect, setSortSelect] = useState(cardsAll); 
    //console.log(sortSelect)

    useEffect(() => {
        arrCopy.forEach(item => {
            console.log(item)
            let price = item.map(i => parseInt(i.price.replace(/[^1-9,\s]/g, ''))) // С помощью дополнительного метода map достаем глубокую вложенность, с помощью метода replace оставляем только числа
            let sortCard = price.sort((a, b) => a > b ? 1 : -1);
            console.log(sortCard);
            setCards(sortCard)
            return sortCard;
        },)
    }, [])


    return (
        <div className={style.cards}>
            <div className="container">
                <div className={style.titleTitle}>
                    <div className={style.overTitle}>{props.title.overTitle}</div>
                    <div className={style.title}>{props.title.title}</div>

                    <select
                        onChange={event => event.target.value}
                        onMouseDown={() => setCards(arrCopy)}
                    >

                        <option value='Sort'>Sort</option>
                        <option value='By price'>By price</option>
                    </select>

                    <div className={style.wrapper}>
                        {cardsMap}


                    </div>
                </div>
            </div>
        </div>
    )
}
export default Cards1*/};