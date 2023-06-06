/**
 * review component
 */
import { ref, remove, get, child } from "firebase/database";
import database from "../config/firebase"
import "./Reviews.css"

const Reviews = ({ reviews, setReviews, userInfo }) => {

    const deleteReview = async (id) => {
        const confirmMsg = window.confirm("댓글을 지우시겠습니까?")
        if (confirmMsg) {
            await remove(ref(database, `/reviews/${id}`));

            const dbRef = ref(database);
            const snapshot = await get(child(dbRef, "/reviews"))
            if (snapshot.exists()) {
                setReviews(snapshot.val());
            }
            else {
                setReviews(null);
            }
        }
    }

    return <ul className="body__reviews">
        {reviews && Object.keys(reviews).map(id =>
            <li className="body__review" key={id}>
                {userInfo?.email === reviews[id].useremail &&
                    <div className="body__reviewDelete" onClick={() => { deleteReview(id) }}>
                        <button>&#10005;</button>
                    </div>
                }
                <div>
                    <p className="body__reviewStars">
                        {reviews[id].stars === "5" && "★★★★★"}
                        {reviews[id].stars === "4" && "★★★★"}
                        {reviews[id].stars === "3" && "★★★"}
                        {reviews[id].stars === "2" && "★★"}
                        {reviews[id].stars === "1" && "★"}
                    </p>
                </div>
                <p className="body__reviewBody">{reviews[id].review}</p>
                <div className="body__reviewUser" >
                    <p className="body__reviewUsername">by {reviews[id].username} </p>
                    <p className="body__reviewDate">{reviews[id].date}</p>
                </div>
            </li>)}
    </ul>

}

export default Reviews;