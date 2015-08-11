ExoplanetColony.PlayState = function(game) {
    mapGroup = undefined;
    imageGroup = undefined;
    inputGroup = undefined;
    
	typeList = ['build001', 'build002', 'build003', 'build005', 'build006'];
	offset = [0, 0, false];
	
	upAro = undefined, downAro = undefined, leftAro = undefined, rightAro = undefined;
	objArray = [];
};

function building(xLoc, yLoc, type) {
		this.xLoc = xLoc;
		this.yLoc = yLoc;
		this.type = type;
		this.obj = undefined;
	}

ExoplanetColony.PlayState.prototype = {
       
	preload: function() {
		this.game.load.image('bgtile', 'assets/images/bgtile.bmp');
		this.game.load.image('build001', 'assets/images/building001.png');
		this.game.load.image('build002', 'assets/images/building002.png');
		this.game.load.image('build003', 'assets/images/building003.png');
		this.game.load.image('build005', 'assets/images/building005.png');
		this.game.load.image('build006', 'assets/images/building006.png');
		this.game.load.spritesheet('arrow', 'assets/images/arrow_spritesheet.png', 64, 64, 64,0, 0);
		//game.load.image('arrow_defunct', 'assets/images/arrow_defunct.png');
	},    
	create: function () {
	    //var objArray = [new building(0,0,typeList[0]), new building(3,2,typeList[2]), new building(8,6, typeList[1])];.
        
	   /* for(i = 0; i < 12; i++){
		for(j = 0; j < 12; j++){
		    //if(i % 5 == j){
		    objArray[(i * 12) + j] = new building(i,j,typeList[(i  + j) % 5]);
		    //}
		}
	    }*/
        
        mapGroup = this.game.add.group();
    imageGroup = this.game.add.group(mapGroup);
    inputGroup = this.game.add.group(mapGroup);
	    var logo = this.game.add.tileSprite(0, 0,800,640, 'bgtile', 0, imageGroup);
        console.log(offset[0]);
	   

//var building = game.add.sprite(1,1,'build001');
	    this.game.stage.smoothed = false;
	    //var bmd = game.make.bitmapData(64,64);
	    //bmd.alphaMask('build001','build001');
        
        
        var drawnObject;
        var width = 800 // example;
var height = 640 // example;
var bmd = this.game.add.bitmapData(width, height);
 
bmd.ctx.beginPath();
bmd.ctx.rect(0, 0, width, height);
bmd.ctx.fillStyle = '#ffffff';
bmd.ctx.fill();
drawnObject = this.game.add.sprite(0, 0, bmd, 0, inputGroup);
        drawnObject.alpha = 0;
drawnObject.anchor.setTo(0.5, 0.5);
        
        
        drawnObject.inputEnabled = true;
        drawnObject.input.pixelPerfectClick = true;
        drawnObject.input.pixelPerfectAlpha = 0;
        //drawnObject.hitArea = new Phaser.Rectangle(0,0,800,640);
        drawnObject.useHandCursor = true;
        
        drawnObject.events.onInputUp.add(this.onClickMap, this);
        
        /* for (i = 0; i < objArray.length; i++){
		objArray[i].obj = this.game.add.sprite(((objArray[i].xLoc - offset[0])* (199/3)) + 1, ((objArray[i].yLoc - offset[1]) * 199/3) + 1, objArray[i].type);
	   }*/
        
        
	    //game.add.image(1,1,bmd);

	    downAro = this.game.add.button(400, 640 - 64, 'arrow', this.move_down, this,inputGroup);
	    downAro.frame = 1;
	    downAro.anchor.setTo(0.5, 0.5);
	    downAro.angle = (180);


	    upAro = this.game.add.button(400, 64, 'arrow', this.move_up, this, inputGroup);
	    upAro.frame = 0;
	    upAro.anchor.setTo(0.5, 0.5);
	    upAro.angle = (0);


	    leftAro = this.game.add.button(64, 320, 'arrow', this.move_left, this, inputGroup);
   	    leftAro.frame = 0;
	    leftAro.anchor.setTo(0.5, 0.5);
	    leftAro.angle = (270);


	    rightAro = this.game.add.button(800 - 64, 320, 'arrow', this.move_right, this, inputGroup);
	    rightAro.frame = 1;
	    rightAro.anchor.setTo(0.5, 0.5);
	    rightAro.angle = (90);
	},
    update: function() {
	   if(offset[2]){
           for (i = 0; i < objArray.length; i++){
               objArray[i].obj.x = ((objArray[i].xLoc - offset[0]) * (199/3)) + 1;
               objArray[i].obj.y = ((objArray[i].yLoc - offset[1]) * (199/3)) + 1;
           }
           offset[2] = false;
       }
    },

	building: function(xLoc, yLoc, type) {
		this.xLoc = xLoc;
		this.yLoc = yLoc;
		this.type = type;
		this.obj = undefined;
	},
	move_down: function() {
		if(offset[1] < 60){
		upAro.frame = 1;
		offset[1] += 3;
		console.log(offset[1]);
		
		offset[2] = true;
		}
        else if(offset[1] < 63){
            offset[1] = 63;
            upAro.frame = 1;
            downAro.frame = 0;
            offset[2] = true;
        }
	},

	move_left: function() {
		if(offset[0] >= 3){
            rightAro.frame = 1;
            offset[0] -= 3;
            console.log(offset[0]);
            offset[2] = true;
        }
        else if(offset[0] > 0)
        {
            offset[0] = 0;
            rightAro.frame = 1;
			leftAro.frame = 0;
            offset[2] = true;
		
        }
	},

	move_right: function() {
		if(offset[0] <= 61){
            leftAro.frame = 1;
            offset[0] += 3;
            console.log(offset[0]);
            
            offset[2] = true;
        }
        else if(offset[0] < 63){
            leftAro.frame = 1;
            offset[0] = 63;
            rightAro.frame = 0;
            offset[2] = true;
        }
	},

	move_up: function() {
		if(offset[1] >= 4){
		downAro.frame = 1;
		offset[1] -= 3;
		console.log(offset[1]);
		
		offset[2] = true;
		}
        else if(offset[1] > 0){
            offset[1] = 0;
            downAro.frame = 1;
            upAro.frame = 0;
            offset[2] = true;
        }
		
	},
    
    onClickMap: function(sprite, pointer) {
        console.log(Math.floor(pointer.position.x / (199/3)), Math.floor(pointer.position.y/(199/3)));
        for(i = 0; i < objArray[objArray.length]; i++){
            if(objArray[i].xLoc == Math.floor(pointer.position.x / (199/3)) + offset[0]){
                if(objArray[i].yLoc = Math.floor(pointer.position.y / (199/3)) + offset[1]){   
                    return;
                }
            }
        }
        objArray[objArray.length] = new building(Math.floor(pointer.position.x / (199/3)) + offset[0], Math.floor(pointer.position.y/(199/3)) + offset[1] ,typeList[(pointer.position.x + pointer.position.y) % 5]);
        objArray[objArray.length - 1].obj = this.game.add.sprite(((objArray[objArray.length - 1].xLoc - offset[0])* (199/3)) + 1, ((objArray[objArray.length - 1].yLoc - offset[1]) * 199/3) + 1, objArray[objArray.length - 1].type);
    }
	
};