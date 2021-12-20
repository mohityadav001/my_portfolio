// Sticky navigation menu JS 
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");

let val;

window.onscroll = function(){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("sticky");
        scrollBtn.style.display = "block";

    }
    else{
        nav.classList.remove("sticky");
        scrollBtn.style.display = "none";
    }
}

// Side navigation menu js

let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancleBtn = document.querySelector(".cancle-btn");

menuBtn.onclick = function() {
    navBar.classList.add("active");
    menuBtn.style.opacity = "0";
    menuBtn.style.pointerEvents = "none";
    body.style.overflowX = "hidden";
    scrollBtn.style.pointerEvents = "none";
}

cancleBtn.onclick = function() {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
    body.style.overflowX = "auto";
    scrollBtn.style.pointerEvents = "auto";
}

// side navigation bar close while we click on naviagtion

let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0; i < navLinks.length; i++){
    navLinks[i].addEventListener("click", function(){
        navBar.classList.remove("active");
        menuBtn.style.opacity = "1";
        menuBtn.style.pointerEvents = "auto";
    });
}

setInterval(()=>{
    const time = document.querySelector("#time");
let date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
let day_night = "AM";
if(hours > 12){
    day_night = "PM";
    hours = hours - 12;
}
if(hours < 10){
    hours = "0" + hours;
}
if(minutes <10){
    minutes = "0" + minutes;
}
if(seconds < 10){
    seconds = "0" + seconds;
}
time.textContent = hours +":"+ minutes +":"+ seconds + " " + day_night;
})