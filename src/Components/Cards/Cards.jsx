import Card from "./Card/Card";
import Select from "../../UI/select/Select";
import style from "./Cards.module.css";
import { useState } from "react";
import Button from "../../UI/select/buttons/Button";



const Cards = (props) => {

    const [allCards, setAllCards] = useState(props.cards) // Все карточки на странице. Начальное положение
    const [selectedSort, setSelectedSort] = useState(''); // Отсортированные карточки
    const [getFilter, setGetFilter] = useState(props.cards); // Отфильтрованные карточки

    const arrCopy = structuredClone([props.cards]); // Глубокая копия массива карточек

    const cardsMap = allCards.map((card, index) => <Card card={card} key={index} />) // Размещаем карточки

    const getSorted = (sort) => { // Функция сортировки
        setSelectedSort(sort)
        console.log(sort)
        arrCopy.forEach(item => {
            let value = item.map(i => i.id === i.id ? { ...i, price: parseInt(i.price.replace(/[^1-9,\s]/g, '')) } : null) // С помощью дополнительного метода map достаем глубокую вложенность, с помощью метода replace оставляем только числа
            let sortCard = value.sort((a, b) => a[sort] > b[sort] ? 1 : -1);
            setAllCards(sortCard)
            return sortCard;
        })
    }

// После сортировки нужно вернуть удаленные элементы строки, пока с этим трудности

// Далее следуют две одинковые функции фильтрации, много дублирования кода. Буду сокращать

    const getFilteredStone = () => {
        arrCopy.forEach(item => {
            let getFilterAll = item.filter(n => n.material === 'stone')
            setAllCards(getFilterAll)
            return getFilterAll
        })
    }

    const getFilteredCeramic = () => {
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
                    <div className={style.selected}>
                        <Select
                            value={selectedSort}
                            defaultValue='Sort'
                            onChange={getSorted}
                            options={
                                [
                                    { value: 'price', name: 'By price' },
                                    { value: 'reviews', name: 'By reviews' }
                                ]
                            }
                        />
                    </div>

                    <div className={style.button_flex}>
                        <Button
                            value={getFilter}
                            onClick={getFilteredStone}
                            buttons={{ value: 'stone', name: 'Stone' }} />

                        <Button
                            buttons={{ value: 'ceramic', name: 'Ceramic' }}
                            onClick={getFilteredCeramic}
                            value={getFilter} />
                    </div>
                    <div className={style.wrapper}>

                        {cardsMap}

                    </div>
                </div>
            </div>
        </div>
    )
}



export default Cards;