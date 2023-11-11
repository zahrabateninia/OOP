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
    Object.defineProperty(this, 'defaultLocation', {
        get : function(){
            return defaultLocation;
        },
        set : function(value){
            if (!value.x || !value.y){
                throw new Error("Invalid location.");
            }
            defaultLocation = value;
        }
        
    });
    

    

    this.draw = function(){
        console.log("draw");
    };
}
const circle = new Circle(1);
circle.draw();
circle.defaultLocation = 1;

circle.defaultLocation() // now we can read it, but again we can not modify it.