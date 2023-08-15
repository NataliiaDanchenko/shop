
import { NavLink } from "react-router-dom";
import style from './Menu.module.css';



const Menu = (props) => {

    const linkMap = props.nav.map((link, index) => <NavLink to={link.path} key={index}>{link.name}</NavLink>)

    return (
        <div className={style.menu_menu}>
            <div className={style.container}>
                <div className={style.content}>
                    <div className={style.flex}>
                        <img src={props.logoImg.logo} alt="img" />
                        <div className={style.header_nav}>
                            <div className={style.menu}>

                                {linkMap}

                            </div>

                        </div>
                        <img src={props.basket.basket} alt="basket" />
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Menu;