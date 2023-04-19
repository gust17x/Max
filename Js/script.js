const slides = document.querySelector('.slides');
// const prevButton = document.querySelector('.prev');
// const nextButton = document.querySelector('.next');

let index = 0;

function prev() {
  index--;
  if (index < 0) {
    index = slides.children.length - 1;
  }
  slides.style.transform = `translateX(-${index * 100}%)`;
}

function next() {
  index++;
  if (index >= slides.children.length) {
    index = 0;
  }
  slides.style.transform = `translateX(-${index * 100}%)`;
}

// efeito scroll 
const box = document.querySelectorAll("[data-anima]")
const animation = "animation"

function scroll() {

    const pageTop = window.pageYOffset + ((window.innerHeight * 3.4) / 4);
    
    box.forEach(function(e) {

        if ((pageTop) > e.offsetTop) {
            e.classList.add(animation)      
        }else{
            e.classList.remove(animation)
        }

    })

}

window.addEventListener("scroll", function(e) {
    scroll()
})

//

$(document).ready(function(){
  $('.carousel-2').slick({
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev">Previous</button>',
    nextArrow: '<button type="button" class="slick-next">Next</button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ]
  });
});

