$(document).ready(function () {
  let currentDayId = $("#currentDay");
  let containerEl = $(".container");
  let button = "<button id='save-button' class='saveBtn  col-2'> <i class='fas fa-save'></i>  </button>";

  

//This function is displaying the current date 
  function displayCurrentDay() {
    let currentDate = moment().format("dddd, MMMM Do");
    currentDayId.text(currentDate);
  }

  displayCurrentDay();




  //This function is creating dynamically the time blocks 
  function showColumns() {

    for (let i = 9; i <= 17; i++) {
      let hour = moment().hour(i).format('H A');
      let inputField = " <input value = ' ' class='input-field textarea inputArea col col-`8` type='text' data-time =" + hour + " >";
      let row = "<div class='row'> <span class='hour  col-2'> " +  hour  +  "</span> "+ inputField + button + "</div>";
      // console.log(`Time: ${hour}`);
      $(row).appendTo(containerEl);
    }

  }

  showColumns();

//This function is looping thorough the input elements and it`s adding the corresponding css class ( past,future,present) based on current time

  function pastPresentFutureBackground() {

    let currentTime = moment().hour();
    let elements = $(".input-field");
    

    elements.each(function () {

      let dataValue = $(this).attr("data-time");
      console.log("This is time " + dataValue);
      console.log("This is current time to compare " + currentTime);
      if (currentTime == dataValue) {

        $(this).addClass("present");
          // console.log("This is present ");
      } else if (currentTime > dataValue ) {
        $(this).addClass("past");
          // console.log("This is past");
      } else {
        $(this).addClass("future");
          // console.log("This is future");
      }
    });



  }

  pastPresentFutureBackground();


 //This function is clearing the localstorage api 
  function clearStorage() {
    localStorage.clear();
  }
 
  $("#clear").on("click", clearStorage);
  
 

  //This saves the an object key value pair 
  function SaveTOLocalStorage() {
    let key = $(this).prev(".input-field").attr("data-time");
    let value = $(this).prev(".input-field").val();
    let storedValAndKeyObj = {};
    storedValAndKeyObj[key] = value;
    localStorage.setItem(key, JSON.stringify(storedValAndKeyObj));


    displayInput();
  }

 $(".saveBtn").on("click", SaveTOLocalStorage); 

  SaveTOLocalStorage();

  

// This function is displaying the stored values back into the input elements based on the attribute data 
  function displayInput() {
    let inputs = $("input[data-time]");
    inputs.each(function() {
      let input = $(this);
      let attr = input.attr("data-time");
      let storedData = localStorage.getItem(attr);
      if(storedData){
        let parsedData = JSON.parse(storedData);
        let inputValue = parsedData[attr];
        input.val(inputValue);

      }
      
  });
      }
      


});