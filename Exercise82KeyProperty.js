/*Write a JavaScript function to retrieve the value of a given property from all elements in an array.

var library = [ 
   { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
   { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
   { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
   ];
*/

var library = [ 
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
    ];

function propertyKey(arrayParam, keyParam) {
    let tempArray = [];
    let arrayItem;

    for(let i = 0; i < arrayParam.length; i ++) {
        arrayItem = arrayParam[i];
        // console.log(arrayItem[keyParam]);
        
        if(arrayItem.hasOwnProperty(keyParam)) {
            tempArray.push(arrayItem[keyParam]);
        }
    }

    return tempArray;
    // console.log(arrayItems)

}

// propertyKey(library, 'author')

console.log(propertyKey(library, 'author'));
console.log(propertyKey(library, 'title'));