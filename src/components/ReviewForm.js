/**
 * review form component
 */
import { useState, useRef } from 'react';
import { ref, set, get, child } from "firebase/database";
import database from "../config/firebase"
import uuid from 'react-uuid';
import "./ReviewForm.css"

const ReviewForm = ({ login, userInfo, setReviews }) => {
    const [rating, setRating] = useState(0);
    const review = useRef();

    const addReview = async (e) => {
        e.preventDefault();
        const body = review.current.value;
        const reviewId = uuid();
        const date = new Date().toLocaleString('en-GB');
        await set(ref(database, "reviews/" + reviewId), {
            stars: rating,
            review: body,
            useremail: userInfo.email,
            username: userInfo.name,
            date: date.toLocaleString()
        });
        const dbRef = ref(database);
        const snapshot = await get(child(dbRef, "/reviews"))
        setReviews(snapshot.val());
        review.current.value = "";
    }

    const getRating = (e) => {
        setRating(e.target.value);
    }

    return <>
        <h2 className="body__title">평점</h2>
        {login &&
            <form onSubmit={addReview}>
                <div className="body__rating" >
                    <input type="radio" id="5-stars" name="review[rating]" value="5" required onChange={getRating} />
                    <label htmlFor="5-stars" className="star">&#9733;</label>
                    <input type="radio" id="4-stars" name="review[rating]" value="4" onChange={getRating} />
                    <label htmlFor="4-stars" className="star">&#9733;</label>
                    <input type="radio" id="3-stars" name="review[rating]" value="3" onChange={getRating} />
                    <label htmlFor="3-stars" className="star">&#9733;</label>
                    <input type="radio" id="2-stars" name="review[rating]" value="2" onChange={getRating} />
                    <label htmlFor="2-stars" className="star">&#9733;</label>
                    <input type="radio" id="1-star" name="review[rating]" value="1" onChange={getRating} />
                    <label htmlFor="1-star" className="star">&#9733;</label>
                </div>
                <textarea name="review[body]"  required ref={review}></textarea>
                <button className="body__btn">Add</button>
                <p className="body__username">by {userInfo.name}</p>
            </form>}

        {!login &&
            <form >
                <div className="body__rating">
                    <p htmlFor="5-stars" className="star">&#9733;</p>
                    <p htmlFor="4-stars" className="star">&#9733;</p>
                    <p htmlFor="3-stars" className="star">&#9733;</p>
                    <p htmlFor="2-stars" className="star">&#9733;</p>
                    <p htmlFor="1-star" className="star">&#9733;</p>
                </div>
                <textarea name="review[body]" disabled ></textarea>
                <button className="body__btn disabled" disabled>LogIn</button>
            </form>}
    </>
}

export default ReviewForm;