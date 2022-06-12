"use strict";
// SETTING FOOTER YEAR DYNAMIC
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// MOBILE NAVIGATION
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function() {
    headerEl.classList.toggle("nav-open");
});

// CLOSE MOBILE NAVIGATION
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function(link) {
    link.addEventListener("click", function(e) {
        if (link.classList.contains("main-nav-link"))
            headerEl.classList.toggle("nav-open");
    });
});

// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
    var flex = document.createElement("div");
    flex.style.display = "flex";
    flex.style.flexDirection = "column";
    flex.style.rowGap = "1px";

    flex.appendChild(document.createElement("div"));
    flex.appendChild(document.createElement("div"));

    document.body.appendChild(flex);
    var isSupported = flex.scrollHeight === 1;
    flex.parentNode.removeChild(flex);
    console.log(isSupported);

    if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();