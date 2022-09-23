var currentDate = moment().format("MMM Do, YYYY");
var hour = moment().format('h'); 
var time = document.querySelector('time');
var timeText = "";

// function to call date from Moment
function displayDate()  {
    var currentDate = moment();$("#currentDate").text(currentDate.format("MMM Do, YYYY"));
    var displayMoment = document.getElementById('output')

}

// console.log(currentDate);
displayDate();

var scheduleArray = [];
$('time').each(function ()  {
    var id = $(this).attr('id');
    scheduleArray.push(id);
});
// console.log(scheduleArray);

function compareHour()  {
    var hour = moment();$("#time").text
}
// }

// $(".form-control").each(function () {
//     var timeTest = parseInt($(this).attr("id"));
//     hour = parseInt(hour);
    // console.log(timeTest);
    // console.log(hour);
    //  console.log(this);
    // if (hour > timeTest) {
    //     $(this).addClass("past");
    // } else if (hour < timeTest) {
    //     $(this).addClass("future");
    // } else {
    //     $(this).addClass("present");
    // }
// })


// console.log(time);
// console.log(hour)