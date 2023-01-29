$(document).ready(function () {
  let currentDayId = $("#currentDay");
  let containerEl = $(".container");
  let hours = [9, 10, 11, 12, 13, 14, 15, 16, 17];

  init();


  function displayCurrentDay() {
    let currentDate = moment().format("dddd, MMMM Do");
    currentDayId.text(currentDate);
  }

  displayCurrentDay();


  let button = "<button id='save-button' class='saveBtn'> Save </button>";

  function showColumns() {

    for (let i = 9; i <= 17; i++) {
      let hour = moment().hour(i).format('H a');
      // console.log("this is the hour ======" + hour);
      let inputField = " <input value = ' ' class='input-field textarea' type='text' data-time =" + hour + " >";
      let row = "<div class='row'>" + hour + inputField + button + "</div>";
      // console.log(`Time: ${hour}`);
      $(row).appendTo(containerEl);
    }

  }

  showColumns();


  function pastPresentFutureBackground() {

    let currentTime = moment().hour();
    let elements = $(".input-field");


    elements.each(function () {

      let dataValue = $(this).attr("data-time");
      // console.log("This is time " + dataValue);
      // console.log("This is current time to compare " + currentTime);
      if (currentTime == dataValue) {

        $(this).addClass("present");
        //   console.log("This is red class");
      } else if (currentTime > dataValue) {
        $(this).addClass("past");
        //   console.log("This is past");
      } else {
        $(this).addClass("future");
        //   console.log("This is future");
      }
    });



  }

  pastPresentFutureBackground();

  //Adding input values to localstorage 
//----------------------------------------------------------------------------------------
  // function addValuesToLocalStorage(){   
  //   let inputValue = $(this).prev(".input-field").val();   // takeing the value
  //   let inputArray = JSON.parse(localStorage.getItem("input")) || [];
  //   inputArray.push(inputValue);
  //   localStorage.setItem("input", JSON.stringify(inputArray));
  //   $(".input-field").value = inputValue;
  //     }

  //     $(".saveBtn").on("click", addValuesToLocalStorage);


  //----------------------------------------------------------------------------------------------
  function clearStorage() {
    localStorage.clear();
  }
  //------------------------------------------------------------------------------------------------

  $("#clear").on("click", clearStorage);
  //----------------------------------------------------------------------- 
  function init() {
    // addValuesToLocalStorage();  
    
    // displayInput();
  }



  //-----------------------------------------------------------------------------

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

  //--------------------------------------------------------------------------------------

  

  function displayInput() {
    let inputs = $("input[data-time]");
    inputs.each(function() {
      let input = $(this);
      console.log(input);
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