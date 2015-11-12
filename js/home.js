function stringCheck (firstInput) {
  // check if its a string
  firstInput = document.getElementById('firstInput').value;
  inputNumber = parseInt(firstInput);
  console.log(typeof firstInput);

  if(!(isNaN(inputNumber))) {
    alert("Your first input is not a string");
  } else if (typeof firstInput === "string"){
  alert("Your first input is a string");
  }else {
    alert("Your first input is neither a string or number");
  }
}



function largerNum () {
  // find larger number
  var firstNumber = document.getElementById("firstNumber").value;
  var secondNumber = document.getElementById("secondNumber").value;
  if (firstNumber > secondNumber) {
    alert(firstNumber + " is greater than " + secondNumber);
  } else if (secondNumber > firstNumber) {
    alert(secondNumber + " is greater than " + firstNumber);
  } else {
    alert("The two numbers are equal");
  };
};

function stringMaker () {
  // make all inputs into a string
  var firstWord = document.getElementById("firstWord").value;
  var secondWord = document.getElementById("secondWord").value;
  var thirdWord = document.getElementById("thirdWord").value;
  var fourthWord = document.getElementById("fourthWord").value;
  var fifthWord = document.getElementById("fifthWord").value;
  var sixthWord = document.getElementById("sixthWord").value;
  alert(firstWord + " " + secondWord + " " + thirdWord + " " + fourthWord + " " + fifthWord + " " + sixthWord);
}