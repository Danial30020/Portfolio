/*let obset=0
const sliderline=document.querySelector(".sliderline")
document.querySelector(".slidernext").addEventListener("click",function() {
    obset=obset+260;
    if (obset>768) {
        obset=0;
    }
    sliderline.style.left=-obset+"px"
    alert("да")
})
document.querySelector(".sliderpref").addEventListener("click",function() {
    obset=obset-260;
    if (obset<0) {
        obset=768;
    }
    sliderline.sds.left=-obset+"px"
    alert("нет")
})*/
let offset = 0;
const sliderLine = document.querySelector(".slider-line");
let width;
const images = document.querySelectorAll(".slider-line img");
function init() {
  width = document.querySelector(".slider").offsetWidth;
  sliderLine.style.width = width * images.length + "px";
}
init();
document.querySelector(".slider-next").addEventListener("click", function () {
  offset++;
  if (offset >= images.length) {
    offset = 0;
  }
  sliderLine.style.transform = "translate(-" + offset * width + "px)";
});

document.querySelector(".slider-prev").addEventListener("click", function () {
  offset--;
  if (offset < 0) {
    offset = images.length - 1;
  }
  sliderLine.style.transform = "translate(-" + offset * width + "px)";
});
window.addEventListener("resize", init);
let brgr = document.querySelector(".brgr");
let brgr_menu = document.querySelector(".brgr-menu");
let isMenuOpen = false;
function burgerfunction() {
  if (isMenuOpen == false) {
    brgr_menu.style.display = "block";
    brgr.style.transform = "rotate(180deg)";
    isMenuOpen = true;
  } else {
    isMenuOpen = false;
    brgr_menu.style.display = "none";
    brgr.style.transform = "rotate(0deg)";
  }
}
brgr.addEventListener("click", burgerfunction);
document.querySelector(".avtor").addEventListener("click", burgerfunction);
document.querySelector(".work").addEventListener("click", burgerfunction);
document.querySelector(".proc").addEventListener("click", burgerfunction);
document.querySelector(".contact").addEventListener("click", burgerfunction);
document.querySelector(".glav").addEventListener("click", burgerfunction);
