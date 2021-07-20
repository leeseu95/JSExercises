/*44. Write a JavaScript function to create an object from an array, using the specified key and excluding it from each value. Go to the editor

Test Data :
indexOn([ { id: 10, name: 'apple' }, { id: 20, name: 'orange' } ], x => x.id)
Expected Output:
{"undefined":{"id":20,"name":"orange"}}*/

function createObjectFromArray(arrayParam) {
    const obj = arrayParam.reduce((acc, cur) => ({...acc, [cur.name]: cur.id}), {});

    return obj;
}

function createObjectFromArray2(arrayParam) {
    const obj = Object.assign({}, ...arrayParam);

    return obj;
}

console.log(createObjectFromArray([
    {
        id: 10,
        name: 'Apple',
        size: 1
    },
    {
        id: 20,
        name: 'Orange',
        size: 3
    }
]))
