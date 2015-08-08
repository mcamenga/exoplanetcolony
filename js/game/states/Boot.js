var ExoplanetColony = function() {};

ExoplanetColony.Boot = function() {};

ExoplanetColony.Boot.prototype = {
  preload: function() {
    this.load.image('loadbar', 'assets/images/loadingbar.png');
  },
  create: function() {
    this.game.stage.backgroundColor = '#000';
    
    //1 unless multi-touch
    this.input.maxPointers = 1;

    if (this.game.device.desktop) {
      this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
      this.scale.minWidth = 1024;
      this.scale.minHeight = 768;
      this.scale.maxWidth = 1024;
      this.scale.maxHeight = 768;
      this.scale.forceLandscape = true;
      this.scale.pageAlignHorizontally = true;
    } else {
      //  1024x768
      this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
      this.scale.minWidth = 1024;
      this.scale.minHeight = 768;
      this.scale.maxWidth = 1024;
      this.scale.maxHeight = 768;
      this.scale.forceLandscape = true;
      this.scale.pageAlignHorizontally = true;
      this.scale.setScreenSize(true);
    }

    this.state.start('Preload');
  }
};