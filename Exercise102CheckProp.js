/*Write a JavaScript function to check whether an object contains given property. Go to the editor
Click me to see the solution*/

function circle(radius_) {
    this.radius = radius_;
    this.area = this.area = (Math.PI * Math.pow(this.radius, 2));
    this.circ = this.circ = (Math.PI * 2 * this.radius);
}

function isObject(objParam) {
    return (typeof objParam == 'function' || typeof objParam == 'object' && !!objParam)
}

function checkProperty(objParam, propertyParam) {
    let propertyCheck = false;

    if(!isObject(objParam)) {
        console.log("Object introduced is not an object. Exiting");
        return false;
    } else {
        for(var key in objParam) {
            if(propertyParam == key) {
                propertyCheck = true;
            }
        }
    }

    return propertyCheck;
}

const myCircle = new circle(15)
console.log(checkProperty(myCircle, 'circ'));