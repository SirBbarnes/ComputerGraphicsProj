class bEnemy {
	constructor(x,y) {
		
	}
	
	move(x,y) {
		if (main.board.map[[x,y]].entity == null && main.board.map[[x,y]].pass.includes("enemy")) {
			this.loc = [x,y];
		}
	}
}

class enemy {
	constructor(x,y) {
			this.hp1 = 100;
			this.hp2 = 150;
			this.hp3 = 200;
			
			this.mhp1 = 300;
			this.mhp2 = 300;
			this.mhp3 = 300;
			
			this.atk1 = 50;
			this.atk = 25;
			this.atk3 = 75;
			
			this.def1 = 50;
			this.def2 = 45;
			this.def3 = 100;
			
			this.loc1 = [x,y]
			this.loc2 = [x,y];
			this.loc3 = [x,y];
			
			this.ePic1 = new Image();
			this.ePic1.width = "64";
			this.ePic1.height = "64";
			this.ePic1.src = "lynel.png";
			
			this.ePic2 = new Image();
			this.ePic2.width = "64";
			this.ePic2.height = "64";
			this.ePic2.src = "knight.png";
			
			this.ePic3 = new Image();
			this.ePic3.width = "64";
			this.ePic3.height = "64";
			this.ePic3.src = "hinox.png";
			
			this.ePic = new Image();
			this.ePic.width = "64";
			this.ePic.height = "64";
			this.ePic.src = "dead.png";
	}

	
	render() {
		ctx.drawImage(this.ePic1, this.loc1[0] * 64, this.loc1[1] * 64, this.ePic1.width, this.ePic1.height);
		ctx.drawImage(this.ePic2, this.loc2[0] * 64 + 64, this.loc2[1] * 64 + 64, this.ePic2.width, this.ePic2.height);
		ctx.drawImage(this.ePic3, this.loc3[0] * 64 + 128, this.loc3[1] * 64 + 128, this.ePic3.width, this.ePic3.height);
		
		if (this.hp1 == 0 && this.hp2 == 0 && this.hp3 == 0) {
			ctx.drawImage(this.ePic, this.loc1[0] * 64, this.loc1[1] * 64, this.ePic1.width, this.ePic1.height);
			ctx.drawImage(this.ePic, this.loc2[0] * 64 + 64, this.loc2[1] * 64 + 64, this.ePic2.width, this.ePic2.height);
			ctx.drawImage(this.ePic, this.loc3[0] * 64 + 128, this.loc3[1] * 64 + 128, this.ePic3.width, this.ePic3.height);				
			console.log("You win");
		}
	}
}