var width = window.innerWidth // 981
var height = window.innerHeight // 553

// game 1
var wave_y = 0.8 * height

var platform_normal_x = 0 * width
var platform_normal_y = 0.6 * height

var platform_floating_x = 0.2 * width
var platform_floating_y = 0.2 * height

var platform_high_x = 0.45 * width
var platform_high_y = 0.15 * height

var platform_wide_x = 0.7 * width
var platform_wide_y = 0.35 * height

var wave
var platform_normal, platform_floating, platform_high, platform_wide
var player
var pos = 2
var platforms = []
var recordingImg

var answers = []
var questions = []
var q0 = []
var q1 = []
var q2 = []
var q3 = []

Game1 = {
  gamestart: function () {
    Crafty.init(width, height)

    initQuestion()
    // wave first
    wave = spawn(0, wave_y, "wave")

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
    spawn(platform_wide_x + 170, platform_wide_y - 34, "grass")

    player = spawn(platform_high_x + 10, platform_high_y - 30, "player")
    recordingImg = spawn(width / 3 + 60, height / 2.5, "recording")
    recordingImg.attr({ alpha: 0.0 })
    platforms = [platform_normal, platform_floating, platform_high, platform_wide]

    // for q0
    q0[0] = spawn(180, 200, "q0")
    for (i = 0; i < answers[0]; i++) {
      q0[i + 1] = spawn(215 + i * 40, 300, "star" + i)
    }

    for (i = 0; i < q0.length; i++) {
      q0[i].attr({ alpha: 0.0 })
    }

    // for q1
    q1[0] = spawn(180, 200, "q1")
    for (i = 0; i < answers[1]; i++) {
      q1[i + 1] = spawn(215 + i * 40, 300, "diamond" + i)
    }

    for (i = 0; i < q1.length; i++) {
      q1[i].attr({ alpha: 0.0 })
    }

    // for q3
    q3[0] = spawn(180, 200, "q3")
    for (i = 0; i < answers[3]; i++) {
      q3[i + 1] = spawn(215 + i * 40, 300, "grass" + i)
    }

    for (i = 0; i < q3.length; i++) {
      q3[i].attr({ alpha: 0.0 })
    }

    questions = [q0, q1, q2, q3]
  },

  showNumber: function (index) {
    var content
    if (index == 10) { content = "left" }
    else if (index == 11) { content = "right" }
    else if (index == 12) { content = "square" }
    else if (index == 13) { content = "triangle" }
    else { content = index.toString() }

    var num = spawn(650, 235, content)
    num.timeout(function () {
      num.destroy();
    }, 2000);
  },

  moveLeft: function () {
    var x, y
    if (pos > 0) {
      if (pos != 2) { HideQuestion(pos) }
      pos--
      x = platforms[pos].x
      y = platforms[pos].y
      player.tween({ x: x + 10, y: y - 30 }, 1000, "easeInQuad")
    }
    if (answers[pos] != -1) { showQuestion(pos) }
  },

  moveRight: function () {
    var x, y
    if (pos < 3) {
      if (pos != 2) { HideQuestion(pos) }
      pos++
      x = platforms[pos].x
      y = platforms[pos].y
      player.tween({ x: x + 10, y: y - 30 }, 1000, "easeInQuad")
    }
    if (answers[pos] != -1) { showQuestion(pos) }
  },

  showRecordingImg: function () {
    recordingImg.tween({ alpha: 1.0 }, 200)
  },

  hideRecordingImg: function () {
    recordingImg.tween({ alpha: 0.0 }, 200)
  },

  checkAnswer: function (a) {
    if (a == answers[pos]) {
      //HideQuestion(pos)
      var correct = spawn(650, 235, "correct")
      correct.timeout(function () {
        correct.destroy()
        HideQuestion(pos)
      }, 2000);
      answers[pos] = -1

    } else {
      tryagain = spawn(400, 0, "tryagain")
      tryagain.timeout(function () { tryagain.destroy() }, 1500);
    }
  }
}

function getRandomInt(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min }

function initQuestion() {
  for (var i = 0; i < 3; i++) {
    answers[0] = getRandomInt(1, 9)
    answers[1] = getRandomInt(1, 9)
    answers[2] = -1
    answers[3] = getRandomInt(1, 9)
  }
}

function spawn(x, y, name) { return Crafty.e("2D, DOM, Image, Tween").attr({ x: x, y: y }).image("assets/game1/" + name + ".png") }


function showQuestion(q) {
  for (i = 0; i < questions.length; i++) {
    if (i == q) {
      for (j = 0; j < questions[i].length; j++) {
        questions[i][j].tween({ alpha: 1.0 }, 200)
      }
    }
  }
}

function HideQuestion(q) {
  for (i = 0; i < questions.length; i++) {
    if (i == q) {
      for (j = 0; j < questions[i].length; j++) {
        questions[i][j].attr({ alpha: 0.0 })
      }
    }
  }
}