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
    this.load.image('backButton', 'assets/images/backbtn.png');
      
      this.load.image('bgtile', 'assets/images/bgtile.bmp');
        this.load.image('selecttile', 'assets/images/selectpanel.bmp');
		this.load.image('build001', 'assets/images/building001.png');
		this.load.image('build002', 'assets/images/building002.png');
		this.load.image('build003', 'assets/images/building003.png');
		this.load.image('build005', 'assets/images/building005.png');
		this.load.image('build006', 'assets/images/building006.png');
		this.load.spritesheet('arrow', 'assets/images/arrow_spritesheet.png', 64, 64, 64,0, 0);
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