const baseURL = "https://dummyjson.com";

/* ---------------------------- getting elements ---------------------------- */
const hamburger = document.querySelector(".hamburger");
const listCon = document.querySelector(".lists");
const navLinks = document.querySelectorAll("#click");
const like = document.querySelector(".liked");

console.log("like: ", like);

let sectionDiv = document.querySelector("#product");
console.log("sectionDiv: ", sectionDiv);

/* --------------------------- hamburger function --------------------------- */
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  listCon.classList.toggle("show-list");
});
like.addEventListener("click", function () {
  like.classList.toggle("color");
});
/* --------------------------- remove class when click link --------------------------- */
navLinks.forEach(function (clickers) {
  clickers.addEventListener("click", () => {
    listCon.classList.remove("show-list");
    hamburger.classList.remove("active");
  });
});

// Products APIs

// fetch products by categories
const fetchProducts = async (category) => {
  let results = [];
  let categories = [];

  switch (category) {
    case "shoes":
      categories = ["mens-shoes", "womens-shoes"];
      break;
    case "watches":
      categories = ["mens-watches", "womens-watches"];
      break;
    case "shoes":
      categories = ["womens-bags", "womens-jewellery", "sunglasses"];
      break;

    default:
      break;
  }

  categories.forEach(async (cat) => {
    const res = await fetch(`${baseURL}/products/category/${cat}`);
    const json = await res.json();

    // Push each product object to the results array
    const products = json.products.flatMap((p) => p);
    results.push(...products);
  });
  console.log(results);

  // add to div
  let productsDiv = "";

  // productEl.classList.add('product');
  results.forEach((product) => {
    productsDiv += `
            <div class="h-[15%] w-[20%] bg-[#f1f5e6] p-[10px] rounded-lg">
              <div class="relative">
                  <img
                    class="rounded-md"
                    src="/img/pexels-hamza-nouasria-12628402.jpg"
                    alt=""
                  />
                  <span class="absolute top-1 right-2"
                    ><ion-icon
                      class="text-[20px] text-white cursor-pointer liked"
                      name="heart-outline"
                    ></ion-icon
                  ></span>
                </div>
                <div>
                  <h3 class="text-[15px] font-bold capitalize">
                    ${product.title}
                  </h3>
                  <span>
                    <ion-icon class="text-[#FFD700]" name="star"></ion-icon>
                    <ion-icon class="text-[#FFD700]" name="star"></ion-icon>
                    <ion-icon class="text-[#FFD700]" name="star"></ion-icon>
                    <ion-icon
                      class="text-[#FFD700]"
                      name="star-half"
                    ></ion-icon>
                  </span>
                  <p>${product.price}</p>
                  <section class="flex justify-between items-center">
                    <div class="flex gap-3 items-center justify-center">
                      <span
                        class="cursor-pointer bg-white w-[30px] h-[30px] p-[.5em] rounded-full flex justify-center items-center"
                        ><ion-icon name="add-outline"></ion-icon
                      ></span>
                      <p>0</p>
                      <span
                        class="cursor-pointer bg-white w-[30px] h-[30px] p-[.5em] rounded-full flex justify-center items-center"
                        ><ion-icon name="remove-outline"></ion-icon>
                      </span>
                    </div>
                    <div>
                      <span
                        class="bg-white px-[1.5em] py-[.5em] flex items-center justify-center rounded-2xl hover:bg-[#ffbf00] hover:text-gray-800 duration-200 ease-in cursor-pointer to-cart"
                        ><ion-icon name="bag-add-outline"></ion-icon
                      ></span>
                    </div>
                  </section>
                </div>
              </div>
            `;

    // Insert into HTML
    sectionDiv.innerHTML = productsDiv;
  });


  console.log(sectionDiv)
};

// fetchProducts("shoes");

// fetch a single product
const fetchSingle = async (id) => {
  const res = await fetch(`${baseURL} /products/${id} `);
  const json = await res.json();
  console.log(json);
};

// fetchSingle(50)

// handle clicks function

const handleClickCategories = (e) => {
  e.preventDefault();
  showProducts();
};

const showProducts = async () => {
  await fetchProducts("shoes");
};

showProducts();
