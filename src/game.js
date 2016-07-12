var width = window.innerWidth // 981
var height = window.innerHeight // 553

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

Game = {
  game1start: function () {
    Crafty.init(width, height)
    // wave first
    wave = spawn(0, wave_y, "wave")
    // for each platform from left to right
    // normal
    platform_normal = spawn(platform_normal_x, platform_normal_y, "platform_normal")
    spawn(platform_normal_x + 70, platform_normal_y - 30, "star")

    // floating
    platform_floating = spawn(platform_floating_x, platform_floating_y, "platform_floating")
    spawn(platform_floating_x + 40, platform_floating_y - 30, "diamond")

    // high
    platform_high = spawn(platform_high_x, platform_high_y, "platform_high")

    // wide + wood + grass + character_2 + cloud
    platform_wide = spawn(platform_wide_x, platform_wide_y, "platform_wide")
    spawn(platform_wide_x + 40, platform_wide_y - 40, "character_2")
    spawn(platform_wide_x + 100, platform_wide_y - 34, "grass")
    spawn(platform_wide_x + 170, platform_wide_y - 30, "wood")
    spawn(platform_wide_x + 170, platform_wide_y - 80, "cloud")

    player = spawn(platform_high_x + 10, platform_high_y - 30, "player")

    recordingImg = spawn(width / 3 + 60, height / 2.5, "recording")
    recordingImg.attr({ alpha: 0.0 })
    platforms = [platform_normal, platform_floating, platform_high, platform_wide]
  },

  game2start: function () {
    Crafty.init(width, height)
    spawn (300, 50, "circle_base")
    spawn (370, 70, "1")
    spawn (520, 70, "2")
    spawn (370, 270, "3")
    spawn (520, 270, "4")
    spawn (500, 225, "arrow")
  },

  game3start: function () {
    Crafty.init(width, height)
    spawn (0, 0, "circle")
    spawn (500, 300, "square")
    spawn (200, 200, "triangle")
  },
  
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

  moveLeft: function () {
    var x, y
    if (pos > 0) {
      pos--
      x = platforms[pos].x
      y = platforms[pos].y
      player.tween({ x: x + 10, y: y - 30 }, 1000, "easeInQuad")
    }
  },

  moveRight: function () {
    if (pos < 3) {
      pos++
      x = platforms[pos].x
      y = platforms[pos].y
      player.tween({ x: x + 10, y: y - 30 }, 1000, "easeInQuad")
    }
  },

  showRecordingImg: function () {
    recordingImg.tween({ alpha: 1.0 }, 200)
  },

  hideRecordingImg: function () {
    recordingImg.tween({ alpha: 0.0 }, 200)
  }
  // queston type 1. counting items like diamond/star 2. simply just a question 
}

function spawn(x, y, name) { return Crafty.e("2D, DOM, Image, Tween").attr({ x: x, y: y }).image("assets/" + name + ".png") }


