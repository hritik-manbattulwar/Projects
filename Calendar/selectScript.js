const currentDate = document.querySelector(".current-date");
let daysTag = document.querySelector(".days");
let prevNextIcon = document.querySelectorAll(".icons i");

let date = new Date();
let currMonth = date.getMonth();
let currentYear = date.getFullYear();

let months = [
  "January",
  "Febuary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// Logic For Rendering Calendar
function renderCalendar() {
  let firstDayOfMonth = new Date(currentYear, currMonth, 1).getDay(); //getting first day of month
  let lastDateOfLastMonth = new Date(currentYear, currMonth, 0).getDate(); //getting last date of month
  let lastDateOfMonth = new Date(currentYear, currMonth + 1, 0).getDate(); //getting last date of last month
  let lastDayOfMonth = new Date(
    currentYear,
    currMonth,
    lastDateOfMonth
  ).getDay(); //getting last day of month
  let liTag = "";
  for (let i = firstDayOfMonth; i > 0; i--) {
    liTag += `<li class="inactive">${lastDateOfLastMonth - i + 1}</li>`;
  }

  for (let i = 1; i <= lastDateOfMonth; i++) {
    let isToday =
      i === date.getDate() &&
      currMonth === new Date().getMonth() &&
      currentYear === new Date().getFullYear()
        ? "active"
        : "";
    liTag += `<li id="day-${i}" class="${isToday}">${i}</li>`;
  }

  for (let i = lastDayOfMonth; i < 6; i++) {
    liTag += `<li class="inactive">${i - lastDayOfMonth + 1}</li>`;
  }

  currentDate.innerText = `${months[currMonth]} ${currentYear}`;
  daysTag.innerHTML = liTag;
}

renderCalendar();

// Logic For Prev Next Icons
prevNextIcon.forEach((icon) =>
  icon.addEventListener("click", () => {
    currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;
    if (currMonth < 0 || currMonth > 11) {
      date = new Date(currentYear, currMonth);
      currMonth = date.getMonth();
      currentYear = date.getFullYear();
    }
    renderCalendar();
  })
);

let choosingType = "start"; // start or end
let startDate;
let endDate;
let li = document.querySelectorAll(".days li");
li.forEach((day) => {
  day.addEventListener("click", () => {
    updateDate(day.textContent);
    console.log(
      "start: " +
        startDate +
        " end: " +
        endDate +
        " chosenType: " +
        choosingType
    );
    chosenDate(startDate, endDate, li);
  });
});

function updateDate(chosenDay) {
  if (choosingType === "start" && chosenDay > endDate) {
    endDate = chosenDay;
    choosingType = "start";
    return;
  }
  if (choosingType === "end" && chosenDay > endDate) {
    endDate = chosenDay;
    choosingType = "start";
    return;
  }
  if (choosingType === "start" && chosenDay < startDate) {
    startDate = chosenDay;
    choosingType = "end";
    return;
  }

  if (choosingType === "start") {
    startDate = chosenDay;
    choosingType = "end";
    return;
  }

  if (choosingType === "end") {
    endDate = chosenDay;
    choosingType = "start"; //for the case choose the end date before start date
    return;
  }
}

function chosenDate(startDate, endDate, li) {
  li.forEach((day) => {
    day.classList.remove("chosen-date");
    if (
      day.textContent === startDate &&
      day.id.includes(`day-${day.textContent}`)
    ) {
      day.classList.add("chosen-date");
    }
    if (
      day.textContent === endDate &&
      day.id.includes(`day-${day.textContent}`)
    ) {
      day.classList.add("chosen-date");
    }
    if (
      parseInt(day.textContent) > parseInt(startDate) &&
      parseInt(day.textContent) < parseInt(endDate) &&
      day.id.includes(`day-${day.textContent}`)
    ) {
      day.classList.add("chosen-date");
    }
  });
}
