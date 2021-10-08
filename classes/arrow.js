class Arrow {
    constructor(x, y) {
        var options = {
            isStatic: true
        };

        this.width = 50;
        this.height = 25;
        this.image = loadImage("assets/arrow.png");
        this.body = Bodies.rectangle(x, y, 50, 25, options);
        World.add(world, this.body);
    }

    shoot() {
        var newAngle = playerArcher.angle
        newAngle = newAngle * (3.14 / 180);

        var velocity = p5.Vector.fromAngle(newAngle);
        velocity.mult(0.5);
        Matter.Body.setStatic(this.body, false);
        Matter.Body.setVelocity(this.body, {
            x: velocity.x * (180 / 3.14)
            //y: velocity.y * (180 / 3.14)
        });
    }

    display() {
        var pos = this.body.position;
        
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.width, this.height);
        pop();
    }
}