// Alias Luxon for easier use
var DateTime = luxon.DateTime;

// Get HTML elements so we can manipulate them
var todayEl = document.querySelector("#currentDay");

// Variable declarations
const today = DateTime.now().toLocaleString(DateTime.DATE_HUGE);

// Display today's date
function displayTodaysDate() {
    todayEl.textContent = today;
}

displayTodaysDate();