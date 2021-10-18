// Alias Luxon for easier use
var DateTime = luxon.DateTime;

// Get HTML elements so we can manipulate them
// var todayEl = $('#currentDay');


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

// Create 

// BEGIN Listeners
// Listen for clicks inside hour spans, then trigger input field
$('.task-text').on ('click', 'span', function() {
    var text = $(this).text().trim();
    var textInput = $("<textarea>").addClass("form-control").val(text);
    $(this).replaceWith(textInput);
    textInput.trigger("focus");
});
// Listen for when user clicks out of editing hour span, then store text
$('.task-text').on('blur', 'textarea', function() {
    var text = $(this).val().trim();
    var newSpan = $('<span>').text(text);
    $(this).replaceWith(newSpan);
    
});
// END Listeners

displayTodaysDate();
colorCode();