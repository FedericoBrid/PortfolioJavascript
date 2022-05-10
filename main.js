// Swiper Slide Projects
let swiper = new Swiper(".projects-container", {
    cssMode: true,
    loop:false,
    slidesPerView: 1,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});

// Email JS
const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_hti28rn';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});
// Scroll Up button
function scrollUp(){
  const scrollUp = document.getElementById('scroll-up');
  if(this.scrollY >=560) scrollUp.classList.add('scroll-show');
    else scrollUp.classList.remove('scroll-show');
}
window.addEventListener('scroll', scrollUp )
