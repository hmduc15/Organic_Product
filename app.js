var cardProducts = document.querySelectorAll(".card_product");
var cardPreview = document.querySelector(".card_preview");
var cardProductImg = document.querySelectorAll(".card_img img");
var cardPreViewImg = document.querySelector(".preview_product-img img");
var btnClosePrev = document.querySelector(".preview_icon");
var nameProducts = document.querySelectorAll(".name");
var nameProductPrev = document.querySelector(".name_preduct-view")
cardProducts.forEach((card, index) => {
    card.addEventListener('click', function() {
        cardPreview.classList.add("open");
        cardPreViewImg.src = cardProductImg[index].src;
        nameProductPrev.innerHTML = nameProducts[index].innerHTML;
    })
})
btnClosePrev.addEventListener('click', function() {
    cardPreview.classList.remove("open");

})