/*Write a JavaScript function to get a copy of the object where the keys have become the values and the values the keys. */

//Circle Object from our last exercise
function circle(radius_) {
    this.radius = radius_;
    this.getArea = function() {
        this.area = (Math.PI * Math.pow(this.radius, 2));
    };
    this.getCirc = function() {
        this.circ = (Math.PI * 2 * this.radius);
    };
};

function colors() {
    this.red = 'RED';
    this.blue = 'BLUE';
    this.green = 'GREEN';
}

function isObject(objParam) {
    return (typeof objParam === 'function' || typeof objParam === 'object' && !!objParam)
}

function invertPropsValues(objParam) {
    const tempObj = {};
    let arrayKeys = [];

    if(!isObject(objParam)) {
        console.log("Object is not an object. Exiting");
        return false;
    } else {
        for(var key in objParam) {
            arrayKeys.push(key);
        }
        for(let i = 0; i < arrayKeys.length; i ++) {
            tempObj[arrayKeys[i]] = objParam[arrayKeys[i]];
            tempObj[arrayKeys[i]] = arrayKeys[i];
        }
    }

    return objParam;
}

const myCircle = new circle(15);
const myColor = new colors();
console.log(myColor)
console.log(invertPropsValues(myColor));