/* ---------------------------- getting elements ---------------------------- */
const hamburger = document.querySelector('.hamburger');
const listCon = document.querySelector('.lists');
const navLinks = document.querySelectorAll('#click');
const like = document.querySelector('.liked');
console.log('like: ', like);


/* --------------------------- hamburger function --------------------------- */
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active')
  listCon.classList.toggle('show-list');
});
like.addEventListener('click', function () {
  like.classList.toggle('color')
});
/* --------------------------- remove class when click link --------------------------- */
navLinks.forEach(function (clickers) {
  clickers.addEventListener('click', () => {
    listCon.classList.remove('show-list');
    hamburger.classList.remove('active')
  });
})

const productsDiv = document.querySelector('#products');

const showProducts = async () => {
  productsDiv.innerHTML = '';
  const products = await fetchProducts();

  products.forEach(product => {
    const productEl = document.createElement('div');
    productEl.classList.add('product');

    productEl.innerHTML = `
    <h4>${product.title}</h4>
    <p>${product.price}</p>
  `;

    productsDiv.appendChild(productEl);
  })

}


// Products APIs

// fetch products by categories
const fetchProducts = async (category) => {
  const res = await fetch(`https://fakestoreapi.com/products/${category}/jewelery?limit=12`);
  const json = await res.json();
  return json;
}

// fetch a single product
const fetchSingle = async (id) => {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const json = await res.json();
  return json;
}

// handle clicks function

const handleClickCategories = (e) => {
  e.preventDefault()


}