const baseURL = 'https://dummyjson.com'

/* ---------------------------- getting elements ---------------------------- */
const hamburger = document.querySelector('.hamburger');
const listCon = document.querySelector('.lists');
const navLinks = document.querySelectorAll('#click');
const like = document.querySelector('.liked');

const productsDiv = document.querySelector('#product');
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



// Products APIs

// fetch products by categories
const fetchProducts = async (category) => {
  let results = [];
  let categories = [];

  switch (category) {
    case "shoes":
      categories = ["mens-shoes", "womens-shoes"]
      break;
    case "watches":
      categories = ["mens-watches", "womens-watches"]
      break;
    case "shoes":
      categories = ["womens-bags", "womens-jewellery", "sunglasses"]
      break;

    default:
      break;
  }

  categories.forEach(async cat => {
    const res = await fetch(`${baseURL}/products/category/${cat}`);
    const json = await res.json();

    // Push each product object to the results array
    const products = json.products.flatMap(p => p);

    results.push(...products);
    console.log(results)

  });
  return results;
}

// fetchProducts("shoes");

// fetch a single product
const fetchSingle = async (id) => {
  const res = await fetch(`${baseURL}/products/${id}`);
  const json = await res.json();

  console.log(json)
  return json;
}

// fetchSingle(50)

// handle clicks function

const handleClickCategories = (e) => {
  e.preventDefault()
  showProducts()
}

const showProducts = async () => {
  productsDiv.innerHTML = '';
  const products = await fetchProducts("shoes");
  console.log('products: ', products);

  // products.forEach(product => {
  const productEl = document.createElement('div');
  productEl.classList.add('relative');

  productEl.innerHTML = `
    <h4>${products[0].title}</h4>
    <p>${products[0].price}</p>
  `;

  productsDiv.appendChild(productEl);
  // })

}

showProducts();