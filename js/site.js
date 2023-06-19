/*Scroll*/
window.onscroll = function () { AddStickyClass() };

// Get the header
var header = document.getElementById("header");

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function AddStickyClass() {
    if (window.pageYOffset > header.offsetTop) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}
/*SCROLL END */

window.addEventListener("scroll", function () {
    var revealElements = document.querySelectorAll(".reveal");

    revealElements.forEach(function (revealElement) {
        var revealElementPosition = revealElement.getBoundingClientRect().top;
        var screenPosition = window.innerHeight / 1.3;

        if (revealElementPosition < screenPosition) {
            revealElement.classList.add("fade-in");
        }
    });
});