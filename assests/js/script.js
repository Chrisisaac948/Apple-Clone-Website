// text animation ----------------------
document.addEventListener('DOMContentLoaded', function() {
  const sectionText = document.querySelector('.section__text');

  sectionText.addEventListener('animationend', function() {
    sectionText.classList.remove('slide-down');
    sectionText.style.backgroundColor = 'var(--white)';
    sectionText.style.color = '#1d1d1f';
  });
});



// slider 1
const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const arrowBtns = document.querySelectorAll(".wrapper i");
const carouselChildrens = [...carousel.children];

// Get the number of cards that can fit in the carousel at once
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});

// Insert copies of the first few cards to end of carousel for infinite scrolling
carouselChildrens.slice(0, cardPerView).forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
carousel.classList.add("no-transition");
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove("no-transition");

// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
    });
});





// card slider ------------ 2
const wrapper_2 = document.querySelector(".wrapper_2");
const carousel_2 = document.querySelector(".carousel_2");
const firstCardWidths = carousel_2.querySelector(".card_2").offsetWidth;
const arrowBtn = document.querySelectorAll(".wrapper_2 i");
const carouselChildren = [...carousel_2.children];

// Get the number of cards that can fit in the carousel at once
let cardPerViews = Math.round(carousel_2.offsetWidth / firstCardWidths);

// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildren.slice(-cardPerViews).reverse().forEach(card => {
    carousel_2.insertAdjacentHTML("afterbegin", card.outerHTML);
});

// Insert copies of the first few cards to end of carousel for infinite scrolling
carouselChildren.slice(0, cardPerViews).forEach(card => {
    carousel_2.insertAdjacentHTML("beforeend", card.outerHTML);
});

// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
carousel_2.classList.add("no-transition");
carousel_2.scrollLeft = carousel_2.offsetWidth;
carousel_2.classList.remove("no-transition");

// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel_2.scrollLeft += btn.id == "left" ? -firstCardWidths : firstCardWidths;
    });
});





// slider 3 ---------------

const wrapper_3 = document.querySelector(".wrapper_3");
const carousel_3 = document.querySelector(".carousel_3");
const firstCardWidthss = carousel_3.querySelector(".card_3").offsetWidth;
const arrowBtnss = document.querySelectorAll(".wrapper_3 i");
const carouselChildrenss = [...carousel_3.children];


// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildrenss.slice(-cardPerViews).reverse().forEach(card => {
    carousel_3.insertAdjacentHTML("afterbegin", card.outerHTML);
});


// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
carousel_3.classList.add("no-transition");
carousel_3.scrollLeft = carousel_3.offsetWidth;
carousel_3.classList.remove("no-transition");

// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtnss.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel_3.scrollLeft += btn.id == "left" ? -firstCardWidthss : firstCardWidthss;
    });
});







// slider 4 ---------------
const wrapper_4 = document.querySelector(".wrapper_4");
const carousel_4 = document.querySelector(".carousel_4");
const firstCardWidthsss = carousel_4.querySelector(".card_4").offsetWidth;
const arrowBtnsss = document.querySelectorAll(".wrapper_4 i");
const carouselChildrensss = [...carousel_4.children];


// Get the number of cards that can fit in the carousel at once
let cardPerViewsss = Math.round(carousel_4.offsetWidth / firstCardWidthsss);

// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildrensss.slice(-cardPerViewsss).reverse().forEach(card => {
    carousel_4.insertAdjacentHTML("afterbegin", card.outerHTML);
});


// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
carousel_4.classList.add("no-transition");
carousel_4.scrollLeft = carousel_4.offsetWidth;
carousel_4.classList.remove("no-transition");

// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtnsss.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel_4.scrollLeft += btn.id == "left" ? -firstCardWidthsss : firstCardWidthsss;
    });
});






// slider 5 ---------------
const wrapper_5 = document.querySelector(".wrapper_5");
const carousel_5 = document.querySelector(".carousel_5");
const firstCardWidt = carousel_5.querySelector(".card_5").offsetWidth;
const arrowBt = document.querySelectorAll(".wrapper_5 i");
const carouselChildre = [...carousel_5.children];


// Get the number of cards that can fit in the carousel at once
let cardPerVie = Math.round(carousel_5.offsetWidth / firstCardWidt);

// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildre.slice(-cardPerVie).reverse().forEach(card => {
    carousel_5.insertAdjacentHTML("afterbegin", card.outerHTML);
});


// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
carousel_5.classList.add("no-transition");
carousel_5.scrollLeft = carousel_5.offsetWidth;
carousel_5.classList.remove("no-transition");

// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBt.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel_5.scrollLeft += btn.id == "left" ? -firstCardWidt : firstCardWidt;
    });
});





// slider 6 ---------------
const wrapper_6 = document.querySelector(".wrapper_6");
const carousel_6 = document.querySelector(".carousel_6");
const firstCardWid = carousel_6.querySelector(".card_6").offsetWidth;
const arrowB = document.querySelectorAll(".wrapper_6 i");
const carouselChildr = [...carousel_6.children];


// Get the number of cards that can fit in the carousel at once
let cardPerVi = Math.round(carousel_6.offsetWidth / firstCardWid);

// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildr.slice(-cardPerVi).reverse().forEach(card => {
    carousel_6.insertAdjacentHTML("afterbegin", card.outerHTML);
});


// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
carousel_6.classList.add("no-transition");
carousel_6.scrollLeft = carousel_6.offsetWidth;
carousel_6.classList.remove("no-transition");

// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowB.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel_6.scrollLeft += btn.id == "left" ? -firstCardWid : firstCardWid;
    });
});






// slider 7 ---------------
const wrapper_7 = document.querySelector(".wrapper_7");
const carousel_7 = document.querySelector(".carousel_7");
const firstCardWi = carousel_7.querySelector(".card_7").offsetWidth;
const arrowBtt = document.querySelectorAll(".wrapper_7 i");
const carouselChilds = [...carousel_7.children];


// Get the number of cards that can fit in the carousel at once
let cardPerVw = Math.round(carousel_7.offsetWidth / firstCardWi);

// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChilds.slice(-cardPerVw).reverse().forEach(card => {
    carousel_7.insertAdjacentHTML("afterbegin", card.outerHTML);
});


// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
carousel_7.classList.add("no-transition");
carousel_7.scrollLeft = carousel_7.offsetWidth;
carousel_7.classList.remove("no-transition");

// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtt.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel_7.scrollLeft += btn.id == "left" ? -firstCardWi : firstCardWi;
    });
});








// slider 8 ---------------
const wrapper_8 = document.querySelector(".wrapper_8");
const carousel_8 = document.querySelector(".carousel_8");
const firstCardWtt = carousel_8.querySelector(".card_8").offsetWidth;
const arrowBttn = document.querySelectorAll(".wrapper_8 i");
const carouselChildss = [...carousel_8.children];


// Get the number of cards that can fit in the carousel at once
let cardPerVwe = Math.round(carousel_8.offsetWidth / firstCardWtt);

// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildss.slice(-cardPerVwe).reverse().forEach(card => {
    carousel_8.insertAdjacentHTML("afterbegin", card.outerHTML);
});


// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
carousel_8.classList.add("no-transition");
carousel_8.scrollLeft = carousel_8.offsetWidth;
carousel_8.classList.remove("no-transition");

// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBttn.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel_8.scrollLeft += btn.id == "left" ? -firstCardWtt : firstCardWtt;
    });
});

