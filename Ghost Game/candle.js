class Candle{
	constructor(){
		this.r=55;
		this.x=width;
		this.y=height-this.r;
	}

move(){
	this.x-= 16;
}

	show(){
		Image(cImg, this.x, this.y, this.r, this.r);
	}
}


 