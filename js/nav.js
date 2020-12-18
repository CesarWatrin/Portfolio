const burger = document.querySelector('.burger');
const nav = document.querySelector('nav');
const a = document.getElementsByTagName('a');

burger.addEventListener('click', () => {
   burger.classList.toggle('active');
   nav.classList.toggle('active');
});

for (var i = 0; i < a.length; i++) {
   if (a[i].className === 'toScroll nav') {
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
