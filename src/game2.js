var width = window.innerWidth // 981
var height = window.innerHeight // 553

var recordingImg
var a1, a2, a3, a4
var f1, f2, answer

// game 2
var wheel

var correct, tryagain

Game2 = {

  showNumber: function (index) {
    var content
    var num = spawn(width - 200, 0, content.toString())
    num.timeout(function () { num.destroy() }, 2000);
  },

  showRecordingImg: function () {
    recordingImg.tween({ alpha: 1.0 }, 200)
  },

  hideRecordingImg: function () {
    recordingImg.tween({ alpha: 0.0 }, 200)
  },

  // game 2
  gamestart: function () {
    Crafty.init(width, height)
    initQuestion()

    wheel = spawn(50, 50, "circle_base")
    spawn(140, 110, "1")
    spawn(290, 110, "2")
    spawn(140, 280, "3")
    spawn(290, 280, "4")
    
    a1 = spawn(50, 10, "a1")
    //a1.attr({ alpha: 0.0 })
    a2 = spawn(370, 10, "a2")
    a2.attr({ alpha: 0.0 })
    a3 = spawn(50, 400, "a3")
    a3.attr({ alpha: 0.0 })
    a4 = spawn(370, 400, "a4")
    a4.attr({ alpha: 0.0 })

    spawn(500, 100, f1.toString() + "_")
    spawn(580, 100, "minus")
    spawn(660, 100, f2.toString() + "_copy")
    spawn(740, 100, "equal")

    recordingImg = spawn(width / 3 + 60, height / 2.5, "recording")
    recordingImg.attr({ alpha: 0.0 })
  },

}

function getRandomInt(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min }

function spawn(x, y, name) { return Crafty.e("2D, DOM, Image, Tween").attr({ x: x, y: y }).image("assets/game2/" + name + ".png") }

function initQuestion() {
  f1 = getRandomInt(0, 9)
  answer = getRandomInt(0, f1)
  f2 = f1 - answer

  hyper.log(f1)
  hyper.log(f2)
}

