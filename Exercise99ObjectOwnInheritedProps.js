/*Write a JavaScript function to retrieve all the names of object's own and inherited properties. Go to the editor*/

function circle(radius_) {
    this.radius = radius_;
    this.getArea = function() {
        this.area = (Math.PI * Math.pow(this.radius, 2));
    };
    this.getCirc = function() {
        this.circ = (Math.PI * 2 * this.radius);
    };
};

function isObject(objParam) {
    return (typeof objParam === 'function' || typeof objParam === 'object' && !!objParam)
}

function printObjectProperties(objParam) {
    let tempArray = [];
    if(!isObject(objParam)) {
        console.log("Object is not an object. Exiting");
        return false;
    } else {
        for (var key in objParam) {
            tempArray.push(key);
        }
    }

    return tempArray;
}

const myCircle = new circle(15);
myCircle.test = true;
console.log(printObjectProperties(myCircle));