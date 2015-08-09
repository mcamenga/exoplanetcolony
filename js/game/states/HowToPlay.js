ExoplanetColony.HowToPlay = function() {};

ExoplanetColony.HowToPlay.prototype = {
    
  create: function() {

    var text = "This is how you play the game";
    var style = { font: "28px Arial", fill: "#00ff00", align: "center" };
    var t = game.add.text(256, 64, text, style);
    
    this.backB = this.add.sprite(this.game.world.centerX, this.game.world.centerY + 256, 'backButton');
    this.backB.anchor.setTo(0.5);
    this.backB.inputEnabled = true;

    this.backB.events.onInputDown.add(this.backButtonClicked, this);
  },
  update: function() {},
    
 backButtonClicked: function() {
    this.state.start('MainMenu');
    },

};