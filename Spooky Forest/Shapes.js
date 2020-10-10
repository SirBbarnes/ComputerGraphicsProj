class Hex {
	constructor() {
		this.buffer=gl.createBuffer();
		this.colorBuffer = gl.createBuffer();
		
		gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
		this.vertices =
		[
			-.5,-.5,-.25,0,1,0,
			-.5, .5,-.25,0,1,0,
			-.25,-.5,-.5,0,1,0,
			-.25, .5,-.5,0,1,0,
			.25,-.5,-.5,0,1,0,
			.25,.5,-.5,0,1,0,
			.5,-.5,-.25,0,1,0,
			.5, .5,-.25,0,1,0,
			.5,-.5,.25,0,1,0,
			.5, .5,.25,0,1,0,
			.25,-.5,.5,0,1,0,
			.25, .5,.5,0,1,0,
			-.25,-.5,.5,0,1,0,
			-.25, .5,.5,0,1,0,
			-.5,-.5,.25,0,1,0,
			-.5, .5,.25,0,1,0,
			-.5, -.5,-.25,0,1,0,
			-.5, .5,-.25,0,1,0
		];
	
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.vertices), gl.STATIC_DRAW);
		this.loc=[0,0,0];
		this.rot=[0,0,0];
	 
	}
	 
	render(program) {
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
	 
	 //var ibuffer = gl.createBuffer();
	 //gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,this.ibuffer);
	 //gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,new Uint8Array(this.indexOrder),gl.STATIC_DRAW);
	 //gl.drawElements(gl.TRIANGLES,this.indexOrder.length,gl.UNSIGNED_BYTE,0);
	gl.drawArrays(gl.TRIANGLE_STRIP, 0, 18);
	}
}
 
class Ground {
	constructor() {
		this.buffer=gl.createBuffer();
		this.colorBuffer = gl.createBuffer();
		
		gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
		this.vertices =
		[
			500,-1,500,0,1,0,
			-500,-1,500,0,1,0,
			-500,-1,-500,0,1,0,
			500,-1,-500,0,1,0
		];
	
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.vertices), gl.STATIC_DRAW);
		this.loc=[0,0,0];
		this.rot=[0,0,0];
	 
	}
	 
	render(program) {
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
	 
	 //var ibuffer = gl.createBuffer();
	 //gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,this.ibuffer);
	 //gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,new Uint8Array(this.indexOrder),gl.STATIC_DRAW);
	 //gl.drawElements(gl.TRIANGLES,this.indexOrder.length,gl.UNSIGNED_BYTE,0);
	gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
	}
}
 
 
 
 
 
 
class Rock {
	 constructor()
	 {
		this.buffer=gl.createBuffer();
		this.colorBuffer = gl.createBuffer();
		
		gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
		this.vertices =
		[
		 -.5,.5,0,.94,.93,.93,
		 0,0,-.5,.94,.93,.93,
		 -.5,-.5,0,.94,.93,.93,
		 
		 -.5,-.5,0,.94,.93,.93,
		 0,0,-.5,.93,.93,.93,
		 .5,-.5,0,.93,.93,.93,
		 
		 .5,-.5,0,.94,.93,.93,
		 0,0,-.5,.94,.93,.93,
		 .5,.5,0,.94,.93,.93,
		 
		 .5,.5,0,.94,.93,.93,
		 0,0,-.5,.94,.93,.93,
		 -.5,.5,0,.94,.93,.93,
		 
		 -.5,.5,0,.94,.93,.93,
		 0,0,.5,.94,.93,.93,
		 -.5,-.5,0,.94,.93,.93,
		 
		 -.5,-.5,0,.94,.93,.93,
		 0,0,.5,.94,.93,.93,
		 .5,-.5,0,.94,.93,.93,
		 
		 .5,-.5,0,.94,.93,.93,
		 0,0,.5,.94,.93,.93,
		 .5,.5,0,.94,.93,.93,
		 
		 .5,.5,0,.94,.93,.93,
		 0,0,.5,.94,.93,.93,
		 -.5,.5,0,.94,.93,.93
		];
	
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.vertices), gl.STATIC_DRAW);
		this.loc=[0,0,0];
		this.rot=[0,0,0];
	 
	 }
	 
	 render(program)
	 {
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
	 
	 //var ibuffer = gl.createBuffer();
	 //gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,this.ibuffer);
	 //gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,new Uint8Array(this.indexOrder),gl.STATIC_DRAW);
	 //gl.drawElements(gl.TRIANGLES,this.indexOrder.length,gl.UNSIGNED_BYTE,0);
	 gl.drawArrays(gl.TRIANGLES, 0, 24);
	 }
}




 
 
