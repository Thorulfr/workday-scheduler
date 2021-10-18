// Alias Luxon for easier use
var DateTime = luxon.DateTime;

// Variable declarations
const today = DateTime.now().toLocaleString(DateTime.DATE_HUGE);
// const currentHour = DateTime.now().get('hour');
const currentHour = 12;

// Display today's date
function displayTodaysDate() {
    $('#currentDay').text(today);
}

// Color-code hour blocks
function colorCode() {
    // Loop through blocks
    for (let i = 9; i < 17; i++) {
        var currentRowEl = $('#' + i);
        if (i < currentHour) {
            currentRowEl.addClass('past'); 
        } else if (i == currentHour) {
            currentRowEl.addClass('present'); 
        } else {
            currentRowEl.addClass('future'); 
        }
    }
}

// Load task items on page load
function loadTasks() {
    for (let i = 9; i < 17; i++) {
        $('#' + i).find('span').text(localStorage.getItem(i));
    }
}

// BEGIN Listeners
// Trigger input field when user clicks on hour block
$('.task-text').on('click', 'span', function() {
    var text = $(this).text().trim();
    var textInput = $("<textarea>").addClass("form-control").val(text);
    $(this).replaceWith(textInput);
    textInput.trigger("focus");
});

// Store text in input field when user clicks out
$('.task-text').on('blur', 'textarea', function() {
    var text = $(this).val().trim();
    var newSpan = $('<span>').text(text);
    $(this).replaceWith(newSpan);
});

// Save text in hour block when user clicks corresponding save button
$('.saveBtn').on('click', function() {
    var key = $(this).prev().attr('id');
    var value = $(this).prev().text();
    localStorage.setItem(key, value);
});
// END Listeners

loadTasks();
displayTodaysDate();
colorCode();