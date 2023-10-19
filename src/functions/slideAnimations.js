const slideAnimation = () => {
  let timeOut = 2000;
  let slideIndex = 0;

  const autoSlides = () => {
    timeOut = timeOut - 20;
    showSlides();
    setTimeout(autoSlides, 5000);
  }

  const prevSlide = () => {
    timeOut = 2000;
  
    const slides = document.getElementsByClassName('my-slides');
  
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideIndex--;
  
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    if (slideIndex == 0) {
        slideIndex = 3
    }
    slides[slideIndex - 1].style.display = 'block';
  }
  
  const showSlides = () => {
    timeOut = 2000;
  
    const slides = document.getElementsByClassName('my-slides');
  
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideIndex++;
  
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    slides[slideIndex - 1].style.display = 'block';
  }

  autoSlides();
  slideAnimation.prevSlide = prevSlide;
  slideAnimation.showSlides = showSlides;

  const btn1 = document.getElementById('prevNav');
  const btn2 = document.getElementById('nextNav');

  btn1.addEventListener('click', slideAnimation.prevSlide);
  btn2.addEventListener('click', slideAnimation.showSlides);
}

export default slideAnimation;