class Tree {
	constructor() {
		this.buffer=gl.createBuffer();
		this.colorBuffer = gl.createBuffer();
		
		gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
		this.vertices =
		[
			-.1, -1, 0, 0, .27, .27,
			.1, -1, 0, 0, .27, .27,
			.1, .1, 0, 0, .27, .27,
			-.1, .1, 0, 0, .27, .27,
			
			-.1, -1, .2, 0, .27, .27,
			.1, -1, .2, 0, .27, .27,
			.1, .1, .2, 0, .27, .27,
			-.1, .1, .2, 0, .27, .27,
			
			
			-.5,-.5,-.25,0,1,0,
			-.5, .5,-.25,0,1,0,
			-.25,-.5,-.5,0,1,0,
			-.25, .5,-.5,0,1,0,
			.25,-.5,-.5,0,1,0,
			.25,.5,-.5,0,1,0,
			.5,-.5,-.25,0,1,0,
			.5, .5,-.25,0,1,0,
			.5,-.5,.25,0,1,0,
			.5, .5,.25,0,1,0,
			.25,-.5,.5,0,1,0,
			.25, .5,.5,0,1,0,
			-.25,-.5,.5,0,1,0,
			-.25, .5,.5,0,1,0,
			-.5,-.5,.25,0,1,0,
			-.5, .5,.25,0,1,0,
			-.5, -.5,-.25,0,1,0,
			-.5, .5,-.25,0,1,0
		];
		
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.vertices), gl.STATIC_DRAW);
		this.loc=[0,0,0];
		this.rot=[0,0,0];
	 
	}
	 
	render(program) {
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
	 
		//var ibuffer = gl.createBuffer();
		//gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,this.ibuffer);
		//gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,new Uint8Array(this.indexOrder),gl.STATIC_DRAW);
		//gl.drawElements(gl.TRIANGLES,this.indexOrder.length,gl.UNSIGNED_BYTE,0);
		
		gl.drawArrays(gl.TRIANGLE_FAN, 0, 8);
		gl.drawArrays(gl.TRIANGLE_STRIP, 8, 18);
	}
}
 
class Moon {
	 constructor()
	 {
		this.buffer=gl.createBuffer();
		this.colorBuffer = gl.createBuffer();
		
		gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
		this.vertices =
		[
		 -.5,.5,0,255,245,238,
		 0,0,-.5,255,245,238,
		 -.5,-.5,0,255,245,238,
		 
		 -.5,-.5,0,255,245,238,
		 0,0,-.5,245,245,238,
		 .5,-.5,0,245,245,238,
		 
		 .5,-.5,0,255,245,238,
		 0,0,-.5,255,245,238,
		 .5,.5,0,255,245,238,
		 
		 .5,.5,0,255,245,238,
		 0,0,-.5,255,245,238,
		 -.5,.5,0,255,245,238,
		 
		 -.5,.5,0,255,245,238,
		 0,0,.5,255,245,238,
		 -.5,-.5,0,255,245,238,
		 
		 -.5,-.5,0,255,245,238,
		 0,0,.5,255,245,238,
		 .5,-.5,0,255,245,238,
		 
		 .5,-.5,0,255,245,238,
		 0,0,.5,255,245,238,
		 .5,.5,0,255,245,238,
		 
		 .5,.5,0,255,245,238,
		 0,0,.5,255,245,238,
		 -.5,.5,0,255,245,238
		];
	
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.vertices), gl.STATIC_DRAW);
		this.loc=[0,0,0];
		this.rot=[0,0,0];
	 
	 }
	 
	 render(program)
	 {
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
	 
	 //var ibuffer = gl.createBuffer();
	 //gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,this.ibuffer);
	 //gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,new Uint8Array(this.indexOrder),gl.STATIC_DRAW);
	 //gl.drawElements(gl.TRIANGLES,this.indexOrder.length,gl.UNSIGNED_BYTE,0);
	 gl.drawArrays(gl.TRIANGLES, 0, 24);
	 }
}