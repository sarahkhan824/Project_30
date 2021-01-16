class Block {
constructor(x,y,width,height){
    var options = {
        
        restitution : 0.4
}
this.body=Bodies.rectangle(x,y,width,height,options)
this.width = width;
this.height = height;
this.Visibility = 255; 
World.add(world, this.body);

}
display(){
    var pos =this.body.position;
    rectMode(CENTER);
    rect(pos.x, pos.y, this.width, this.height);
    if(this.body.speed<5){
      this.Visibility = true ;
    }
    else{
    World.remove(world,this.body);
    push();
    this.Visibility=this.Visibility-5;
    tint(255,this.Visibility);
    rect(this.body.position.x,this.body.position.y,50,50);
    pop();
    }
    
  }
}