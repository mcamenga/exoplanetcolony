var game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, '');

game.state.add('Boot', ExoplanetColony.Boot);
game.state.add('Preloader', ExoplanetColony.Preload);
game.state.add('MainMenu', ExoplanetColony.MainMenu);
game.state.add('Game', ExoplanetColony.Game);

game.state.start('Boot');