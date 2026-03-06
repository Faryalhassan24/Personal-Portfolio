let tablinks = document.querySelectorAll(".tab-links");
let tabcontents = document.querySelectorAll(".tab-contents");

function opentab(tabname, event) {
    tablinks.forEach(link => link.classList.remove("active-link"));
    tabcontents.forEach(content => content.classList.remove("active-tab"));

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

function filterProjects(category, clickedButton) {

    let project_cards = $(".work-card");
    let buttons = $(".tab-btn");
    let seeMore = $("#seeMoreBtn");
    let showLess = $("#showlessBtn");

    buttons.removeClass("active");
    $(clickedButton).addClass("active");

    project_cards.each(function () {

        if (category === 'all') {
            $(this).show();


        } else if ($(this).hasClass(category)) {
            $(this).show();

        } else {
            $(this).hide();
        }

    });


    if (category === 'all') {
        seeMore.hide();
        showLess.show();
    } else {
        seeMore.hide();
        showLess.hide();
    }
}

$(document).ready(function () {


    $('#seeMoreBtn').show();
    $('#showlessBtn').hide();

    $('#seeMoreBtn').on('click', function () {
        $('.work-card.hidden').show();
        $('#seeMoreBtn').hide();
        $('#showlessBtn').show();
    });

    $('#showlessBtn').on('click', function () {
        $('.work-card.hidden').hide();
        $('#seeMoreBtn').show();
        $('#showlessBtn').hide();
    });

    $(".fa-bars").click(function () {
        $("nav ul").addClass("active");
    });

    $(".fa-circle-xmark").click(function () {
        $("nav ul").removeClass("active");
    });

});


var typed = new Typed(".header-text p", {
    strings: ["Full Stack Developer", "Data Analyst", "PHP Developer"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
});

AOS.init({
    duration: 800,
    once: true

})