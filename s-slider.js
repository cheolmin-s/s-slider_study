const firstSlide = document.querySelector('.s-slider li:first-child');
const lastSlide = document.querySelector('.s-slider li:last-child');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const CLASS_SHOWING = "showing";

firstSlide.classList.add(CLASS_SHOWING);

function Slide(){

    this.prev = () => {
        const currentSlide = document.querySelector(`.${CLASS_SHOWING}`);

        if(currentSlide){
            currentSlide.classList.remove(CLASS_SHOWING);
            const prevSlide = currentSlide.previousElementSibling;
    
            if(prevSlide){
                prevSlide.classList.add(CLASS_SHOWING);
            } else {
                lastSlide.classList.add(CLASS_SHOWING);
            }
        }
    }

    this.next = () => {
        const currentSlide = document.querySelector(`.${CLASS_SHOWING}`);
        
        if(currentSlide){
            currentSlide.classList.remove(CLASS_SHOWING);
            const nextSlide = currentSlide.nextElementSibling;  // 그다음 첫번째 엘리먼트 sibling을 리턴한다. 그렇지않을경우 return null.
    
            if(nextSlide){
                nextSlide.classList.add(CLASS_SHOWING);
            } else {
                firstSlide.classList.add(CLASS_SHOWING);
            }
        }
    }

}

const slide = new Slide();

function handlePrevBtn(){
    slide.prev();
}

function handleNextBtn(){
    slide.next();
}

prevBtn.addEventListener('click', handlePrevBtn);
nextBtn.addEventListener('click', handleNextBtn);
