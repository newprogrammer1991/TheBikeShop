/**
 * Created by ALI on 5/18/2017.
 */
let radioElements = document.querySelectorAll("input[name=toogle]");
let sliderOverflow = document.querySelector(".slider-overflow");
let step = 1;

for (let i = 0; radioElements.length > i; i++) {
    radioElements[i].addEventListener("change", function () {
        sliderOverflow.style.transform = "translate(" + (-(i * document.body.clientWidth)) + "px)";
    });
}
sliderOverflow.addEventListener("transitionend", function (event) {
    if (sliderOverflow.classList.contains("slider-opacity")) {
       // change();
    }
});

let timeId = setInterval(function () {
    sliderOverflow.classList.add("slider-opacity");
}, 10000);

setInterval(function () {
    sliderOverflow.classList.remove("slider-opacity");
}, 11000);

function change() {
    if (radioElements.length > step) {
        //radioElements[step].checked = true;
        //transformSlider(step);
        step++;
    }
    else {
        step = 1;
        //radioElements[step - 1].checked = true;
        //transformSlider(step-1);
    }

}
