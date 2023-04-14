import style from "./ProductCategories.module.css";
import img1 from "./../../assets/Product-categories/vase-intro.png";
import img2 from "./../../assets/Product-categories/mugs-intro.png";
import img3 from "./../../assets/Product-categories/plates-intro.png";
import between from "./../../assets/Product-categories/between.png";
import goldBlackPottery from "./../../assets/Gold-black-pottery/gold-black-things.png";
import orangeCeramic from "./../../assets/Orange-ceramic/orange-ceramic-thinks.png";
import logo from "../../assets/logo.png";
import {NavLink} from "react-router-dom";
import basket from "../../assets/icon-basket.svg";

const ProductCategories = () => {
    return (
        <div className={style.product_categories}>
            <div className="container">
                <div className={style.header_nav}>
                    <img src={logo} alt="img"/>
                    <div className={style.menu}>
                        <NavLink to="/">HOME</NavLink>
                        <NavLink to="about">ABOUT</NavLink>
                        <NavLink to="shop">SHOP</NavLink>
                        <NavLink to="contacts">CONTACTS</NavLink>
                    </div>
                    <img src={basket} alt="basket"/>
                </div>
                <div className={style.titleTitle}>
                    <div className={style.overTitle}>PRODUCT CATEGORIES</div>
                    <div className={style.title}>Porcelain<img src={between} alt="&"/>Pottery</div>
                </div>
                <div className={style.flex_img}>
                    <div className={style.vasesImg}>
                        <img src={img1} alt="1"/>
                        <div className={style.vases}>VASES</div>
                    </div>
                    <div className={style.mugsImg}>
                        <img src={img2} alt="2"/>
                        <div className={style.mugs}>MUGS</div>
                    </div>
                    <div className={style.platesImg}>
                        <img src={img3} alt="3"/>
                        <div className={style.plates}>PLATES</div>
                    </div>
                </div>
            </div>


            <div className="container">
                <div className={style.flexText}>
                    <div className={style.text_one}>
                        <h4>We Provide Premium Pottery</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus posuere.</p>
                    </div>
                    <div className={style.text_two}>
                        <h4>Hand Grafter Pottery since 1990</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus posuere.</p>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className={style.categories_flex}>
                    <div className={style.flex_goldBlackPottery}>
                        <div className={style.item1}>
                            <img src={goldBlackPottery} alt="gold&black"/>
                        </div>
                        <div className={style.item2}>
                            <h5>Gold&Black Pottery</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore dolore aua. Ut enim ad minim veniam, quis nostrud exercitationulco laboris nisi ut aliquip ex ea commodo consequatuisaute.</p>
                        </div>
                    </div>
                    <div className={style.flex_orangeCeramic}>
                        <div className={style.item3}>
                            <h5>Orange Ceramic</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore dolore aua. Ut enim ad minim veniam, quis nostrud exercitationulco laboris nisi ut aliquip ex ea commodo consequatuisaute.</p>
                        </div>
                        <div className={style.item4}>
                            <img src={orangeCeramic} alt="orange-ceramic"/>
                        </div>
                    </div>

                </div>
            </div>

        </div>

    )
}

export default ProductCategories;