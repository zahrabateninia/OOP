#!/usr/bin/env node 

function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log("draw");
    }
}
const circle = new Circle(1);
console.log(circle)

for (let key in circle){
    if (typeof circle[key] !== 'function'){
        console.log(key, circle[key]);

    }
}

const keys = Object.keys(circle);
console.log(keys);