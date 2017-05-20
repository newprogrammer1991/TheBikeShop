(function () {
    let radioButtons = document.querySelectorAll("input[name=toogle]");
    let sliderOverflow=document.querySelector(".slider-overflow");

    for (let i=0;radioButtons.length;i++){
        radioButtons[i].addEventListener("change",function () {
        changeSlider(i)
        })
    }

    function changeSlider(i) {
        sliderOverflow.style.transform = "translate(" + (-(i * document.body.clientWidth)) + "px)";
    }

})();

















/*(function () {
    let elem = document.querySelectorAll(".slider-navigation label");
    let radioButtons = document.querySelectorAll("input[name=toogle]");
    let sliderOverflow=document.querySelector(".slider-overflow");
    let sliders=document.querySelectorAll(".slider");
    let next;
    let radioCheckedNumber
    for (let i = 0; radioButtons.length > i; i++) {
        radioButtons[i].addEventListener("change", function () {
        addClass(i);
        })
    }
    for (let i=0;sliders.length>i;i++) {
        sliders[i].addEventListener("transitionend", function () {
            if(sliders[i].contains("slider-opacity")) {
                transforms(i + 1);
            }
        })
    }

    function addClass(i) {

        if(sliders[i].contains("slider-opacity")){
           sliders[i].classList.remove("slider-opacity");
           sliders[i+radioCheckedNumber].classList.add("slider-opacity");
        }

        else {
            sliders[i - 1].classList.add("slider-opacity");
        }
    };
function transforms(i) {
    console.log(i);
    sliderOverflow.style.transform = "translate(" + (-(i * document.body.clientWidth)) + "px)";
};
    function getCheckedButton() {
        for (let i=0;radioButtons.length>i;i++){
            if(radioButtons[i].checked==true){

            }
        }
            }

})();*/























/**
 * Created by ALI on 5/18/2017.
 */
/*let radioElements = document.querySelectorAll("input[name=toogle]");
 let sliderOverflow = document.querySelector(".slider-overflow");
 let step = 1;

 for (let i = 0; radioElements.length > i; i++) {
 radioElements[i].addEventListener("change", function () {
 transformSlider(i);

 });
 }

 function transformSlider(i) {
 sliderOverflow.style.transform = "translate(" + (-(i * document.body.clientWidth)) + "px)";
 sliderOverflow.classList.add("slider-opacity");
 }

 sliderOverflow.addEventListener("transitionend", function (event) {
 if (sliderOverflow.classList.contains("slider-opacity")) {
 sliderOverflow.classList.remove("slider-opacity");
 //change();
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
 radioElements[step].checked = true;
 transformSlider(step);
 step++;
 }
 else {
 step = 1;
 radioElements[step - 1].checked = true;
 transformSlider(step-1);
 }

 }*/
