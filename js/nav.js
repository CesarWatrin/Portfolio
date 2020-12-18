const burger = document.querySelector('.burger');
const nav = document.querySelector('nav');
const a = document.getElementsByTagName('a');

burger.addEventListener('click', () => {
   burger.classList.toggle('active');
   nav.classList.toggle('active');
});

for (var i = 0; i < a.length; i++) {
   a[i].addEventListener('click', () => {
      burger.classList.toggle('active');
      nav.classList.toggle('active');
   });
}
