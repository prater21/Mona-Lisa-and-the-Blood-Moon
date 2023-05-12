const express = require("express");
const methodOverride = require('method-override');
const { ref, get, set, child, remove } = require("firebase/database");
const {v4 : uuidv4} = require("uuid")
const {database} = require("./firebase");
const path = require("path");
require("dotenv").config();

const app = express();

//ejs setting
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))
app.use(express.static(path.join(__dirname, "public")));
const authEndpoint = "https://accounts.google.com/o/oauth2/v2/auth";
const getTokenEndpoint = "https://oauth2.googleapis.com/token";
const redirectUri = "http://localhost:3000/MonaLisaAndTheBloodMoon/main";
const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
const scopes =
    "https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile";
const oAuthURL = `${authEndpoint}?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=${scopes}`;

let userInfo = null;
let reviews = null;
const getReviews = (req, res, next) => {
    const dbRef = ref(database);
    get(child(dbRef, "/reviews"))
        .then(snapshot => {
            if (snapshot.exists()) {
                reviews = snapshot.val();
            } else {
                reviews = null;
                console.log("No data available");
            }
        })
        .then(() => { next(); })
        .catch(error => {
            console.error(error);
        });
    
}

app.get("/MonaLisaAndTheBloodMoon", (req, res) => {
    res.render("index");
});

app.post("/MonaLisaAndTheBloodMoon", (req, res) => {
    const uuid = uuidv4();
    const date = new Date().toLocaleString();
    const { rating, body } = req.body.review;
    set(ref(database, "reviews/"+uuid), {
        stars: rating,
        review: body,
        useremail: userInfo.email,
        username: userInfo.name,
        date: date.toLocaleString()
    });

    res.redirect("/MonaLisaAndTheBloodMoon/main");
});

app.get("/MonaLisaAndTheBloodMoon/main", getReviews, async (req, res) => {
    const { code } = req.query;

    if (code) {
        fetch(getTokenEndpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: `code=${code}&client_id=${clientId}&client_secret=${clientSecret}&redirect_uri=${redirectUri}&grant_type=authorization_code&prompt=consent`,
        })
            .then((response) => response.json())
            .then((access) => {
                const { access_token } = access;
                fetch(
                    `https://www.googleapis.com/userinfo/v2/me?access_token=${access_token}`
                )
                    .then((response) => response.json())
                    .then((profile) => {
                        const { email, name } = profile;
                        userInfo = { email, name };
                    })
                    .then(() => {
                        req.query = "#";
                        res.redirect("/MonaLisaAndTheBloodMoon/main");
                    });
            });
    } else {
        res.render("main", { userInfo, reviews });
    }
});
app.delete("/MonaLisaAndTheBloodMoon/:reviewId", async (req, res) => {
    const { reviewId } = req.params;
    remove(ref(database, `/reviews/${reviewId}`))
    res.redirect("/MonaLisaAndTheBloodMoon/main");
})
app.get("/auth/google", (req, res) => {
    res.redirect(oAuthURL);
});

//위에 route랑 매치 안되는거 다 여기로
app.all('*', (req, res) => {
    res.send("Page Not Found")
})

app.listen(3000, () => {
    console.log("Serving on port 3000");
});
