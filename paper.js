class Paper {  
    constructor(x, y, radius){
        var options = {
            'restitution':0.8,
            'friction':0,
            'density':1.2,
            'isStatic' : false
        }
         this.radius = radius
        this.body = Bodies.circle(x, y, radius, options);
        this.image= loadImage("paper.png")
	    World.add(world, this.body);
       
      
        
   }
   display()
   {
    //fill("red");
    //ellipseMode(RADIUS);
    //ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);


    var paperpos=this.body.position;		
    
    push()
    translate(paperpos.x, paperpos.y);
    //rectMode(CENTER)
    //strokeWeight(4);
    //fill(255,0,255)
    imageMode(CENTER);
    image(this.image, 0,0,80,80)

    pop()
   }
}
