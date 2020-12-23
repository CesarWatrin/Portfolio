const burger = document.querySelector('.burger');
const nav = document.querySelector('nav');
const a = document.getElementsByTagName('a');

burger.addEventListener('click', () => {
   burger.classList.toggle('active');
   nav.classList.toggle('active');
});

for (var i = 0; i < a.length; i++) {
   if (a[i].className === 'toScroll nav hoverable') {
      a[i].addEventListener('click', () => {
         burger.classList.toggle('active');
         nav.classList.toggle('active');
      });
   }
}

//scroll animation
$("a.toScroll").on('click',function(e) {
   var scrollSpeed = 1000;
   var url = e.target.href;
   var hash = url.substring(url.indexOf("#")+1);
   $('html, body').animate({
      scrollTop: $('#'+hash).offset().top
   }, scrollSpeed);
   return false;
});

// You can also pass an optional settings object
// below listed default settings
AOS.init({
   // Global settings:
   disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
   startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
   initClassName: 'aos-init', // class applied after initialization
   animatedClassName: 'aos-animate', // class applied on animation
   useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
   disableMutationObserver: false, // disables automatic mutations' detections (advanced)
   debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
   throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

   // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
   offset: 120, // offset (in px) from the original trigger point
   delay: 300, // values from 0 to 3000, with step 50ms
   duration: 600, // values from 0 to 3000, with step 50ms
   easing: 'ease', // default easing for AOS animations
   once: true, // whether animation should happen only once - while scrolling down
   mirror: false, // whether elements should animate out while scrolling past them
   anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});

const progressBar = document.querySelector('.progress_bar');
progressBar.style.display = "none";

window.addEventListener('scroll', handleScroll);

function handleScroll() {
   progressBar.style.display = "block";
   const height = document.body.scrollHeight; // taille du site
   const windowHeight = window.innerHeight; // taille de l'affichage
   const position = window.pageYOffset; // la position en pixels du document

   const trackLength = height - windowHeight; // taille du site - la partie affichée sur l'écran en ce moment (exemple : 1000px)

   const percentage = Math.floor((position / trackLength) * 100); // pourcentage du site déjà parcouru

   progressBar.style.right = 100 - percentage + '%';
}

const bigBall = document.querySelector('.cursor__ball__big');
const smallBall = document.querySelector('.cursor__ball__small');
const hoverables = document.querySelectorAll('.hoverable');
const title_pointer = document.querySelector('.title_pointer');
title_pointer.style.display = 'none';

// Listeners
document.body.addEventListener('mousemove', onMouseMove);
for (let i = 0; i < hoverables.length; i++) {
   hoverables[i].addEventListener('mouseenter', onMouseHover);
   hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
}

// Move the cursor
function onMouseMove(e) {
   TweenMax.to(bigBall, .4, {
      x: e.pageX - 4,
      y: e.pageY - 15 - window.pageYOffset
   })
   TweenMax.to(smallBall, .1, {
      x: e.pageX - 5,
      y: e.pageY - 7 - window.pageYOffset
   })
}

// Hover an element
function onMouseHover() {
   TweenMax.to(bigBall, .3, {
      scale: 4
   })
   title_pointer.style.display = '';
}
function onMouseHoverOut() {
   TweenMax.to(bigBall, .3, {
      scale: 1
   })
   title_pointer.style.display = 'none';
}

const toast = document.querySelector('#notification');
toast.style.display = 'none';



$(".form").submit(function(e) {
   e.preventDefault(); //empêcher une action par défaut
   var form_url = $(this).attr("action"); //récupérer l'URL du formulaire
   var form_method = $(this).attr("method"); //récupérer la méthode GET/POST du formulaire
   var form_data = $(this).serialize(); //Encoder les éléments du formulaire pour la soumission

   $.ajax({
      url : form_url,
      type: form_method,
      data : form_data
   }).done(function(response){
      setTimeout(() => {
         toast.style.display = '';
      }, 1000);
      setTimeout(() => {
         toast.style.display = 'none';
      }, 10000);
   });
});
