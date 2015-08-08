ExoplanetColony.Preload = function() {
  this.ready = false;
};

ExoplanetColony.Preload.prototype = {
  preload: function() {

    this.loadingBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loadbar');
    this.loadingBar.anchor.setTo(0.5);

    this.load.setPreloadSprite(this.loadingBar);

    //load all assets
    this.load.image('startButton', 'assets/images/startbtn.png');
    this.load.image('aboutButton', 'assets/images/aboutbtn.png');
    this.load.image('howtoplayButton', 'assets/images/howtoplaybtn.png');
    //this.load.spritesheet(XX);
    //this.load.audio('music');
    //this.load.bitmapFont();

    this.load.onLoadComplete.add(this.onLoadComplete, this);
  },
  create: function() {
    this.loadingBar.cropEnabled = false;
  }, 
  update: function() {
    //if(this.cache.isSoundDecoded('music') && this.ready === true) {
      this.state.start('MainMenu');
    },
  onLoadComplete: function() {
    this.ready = true;
  }
};