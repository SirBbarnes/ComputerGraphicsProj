class hero{
	constructor(x,y) {
		this.hp = 150;
		this.mhp = 200;
		this.atk = 36;
		this.def = 75;
		this.hPic = new Image();
		this.loc = [x,y];
		this.hPic.width = "64";
		this.hPic.height = "64";
		this.hPic.src = "hero.png";
		
		this.hPic1 = new Image();
		this.hPic.width = "64";
		this.hPic.height = "64";
		this.hPic1.src = "dead.png";
	}	
	
	move(x,y) {
		/*
			if the tile is empty, if the enemy is not there and if
			the hero can move there
			
			allow the hero.js file to 
			call main.board[x,y].entity 
		*/
		if (main.board.map[[x,y]].entity == null && 
		main.board.map[[x,y]].pass.includes("player")) {
			this.loc = [x, y];
		}
		
	}
	
	update() {
	}
	
	render() {
		ctx.drawImage(this.hPic,this.loc[0] * 64, this.loc[1] * 64, 
		this.hPic.width, this.hPic.height);
		
		if (this.hp ==0) {
			ctx.drawImage(this.hPic1,this.loc[0] * 64, this.loc[1] * 64, 
			this.hPic.width, this.hPic.height);
			console.log("You lose");
		}
	}
}