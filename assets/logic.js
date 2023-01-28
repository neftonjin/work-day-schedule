$(document).ready(function () {
  let currentDayId = $("#currentDay");
  let containerEl = $(".container");

 
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
      let inputField = " <input class='input-field textarea' type='text' data-time =" + hour + " >";
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

  // function addValuesToLocalStorage(){   
  //   let inputValue = $(this).prev(".input-field").val();   // takeing the value
  //   let inputArray = JSON.parse(localStorage.getItem("input")) || [];
  //   inputArray.push(inputValue);
  //   localStorage.setItem("input", JSON.stringify(inputArray));
  //   $(".input-field").value = inputValue;
  //     }
    
  //     $(".saveBtn").on("click", addValuesToLocalStorage);


  //----------------------------------------------------------------------------------------------
function clearStorage(){
  localStorage.clear();
}
//------------------------------------------------------------------------------------------------

$("#clear").on("click",clearStorage);
  //----------------------------------------------------------------------- 
  function init(){
    // addValuesToLocalStorage();  
    SaveTOLocalStorage();
    // displayInput();
  }
 


  //-----------------------------------------------------------------------------
  
   //working
  function SaveTOLocalStorage(){
    let key= $(this).prev(".input-field").attr("data-time");
    let value = $(this).prev(".input-field").val();
  //  console.log("value is : "+ value);
  //  console.log("key is : " + key);
   let storedValAndKeyObj={};
   storedValAndKeyObj[key]=value;
   localStorage.setItem(key, JSON.stringify(storedValAndKeyObj));
  //  console.log(storedValAndKeyObj);
   displayInput(key);
  }
  $(".saveBtn").on("click", SaveTOLocalStorage);  
  // });

  //--------------------------------------------------------------------------------------

  
  function displayInput(key){
    let dataAtribute= $(this).prev(".input-field").attr("data-time");
    storedValAndKeyObj = JSON.parse(localStorage.getItem(key)); 
    for (let key in storedValAndKeyObj) {
      console.log(" The key is : " + key + "  Value : " + storedValAndKeyObj[key]);

      if (key === !null || key !== undefined){
       console.log( "I am not null or undefined");
      }
    }
    // console.log( storedValAndKeyObj );

    
    }
   
  

 //---------------------------------- 
 //ready function  storedInputValues = JSON.parse(localStorage.getItem(key));

});

