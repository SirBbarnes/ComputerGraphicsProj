class GameObject {
	constructor() {
		this.buffer = gl.createBuffer();
		this.vertices = [];
		this.loc = [0,0,0];
		this.rot = [0,0,0];
		this.isTrigger = false;
		this.radius = 0.0;
		this.velocity = [0,0,0];
		this.angVelocity = [0,0,0];
		this.name = "default";
		this.id = "";
		this.prefab;
	}
	
	update() {
		var tempLoc = [0,0,0];
		tempLoc[0] = this.velocity[0]*Math.cos(this.rot[2])+this.loc[0];
		tempLoc[1] = this.velocity[1]*Math.sin(this.rot[2])+this.loc[1];
		tempLoc[2] = 0;
		return tempLoc;
	}

}




class Asteroid extends GameObject {
	constructor() {
		super();
		this.buffer=gl.createBuffer();
		 gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
		 
		 //Now we want to add color to our vertices information.
		 this.vertices =
		 [	
		 -.5,.5,0,1,1,1,
		 0,0,-.5,0,0,1,
		 -.5,-.5,0,0,0,0,
		 
		 -.5,-.5,0,1,0,0,
		 0,0,-.5,1,0,0,
		 .5,-.5,0,1,0,0,
		 
		 .5,-.5,0,0,1,0,
		 0,0,-.5,0,1,0,
		 .5,.5,0,0,1,0,
		 
		 .5,.5,0,0,0,1,
		 0,0,-.5,0,0,1,
		 -.5,.5,0,0,0,1,
		 
		 -.5,.5,0,0,1,1,
		 0,0,.5,0,1,1,
		 -.5,-.5,0,0,1,1,
		 
		 -.5,-.5,0,1,1,1,
		 0,0,.5,0,1,1,
		 .5,-.5,0,1,1,0,
		 
		 .5,-.5,0,1,0,1,
		 0,0,.5,1,0,1,
		 .5,.5,0,1,0,1,
		 
		 .5,.5,0,0,0,0,
		 0,0,.5,0,0,0,
		 -.5,.5,0,0,0,0
		];
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.vertices), gl.STATIC_DRAW);
		this.loc = [0.0,0.0,0.0];
		this.rot = [0.0,0.0,0.0];
		this.radius = .01;
		this.name = "asteroid";
	 }
	 //Again this could be inherited ... but not always...not all objects
	 
	 render(program) {
		//First we bind the buffer for triangle 1
		var positionAttributeLocation = gl.getAttribLocation(program, "a_position");
		gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
		var size = 3;          // 2 components per iteration
		var type = gl.FLOAT;   // the data is 32bit floats
		var normalize = false; // don't normalize the data
		var stride = 6*Float32Array.BYTES_PER_ELEMENT;	//Size in bytes of each element     // 0 = move forward size * sizeof(type) each iteration to get the next position
		var offset = 0;        // start at the beginning of the buffer
		gl.enableVertexAttribArray(positionAttributeLocation);
		gl.vertexAttribPointer(positionAttributeLocation, size, type, normalize, stride, offset);
			
		
		//Now we have to do this for color
		var colorAttributeLocation = gl.getAttribLocation(program,"vert_color");
		//We don't have to bind because we already have the correct buffer bound.
		size = 3;
		type = gl.FLOAT;
		normalize = false;
		stride = 6*Float32Array.BYTES_PER_ELEMENT;	//Size in bytes of each element
		offset = 3*Float32Array.BYTES_PER_ELEMENT;									//size of the offset
		gl.enableVertexAttribArray(colorAttributeLocation);
		gl.vertexAttribPointer(colorAttributeLocation, size, type, normalize, stride, offset);
				
		var tranLoc  = gl.getUniformLocation(program,'transform');
		gl.uniform3fv(tranLoc,new Float32Array(this.loc));
		var thetaLoc = gl.getUniformLocation(program,'rotation');
		gl.uniform3fv(thetaLoc,new Float32Array(this.rot));
		
		
		var primitiveType = gl.TRIANGLES;
		offset = 0;
		var count = 24;
		gl.drawArrays(primitiveType, offset, count);
	 }
 }
 
 
 
 
class bullet extends GameObject{
	constructor() {
		super();
		this.radius = .01;
		this.vertices =
		[
		-.02,.05,0,	1,0,0,		//0
		.02,.05,0,	1,0,0,		//1
		.02,-.05,0,	1,0,0,		//2
		-.02,-.05,0,1,0,0,		//3	
		-.02,.05,0,	1,0,0,		//4
		.02,.05,0,	1,0,0,		//5
		.02,-.05,0,	1,0,0,		//6
		-.02,-.05,0,1,0,0		//7
		];
		this.name = "bullet";
	}		
	
	 render(program) {
		//First we bind the buffer for triangle 1
		var positionAttributeLocation = gl.getAttribLocation(program, "a_position");
		gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
		var size = 3;          // 2 components per iteration
		var type = gl.FLOAT;   // the data is 32bit floats
		var normalize = false; // don't normalize the data
		var stride = 6*Float32Array.BYTES_PER_ELEMENT;	//Size in bytes of each element     // 0 = move forward size * sizeof(type) each iteration to get the next position
		var offset = 0;        // start at the beginning of the buffer
		gl.enableVertexAttribArray(positionAttributeLocation);
		gl.vertexAttribPointer(positionAttributeLocation, size, type, normalize, stride, offset);
			
		
		//Now we have to do this for color
		var colorAttributeLocation = gl.getAttribLocation(program,"vert_color");
		//We don't have to bind because we already have the correct buffer bound.
		size = 3;
		type = gl.FLOAT;
		normalize = false;
		stride = 6*Float32Array.BYTES_PER_ELEMENT;	//Size in bytes of each element
		offset = 3*Float32Array.BYTES_PER_ELEMENT;									//size of the offset
		gl.enableVertexAttribArray(colorAttributeLocation);
		gl.vertexAttribPointer(colorAttributeLocation, size, type, normalize, stride, offset);
				
		var tranLoc  = gl.getUniformLocation(program,'transform');
		gl.uniform3fv(tranLoc,new Float32Array(this.loc));
		var thetaLoc = gl.getUniformLocation(program,'rotation');
		gl.uniform3fv(thetaLoc,new Float32Array(this.rot));
		
		
		var primitiveType = gl.TRIANGLES;
		offset = 0;
		var count = 7;
		gl.drawArrays(primitiveType, offset, count);
	 }
}