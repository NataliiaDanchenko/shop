import React from 'react';
import { useNavigate } from 'react-router-dom';
import style from './Card.module.css';


const Card = (props) => {

    const navigate = useNavigate();
    const showHandler = () => {
        navigate(`/card/${props.card.id}`)
        console.log(navigate)
    }


    return (
        <div className={style.card}>
            <div><img src={props.card.img} alt='img' onClick={showHandler}/></div>
            <div className={style.title_card}>{props.card.title}</div>
            <div className={style.price}>{props.card.price}</div>
        </div>
    )

}


export default Card;