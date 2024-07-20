const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slides = Array.from(slider.querySelectorAll('img'));
const slideCount = slides.length;
const titleElem = document.querySelector(".page-title")
let slideIndex = 0;
let i = 1;

document.addEventListener('keydown', () => {
      titleElem.textContent = `Фото ${i+1} из ${slideCount}`
      slider.style.transform = `translateX(-${i*100}%)`
  if(i < slideCount){
    i++
  }
  else{
    i=0
    window.location.reload()
  }
});

nextButton.addEventListener('click', () => {
  slideIndex = (slideIndex + 1) % slideCount;
  slide();
});

const slide = () => {
  const imageWidth = slider.clientWidth;
  const slideOffset = -slideIndex * imageWidth;
  slider.style.transform = `translateX(${slideOffset}px)`;
}
//setInterval(() => {
//  slides.forEach((item, index) => {
//    if(i < slideCount){
//      titleElem.textContent = `Фото ${i+1} из ${slideCount}`
//      item.style.transform = `translateX(-${i*100}%)`
//    }
//  })
//  if(i < slideCount){
//    i++
//  }
//  else{
//    i=0
//    //window.location.reload()
//  }
//}, 2000);

const sliding = () => {

  if(i < slideCount){
      titleElem.textContent = `Фото ${i+1} из ${slideCount}`
      slider.style.transform = `translateX(-${i*100}%)`
    i++
  }
  else{
    i=0
    window.location.reload()
  }
}
let interv = setInterval(() => {
 sliding() 
}, 60*2000);
//window.addEventListener('load', () => {
  //slide();
//});
