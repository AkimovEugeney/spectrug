
const swiper = new Swiper('.swiper', {

	loop: true,
  
  pagination: {
    el: '.swiper-pagination',
		type:'bullets',
		clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});


function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
     change.target.classList.add('anim');
    }
  });
}

let options = {
  threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.cosultation__wrapp');
console.log(elements)


for (let elm of elements) {
  observer.observe(elm);
}

// inputmask
const inputs = document.querySelectorAll('input[type="tel"]');
const im = new Inputmask('+7 (999) 999-99-99');
im.mask(inputs)