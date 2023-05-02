const search = document.getElementById("search");
const grid = document.getElementById("grid");
const formEle = document.getElementById("form");
const loader = document.getElementById("loader");

const accessId = "Jgmo_FCmM85JWD-PoMmBlZosud13-gA5zlkhdYpTqyw";
let images = [];
let page = 1;
let limit = 7;
let query = "";
let start = 0;
let end = 10;

function getPhotos() {
  showLoader();
  let apiUrl = query ? `https://api.unsplash.com/search/photos?query=${query}` : "https://api.unsplash.com/photos?";
  apiUrl += `&page=${page}`;
  apiUrl += `&client_id=${accessId}`;
  apiUrl += `&per_page=${limit}`;

  axios
    .get(apiUrl)
    .then((response) => {
      const imagesFromApi = response.data.results ?? response.data;
      images = imagesFromApi;
      loadPhotos(images);
      showPagination(start, end);
      hideLoader();
    })
    .catch((error) => {
      console.error(error);
    });
}

formEle.onsubmit = (e) => {
  e.preventDefault();
  page = 1;
  query = new FormData(formEle).get("search");
  getPhotos();
};

function loadPhotos(images) {
  grid.querySelectorAll(".image").forEach((image) => image.remove());
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

//this is for showing pagination
const pagination = document.getElementById("pagination");
function showPagination(start, end) {
  pagination.querySelectorAll("a").forEach((ele) => ele.remove());
  //create prev
  if (start >= 10) {
    const previousElement = document.createElement("a");
    previousElement.id = "prev";
    //   previousElement.style.display = "none";
    previousElement.onclick = goToPrev;
    previousElement.innerHTML = `&laquo;`;
    pagination.appendChild(previousElement);
  }
  //1-totalPages
  for (var i = start; i < end; i++) {
    const page = document.createElement("a");
    page.id = `page-${i + 1}`;
    page.classList.add("page");
    page.innerHTML = `${i + 1}`;
    page.onclick = changePage.bind(this, i + 1);
    pagination.appendChild(page);
  }
  //create next
  const nextElement = document.createElement("a");
  nextElement.id = "next";
  //   nextElement.style.display = "none";
  nextElement.innerHTML = `&raquo;`;
  nextElement.onclick = goToNext;
  pagination.appendChild(nextElement);

  showActive();
}

//show active
function showActive() {
  const days = document.querySelectorAll(".pagination a");
  days.forEach((day) => {
    if (day.classList.contains("active")) {
      day.classList.remove("active");
    }
    if (day.id.endsWith(page)) {
      day.classList.add("active");
    }
  });
}

function changePage(nextPage) {
  const days = document.querySelectorAll(".pagination a");
  days.forEach((day) => {
    if (day.id.endsWith(nextPage)) {
      page = nextPage;
      getPhotos();
      showActive();
    }
  });
}

function goToNext() {
  start = start + 10;
  end = end + 10;
  page = start + 1;
  getPhotos();
}

function goToPrev() {
  start = start - 10;
  end = end - 10;
  page = start + 1;
  getPhotos();
}

const hideLoader = () => {
  loader.classList.add("hide");
};
const showLoader = () => {
  loader.classList.remove("hide");
};

getPhotos();
