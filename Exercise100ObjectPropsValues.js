/*Write a JavaScript function to convert an object into a list of `[key, value]` pairs. Go to the editor
Click me to see the solution*/

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

function isObject(objParam) {
    return (typeof objParam === 'function' || typeof objParam === 'object' && !!objParam)
}

function printObjectPropsVals(objParam) {
    let tempArray = [];
    let arrayKeys = [];

    if(!isObject(objParam)) {
        console.log("Object is not an object. Exiting");
        return false;
    } else {
        for(var key in objParam) {
            arrayKeys.push(key);
        }
        for(let i = 0; i < arrayKeys.length; i ++) {
            tempArray.push([]);
            tempArray[i].push(arrayKeys[i]);
            tempArray[i].push(objParam[arrayKeys[i]]);
        }
    }


    return tempArray;
}

const myCircle = new circle(15);
console.log(printObjectPropsVals(myCircle));