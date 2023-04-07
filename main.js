const btn = document.querySelector("button");
const ul = document.querySelector(".body__reviews");
const form = document.querySelector("form");
const textarea = document.querySelector("textarea");

const getStars = (num, parent) => {
    switch (num) {
        case "5":
            const stars5 = document.createElement("div");
            stars5.innerText = "★★★★★";
            stars5.style.color = "yellow";
            stars5.style.fontSize = "23px";
            parent.appendChild(stars5);
            break;
        case "4":
            const stars4 = document.createElement("div");
            stars4.innerText = "★★★★";
            stars4.style.color = "yellow"
            stars4.style.fontSize = "23px"
            parent.appendChild(stars4);
            break;
        case "3":
            const stars3 = document.createElement("div");
            stars3.innerText = "★★★";
            stars3.style.color = "yellow"
            stars3.style.fontSize = "23px"
            parent.appendChild(stars3);
            break;
        case "2":
            const stars2 = document.createElement("div");
            stars2.innerText = "★★";
            stars2.style.color = "yellow"
            stars2.style.fontSize = "23px"
            parent.appendChild(stars2);
            break;
        case "1":
            const stars1 = document.createElement("div");
            stars1.innerText = "★";
            stars1.style.color = "yellow"
            stars1.style.fontSize = "23px"
            parent.appendChild(stars1);
            break;
        default:
            console.log("wrong number");
            break;

    }

}

//get reviews
fetch("https://mona-lisa-and-the-blood-4a6d2-default-rtdb.firebaseio.com/reviews.json")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        const reviews = data
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

//add review
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
        console.log(response);
        textarea.value = "";
        location.reload();
    });

})) 