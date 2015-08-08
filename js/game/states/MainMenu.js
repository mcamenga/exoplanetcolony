ExoplanetColony.MainMenu = function() {};

ExoplanetColony.MainMenu.prototype = {
  create: function() {
    
    this.startB = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'startButton');
    this.startB.anchor.setTo(0.5);
      
    this.aboutB = this.add.sprite(this.game.world.centerX, this.game.world.centerY + 128, 'aboutButton');
    this.aboutB.anchor.setTo(0.5);
      
    this.howB = this.add.sprite(this.game.world.centerX, this.game.world.centerY + 256, 'howtoplayButton');
    this.howB.anchor.setTo(0.5);


    //this.gameMusic = this.game.add.audio('gameMusic');
    //this.gameMusic.play('', 0, true);

  },
  update: function() {
    if(this.game.input.activePointer.justPressed()) {
      this.game.state.start('Game');
    }
  }
};