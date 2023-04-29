const currentDate = $(".current-date");
let daysTag = $(".days");
let prevNextIcon = $(".icons i");

// $(document).ready(function () {
//   console.log("Hello");
// });
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

// CSS Variables
let chosen_date = "chosen-date";
let start = "start";
let end = "end";

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
  currentDate.text(`${months[currMonth]} ${currentYear}`);
  daysTag.html(liTag);
}

renderCalendar();

// Logic For Prev Next Icons
prevNextIcon.each(function (icon) {
  $(this).click(function () {
    currMonth = $(this).attr("id") === "prev" ? currMonth - 1 : currMonth + 1;
    if (currMonth < 0 || currMonth > 11) {
      date = new Date(currentYear, currMonth);
      currMonth = date.getMonth();
      currentYear = date.getFullYear();
    }
    renderCalendar();
  });
});

//updating the start day and end day
let choosingType = start; // start or end
let startDate;
let endDate;
let li = $(".days li");
li.each(function (day) {
  $(this).click(function () {
    console.log($(this).text());
    updateDate($(this).text());
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
  if (choosingType === start) {
    if (chosenDay > endDate) {
      endDate = chosenDay;
      choosingType = start;
      return;
    }
    startDate = chosenDay;
    choosingType = end;
    return;
  }
  if (choosingType === end) {
    endDate = chosenDay;
    choosingType = start; //for the case choose the end date before start date
  }
}

function chosenDate(startDate, endDate, li) {
  li.each(function (day) {
    $(this).removeClass(chosen_date);
    // console.log($(this).text());
    if (
      ($(this).text() === startDate || $(this).text() === endDate) &&
      $(this).is("#day-" + $(this).text())
    ) {
      $(this).addClass(chosen_date);
    }
    if (
      parseInt($(this).text()) > parseInt(startDate) &&
      parseInt($(this).text()) < parseInt(endDate) &&
      $(this).is("#day-" + $(this).text())
    ) {
      $(this).addClass(chosen_date);
    }
  });
}
