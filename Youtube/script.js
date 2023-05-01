let formEle = document.getElementById("form");
let cards = document.getElementById("cards");
const loader = document.getElementById("loader");

// Assuming you have an array of items to paginate
let items = []; // Replace with your own array of items
const itemsPerPage = 8; // Number of items per page
let currentPage = 1; // Current page

//when browser is loading for first time
// https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=7ghhRHRP6t4&part=id%2Csnippet&type=video&maxResults=50
window.onload = (e) => {
  showLoader();
  e.preventDefault();
  items = [];
  fetch(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&regionCode=IN&relevanceLanguage=en&safeSearch=strict&type=video&videoEmbeddable=true&key=AIzaSyAjkXKJ_YSNml7N9-ImI5AdkqsXKZWhFUI`
  )
    .then((response) => response.json())
    .then((response) => {
      items = response.items;
      const totalPages = Math.ceil(items.length / itemsPerPage); // Total number of pages
      renderItems(items);
      showPagination(totalPages);
      showActive(totalPages);
      hideLoader();
    })
    .catch((err) => console.log(err));
};

// Function to render items on the current page
const renderItems = (items) => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsToRender = items.slice(startIndex, endIndex);
  //logic to render itemsToRender on the UI
  cards.querySelectorAll(".col-md-3").forEach((card) => card.remove());
  for (let i = 0; i < itemsToRender.length; i++) {
    const col = document.createElement("div");
    col.className = "col-md-3 mt-3";
    col.innerHTML = `
    <div className="card h-100" style="height:100%">
      <div className="card-header">
      <img src=${itemsToRender[i].snippet.thumbnails.medium.url} alt=${itemsToRender[i].snippet.title} class="card-img-top" />
      </div>
      <div className="card-body">
      <h5>${itemsToRender[i].snippet.title}</h5>
      <p>${itemsToRender[i].snippet.channelTitle}</p>
      </div>
    </div>`;
    cards.appendChild(col);
  }
};

//when we search and submit
// https://youtube-v31.p.rapidapi.com/search?q=${query}&part=snippet%2Cid&regionCode=IN&maxResults=50&order=date
formEle.onsubmit = (e) => {
  showLoader();
  e.preventDefault();
  currentPage = 1;
  const query = new FormData(formEle).get("search");
  fetch(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=100&q=food&regionCode=IN&relevanceLanguage=en&safeSearch=strict&type=video&videoEmbeddable=true&key=AIzaSyAjkXKJ_YSNml7N9-ImI5AdkqsXKZWhFUI`
  )
    .then((response) => response.json())
    .then((response) => {
      items = response.items;
      const totalPages = Math.ceil(items.length / itemsPerPage); // Total number of pages
      renderItems(items);
      showActive(totalPages);
      // showPagination(totalPages);
      hideLoader();
    })
    .catch((err) => console.log(err));
};

//this is for showing pagination
function showPagination(totalPages) {
  const pagination = document.getElementById("pagination");
  //create prev
  const previousElement = document.createElement("li");
  previousElement.className = "page-item page-link";
  previousElement.id = "prev";
  previousElement.style.display = "none";
  previousElement.innerHTML = `&laquo;`;
  pagination.appendChild(previousElement);
  //1-totalPages
  for (var i = 0; i < totalPages; i++) {
    const page = document.createElement("li");
    page.id = `page-${i + 1}`;
    page.classList = `page-item page-link`;
    page.innerHTML = `${i + 1}`;
    pagination.appendChild(page);
  }
  //create next
  const nextElement = document.createElement("li");
  nextElement.id = "next";
  nextElement.style.display = "none";
  nextElement.className = "page-item page-link";
  nextElement.innerHTML = `&raquo;`;
  pagination.appendChild(nextElement);
  reRender();
}

//show active
function showActive(totalPages) {
  const days = document.querySelectorAll(".pagination li");
  days.forEach((day) => {
    if (day.classList.contains("bg-primary")) {
      day.classList.remove("bg-primary");
      day.classList.remove("text-white");
    }
    if (day.id.endsWith(currentPage)) {
      day.classList.add("bg-primary");
      day.classList.add("text-white");
    }
  });
  change(totalPages);
}

function change(totalPages) {
  if (currentPage > 1) {
    document.getElementById("prev").style.display = "block";
  }

  if (currentPage < totalPages) {
    document.getElementById("next").style.display = "block";
  }
}

function reRender() {
  const pages = document.querySelectorAll(".page-item");
  pages.forEach((page) => {
    page.addEventListener("click", () => {
      if (page.id == "prev") {
        goToPrevPage(items);
      } else if (page.id == "next") {
        goToNextPage(items);
      } else {
        currentPage =
          parseInt(page.id.charAt(5)) > 0 ? parseInt(page.id.charAt(5)) : 1;
        renderItems(items);
      }
      const totalPages = Math.ceil(items.length / itemsPerPage); // Total number of pages
      showActive(totalPages);
    });
  });
}
// Function to go to next page
const goToNextPage = (items) => {
  const totalPages = Math.ceil(items.length / itemsPerPage); // Total number of pages
  
  if (currentPage < totalPages) {
    currentPage++;
    renderItems(items);
  }
};

// Function to go to previous page
const goToPrevPage = (items) => {
  const totalPages = Math.ceil(items.length / itemsPerPage); // Total number of pages
  if (currentPage > 1) {
    currentPage--;
    renderItems(items);
  }
};

const hideLoader = () => {
  loader.classList.add("hide");
};
const showLoader = () => {
  loader.classList.remove("hide");
};
