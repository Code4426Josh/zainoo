/* ---------------------------- getting elements ---------------------------- */
const hamburger = document.querySelector('.hamburger');
const listCon = document.querySelector('.lists');
const navLinks = document.querySelectorAll('#click');

/* --------------------------- hamburger function --------------------------- */
hamburger.addEventListener('click', () => { 
  hamburger.classList.toggle('active')
  listCon.classList.toggle('show-list');
});
/* --------------------------- remove class when click link --------------------------- */
navLinks.forEach(function (clickers) {
  clickers.addEventListener('click', () => {
    listCon.classList.remove('show-list');
    hamburger.classList.remove('active')
  });
})

