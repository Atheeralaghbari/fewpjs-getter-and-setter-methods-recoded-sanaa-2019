// Add your Circle class here
class circle{
  constructor(radius){
    this.radius=radius;
  }
  set radius(radius){
    this._radius=radius;
  }
  get radius(radius){
    return his.radius=radius;
  }
  get diameter(){
    return this.radius*Math.PI
  }
  get circumference(){
    return Math.PI*this.diameter;
  }
  get area (){
    return Math.PI*Math.sqrt(this.radius)
  }
}
let radius=new circle(20);
radius.radius;
radius.radius=10;
radius.diameter;
radius.circumference;
radius.area;
