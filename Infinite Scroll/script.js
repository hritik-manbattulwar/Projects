const search = document.getElementById("search");
const grid = document.getElementById("grid");
let formEle = document.getElementById("form");
const loader = document.getElementById("loader");

const accessId = "Jgmo_FCmM85JWD-PoMmBlZosud13-gA5zlkhdYpTqyw";
let images = [];
let page = 1;
let limit = 20;
let query = "";

function getPhotos() {
  showLoader();
let apiUrl=query ?`https://api.unsplash.com/search/photos?query=${query}`: "https://api.unsplash.com/photos?";
  /*Below Comments for the above ternary condtion using if statement
  let apiUrl = "https://api.unsplash.com/photos?";
  if (query) apiUrl = `https://api.unsplash.com/search/photos?query=${query}`; 
  */
  apiUrl += `&page=${page}`;
  apiUrl += `&client_id=${accessId}`;
  apiUrl += `&per_page=${limit}`;

  axios
    .get(apiUrl)
    .then((response) => {
      const imagesFromApi = response.data.results ?? response.data;

      // if page is 1, then we need a whole new array of images
      if (page === 1) {
        images = imagesFromApi;
        loadPhotos(imagesFromApi);
        return;
      }
      // if page > 1, then we are adding for our infinite scroll
      images = imagesFromApi;
      loadPhotos(images);
      hideLoader();
    })
    .catch((error) => {
      console.error(error);
    });
}

function loadPhotos(images) {
  if (query && page == 1) {
    grid.querySelectorAll(".image").forEach((image) => image.remove());
  }
  images.forEach((image) => {
    let img = document.createElement("a");
    img.className = "image";
    img.href = image.links.html;
    img.target = "_blank";
    img.rel = "noopener noreferrer";
    img.innerHTML = `<img src=${image.urls.regular} alt=${image.alt_description}>`;
    grid.appendChild(img);
  });
}

window.addEventListener(
  "scroll",
  () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight - 5) {
      page++;
      getPhotos();
    }
  },
  {
    passive: true,
  }
);

formEle.onsubmit = (e) => {
  e.preventDefault();
  page = 1;
  query = new FormData(formEle).get("search");
  getPhotos();
};

const hideLoader = () => {
  loader.classList.add("hide");
};
const showLoader = () => {
  loader.classList.remove("hide");
};
getPhotos();
