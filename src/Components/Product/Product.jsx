//import JSON from "./../../data/data2.json";
import Reviews from "./Reviews/Reviews";
import style from "./Product.module.css"
import {useParams, useNavigate} from "react-router-dom";
import {useState} from "react";


import {useEffect} from "react";



const Product = (props) => {

    const [productCard, setProductCard] = useState({
        img: '',
        title: '',
        price: ''
    });

    let param = useParams()
    //const productId = params.id;
    //console.log(productId)
    console.log(param)

    useEffect(() => {
          
        const x = (item) => {
            item = props.product.find(pr => pr.id == param.id);
            setProductCard(item)
            return item;
        }
        console.log(x())
            
    }, [])



    const [isProductBasket, setIsProductBasket] = useState([false]);

    const addProductToBasket = () => {
      alert(`${productCard.title} add to basket`);
      setIsProductBasket([true])
    }

    const navigateBasket = useNavigate();
    console.log(navigateBasket)

    const showBasket = () => {
        navigateBasket (`/basket/${props.product.id}`)
    }

    return (
            <div className={style.product}>
                <div className="container">
                    <div className={style.product_content}>
                        <div className={style.text}>
                            <div><img src={productCard.img} alt={`img-product ${productCard.id}`}/></div>
                            <div className={style.product_flex}>
                                <div className={style.title_card}>{productCard.title}</div>
                                <div className={style.price}>{productCard.price}</div>
                                <div>
                                    {
                                        isProductBasket ?
                                            <button className={style.button} onMouseDown={showBasket} onClick={addProductToBasket}>Add To Basket</button> :
                                            <button className={style.button} onClick={addProductToBasket}>Product In the Basket</button>
                                    }
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className={style.stars}></div>

                    <Reviews name={productCard.title}/>
                </div>
            </div>
    )
}

export default Product;