// VARS

const topMenu = document.getElementById("topMenu");
const fixedMenu = document.getElementById("fixedMenu");
const hiddenMenu = document.querySelector(".header__nav__menu--hidden");
const hiddenTopMenu = document.querySelector(".header__nav__menu__topMenu--hidden");

// scrolling actions
const menuHome = document.querySelectorAll(".menuHome");
const menuAbout = document.querySelectorAll(".menuAbout");
const menuServices = document.querySelectorAll(".menuServices");
const menuContact = document.querySelectorAll(".menuContact");

menuHome.forEach(home => {
    home.addEventListener("click", () => {
        window.scrollTo({
            behavior: "smooth",
            top: document.querySelector(".header").offsetTop
        })
    })
})
menuAbout.forEach(about => {
    about.addEventListener("click", () => {
        window.scrollTo({
            behavior: "smooth",
            top: document.querySelector(".welcome").offsetTop
        })
    })
})
menuServices.forEach(services => {
    services.addEventListener("click", () => {
        window.scrollTo({
            behavior: "smooth",
            top: document.querySelector(".services").offsetTop
        })
    })
})
menuContact.forEach(contact => {
    contact.addEventListener("click", () => {
        window.scrollTo({
            behavior: "smooth",
            top: document.querySelector(".subscribe").offsetTop
        })
    })
})

// top menu show/hide action

topMenu.addEventListener("click", () => {
    hiddenTopMenu.classList.toggle("header__nav__menu__topMenu--show");
})


// Hamburger show/hide action

fixedMenu.addEventListener("click", () => {
    hiddenMenu.classList.toggle("header__nav__menu--show");
})

// scroll event

window.addEventListener("scroll", () => {
    const scrollValue = window.scrollY;

    if (scrollValue > 100 || window.innerWidth < 1200) {
        fixedMenu.style.display = "block";
        hiddenTopMenu.classList.remove("header__nav__menu__topMenu--show");
    } else {
        fixedMenu.style.display = "none";
        hiddenMenu.classList.remove("header__nav__menu--show");
    }

})

// menu manipulation

if (window.innerWidth < 1200) {
    fixedMenu.style.display = "block";
    topMenu.style.display = "none";

} else {
    topMenu.style.display = "block";
}
window.addEventListener("resize", () => {
    if (window.innerWidth > 1200) {
        fixedMenu.style.display = "none";
        topMenu.style.display = "block";
        hiddenMenu.classList.remove("header__nav__menu--show");
    } else {
        topMenu.style.display = "none";
        fixedMenu.style.display = "block";
    }
})