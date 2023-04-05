import style from "./Header.module.css";
import logo from "./../../assets/logo.png";
import basket from "./../../assets/icon-basket.svg";

const Header = () => {
    return (
        <div className={style.header}>
            <div className="container">
                <div className="content">
                    <div className={style.header_nav}>
                        <img src={logo} alt="img"/>
                        <div className={style.menu}>
                            <div><a href="https://www.google.com.ua/">HOME</a></div>
                            <div><a href="https://www.google.com.ua/">ABOUT</a></div>
                            <div><a href="https://www.google.com.ua/">SHOP</a></div>
                            <div><a href="https://www.google.com.ua/">CONTACTS</a></div>
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