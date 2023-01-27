let currentDayId =  $("#currentDay");
let containerEl = $(".container");


function displayCurrentDay() {
    let currentDate  = moment().format("dddd, MMMM Do");
    currentDayId.text(currentDate);
  }

displayCurrentDay();

console.log("test");


let inputField= " <input class='input-field' type='text' >";
let button = "<button> Submit </button>";

function showColumns(){
    
    for (let i = 9; i <= 17; i++) {
        let hour = moment().hour(i).minute(0).second(0);
        let row = "<div class='row'>" + hour.format('h A') + inputField  + button  + "</div>";
        console.log(`Time: ${hour.format('h a')}`);
     $(row).appendTo(containerEl);
      }
    
}

showColumns();