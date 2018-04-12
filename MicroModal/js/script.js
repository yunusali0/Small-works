var btn = document.querySelector(".btn");
var modal = document.querySelector(".modal");
var closeX = document.querySelector(".close");
var continueBtn = document.querySelector(".continue");
var closeBtn = document.querySelector(".close_btn");

btn.addEventListener("click", function (ev) {
    ev.preventDefault();
    modal.classList.add("active");
});

closeX.addEventListener("click", function () {
    modal.classList.remove("active");
});

continueBtn.addEventListener("click", function (ev) {
    ev.preventDefault();
});

closeBtn.addEventListener("click", function (ev) {
    ev.preventDefault();
    modal.classList.remove("active");
});

document.body.addEventListener("keyup", function (ev) {
    if (ev.which == 27) {
        modal.classList.remove("active");
    }
});

modal.addEventListener("click", function (ev) {
    if (ev.target.classList.contains("modal")) {
        modal.classList.remove("active");
    }
});