/**
 * main page
 */
import { useState, useEffect } from 'react';
import { useLoaderData } from "react-router-dom";
import { ref, get, child } from "firebase/database";
import database from "../../config/firebase"
import MainInfo from "../MainInfo";
import Reviews from "../Reviews";
import ReviewForm from "../ReviewForm";
import Login from "../Login";
import "./Main.css"

const Main = () => {
    const [reviews, setReviews] = useState(null);
    const [userInfo, setUserInfo] = useState(null);
    const [login, setLogin] = useState(false);
    const _reviews = useLoaderData();

    const setUser = (email, name, picture) => {
        setUserInfo({ email, name, picture });
        setLogin(true);
    }

    const logout = () => {
        setUserInfo(null);
        setLogin(false);
    }

    useEffect(() => {
        setReviews(_reviews);
    }, [_reviews])

    return (
        <div className="main">
            {!login && <Login setUser={setUser} />}
            {login && <div className="top__logout">
                <img src={userInfo.picture} alt="" />
                <p>Hi, {userInfo.name}</p>
                <p className="top__logoutBtn" onClick={logout}>Logout</p>
            </div>}

            <MainInfo />
            <div className="body__content">
                <ReviewForm login={login} userInfo={userInfo} setReviews={setReviews} />
                <Reviews reviews={reviews} userInfo={userInfo} setReviews={setReviews} />
            </div>
        </div>
    )
}

export default Main;

export const loader = async () => {
    const dbRef = ref(database);
    let getReviews = null;
    const snapshot = await get(child(dbRef, "/reviews"))
    if (snapshot.exists()) {
        getReviews = snapshot.val();
    }
    return getReviews;
}