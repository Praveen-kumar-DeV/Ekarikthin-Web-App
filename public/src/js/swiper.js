swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true,
  },
  loop:true,
  autoplay:{
      delay:3000,
      disableOnInteraction:true,
  },
  mousewheel:{
    forceToAxis:true,
    thresholdDelta:10,
    sensitivity: 0,
  }
});

swiper = new Swiper(".mySwiper2", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true,
  },
  loop:false,
  autoplay:{
      delay:3000,
      disableOnInteraction:true,
  },
  mousewheel:{
    forceToAxis:true,
    thresholdDelta:10,
    sensitivity: 0,
  }
});

//Cards
var posterSwiper = new Swiper(".posterSwiper", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
 
});

//day1
let list1 = document.querySelectorAll('.list1');
let gallary1 = document.querySelectorAll('.gallary1');

for(let i = 0; i < list1.length; i++){
  list1[i].addEventListener('click', function(){
    for(let j = 0; j < list1.length; j++){
      list1[j].classList.remove('active');
    }
    this.classList.add('active');

    let dataFilter = this.getAttribute('data-filter');
    
    for(let k = 0; k < gallary1.length; k++){
      gallary1[k].classList.add('hide');
      if(gallary1[k].getAttribute('data-item') == dataFilter){
        gallary1[k].classList.remove('hide');
      }
    }
  })
}

//day2
let list2 = document.querySelectorAll('.list2');
let gallary2 = document.querySelectorAll('.gallary2');

for(let i = 0; i < list2.length; i++){
  list2[i].addEventListener('click', function(){
    for(let j = 0; j < list2.length; j++){
      list2[j].classList.remove('active');
    }
    this.classList.add('active');

    let dataFilter = this.getAttribute('data-filter');
    
    for(let k = 0; k < gallary2.length; k++){
      gallary2[k].classList.add('hide');
      if(gallary2[k].getAttribute('data-item') == dataFilter){
        gallary2[k].classList.remove('hide');
      }
    }
  })
}

//day3
let list3 = document.querySelectorAll('.list3');
let gallary3 = document.querySelectorAll('.gallary3');

for(let i = 0; i < list3.length; i++){
  list3[i].addEventListener('click', function(){
    for(let j = 0; j < list3.length; j++){
      list3[j].classList.remove('active');
    }
    this.classList.add('active');

    let dataFilter = this.getAttribute('data-filter');
    
    for(let k = 0; k < gallary3.length; k++){
      gallary3[k].classList.add('hide');
      if(gallary3[k].getAttribute('data-item') == dataFilter){
        gallary3[k].classList.remove('hide');
      }
    }
  })
}
