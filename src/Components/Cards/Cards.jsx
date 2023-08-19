import Card from "./Card/Card";
import Select from "../../UI/select/Select";
import style from "./Cards.module.css";
import { useState } from "react";
import Button from "../../UI/select/buttons/Button";



const Cards = (props) => {
   
    const [allCards, setAllCards] = useState(props.cards)
    const [selectedSort, setSelectedSort] = useState('');
    const [getFilter, setGetFilter] = useState(props.cards);

    const arrCopy = structuredClone([props.cards]); // Глубокая копия массива карточек

    const cardsMap = allCards.map((card, index) => <Card card={card} key={index} />)


    const x = (sort) => {
        setSelectedSort(sort)
        console.log(sort)
        arrCopy.forEach(item => {
            let value = item.map(i => i.id === i.id ? { ...i, price: parseInt(i.price.replace(/[^1-9,\s]/g, '')) } : null) // С помощью дополнительного метода map достаем глубокую вложенность, с помощью метода replace оставляем только числа
            let sortCard = value.sort((a, b) => a[sort] > b[sort] ? 1 : -1);
            setAllCards(sortCard)
            return sortCard;
        })
    }

    const z = () => {
        arrCopy.forEach(item => {
            let getFilterAll = item.filter(n => n.material === 'stone')
            setAllCards(getFilterAll)
            return getFilterAll
        })
    }

    const a = () => {
        arrCopy.forEach(item => {
            let getFilterAll = item.filter(n => n.material === 'ceramic')
            setAllCards(getFilterAll)
            return getFilterAll
        })
    }

    return (
        <div className={style.cards}>
            <div className="container">
                <div className={style.titleTitle}>
                    <div className={style.overTitle}>{props.title.overTitle}</div>
                    <div className={style.title}>{props.title.title}</div>

                    <Select
                        value={selectedSort}
                        defaultValue='Sort'
                        onChange={x}
                        options={
                            [
                                { value: 'price', name: 'By price' },
                                { value: 'reviews', name: 'By reviews' }
                            ]
                        }
                    />
                    <Button 
                        value={getFilter}
                        onClick={z}
                        buttons={{value: 'stone', name: 'Stone'}}/>

                    <Button 
                        buttons={{value: 'ceramic', name: 'Ceramic'}}
                        onClick={a}
                        value={getFilter}/>
                        

                    <div className={style.wrapper}>

                        {cardsMap}


                    </div>
                </div>
            </div>
        </div>
    )
}
export default Cards;