import Card from "./Card/Card";
import style from "./Cards.module.css";



const Cards = (props) => {
    const cardsMap = props.cards.map((card, index) => <Card card={card} key={index}/>)

    
    const productDataHandler = (e) => {
        console.log(e.target.parentElement);
    }


    return (
        <div className={style.cards}>
            <div className="container">
                <div className={style.titleTitle}>
                    <div className={style.overTitle}>{props.title.overTitle}</div>
                    <div className={style.title}>{props.title.title}</div>
                    <div className={style.wrapper}>
                        {
                            cardsMap
                            
                        }
                       
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Cards;