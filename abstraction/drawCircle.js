#!/usr/bin/env node 

function Circle(radius){
    let color = 'pink'; // It's not a part of object, it's a local variable
    this.radius = radius;
    let defaultLocation = {
        x:0,
        y:0
    };
    let computeOptimumLocation = function(){
        // ...
    };
    this.draw = function(){
        computeOptimumLocation(0.1);
        console.log("draw");
    };
}
const circle = new Circle(1);
circle.defaultLocation = false;  // boom!
