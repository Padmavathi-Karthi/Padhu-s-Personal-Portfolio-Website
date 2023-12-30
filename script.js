// let type = new Typed('#changing-text', {
//     strings : [ 'Software Engineer'],
//     typeSpeed: 50,
//     backSpeed: 50,
//     loop: true,
// })



// for smaller screen
var sidemenu = document.getElementById ("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}
function closemenu() {
    sidemenu.style.right = "-200px";
}

// skill section
const skillItems = document.querySelectorAll("section.skills .skill");

skillItems.forEach(skill => {
    skill.querySelector(".head").addEventListener("click", () => {
        skill.querySelector(".items").classList.toggle("show-items");
    })
})

// skill, education and experience button
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");


function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }

    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

const swiper = new Swiper('.js-testimonials-slider', {
    grapCursor: true,
    spaceBetween: 30,
    pagination: {
        el: '.js-testimonials-pagination',
        clickable: true
    },
    breakpoints: {
        767:{
            slidePerView: 2
        }
    }

});


