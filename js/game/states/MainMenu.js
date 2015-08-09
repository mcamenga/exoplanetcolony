ExoplanetColony.MainMenu = function(game) {};

ExoplanetColony.MainMenu.prototype = {
    
  create: function() {
      
    this.startB = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'startButton');
    this.startB.anchor.setTo(0.5);
    this.startB.inputEnabled = true;
     
    this.aboutB = this.add.sprite(this.game.world.centerX, this.game.world.centerY + 128, 'aboutButton');
    this.aboutB.anchor.setTo(0.5);
    this.aboutB.inputEnabled = true;
    
    this.howB = this.add.sprite(this.game.world.centerX, this.game.world.centerY + 256, 'howtoplayButton');
    this.howB.anchor.setTo(0.5);
    this.howB.inputEnabled = true;
    
      this.startB.events.onInputDown.add(this.startButtonClicked, this);
      this.aboutB.events.onInputDown.add(this.aboutButtonClicked, this);
      this.howB.events.onInputDown.add(this.howButtonClicked, this);
  },
  update: function() {},
    
 startButtonClicked: function() {
    //gamestart
    this.state.start('PlayState');
    },
aboutButtonClicked: function() {
    this.state.start('About');
    },
 howButtonClicked: function() {
    this.state.start('HowToPlay');
    }
};