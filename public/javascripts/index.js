const moon = document.querySelector(".img-moon");
const clickBtn = document.querySelector(".click-btn")
const main = document.querySelector(".main")

//display "click" text
moon.addEventListener("mouseover", (event) => {
    clickBtn.style.display = "inline"
    clickBtn.style.position = 'relative';
    clickBtn.style.top = "180px";
    clickBtn.style.left = "180px";
})

//remove "click" text
moon.addEventListener("mouseout", (event) => {
    clickBtn.style.display = "none"
})