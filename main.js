// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:

const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}


// Write a JavaScript program to convert a number to a string.

let numToString = () => {
let val =+ document.getElementById("numToStringField").value
let valtwo = document.getElementById("numToStringField").value
if (isNaN(val) || valtwo == ''){
  document.getElementById("numToString").innerHTML = 'Please pass in a number to be converted'
}
else {
  let valAsString = val.toString()
document.getElementById("numToString").innerHTML = `The passed in number: ${val} is now a ${typeof(valAsString)}`
}
}

// Write a JavaScript program to convert a string to the number.

let stringToNum = () => {
  let str = document.getElementById("stringToNumField").value
  let strAsNum = parseInt(str)
  if (isNaN(strAsNum)) {
    document.getElementById("stringToNum").innerHTML = 'Please input a value that can be converted into a number'
  }
  else {
    document.getElementById("stringToNum").innerHTML = `The passed in string: ${str} is now a type: ${typeof(strAsNum)}`
  }
}


// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null 
  // * Undefined
  // * Number
  // * NaN
  // * String
  
let showDataTypes = (tye) => {
  let dataType = document.getElementById("SDT").value.toString()
  switch(dataType) {
    case "Boolean":
    let boo = true
    document.getElementById("showDataTypes").innerHTML = `The selected value returns as a datatype ${typeof(boo)}`
    break;

    case "Null":
    let nu = null
    document.getElementById("showDataTypes").innerHTML = `The selected value returns as a datatype ${nu}`
    break;

    case "Undefined":
    let und = undefined
    document.getElementById("showDataTypes").innerHTML = `The selected value returns as a datatype ${typeof(und)}`
    break;

    case "Number":
    let num = 1
    document.getElementById("showDataTypes").innerHTML = `The selected value returns as a datatype ${typeof(num)}`
    break;

    case "NaN":
    let nan =+ "NaN"
    document.getElementById("showDataTypes").innerHTML = `The selected value returns as a datatype ${nan}`
    break;

    case "String":
    let str = "A string"
    document.getElementById("showDataTypes").innerHTML = `The selected value returns as a datatype ${typeof(str)}`
    break;

  }
}


// Write a JavaScript program that adds 2 numbers together.

let addTwoNumbers = () => {
  let num1 = parseInt(document.getElementById("Num1").value)
  let num2 = parseInt(document.getElementById("Num2").value)
  if (isNaN(num1) || isNaN(num2)) {
    document.getElementById("addTwoNumbers").innerHTML = 'Please input both values'
  }
  else {document.getElementById("addTwoNumbers").innerHTML = `The inputed values ${num1} and ${num2} equal ${num1+num2}`
}
  
}


// Write a JavaScript program that runs only when 2 things are true.


let runWhenBothTrue = () => {
  let condition1 = document.getElementById("RWBT1").value.toString()
  let condition2 = document.getElementById("RWBT2").value.toString()
if (condition1 == '1' && condition2 == '1') {
  document.getElementById("runWhenBothTrue").innerHTML = 'Both inputs evaluate to true!'
}
else {document.getElementById("runWhenBothTrue").innerHTML = 'One or more of the inputs is false!'}
}


// Write a JavaScript program that runs when 1 of 2 things are true.

let runWhenOneTrue = () => {
  let condition1 = document.getElementById("RWOT1").value.toString()
  let condition2 = document.getElementById("RWOT2").value.toString()
if (condition1 == '1' || condition2 == '1') {
  document.getElementById("runWhenOneTrue").innerHTML = 'Atleast one of the inputs evaluate to true!'
}
else {document.getElementById("runWhenOneTrue").innerHTML = 'Both the inputs are false!'}
}

// console.log(runWhenOneTrue(0,0))

// Write a JavaScript program that runs when both things are not true.  

let runWhenBothFalse = () => {
  let condition1 = document.getElementById("RWBF1").value.toString()
  let condition2 = document.getElementById("RWBF2").value.toString()
if (condition1 == '0' && condition2 == '0') {
  document.getElementById("runWhenBothFalse").innerHTML = 'Both inputs evaluate to false!'
}
else {document.getElementById("runWhenBothFalse").innerHTML = 'One or more of the inputs is true!'}
}

// console.log(runWhenNotTrue(0,0))

// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
