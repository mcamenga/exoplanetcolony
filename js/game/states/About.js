ExoplanetColony.About = function() {};

ExoplanetColony.About.prototype = {
    
  create: function() {

    var text = "The president of Earth has sent you to go to an exoplanet and colonize it.  \n You must send resources back as part of your commission. \n"
            + "Construct buildings in order to extract resources or provide for the colonists. \n\n Made by Araxiel and Ashiig for /r/WebGames Game Jam.";
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