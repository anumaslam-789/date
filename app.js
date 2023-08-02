// function date(){
//     alert(new Date());
// }

// date()

// function TwoName(name1,name2) {
//     alert(name1 + name2)

// }
// TwoName("Anum"," aslam");





//function sum(a,b,c) {
  //      alert(a+b+c);
    
     //}
   // sum(10,1,30);
    


//     var num = +prompt("Enter a num");

//     function square(x){
// var result = x * x;
// document.write(result)
//     }
//     square(num)



//     var num = +prompt("Enter a num");

//    function square(x){
//  var result = x ** x;
//  document.write(result)
//     }
//    square(num)




    // function calculateHypotenuse(base, perpendicular) {
    //     function square(number) {
    //       return number * number;
    //     }
      
    //     const hypotenuseSquared = square(base) + square(perpendicular);
    //     const hypotenuse = Math.sqrt(hypotenuseSquared);
    //     return hypotenuse;
    //   }
      
    //   calculateHypotenuse(2,4)


  


//   function area(length, width) {
//       var result = parseInt(length) * parseInt(width);
//       document.write(result)
//     }
//     area(2,3);


// function polindrom(){
// var string = prompt("Enter a string value");
//  var stringArray = string.split('');
//  var stringRev = stringArray.reverse('');
//  var  strJin =stringRev.join('');
//  if(string == strJin){
//   console.log("This is a polindrom");
//  }
//  else{
//   console.log("This is not a polindrom");
//  }
// }

// polindrom();


// var sentance = "the quick brown fox";
//   let arr = sentance.split(' ');
//   for(i=0; i<=arr.length; i++){
//     arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
// }
// let str2= arr.join('');
// console.log(str2);



// function longest_string(str)
//   {let string = str.split(' ');
//     let max_str = string[0].length;
//     let ans = string[0];
//     for (let i = 1; i < string.length; i++) {
//         const maxi = string[i].length;
//         if (maxi > max_str) {
//             ans = string[i];
//             max_str = maxi;
//         }
//     }
//     return ans;
// }
// console.log(longest_string("web development totorial"));

// function calcircumfernce(radius){
  
// return 2* Math.PI*radius*radius
// }
// alert (calcircumfernce(10));

   // WHILE AND DO WHILE AND SWITCH STATEMENTS

function raiseValue(a,b) {
  console.log(a**b)
}
raiseValue(1,2)



//function checkLeap(){
// var checkLeapYear = +prompt("Enter leap Year");
//   if(checkLeapYear%4==0 && checkLeapYear%4!==0){
//     console.log(checkLeapYear + "is a leap yaer")
//   }
//   else{
//     console.log ("it is not a leap year")
//   }
//    }
//   Cheackleap();


function areaOfTriangle ( a ,b,c){

  let parameter = (a*b*c)/2;
  let area  =Math.sqrt( parameter*((parameter - a)*(parameter - b)*(parameter- c)));
  return area;
}

console.log(areaOfTriangle (5,6,7));





const str = 'anum haram ayzal.com';

const noVowels = str.replace(/[aeiou]/gi, '');

console.log(noVowels);  

function converter( kiloMeter){

  let feet =3.2808;
	return kiloMeter*feet

}
console.log(converter(2));

function converter( kiloMeter){

  let inches =39.370;
	return kiloMeter*inches

}
console.log(converter(2));


function converter( kiloMeter){

  let cm =0.01;
	return kiloMeter/cm

}
console.log(converter(2));


var string = "";
let count = 0;
for (let i = 0; i < string.length; i++) {
  if(string[i]=="ae"){
    count++
  }
}
console.log("the accurance of a :" +count)
    //      Event

function del() {
  var delRow = document.getElementById('rem');
  delRow.className ='remRow';
}

  function del1() {
    var delRow = document.getElementById('rem1');
    delRow.className ='remRow';
  }

    function del2() {
      var delRow = document.getElementById('rem2');
      delRow.className ='remRow';
    }

      function del3() {
        var delRow = document.getElementById('rem3');
        delRow.className ='remRow';
  

}


function changeImage() {
  var image = document.getElementById('iceCream');
  image.src = " https://www.shutterstock.com/shutterstock/photos/1879149262/display_1500/stock-photo-falooda-or-royal-falooda-in-white-background-for-dubai-cafeteria-united-arab-emirates-for-menu-1879149262.jpg";
image.style.width= '70%';
}

function firstImage() {
  var image = document.getElementById('iceCream');
  image.src = "https://cdn.theatlantic.com/thumbor/e1x2sKlZwUTKZ08vd3e-8q38nO4=/438x0:1563x1125/1080x1080/media/img/2023/04/0523_WEL_Johns_Ice_Cream_c16X9/original.png" ;


}


