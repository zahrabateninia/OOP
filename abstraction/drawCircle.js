#!/usr/bin/env node 

function Circle(radius){
    this.radius = radius;
    this.defaultLocation = {
        x:0,
        y:0
    };
    this.computeOptimumLocation = function(){
        // ...
    };
    this.draw = function(){
        this.computeOptimumLocation;
        console.log("draw");
    };
}
const circle = new Circle(1);
circle.defaultLocation = false;  // boom!
