var width = window.innerWidth // 981
var height = window.innerHeight // 553

// game 1
var wave_y = 0.8 * height

var platform_normal_x = 0 * width
var platform_normal_y = 0.6 * height

var platform_floating_x = 0.2 * width
var platform_floating_y = 0.2 * height

var platform_high_x = 0.45 * width
var platform_high_y = 0.3 * height

var platform_wide_x = 0.75 * width
var platform_wide_y = 0.65 * height

var wave
var platform_normal, platform_floating, platform_high, platform_wide
var player
var pos = 2
var platforms = []
var numbers = []
var recordingImg

// game 2
var wheel

Game2 = {
  

  showNumber: function (index) {
    var content
    if (index == 10) { content = "left" }
    else if (index == 11) { content = "right" }
    else if (index == 12) { content = "square" }
    else if (index == 13) { content = "triangle" }
    else { content = index.toString() }

    var num = spawn(width - 200, 0, content)
    num.timeout(function () {
      num.destroy();
    }, 2000);
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
    wheel = spawn(300, 50, "circle_base")
    wheel.origin("center")
    spawn(370, 70, "1")
    spawn(520, 70, "2")
    spawn(370, 270, "3")
    spawn(520, 270, "4")
    recordingImg = spawn(width / 3 + 60, height / 2.5, "recording")
    recordingImg.attr({ alpha: 0.0 })
  }

}

function spawn(x, y, name) { return Crafty.e("2D, DOM, Image, Tween").attr({ x: x, y: y }).image("assets/game2/" + name + ".png") }


