// function enterEvent(e) {
//     let elems = document.querySelector(".table-items--white");
//     console.log('enterEvent', elems)
//     if (elems !== null) {
//         elems.classList.remove("table-items--white");
//     }

// }onmousemove="enterEvent(event)" onmouseleave="leaveEvent(event)"

// function leaveEvent(e) {
//     let elems = document.querySelector(".table-items--white");
//     console.log('leaveEvent', elems)
//     if (elems === null) {
//         elems.classList.add("table-items--white");
//     }

// }

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}