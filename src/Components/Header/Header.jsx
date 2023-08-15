import style from "./Header.module.css";



const Header = (props) => {
    return (
        <div className={style.header}>
            <div className={style.header_background}>
                <div className="container">
                    <div className="content">
                        <div className={style.content_flex}>
                            <div className={style.left}>
                                <div className={style.overTitle}>{props.title.overTitle}</div>
                                <div className={style.title}>{props.title.title1}
                                    <div>{props.title.title2}</div>
                                </div>
                                <div className={style.subTitle}>{props.title.subTitle}</div>
                                <div className={style.button}>{props.title.button}</div>
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