// window.onload= function(){

//   const year = document.getElementById("year");
//   const month = document.getElementById("month");
//   const day = document.getElementById("day");
//   const label = document.querySelectorAll("label");
//   let result = document.querySelectorAll(".result span");
//   let error = document.querySelectorAll(".first-container .error");
//   let inputs = document.querySelectorAll(".first-container input");  
  
//     // Create a date object for the current date
//   let currentDate = new Date();
//   let currentYear = currentDate.getFullYear();
//   let currentMonth = currentDate.getMonth() + 1;
//   let currentDay = currentDate.getDate();
//   let hasError = false;

//   function CalculateAge() {
//    // Validate the input values
//     if (
//       year.value <= currentYear &&
//       month.value >= 1 &&
//       month.value <= 12 &&
//       day.value >= 1 &&
//       day.value <= MaxDaysInMonth(month.value, year.value)
//     ) {
//       //Calculate the age in years, months, and days
//       let outputYear = currentYear - year.value;
//       let outputMonth = currentMonth - month.value;
//       let outputDay = currentDay - day.value;
  
//       if (outputMonth < 0) {
//         outputYear--;
//         outputMonth = 12 + outputMonth;
//       }
  
//       if (outputDay < 0) {
//         outputMonth--;

//         //for getting previous month's last date(total days of that month), in order to achive this, we have to find total number of days of previous month!!
//          let daysInPreviousMonth = MaxDaysInMonth(currentMonth - 1, currentYear);
//           outputDay = daysInPreviousMonth + outputDay;
//       }
//       result[0].innerHTML = outputYear;
//       result[1].innerHTML = outputMonth;
//       result[2].innerHTML = outputDay;
//     }
//     else{
//       hasError = true;
//       checkError();
//     }
//   };
  
//   //for handle the type of error
//   function handleError(inputElement, errorMassage){
//     inputElement.style.border = "1px solid hsl(0, 100%, 67%)";
//     inputElement.nextElementSibling.textContent = errorMassage;
//     inputElement.previousElementSibling.style.color = "hsl(0, 100%, 67%)";
//   }

//   //for clear error if input got repaired
//   function clearInputError(inputElement){
//     inputElement.style.border = "1px solid #ccc";
//     inputElement.nextElementSibling.textContent = "";
//     inputElement.previousElementSibling.style.color = " hsl(0, 1%, 44%)";
//   }

//   function checkError(){

//     error.forEach((err) =>{
//       err.textContent = "";
//     });

//     //validate day and month for validate date
//     if(day.value !== "" && month.value !=="" && year.value !== ""){
//       if(day.value > MaxDaysInMonth(month.value, year.value)){
//         handleError(day, "must be a valid date")
//         handleError(month, "")
//         handleError(year, "") 
//         hasError = true;
//         return;
//       }
//     }

//     //validate day
//     if(day.value === ""){
//       handleError(day, "This field is required");
//       hasError = true;
//     }
//     else if( day.value < 1 || day.value > 31){
//       handleError(day, "must be a valid day"); 
//       hasError = true;
//     }
//     else{
//          clearInputError(day);
//     }
     
//     //validate month
//     if(month.value === ""){
//       handleError(month, "This field is required");
//       hasError = true;
//     }
//     else if( month.value < 1 || month.value > 12){
//       handleError(month, "must be a valid month");  
//       hasError = true;
//     }
//     else{
//          clearInputError(month);
//     }
//     //validate year
//     if(year.value === ""){
//       handleError(year, "This field is required");
//       hasError = true;
//     }
//     else if(year.value > currentYear){
//       handleError(year, "must be in the past");
//       hasError = true;  
//     }
//     else{
//       clearInputError(year);
//     }
//     return hasError;
//   }

//    //for check total days in particular month including fabrury's(&&leap year)

//   function MaxDaysInMonth(month, year) {
//     //for fabruary and leap year
//     if (month === 2) {
//       if (isLeapYear(year)) {
//         return 29;
//       } else {
//         return 28;
//       }
//     }
//     //for check month with 30 days
//     var monthsWith30days = [4, 9, 6, 10];
  
//     if (monthsWith30days.includes(month)) {
//       return 30;
//     }
//     //months for 31 days
//     else {
//       return 31;
//     }
//   }
  
//   //for leap year
//   function isLeapYear(year) {
//     if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//       return true;
//     }
//     return false;
//   }
  
