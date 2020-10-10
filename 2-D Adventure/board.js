class baseTile {
	constructor(x,y) {
		this.bImg;
		this.loc = [x,y];
		this.name;
		this.entity = null;
		this.pass = ["player", "enemy"];
	}
}

class Grass extends baseTile {
	constructor(x,y) {
		super();
		this.loc = [x,y];
	}
	
	render() {
		
	}
	
}

class Tree extends Grass {
	constructor(x,y) {
		super();
		this.loc = [x,y];
		this.name = "tree";
		this.pass = [];
		this.pass1 = [];
	}
	
	render() {
		ctx.lineWidth = 1;
		ctx.fillStyle = "#0F0";
		ctx.strokeStyle = "#0F0";
		ctx.beginPath();
		ctx.arc(this.loc[0] * 64 + 32, this.loc[1] * 64 + 32, 25, 0, 2 * Math.PI, false);
		ctx.fill();
		ctx.stroke();
		
	}
}

class Rock extends Tree{
	constructor(x,y) {
		super();
		this.loc = [x,y];
		this.name = "rock";
		this.pass = [];
	}
	
	render() {
		ctx.lineWidth = 1;
		ctx.fillStyle = "#789";
		ctx.strokeStyle = "#789";
		ctx.beginPath();
		ctx.arc(this.loc[0] * 64 + 32, this.loc[1] * 64 + 32, 25, 0, 2 * Math.PI, false);
		ctx.fill();
		ctx.stroke();
	}
	
	
}

class board {
	constructor() {
		this.map = [[0,0]];
		this.width = 10;
		this.height = 10;
		
		this.i = 0;
		this.j = 0;
		
		this.genBoard();
	}
	
	genBoard() {
		for (this.i = 0; this.i < this.width; this.i++) {
			for (this.j = 0; this.j < this.height; this.j++) {
				this.map [[this.i,this.j]] = new Tree(this.i, this.j);
			}
		}
		

		for (this.i = 1; this.i < this.width - 1; this.i++) {
			for (this.j = 1; this.j < this.height - 1; this.j++) {
				this.map[[this.i, this.j]] = new Grass(this.i, this.j);
			}
		}
		
		for (this.i = 3; this.i < this.width - 3; this.i += 3) {
			for (this.j = 3; this.j < this.height - 3; this.j += 3) {
				this.map[[this.i, this.j]] = new Rock(this.i, this.j);
			}
		}
	}
	render() {
	
	}
}