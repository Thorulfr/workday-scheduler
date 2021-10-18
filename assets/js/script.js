// Alias Luxon for easier use
var DateTime = luxon.DateTime;

// Get HTML elements so we can manipulate them
var todayEl = document.querySelector('#currentDay');

// Variable declarations
const today = DateTime.now().toLocaleString(DateTime.DATE_HUGE);
const currentHour = DateTime.now().get('hour');

// Display today's date
function displayTodaysDate() {
    todayEl.textContent = today;
}

// Color-code hour blocks
function colorCode() {
    // Loop through blocks
    for (let i = 9; i < 17; i++) {
        var currentRowEl = document.getElementById(i);
        if (i < currentHour) {
            currentRowEl.className += ' past'; 
        } else if (i == currentHour) {
            currentRowEl.className += ' present'; 
        } else {
            currentRowEl.className += ' future'; 
        }
    }
}

displayTodaysDate();
colorCode();