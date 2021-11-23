var slideIndex = 1;
 showSlides(slideIndex);

//  let flag = 0;
//  slideshow(flag);
function plusSlides(n) {
    showSlides(slideIndex += n)
    // let slides = document.getElementsByClassName('slide');
    //  slides[num].style.display="block";
}








function currentSlide(n) {
    menu.classList.toggle('open');
}