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

Game = {
  start: function() {

    Crafty.init(width, height)

    // dynamic map generation 
    // iphone 6 dependent 
    // platform  1. normal 2. floating 3. wide  4. tall narrow
    // task 1. diamond award 2. enemy 3. character 2 question 4. counting stars
    
    // wave first
    wave = spawn (0, wave_y, "wave")
    // for each platform from left to right
    // normal
    platform_normal = spawn (platform_normal_x, platform_normal_y, "platform_normal")
    spawn (platform_normal_x + 70, platform_normal_y - 30, "star")

    // floating
    platform_floating = spawn (platform_floating_x, platform_floating_y, "platform_floating")
    spawn (platform_floating_x + 40, platform_floating_y - 30, "diamond")

    // high
    platform_high = spawn (platform_high_x, platform_high_y, "platform_high")
    player = spawn (platform_high_x + 20, platform_high_y - 30, "player")

    // wide + wood + grass + character_2 + cloud
    platform_wide = spawn (platform_wide_x, platform_wide_y, "platform_wide")
    spawn (platform_wide_x + 40, platform_wide_y - 40, "character_2")
    spawn (platform_wide_x + 100, platform_wide_y - 34, "grass")
    spawn (platform_wide_x + 170, platform_wide_y - 30, "wood")
    spawn (platform_wide_x + 170, platform_wide_y - 80, "cloud")


    // for transition test
    player.tween({x: 100, y: 100}, 1000, "easeInQuad") 
   
  }
}

function spawn(_x, _y, name) { return Crafty.e("2D, DOM, Image, Tween").attr({x: _x, y: _y}).image("assets/" + name + ".png") }


