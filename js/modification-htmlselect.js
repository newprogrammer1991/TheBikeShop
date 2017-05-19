let clicksForSelect = document.querySelectorAll(".wrapper-select");
let btnOptions = document.querySelectorAll(".select-btn");
let elemLastClick;
for (let i = 0; clicksForSelect.length > i; i++) {
    clicksForSelect[i].addEventListener("click", show);
}
for (let i = 0; btnOptions.length > i; i++) {
    btnOptions[i].addEventListener("click", choose);
}

function show() {
    let elem = this;
    if (document.querySelector(".show") && elemLastClick != elem) {
        document.querySelector(".show").classList.remove("show");
    }
    elemLastClick = this;
    let selectNone = document.querySelectorAll(".select-list");
    for (let i = 0; selectNone.length > i; i++) {
        if (elem.contains(selectNone[i])) {
            selectNone[i].classList.toggle("show");
        }
    }
}
function choose() {
    let elem = this;
    let textChange = elem.value;
    if(textChange) {
        let spanTextChange = document.querySelectorAll(".text-change");
        for (let i = 0; spanTextChange.length > i; i++) {
            if (elemLastClick.contains(spanTextChange[i])) {
                spanTextChange[i].innerHTML = textChange;
            }
        }
    }
}


document.addEventListener("click", function () {
    if (document.querySelector(".show") && !event.target.closest(".wrapper-select")) {
        document.querySelector(".show").classList.remove("show");
    }

});


