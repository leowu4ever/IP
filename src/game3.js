var width = window.innerWidth // 981
var height = window.innerHeight // 553

var amounts = []  // square circle triangle
var question = []
var answer = 0
Game3 = {
  // game 3
  gamestart: function () {
    initQuestion()
    Crafty.init(width, height)

    var length = question.length
    for (var i = 0; i < length; i++) {
      var randomInt = getRandomInt(0, question.length - 1)
      spawn((i % 5) * 55 + 100, Math.floor(i / 5) * 55 + 50, question[randomInt] + i)
      question.splice(randomInt, 1)
    }
    spawn (width/2, 50, "whichshape")
  }
}

function spawn(x, y, name) { return Crafty.e("2D, DOM, Image, Tween").attr({ x: x, y: y }).image("assets/game2/" + name + ".png") }

function getRandomInt(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min }

function initQuestion() {
  var digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
  var amounts = []  // square circle triangle
  for (var i = 0; i < 3; i++) {
    var randomInt = getRandomInt(0, digits.length - 1)
    amounts[i] = digits[randomInt]
    digits.splice(randomInt, 1)
  }
  console.log(amounts)
  for (var a = 0; a < amounts[0]; a++) { question.push("square") }
  for (var a = 0; a < amounts[1]; a++) { question.push("circle") }
  for (var a = 0; a < amounts[2]; a++) { question.push("triangle") }
  answer = indexOfMax(amounts)
}

function indexOfMax(arr) {
  if (arr.length === 0) { return -1 }
  var max = arr[0]
  var maxIndex = 0
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      maxIndex = i
      max = arr[i]
    }
  }
  return maxIndex;
}
