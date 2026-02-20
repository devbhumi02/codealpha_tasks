let currentIndex=0;
let images=[];

let lightbox=document.getElementById("lightbox");
let lightboxImg=document.getElementById("lightbox-img");

function loadImages(){
images=Array.from(document.querySelectorAll(".gallery img"));
}

function openLightbox(img){
loadImages();
currentIndex=images.indexOf(img);
lightbox.style.display="flex";
lightboxImg.src=img.src;
}

function closeLightbox(){
lightbox.style.display="none";
}

function changeImage(step){
currentIndex+=step;
if(currentIndex>=images.length) currentIndex=0;
if(currentIndex<0) currentIndex=images.length-1;
lightboxImg.src=images[currentIndex].src;
}

function filterImages(category){

let items=document.querySelectorAll(".gallery .image");

for(let i=0;i<items.length;i++){

if(category==="all" || items[i].classList.contains(category)){
items[i].style.display="block";
}
else{
items[i].style.display="none";
}

}

}
