import style from "./Contacts.module.css";
import icon1 from "./../../assets/icons/email.svg";
import icon2 from "./../../assets/icons/find.svg";
import icon3 from "./../../assets/icons/call.svg";
import logo from "../../assets/logo.png";
import {NavLink} from "react-router-dom";
import basket from "../../assets/icon-basket.svg";
import {useState} from "react";

let contactsObject = [
    {
        icon: icon1,
        title: "EMAIL",
        text: "pompropottery@gmail.com"
    },
    {
        icon: icon2,
        title: "FIND",
        text: "Central Park, Manhattan, Ney York, 1101"
    },
    {
        icon: icon3,
        title: "CALL",
        text: "+1 292 345 678"
    }
]

const Contacts = () => {

    const [addForm, setAddForm] = useState();

    const addSubmitClear = () => {
        setAddForm("");
    }

    return (
        <div className={style.contacts}>
            <div className="container">
                <div className={style.general_flex}>
                    {
                        contactsObject.map((co) => {
                            return (
                                <div className={style.card}>
                                    <img src={co.icon} alt="img"/>
                                    <div>{co.title}</div>
                                    <div>{co.text}</div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <div className={style.contacts_form}>

                    <form>
                        <input value={addForm} placeholder="Name" />
                        <input value={addForm} placeholder="E-mail"/>
                        <textarea value={addForm}></textarea>
                        <input className={style.sub} value="Submit" onClick={addSubmitClear}/>
                    </form>
            </div>
        </div>
    )
}

export default Contacts;