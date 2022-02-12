// const $$ = document.querySelectorAll.bind(document);
var imgSildes = document.querySelectorAll(".img_slider");
var btnPrev = document.getElementById("btn_prev");
var btnNext = document.getElementById("btn_next");
var textSlideHeading = document.querySelector(".text_slide-heading");
var textSlideTitlle = document.querySelector(".text_slide-title");
var textSlideBtn = document.querySelector(".text_slide-btn");
var textSlideImg2 = document.querySelector(".text_slide-img2");
var textSlideContainer = document.querySelector(".text_slide-container");
var textSlideTitleImg2 = document.querySelector(".text_slide-title_img2");
var textSildeBtnImg2 = document.querySelector(".text_slide-btn_img2");
var btnTabs = document.querySelectorAll(".product_wrapper-tab");
var tabContent = document.querySelectorAll(".tab_content")
var slideIndex = 1;
var iconScroll = document.querySelector("#icon_scroll")
showSlides(slideIndex);
window.onscroll = function() {
        onScroll();
    }
    // $(document).ready(function() {
    //     $('.product_offered').slick({
    //         infinite: true,
    //         slidesToShow: 3,
    //         slidesToScroll: 1,
    //         arows: false,
    //     });
    // });


const swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: {
        delay: 2000,
    },
    centeredSlides: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});

function onScroll() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        iconScroll.classList.add("fadeIconScroll")
    } else {
        iconScroll.classList.remove("fadeIconScroll")
    }
}

function showSlides(n) {
    if (n > imgSildes.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = imgSildes.length;
    }
    for (let i = 0; i < imgSildes.length; i++) {
        imgSildes[i].style.display = "none";
    }
    imgSildes[slideIndex - 1].style.display = "block";
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function addtextAnimation() {
    textSlideHeading.classList.add("fadeHeading");
    textSlideTitlle.classList.add("fadeTitle");
    textSlideBtn.classList.add("fadeBtn");
    textSlideContainer.classList.add("fadeContainer");
    textSlideTitleImg2.classList.add("fadeSlideTitle2");
    textSildeBtnImg2.classList.add("fadeSlideBtn")
}

function removetextAnimation() {
    // textSlideHeading.style.transform = "translateY(0px)";
    // textSlideTitlle.style.transform = "translateY(0px)";
    textSlideHeading.classList.remove("fadeHeading");
    textSlideTitlle.classList.remove("fadeTitle");
    textSlideBtn.classList.remove("fadeBtn");

}

function textSlideOnload() {
    const $ = document.querySelector.bind(document);
    $(".text_slide-img1").classList.add("tetxSileOnload");
}

btnNext.addEventListener('click', function() {
    setTimeout(plusSlides(-1), 5000)
    addtextAnimation();
});

btnPrev.addEventListener('click', function() {
    removetextAnimation();
    setTimeout(plusSlides(1), 5000);
});
btnTabs.forEach((tab, index) => {
    tab.onclick = function() {
        const $ = document.querySelector.bind(document);
        $(".product_wrapper-tab.line_tab").classList.remove("line_tab");
        this.classList.add('line_tab');
        $(".tab_content.active").classList.remove("active")
        tabContent[index].classList.add("active");
    }
});