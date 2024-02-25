//console.log('hi');

const slides = ['01.webp','02.webp','03.webp','04.webp','05.webp'];

let activeImage = 0; //img in elemnt 0
const slidesElement = document.querySelector('.slides')

const upElement =document.querySelector('.up');
const downElement =document.querySelector('.down');

console.log(slides, activeImage, slidesElement);

for (let index = 0; index < slides.length; index++) {
    const slide = slides[index];
    
    const slideMarkup = `<img class="${index === activeImage ? 'active' : '' }" src="./assets/img/${slide}" alt="">`;
    console.log(slideMarkup);
    
    slidesElement.insertAdjacentHTML('beforeend',slideMarkup);
}


//listen for up

console.log(upElement, downElement);
upElement.addEventListener('click', function(){
    console.log('go up');
    activeImage++;

    if (activeImage>slides.length -1) {
        activeImage=0
    }

    console.log(activeImage);
    const currentImage = document.querySelector('img.active');
    console.log(currentImage);
    currentImage.classList.remove('active');
    console.log(currentImage);
    const allSlides = document.querySelectorAll('.slides img');
    console.log(allSlides);
    allSlides[activeImage].classList.add('active');
})
console.log(upElement, downElement);
downElement.addEventListener('click', function(){
    console.log('go down');
    activeImage--;

    if (activeImage < 0) {
        activeImage= slides.length-1
    }

    console.log(activeImage);
    const currentImage = document.querySelector('img.active');
    console.log(currentImage);
    currentImage.classList.remove('active');
    console.log(currentImage);
    const allSlides = document.querySelectorAll('.slides img');
    console.log(allSlides);
    allSlides[activeImage].classList.add('active');
})
