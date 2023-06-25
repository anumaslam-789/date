
//Question # 1 write and display the current time and date in your browser

// var rightNow =  Date ();
// console.log(rightNow);




//Q : 2 write a program that alert the current month in words;


// const monthNames = ["January", "February", "March", "April", "May", "June",
//   "July", "August", "September", "October", "November", "December"
// ];

// const d = new Date();
// document.write("Current month : " + monthNames[11]);


//Q : 3 write a program that alert the first 3 letters of the current day if it is sunday alet will show sun

// const days = ["sun", "Mon", "Tues",WWed, "Thurs", "Fri", "Sat",
  
// ];

// const d = new Date();
// document.write("Today is " + days[5]);


//Q :4 write a program and display "its fun day"if it is sunday Or saturday

// var currentDate = new Date();

// // if (currentDate.getDay() === 0 || currentDate.getDay() === 6) {
// //   console.log("It's fun day");
// // } else {
// //   console.log("It's not a fun day");
// // }


//Q # :5 A program that show the message "First fifteen days of the month " if it is less than 16 of the month else show "last days of the month"


// // Get the current date
// var currentDate = new Date();

// // Get the day of the month
// var currentDay = currentDate.getDate();

// // Check if it's the first fifteen days or the last days of the month
// if (currentDay < 16) {
//   console.log("First fifteen days of the month");
// } else {
//   console.log("Last days of the month");
// }

//Q:6 



//Q :7 write a program tha tests whether it is before noon and aert "its AM" else "itsPM"
// // Get the current date
// var currentDate = new Date();

// // Get the current hour
// var currentHour = currentDate.getHours();

// // Check if it's before noon or after
// if (currentHour < 12) {
//   alert("It's AM");
// } else {
//   alert("It's PM");
// }







// // Create a date object for the last day of the last month of 2020
var date = new Date();

var date1= date.setFullYear(2020 , 11, 31);
console.log(date);







//question # 13 



    //   var age = prompt("Enter your age:");
    //   var currentYear = new Date().getFullYear();
    //   var birthYear = currentYear - age;
      
    //   output = "Your birth year is: " + birthYear;
    //   console.log(output)
    