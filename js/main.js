var game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, '');

game.state.add('Boot', ExoplanetColony.Boot);
game.state.add('Preload', ExoplanetColony.Preload);
game.state.add('MainMenu', ExoplanetColony.MainMenu);
game.state.add('About', ExoplanetColony.About);
game.state.add('HowToPlay', ExoplanetColony.HowToPlay);

game.state.start('Boot');