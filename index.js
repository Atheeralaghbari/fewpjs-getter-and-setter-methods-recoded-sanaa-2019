// Add your Circle class here
class circle{
  constructor(radius){
    this.radius=radius;
  }
  get diameter(){
    return this.radius*Math.PI
  }
  get circumference(){
    return Math.PI*this.diameter;
  }
  get area (){
    
  }
}