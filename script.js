/* ---------------------------- getting elements ---------------------------- */
const hamburger = document.querySelector('.hamburger');
// console.log('hamburger: ', hamburger);
const listCon = document.querySelector('.lists');
console.log('listCon: ', listCon);

/* --------------------------- hamburger function --------------------------- */
hamburger.addEventListener('click', () => { 
  listCon.classList.toggle('show-list');
});