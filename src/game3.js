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
    for (var i = 0; i < question.length; i++) {
      spawn ((i%3) * 55, Math.floor(i/3)* 55, question[i] + i)
    }
  }
}

function spawn(x, y, name) { return Crafty.e("2D, DOM, Image, Tween").attr({ x: x, y: y }).image("assets/shapes/" + name + ".png") }

function getRandomInt(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min }

function initQuestion() {
  var digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  var amounts = []  // square circle triangle
  for (var i = 0; i < 3; i++) {
    var randomInt = getRandomInt(0, digits.length - 1)
    amounts[i] = digits[randomInt]
    digits.splice(randomInt, 1)
  }
   hyper.log (amounts)
  for (var a = 0; a < amounts[0]; a++) { question.push ("square") }
  for (var a = 0; a < amounts[1]; a++) { question.push ("circle") }
  for (var a = 0; a < amounts[2]; a++) { question.push ("triangle")}
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
