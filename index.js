// Factory function
function createCircle(radius){
    return {
        radius,
        draw: function () {
            console.log("Draw");
        }
    };    
};

const circle = createCircle(1);

// Constructor function
function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log("draw");
    }
};
const anotherCircle = new Circle(1)