/*Write a JavaScript program to calculate the area and perimeter of a circle. Create two methods to calculate the area and perimeter. The radius of the circle will be supplied by the user.

JavaScript: Area and circumference of a circle*/

function circle(radius_) {
    this.radius = radius_;
    this.getArea = function() {
        this.area = (Math.PI * Math.pow(this.radius, 2));
    };
    this.getCirc = function() {
        this.circ = (Math.PI * 2 * this.radius);
    };
};

function circleMeasurements(circleObj) {
    if(!circleObj.hasOwnProperty('radius')) {
        console.log("Circle does not have a radius");
        return false;
    } else {
        circleObj.circ = (2 * Math.PI * circleObj.radius);
        circleObj.area = (Math.PI * Math.pow(circleObj.radius, 2));
    }

    return circleObj;
}

const myCircle = new circle(25);
// circleMeasurements(myCircle);
myCircle.getArea();
myCircle.getCirc();
console.log(myCircle.area, myCircle.circ);