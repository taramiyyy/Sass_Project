let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = ()=>{
    navbar.classList.add('active');
}

document.querySelector('#nav-close').onclick = ()=>{
    navbar.classList.remove('active');
};

/******forms******/
let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = ()=>{
    searchForm.classList.add('active');
    console.log("cjnkj")
}

document.querySelector('#close-search').onclick = ()=>{
    searchForm.classList.remove('active');
    console.log("sdh")
};











window.onscroll = () =>{
    navbar.classList.remove('active');
}
/******sliders******/
var swiper = new Swiper(".home-slider", {
    navigation:{
        nextE1: ".swiper-button-next",
        prevE1: ".swiper-button-prev"
    },
});

