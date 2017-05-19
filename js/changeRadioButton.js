/**
 * Created by ALI on 5/18/2017.
 */
let radioElements = document.querySelectorAll("input[name=toogle]");
let sliderOverflow = document.querySelector(".slider-overflow");
let step = 1;

sliderOverflow.addEventListener("transitionend", function (event) {
    if (sliderOverflow.classList.contains("elemopacity")) {
        change();
    }
});

let timeId = setInterval(function () {
    sliderOverflow.classList.add("slider-overflow-opacity");
}, 10000);

setInterval(function () {
    sliderOverflow.classList.remove("slider-overflow-opacity");
}, 11000);

function change() {
    if (radioElements.length > step) {
        radioElements[step].checked = true;
        step++;
    }
    else {
        step = 1;
        radioElements[step - 1].checked = true;
    }

}