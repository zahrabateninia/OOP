#!/usr/bin/env node 

function Circle(radius){
    this.radius = radius;
    let defaultLocation = {
        x:0,
        y:0
    };
    this.getDefaultLocation = function() {
        return defaultLocation;
    };

    this.draw = function(){
        computeOptimumLocation(0.1);
        console.log("draw");
    };
}
const circle = new Circle(1);
circle.draw();

circle.defaultLocation() // now we can read it, but again we can not modify it.