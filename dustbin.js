class DustBin {  
    constructor( x, y, width, height){
        var options = {
            'isStatic' : true
        }

        this.body = Bodies.rectangle(x,y, width, height,options );
	    World.add(world, this.bodyb);
	    this.body1= Bodies.rectangle((x-(width/2)), (y-(height*2)), height, width/2 ,options);
	    World.add(world, this.bodyl);
	    this.body2 = Bodies.rectangle((x+(width/2)), (y-(height*2)), height, width/2 ,options);
        World.add(world, this.bodyr);
        this.body.width = width
        this.body.height = height 
        this.image= loadImage("dustbin.png");
        
   }
   display()
   {
       fill("white");
       rect(this.bodyb.position.x, this.body.position.y,this.body.width, this.body.height)
    
       push()
       translate(this.body.position.x, this.body.position,y);
       rectMode(CENTER)
       //strokeWeight(4);
       fill(255,0,255)
       imageMode(CENTER);
       image(this.image, 0,0,this.width, this.height)
       pop()
  
  
    }
}