
var executeButton = document.getElementById("half-button");

executeButton.addEventListener("click", halfNumber);

function halfNumber() {
  var half_result = document.getElementById("half").value / 2;
  var result = "Half of " + document.getElementById("half").value + " is " + half_result;
  alert(result);
}




var executeB = document.getElementById("fortune-button");
var fortuneOutput = document.getElementById("fortune-output-p");

var secondArray = [
  'Death is upon you!', // 0
  'You will die!',
  'You will not live forever!',
  'Life will suck!',
  'Life will not be great!',
  'You are worth one penny!', // 5
  'You are the reason why God created the middle finger!',
  'You are a grey sprinkle on a rainbow cupcake!',
  'You are more disappointing than an unsalted pretzel!',
  'Your kid will be so annoying, they will make their Happy Meal cry!',
  'Hold still. I am trying to imagine you with a personality!', // 10
  'Your face makes onions cry!',
  'It is impossible to underestimate you!',
  'I am not insulting you, I am describing you!',
  'You bring everyone so much joy, when you leave the room!',
  'You are like a cloud. When you disappear it is a beautiful day!', // 15
  'I may love to shop but I will never buy your bull!',
  'Whoever told you to be yourself gave you really bad advice!',
  'Oops, my bad. I could have sworn I was dealing with an adult!',
  'I never forget a face, exept for you, I will make an exception!',
  'Some cause happiness wherever they go; others, whenever they go!', // 20

]

executeB.addEventListener("click", fortune);
fortuneOutput.addEventListener("mouseover", restyle)

function fortune() {
  var name = document.getElementById("fortune-input").value;
  random_index = Math.floor(Math.random() * secondArray.length);
  fortune_result = secondArray[random_index];
  fortuneOutput.innerHTML = name + ", your new fortune is: " + fortune_result
}

function restyle() {
  var randomRed = Math.random() * 255
  var randomGreen = Math.random() * 255
  var randomBlue =  Math.random() * 255
  var randomTransform = Math.random() * 10
  var randomFontSize = Math.random() * 50

  fortuneOutput.style.transform = "rotate(" + randomTransform + "deg)";
  fortuneOutput.style.color = "rgb("+ + randomRed + "," + randomGreen + "," + randomBlue + ")";
  fortuneOutput.style.fontSize = randomFontSize + "px"
}
