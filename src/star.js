export default class Star {
  constructor () {
    this.x        = Math.random()*window.innerWidth;
    this.y        = Math.random()*2000;
    this.z        = Math.random()*100;
    this.age      = Math.random()*100;
    this.max_age  = 100;
  }

  update(p5) {
    if(this.age > this.max_age) {
      this.age  = 0;
      this.x    = Math.random()*window.innerWidth;
      this.y    = Math.random()*2000;
    }
    this.age+=0.5;
  }

  draw (p5) {
    p5.fill(p5.color('#b0bab7'));
    p5.noStroke();

    var size_offset = (this.z / 4) + 20;
    var offset = -1*(Math.abs(2*this.age-100)/size_offset)+100/size_offset;
    var scroll_offset = document.documentElement.scrollTop / this.z;
    
    p5.quad(
      this.x,           this.y - scroll_offset - offset,
      this.x + offset,  this.y - scroll_offset, 
      this.x,           this.y - scroll_offset + offset, 
      this.x - offset,  this.y - scroll_offset
    );
  }
}