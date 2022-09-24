
var currentTime = moment(Date.now()); //tells date
var startOfDay = moment(Date.now()).startOf('day'); // start at 12am
console.log("startOfDay", startOfDay.format('h a'));

var todaysDate = moment().format("MMMM Do, YYYY");
console.log("todaysDate", todaysDate);

const dateElement = document.getElementById("currentDate");
dateElement.innerHTML = `Today is ${todaysDate}`;
var note = " ";

//Array to build schedule components.  Uses moment to display the hours. 
var scheduleArray = [];
for(var i = 0; i <24; i++) {
  scheduleArray.push({
    index: i,
    note: "",
    time: moment(Date.now()).startOf('day').add(i, 'hours'),
    timeDisplay: moment(Date.now()).startOf('day').add(i, 'hours').format('h a')
  })
}

const containerElement = document.getElementById("container");
scheduleArray.map((item) => {
  const newDivRow = document.createElement("div");
  newDivRow.className = "row d-flex flex-row";
  newDivRow.id = "time-block";

  const newDivTime = document.createElement("time");
  newDivTime.className = "col-2 border";
  newDivTime.id = `${item.index}`;
  newDivTime.innerHTML = item.time.format('h a');
  newDivRow.appendChild(newDivTime);

  const newDivNote = document.createElement("TEXTAREA");
  if(currentTime < item.time) {
    newDivNote.className = `col-8 border future`;
  } else if(currentTime > item.time.add(1, "hours")) {
    newDivNote.className = `col-8 border past`;
  } else {
    newDivNote.className = `col-8 border present`;
  }

  newDivNote.id = `textarea-${item.index}`;
  newDivNote.innerHTML = item.note;
  newDivRow.appendChild(newDivNote);

  newDivNote.addEventListener("keyup", event => {
    localStorage.setItem("notes", event.target.value);
  })


  //insert icon for save button
  const newIcon = document.createElement("i");
  newIcon.className = "fa fa-floppy-o";

  const newButton = document.createElement("button");
  newButton.className = "col-2 border fa-lg";
  newButton.appendChild(newIcon);
  newButton.onclick = function () {
    const value = document.getElementById(`textarea-${item.index}`).value;
    handleButtonClick(item.index, value);
  };
  newDivRow.appendChild(newButton);

//function to only call hours of working day
  if(item.index > 8 && item.index < 18){ 
    containerElement.appendChild(newDivRow);
  }
})
// console.log("scheduleArray", scheduleArray);




//button click
function handleButtonClick (index, value) {
    console.log(`Button ${index} is clicked with value ${value}`);
  }

  //function to save user Events when page is refreshed
// function saveEvents()  {
    
//     let stored = JSON.parse(localStorage.getItem(value));
//     console.log(stored);
//     localStorage.setItem(stored);
// }

// handleButtonClick(saveEvents());