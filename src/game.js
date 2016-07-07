Game = {
  start: function() {
    var width = window.innerWidth
    var height = window.innerHeight
    Crafty.init(width, height)
    // platform 

    // decoration

    // character 

    Crafty.e("2D, DOM, Image").attr({x: 0, y: 500}).image("assets/wave.png")
    Crafty.e("2D, DOM, Image").attr({x: 0, y: 450}).image("assets/platform_normal.png")
    Crafty.e("2D, DOM, Image").attr({x: 200, y: 150}).image("assets/platform_high.png")
    Crafty.e("2D, DOM, Image").attr({x: 500, y: 300}).image("assets/platform_float.png")
    Crafty.e("2D, DOM, Image").attr({x: 700, y: 350}).image("assets/platform_wide.png")
    Crafty.e("2D, DOM, Image").attr({x: 300, y: 120}).image("assets/character.png")
    Crafty.e("2D, DOM, Image").attr({x: 120, y: 410}).image("assets/character_2.png")
    Crafty.e("2D, DOM, Image").attr({x: 50, y: 420}).image("assets/diamond.png")
    Crafty.e("2D, DOM, Image").attr({x: 850, y: 320}).image("assets/wood.png")
    Crafty.e("2D, DOM, Image").attr({x: 850, y: 250}).image("assets/cloud.png")
    Crafty.e("2D, DOM, Image").attr({x: 530, y: 270}).image("assets/star.png")
    Crafty.e("2D, DOM, Image").attr({x: 600, y: 270}).image("assets/star.png")
    
    Crafty.e("2D, DOM, Image").attr({x: 770, y: 317}).image("assets/grass.png")

  }
}


