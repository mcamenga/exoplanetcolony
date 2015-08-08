var ExoplanetColony = function() {};

ExoplanetColony.Boot = function() {};

ExoplanetColony.Boot.prototype = {
  preload: function() {
    this.load.image('preloadbar', 'assets/images/preloader-bar.png');
  },
  create: function() {
    this.game.stage.backgroundColor = '#fff';
    
    //1 unless multi-touch
    this.input.maxPointers = 1;

    if (this.game.device.desktop) {
      //  If you have any desktop specific settings, they can go in here
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

    this.state.start('Preloader');
  }
};