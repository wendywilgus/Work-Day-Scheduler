var now = moment(Date.now);
var hour = moment(Date.now()).startOf('day');
console.log("startOfDay", hour.format('h a'));
console.log(now);

var todaysDate = moment().format("MMMM Do, YYYY");
console.log("todaysDate", todaysDate);

var time = document.querySelector("time");
var textarea = document.querySelector("textarea");
var button = document.querySelector("button");

const dateElement = document.getElementById("currentDate");
dateElement.innerHTML = `Today is ${todaysDate}`;

var scheduleArray = [];
$('textarea').each(function ()  {
    var id = $(this).attr('id');
    scheduleArray.push(id);
});
console.log(scheduleArray);




function init() {
    window.localStorage.getElementById("textarea");
    var time = moment($(e).attr("datetime"));
if(now.diff(time, 'days') <= 1) {
    // getting the relative output
}
console.log(time);
var ago = now.from(time)
console.log(ago);
}



function compareHour()  {
    
    // for ( i = 0; i < scheduleArray.length; i++)  {
    //         scheduleArray[i].removeClass("past present future");
    
    if (hour > scheduleArray[i].data("hour")) {
        scheduleArray[i].setAttribute(".past");
    }
}


//function to save user Events when page is refreshed
function saveEvents(event)  {
    event.preventDefault();
    localStorage.setItem(textarea.textContent);
}

button.addEventListener("click", saveEvents);