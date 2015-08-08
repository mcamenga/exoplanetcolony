ExoplanetColony.Preload = function() {
  this.ready = false;
};

ExoplanetColony.Preload.prototype = {
  preload: function() {

    this.loadingBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY + 128, 'loadbar');
    this.loadingBar.anchor.setTo(0.5);

    this.load.setPreloadSprite(this.loadingBar);

    this.load.image('ground', 'assets/images/ground.png');
    this.load.image('background', 'assets/images/background.png');

    this.load.spritesheet('coins', 'assets/images/coins-ps.png', 51, 51, 7);
    this.load.spritesheet('player', 'assets/images/jetpack-ps.png', 229, 296, 4);
    this.load.spritesheet('missile', 'assets/images/missiles-ps.png', 361, 218, 4);

    this.load.audio('gameMusic', ['assets/audio/Pamgaea.mp3', 'assets/audio/Pamgaea.ogg']);
    this.load.audio('rocket', 'assets/audio/rocket.wav');
    this.load.audio('bounce', 'assets/audio/bounce.wav');
    this.load.audio('coin', 'assets/audio/coin.wav');
    this.load.audio('death', 'assets/audio/death.wav');

    this.load.bitmapFont('minecraftia', 'assets/fonts/minecraftia/minecraftia.png', 'assets/fonts/minecraftia/minecraftia.xml');

    this.load.onLoadComplete.add(this.onLoadComplete, this);
  },
  create: function() {
    this.preloadBar.cropEnabled = false;
  }, 
  update: function() {
    if(this.cache.isSoundDecoded('gameMusic') && this.ready === true) {
      this.state.start('MainMenu');
    }
  },
  onLoadComplete: function() {
    this.ready = true;
  }
};