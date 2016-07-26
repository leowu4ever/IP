var width = window.innerWidth // 981
var height = window.innerHeight // 553

var recordingImg
var arrows = []
var f1, f2, answer
var answerPos, arrowPos

var options = []
// game 2
var wheel

Game2 = {
  showRecordingImg: function () { recordingImg.tween({ alpha: 1.0 }, 200) },

  hideRecordingImg: function () { recordingImg.tween({ alpha: 0.0 }, 200) },

  // game 2
  gamestart: function () {
    Crafty.init(width, height)
    initQuestion()
    // wheel
    wheel = spawn(50, 50, "circle_base")
    spawn(140, 110, options[0].toString() + "_copycopy")
    spawn(290, 110, options[1].toString() + "_copycopy")
    spawn(290, 280, options[2].toString() + "_copycopy")
    spawn(140, 280, options[3].toString() + "_copycopy")

    arrows[0] = spawn(50, 10, "a0")
    arrows[0].attr({ alpha: 0.0 })
    arrows[1] = spawn(370, 10, "a1")
    arrows[1].attr({ alpha: 0.0 })
    arrows[2] = spawn(370, 400, "a2")
    arrows[2].attr({ alpha: 0.0 })
    arrows[3] = spawn(50, 400, "a3")
    arrows[3].attr({ alpha: 0.0 })

    // equation question
    spawn(500, 100, f1.toString() + "_")
    spawn(580, 100, "minus")
    spawn(660, 100, f2.toString() + "_copy")
    spawn(740, 100, "equal")

    // noti
    recordingImg = spawn(400, 400, "recording")
    recordingImg.attr({ alpha: 0.0 })
  },

  updateArrow: function (roll) {
    if (roll < 5 && roll > -5) { arrowPos = -1 }
    if (roll < -5 && roll > -45) { arrowPos = 0 }
    if (roll < -45 && roll > -85) { arrowPos = 3 }
    if (roll < 45 && roll > 5) { arrowPos = 1 }
    if (roll < 85 && roll > 45) { arrowPos = 2 }
    showArrow(arrowPos)
  },

  checkAnswer: function () {
    if (arrowPos == answerPos) {
      correct = spawn(600, 300, "correct")
      spawn(820, 100, answer.toString())
    }
    else {
      tryagain = spawn(600, 300, "tryagain")
      tryagain.timeout(function () { tryagain.destroy() }, 1500);
    }
  }
}

function showArrow(a) {
  arrows[0].attr({ alpha: 0.0 })
  arrows[1].attr({ alpha: 0.0 })
  arrows[2].attr({ alpha: 0.0 })
  arrows[3].attr({ alpha: 0.0 })
  if (a != -1) { arrows[a].attr({ alpha: 1.0 }) }
}

function getRandomInt(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min }

function spawn(x, y, name) { return Crafty.e("2D, DOM, Image, Tween").attr({ x: x, y: y }).image("assets/game2/" + name + ".png") }

function initQuestion() {
  var temp = []
  f1 = getRandomInt(0, 9)
  answer = getRandomInt(0, f1)
  f2 = f1 - answer
  var digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  digits.splice(answer, 1)
  temp[0] = answer
  var randomInt = getRandomInt(0, digits.length - 1)
  temp[1] = digits[randomInt]
  digits.splice(randomInt, 1)

  randomInt = getRandomInt(0, digits.length - 1)
  temp[2] = digits[randomInt]
  digits.splice(randomInt, 1)

  randomInt = getRandomInt(0, digits.length - 1)
  temp[3] = digits[randomInt]
  digits.splice(randomInt, 1)

  hyper.log (temp)
  var randomInt = getRandomInt(0, temp.length - 1)
  options[0] = temp[randomInt]
  temp.splice(randomInt, 1)

  randomInt = getRandomInt(0, temp.length - 1)
  options[1] = temp[randomInt]
  temp.splice(randomInt, 1)

  randomInt = getRandomInt(0, temp.length - 1)
  options[2] = temp[randomInt]
  temp.splice(randomInt, 1)

  randomInt = getRandomInt(0, temp.length - 1)
  options[3] = temp[randomInt]
  temp.splice(randomInt, 1)

  for (var i = 0; i < options.length; i++) {
    if (options[i] == answer) {
      answerPos = i
    }
  }

  hyper.log(options)
  hyper.log(answerPos)
}

