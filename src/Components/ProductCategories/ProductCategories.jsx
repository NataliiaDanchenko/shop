import style from "./ProductCategories.module.css";



const ProductCategories = (props) => {
    return (
        <div className={style.product_categories}>
            <div className="container">
                
                <div className={style.titleTitle}>
                    <div className={style.overTitle}>{props.prodCat.overTitle}</div>
                    <div className={style.title}>{props.prodCat.title1}<img src={props.prodCat.between} alt="&"/>{props.prodCat.title2}</div>
                </div>
                <div className={style.flex_img}>
                    <div className={style.vasesImg}>
                        <img src={props.prodCat.imgVases} alt="1"/>
                        <div className={style.vases}>VASES</div>
                    </div>
                    <div className={style.mugsImg}>
                        <img src={props.prodCat.imgMugs} alt="2"/>
                        <div className={style.mugs}>MUGS</div>
                    </div>
                    <div className={style.platesImg}>
                        <img src={props.prodCat.imgPlates} alt="3"/>
                        <div className={style.plates}>PLATES</div>
                    </div>
                </div>
            </div>


            <div className="container">
                <div className={style.flexText}>
                    <div className={style.text_one}>
                        <h4>{props.prodCat.flexTitle1}</h4>
                        <p>{props.prodCat.flexText1}</p>
                    </div>
                    <div className={style.text_two}>
                        <h4>{props.prodCat.flexTitle2}</h4>
                        <p>{props.prodCat.flexText2}</p>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className={style.categories_flex}>
                    <div className={style.flex_goldBlackPottery}>
                        <div className={style.item1}>
                            <img src={props.potAndCer.img1} alt="gold&black"/>
                        </div>
                        <div className={style.item2}>
                            <h5>{props.potAndCer.title1}</h5>
                            <p>{props.potAndCer.text2}</p>
                        </div>
                    </div>
                    <div className={style.flex_orangeCeramic}>
                        <div className={style.item3}>
                            <h5>{props.potAndCer.title2}</h5>
                            <p>{props.potAndCer.text2}</p>
                        </div>
                        <div className={style.item4}>
                            <img src={props.potAndCer.img2} alt="orange-ceramic"/>
                        </div>
                    </div>

                </div>
            </div>

        </div>

    )
}

export default ProductCategories;