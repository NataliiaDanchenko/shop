import {useState} from "react";
import style from "./Reviews.module.css";
import avatar from "./../../../assets/Avatar.jpg";
const Reviews = (props) => {
    const [reviews, setReviews] = useState([
        {
            img: avatar,
            title: "Decor Plate",
            author: "Anonimus",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod sit amet mi id scelerisque. Maecenas interdum lectus elementum eros porttitor, nec convallis est iaculis. Donec iaculis a nunc at sagittis. Cras pharetra lorem in tempor mollis. Nullam in est sed mi vulputate mattis. Duis dignissim blandit massa vel dictum. Vivamus semper pretium hendrerit. Nulla facilisi. Vestibulum dignissim cursus volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at auctor velit. Nullam posuere augue leo. Fusce lobortis est eros, nec fermentum nisl blandit eget.",
            data: "21/12/2021"
        },
        {
            img: avatar,
            title: "Decor Plate",
            author: "Anonimus",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod sit amet mi id scelerisque. Maecenas interdum lectus elementum eros porttitor, nec convallis est iaculis. Donec iaculis a nunc at sagittis. Cras pharetra lorem in tempor mollis. Nullam in est sed mi vulputate mattis. Duis dignissim blandit massa vel dictum. Vivamus semper pretium hendrerit. Nulla facilisi. Vestibulum dignissim cursus volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at auctor velit. Nullam posuere augue leo. Fusce lobortis est eros, nec fermentum nisl blandit eget.",
            data: "21/12/2021"
        },
        {
            img: avatar,
            title: "Decor Plate",
            author: "Anonimus",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod sit amet mi id scelerisque. Maecenas interdum lectus elementum eros porttitor, nec convallis est iaculis. Donec iaculis a nunc at sagittis. Cras pharetra lorem in tempor mollis. Nullam in est sed mi vulputate mattis. Duis dignissim blandit massa vel dictum. Vivamus semper pretium hendrerit. Nulla facilisi. Vestibulum dignissim cursus volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at auctor velit. Nullam posuere augue leo. Fusce lobortis est eros, nec fermentum nisl blandit eget.",
            data: "21/12/2021"
        }
    ]);

    const [current, setCurrent] = useState("");

    const currentReview = (e) => {
        let newValue = e.target.value;
        setCurrent(newValue);
    }

    const addReview = () => {
        const newReview = {
                author: "User",
                title: props.name,
                text: current,
                data: date
        }
        if(newReview.text.length > 2){
            setReviews([newReview, ...reviews]);
        }
        else {}
        setCurrent("");
    }

    let date = new Date().toLocaleDateString();

    return (
        <div className={style.reviews}>
            <h4>Reviews: {reviews.length}</h4>
            <div className={style.textarea_button}>
                <div className={style.textarea}>
                    <div><textarea placeholder="Add a review" name="" id="" cols="50" rows="10" onChange={currentReview} value={current}></textarea></div>
                </div>
                <button onClick={addReview}>Push</button>
            </div>

            {
                reviews.map((el) => {
                    return (
                        <div className={style.review}>
                            <img src={avatar} alt="avatar"/>
                            <div className={style.review_text}>
                                <h5>{el.author}</h5>
                                <h3>{el.title}</h3>
                                <p>{el.text}</p>
                                <p>{el.data}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Reviews;