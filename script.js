// Connects the button to the function so that the button has a function
document.getElementById('button').addEventListener('click', math)

let diameter = 0
let area = 0
let circumference = 0
const pi = 3.14

function math () {
  diameter = document.getElementById('diameter').value
  diameter = parseInt(diameter)
  area = 0
  circumference = 0

  // If the user enters a non numerical value, it asks the user to not use letters
  if (isNaN(diameter)) {
    document.getElementById('answer1').innerHTML = 'Please enter a numerical value'
  }

  // If the user enters a negative number or 0, it asks the user to not use negative numbers
  if (diameter <= 0) {
    document.getElementById('answer1').innerHTML = 'Please enter a positive number'
  }

  // This part does the calculations for the area and circumference using the input (diameter)
  if ((diameter > 0)) {
    area = ((diameter / 2) * (diameter / 2)) * pi
    document.getElementById('answer1').innerHTML = 'Area: ' + area
  }

  if ((diameter > 0)) {
    circumference = pi * diameter
    document.getElementById('answer2').innerHTML = 'Circumference: ' + circumference
  }
}