//   document.querySelector("button").addEventListener("click", function () {
//     hasError = checkError();
//    if(!hasError){
//       CalculateAge();
//    }
    
//   });
// }



window.onload = function(){
  const day = document.getElementById("day");
  const month = document.getElementById("month");
  const year = document.getElementById("year");
  const labels = document.getElementsByTagName("label");
  const error = document.getElementsByClassName("error");
  const submitButton = document.getElementById("submit");
  const spans = document.getElementsByTagName("span");

  const date = new Date();

  let currentDay = date.getDate();
  let currentMonth = date.getMonth() + 1;
  let currentYear = date.getFullYear();

  const typeOfError = [
      "",
      "This field is required",
      "Must be a valid day",
      "Must be a valid month",
      "Must be a valid year",
      "Must be a valid date"
  ];

  const errorState = (numberOfError, typeOfDate, typeOfError, color) => {
      error[numberOfError].innerHTML = typeOfError;
      labels[numberOfError].style.color = color;
      typeOfDate.style.borderColor = color;
  }

  const isLeapYear = (day, month, year) => {
      month = month - 1;
      fullDate = new Date(year,month,day);
      if (day == fullDate.getDate() && month == fullDate.getMonth() && year == fullDate.getFullYear())
        return true;
      else
        return false
  }

  const substractAge = () => {
      let newYear = Math.abs(currentYear - year.value);

      let newMonth = 0;
      if(currentMonth >= month.value){
          newMonth = currentMonth - month.value;
      }
      else{
          newYear--;
          newMonth = 12 + currentMonth - month.value;
      }

      let newDay = 0;
      if(currentDay >= day.value){
          newDay = currentDay - day.value;
      }
      else{
          newMonth--;
          if(isLeapYear(day.value, month.value, year.value)){
              newDay = 30 + currentDay - day.value;
          }
          else{
              newDay = currentDay - day.value;
          }

          if(newMonth < 0){
              newMonth = 11;
              newYear--;
          }
          if(newMonth < currentMonth){
              newDay++;
          }
      }

      spans[0].innerHTML = newYear;
      spans[1].innerHTML = newMonth;
      spans[2].innerHTML = newDay;
  }

  const isDayCorrect = () => {
      if(day.value == ""){
          errorState(0, day, typeOfError[1], "#ff5757");
          return false;
      }
      else if(day.value <= 0 || day.value > 31){
          errorState(0, day, typeOfError[2], "#ff5757");
          return false;
      }
      else if(isLeapYear(day.value, month.value, year.value) == false){
          errorState(0, day, typeOfError[5] , "#ff5757");
          return false;
      }
      else{
          errorState(0, day, typeOfError[0], "");
          return true;
      }
  }

  const isMonthCorrect = () => {
      if(month.value == ""){
          errorState(1, month, typeOfError[1], "#ff5757");
          return false;
      }
      else if(month.value <= 0 || month.value > 12){
          errorState(1, month, typeOfError[3], "#ff5757");
          return false;
      }
      else if(isLeapYear(day.value, month.value, year.value) == false){
          errorState(1, month, typeOfError[0], "#ff5757");
          return false;
      }  
      else{
          errorState(1, month, typeOfError[0], "");
          return true;
      }
  }

  const isYearCorrect = () => {
      if(year.value == ""){
          errorState(2, year, typeOfError[1], "#ff5757");
          return false;
      }
      else if(year.value > currentYear){
          errorState(2, year, typeOfError[4], "#ff5757");
          return false;
      }
      else if(year.value == currentYear && month.value > currentMonth){
          errorState(1, month, typeOfError[3], "#ff5757");
          return false;
      }
      else if(year.value == currentYear && month.value == currentMonth && day.value > currentDay){
          errorState(0, day, typeOfError[2], "#ff5757");
          return false;
      }
      else if(isLeapYear(day.value, month.value, year.value) == false){
          errorState(2, year, typeOfError[0], "#ff5757");
          return false;
      }   
      else{
          errorState(2, year, typeOfError[0], "");
          return true;
      }
  }

  submitButton.addEventListener("click", () => {
      isDayCorrect();
      isMonthCorrect();
      isYearCorrect();
      if(isDayCorrect() && isMonthCorrect() && isYearCorrect()){
          substractAge();
      }
  })
}
