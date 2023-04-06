import style from "./Header.module.css";
import logo from "./../../assets/logo.png";
import basket from "./../../assets/icon-basket.svg";
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className={style.header}>
            <div className="container">
                <div className="content">
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
                </div>
            </div>

            <div className={style.header_background}>
                <div className="container">
                    <div className="content">
                        <div className={style.content_flex}>
                            <div className={style.left}>
                                <div className={style.overTitle}>POMPEO POTTERY
                                </div>
                                <div className={style.title}>
                                    Unique Porcelain <div>Stone Collection</div>
                                </div>
                                <div className={style.subTitle}>
                                    Unique & modern pottery made by our master in porcelain & stones
                                </div>
                                <div className={style.button}>
                                    SHOP COLLECTION
                                </div>
                            </div>
                            <div className={style.right}></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Header;