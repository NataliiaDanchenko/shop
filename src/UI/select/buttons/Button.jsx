import style from "./Button.module.css";


const Button = (props) => {
    console.log(props)


    return (
        <div className={style.button}>

            <button
                value={props.value}
                onClick={event => props.onClick(event.target.value)}
            
            >{props.buttons.name}</button>

        </div>
    )
}

export default Button;