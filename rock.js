class Stone{
    constructor(x,y,r)
    {
        var options={
            'isStatic':false,
            'restitution':0,
            'friction':1,
            'density':1.2
            }

        this.x=x;
        this.y=y;
        this.r=r
        this.body= Bodies.circle(x, y, r, options)
        this.image = loadImage("stone.png");
        World.add(world, this.body);

    }
    display()
    {

            var stonepos = this.body.position;

            push();
            translate(stonepos.x, stonepos.y);
            imageMode(CENTER);
            image(this.image, 0, 0, 75, 75);
            // fill(255,0,255)
            // ellipseMode(RADIUS);
            // ellipse(0, 0,this.r, this.r);
            // this.body.position.x = mouseX;
            // this.body.position.y = mouseY;
            pop();

    }
  }