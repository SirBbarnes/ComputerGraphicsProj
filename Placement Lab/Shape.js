class Triangle1
{
	constructor()
	{
		this.buffer=gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
		this.vertices =
		[
		-.2,  .2,   0,  0,  0,  1,		//0
		
		 .2,  .2,   0,  0,  0,  1,		//1
		 
		-.3,   0,   0,  0,  0,  1,		//2
		 
		 .3,   0,   0,  1,  0,  0,		//3	
		
		-.2, -.2,   0,	1,  0,  0,		//4
		
		 .2, -.2,   0,	1,  0,  0,		//5
		 
		-.2,  .2, -.4,	0,  1,  0,		//6
		 
		 .2,  .2, -.4,  0,  1,  0,		//7
		
	    -.3,   0, -.4,  0,  1,  0,		//8
		  
		 .3,   0, -.4,  1,  1,  0,		//9
		  
		-.2, -.2, -.4,  1,  1,  0,		//10
		  
		 .2, -.2, -.4,  1,  1,  0,		//11
		];
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.vertices), gl.STATIC_DRAW);
		
		this.indexOrder =
		[
		0,2,4,	//Front face
		0,5,4,
		1,3,5,
		5,0,1,
		
		
		0,1,7,	//Top Face
		0,6,7,
		
		
		6,8,10,	//Back Face
		6,11,10,
		7,9,11,
		11,6,7,
		
		
		9,3,5,	//Bottom Right Face
		9,11,5,
		
		
		11,5,4,	//Bottom Face
		11,10,4,
		
		
		4,2,8,	//Bottom Left Face
		4,10,8,
		
		
		3,1,7,	//Top Right Face
		3,9,7,
		
		
		6,0,2,	//Top Left Face
		6,8,2
		]
		this.ibuffer = gl.createBuffer();
		gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,this.ibuffer);
		gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,new Uint8Array(this.indexOrder),
		gl.STATIC_DRAW);
		
		this.loc=[0,0.7,0];
		this.rot=[0,0,0];
	}
	 
	render(program)
	{
		gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
				
		var positionAttributeLocation = gl.getAttribLocation(program, "a_position");
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
		
		gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,this.ibuffer);
		
		gl.drawElements(gl.TRIANGLES,this.indexOrder.length,gl.UNSIGNED_BYTE,0);
		 
	}
}
 
class Triangle2
{
	constructor()
	{
		this.buffer=gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
		this.vertices =
		[
		-.2,  .2,   0,  0,  0,  1,		//0
		
		 .2,  .2,   0,  0,  0,  1,		//1
		 
		-.3,   0,   0,  0,  0,  1,		//2
		 
		 .3,   0,   0,  1,  0,  0,		//3	
		
		-.2, -.2,   0,	1,  0,  0,		//4
		
		 .2, -.2,   0,	1,  0,  0,		//5
		 
		-.2,  .2, -.4,	0,  1,  0,		//6
		 
		 .2,  .2, -.4,  0,  1,  0,		//7
		
	    -.3,   0, -.4,  0,  1,  0,		//8
		  
		 .3,   0, -.4,  1,  1,  0,		//9
		  
		-.2, -.2, -.4,  1,  1,  0,		//10
		  
		 .2, -.2, -.4,  1,  1,  0,		//11
		];
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.vertices), gl.STATIC_DRAW);
		
		this.indexOrder =
		[
		0,2,4,	//Front face
		0,5,4,
		1,3,5,
		5,0,1,
		
		
		0,1,7,	//Top Face
		0,6,7,
		
		
		6,8,10,	//Back Face
		6,11,10,
		7,9,11,
		11,6,7,
		
		
		9,3,5,	//Bottom Right Face
		9,11,5,
		
		
		11,5,4,	//Bottom Face
		11,10,4,
		
		
		4,2,8,	//Bottom Left Face
		4,10,8,
		
		
		3,1,7,	//Top Right Face
		3,9,7,
		
		
		6,0,2,	//Top Left Face
		6,8,2
		]
		this.ibuffer = gl.createBuffer();
		gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,this.ibuffer);
		gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,new Uint8Array(this.indexOrder),
		gl.STATIC_DRAW);
		
		this.loc=[0.7,-0.7,0];
		this.rot=[0,0,0];
	}
	 
	render(program)
	{
		gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
				
		var positionAttributeLocation = gl.getAttribLocation(program, "a_position");
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
		
		gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,this.ibuffer);
		
		gl.drawElements(gl.TRIANGLES,this.indexOrder.length,gl.UNSIGNED_BYTE,0);
		 
	}
}
 
 
class Triangle3
{
	constructor()
	{
		this.buffer=gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
		this.vertices =
		[
		-.2,  .2,   0,  0,  0,  1,		//0
		
		 .2,  .2,   0,  0,  0,  1,		//1
		 
		-.3,   0,   0,  0,  0,  1,		//2
		 
		 .3,   0,   0,  1,  0,  0,		//3	
		
		-.2, -.2,   0,	1,  0,  0,		//4
		
		 .2, -.2,   0,	1,  0,  0,		//5
		
		-.2,  .2, -.4,	0,  1,  0,		//6
		 
		 .2,  .2, -.4,  0,  1,  0,		//7
		
	    -.3,   0, -.4,  0,  1,  0,		//8
		  
		 .3,   0, -.4,  1,  1,  0,		//9
		  
		-.2, -.2, -.4,  1,  1,  0,		//10
		  
		 .2, -.2, -.4,  1,  1,  0,		//11
		];
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.vertices), gl.STATIC_DRAW);
		
		this.indexOrder =
		[
		0,2,4,	//Front face
		0,5,4,
		1,3,5,
		5,0,1,
		
		
		0,1,7,	//Top Face
		0,6,7,
		
		
		6,8,10,	//Back Face
		6,11,10,
		7,9,11,
		11,6,7,
		
		
		9,3,5,	//Bottom Right Face
		9,11,5,
		
		
		11,5,4,	//Bottom Face
		11,10,4,
		
		
		4,2,8,	//Bottom Left Face
		4,10,8,
		
		
		3,1,7,	//Top Right Face
		3,9,7,
		
		
		6,0,2,	//Top Left Face
		6,8,2
		]
		this.ibuffer = gl.createBuffer();
		gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,this.ibuffer);
		gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,new Uint8Array(this.indexOrder),
		gl.STATIC_DRAW);
		
		this.loc=[-0.7,-0.7,0];
		this.rot=[0,0,0];
		
	}
	 
	render(program)
	{
		gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
				
		var positionAttributeLocation = gl.getAttribLocation(program, "a_position");
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
		
		gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,this.ibuffer);
		
		gl.drawElements(gl.TRIANGLES,this.indexOrder.length,gl.UNSIGNED_BYTE,0);
		 
	}
}