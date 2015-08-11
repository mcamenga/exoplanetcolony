var game = new Phaser.Game(1600, 1060, Phaser.AUTO, '');

game.state.add('Boot', ExoplanetColony.Boot);
game.state.add('Preload', ExoplanetColony.Preload);
game.state.add('MainMenu', ExoplanetColony.MainMenu);
game.state.add('About', ExoplanetColony.About);
game.state.add('HowToPlay', ExoplanetColony.HowToPlay);
game.state.add('PlayState', ExoplanetColony.PlayState);

game.state.start('Boot');