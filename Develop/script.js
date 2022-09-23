var currentDate = moment().format("MMM Do, YYYY");
var hour = moment().format('h'); 
var time = document.querySelector('time')

// function to call date from Moment
function displayDate()  {
    var currentDate = moment();$("#currentDate").text(currentDate.format("MMM Do, YYYY"));
    var displayMoment = document.getElementById('output')

}

// console.log(currentDate);
displayDate();

// console.log(time.innerHTML);

function compareHour()  {
    var hour = moment();$("#time").text;
    var time = $(this).attr('time').substr(5);

    if (time.innerHTML < hour)    {
        $(this).addClass(".past");
    }   else if (time.innerHTML === hour)  {
    $(this).addClass(".present");
    }   else  {
        $(this).addClass(".future");
    }
}

compareHour();

console.log(time);
console.log(hour);