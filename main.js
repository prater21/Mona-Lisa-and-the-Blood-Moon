const btn = document.querySelector("button");
const ul = document.querySelector(".body__reviews");
const form = document.querySelector("form");
const textarea = document.querySelector("textarea");

// display stars
const getStars = (num, parent) => {
    const stars = document.createElement("div");
    stars.style.color = "yellow";
    stars.style.fontSize = "23px";
    switch (num) {
        case "5":
            stars.innerText = "★★★★★";
            parent.appendChild(stars);
            break;
        case "4":
            stars.innerText = "★★★★";
            parent.appendChild(stars);
            break;
        case "3":
            stars.innerText = "★★★";
            parent.appendChild(stars);
            break;
        case "2":
            stars.innerText = "★★";
            parent.appendChild(stars);
            break;
        case "1":
            stars.innerText = "★";
            parent.appendChild(stars);
            break;
        default:
            console.log("wrong number");
            break;
    }
}

//get reviews from firebase
fetch("https://mona-lisa-and-the-blood-4a6d2-default-rtdb.firebaseio.com/reviews.json")
    .then((response) => response.json())
    .then((reviews) => {
        // console.log(data);
        //display reviews
        Object.keys(reviews).forEach(id => {
            const newReview = document.createElement("li");
            newReview.classList.add('body__review');
            getStars(reviews[id].stars, newReview);
            const newP = document.createElement("p");
            newP.classList.add('body__reviewBody');
            newP.innerText = reviews[id].review;
            newReview.appendChild(newP);
            ul.appendChild(newReview);
        })
    });

//add review to firebase
form.addEventListener("submit", (e => {
    e.preventDefault();
    const stars = document.querySelector("input[name='review[rating]']:checked").value;
    const review = textarea.value;

    fetch("https://mona-lisa-and-the-blood-4a6d2-default-rtdb.firebaseio.com/reviews.json", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            review,
            stars
        }),
    }).then((response) => {
        // console.log(response);
        textarea.value = "";
        //page reload
        location.reload();
    });

})) 