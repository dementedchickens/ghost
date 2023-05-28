

class Ghost{ 
constructor(){
	
    this.r=50;
	this.x=this.r;
	this.y=height - this.r;
	this.vy=0;
    this.gravity= 2;
}

jump(){
	if (this.y== height-this.r){
	this.vy=-35;
}
}
hits(candles){



	return collideRectRect(this.x, this.y,this.r,this.r,candles.x, candles.y,candles.r,candles.r);

}

move(){
	this.y += this.vy;
	this.vy +=this.gravity;
	this.y=constrain(this.y,0,height-this.r);
}

show(){
	Image(gImg, this.x, this.y,this.r,this.r);
}


}



