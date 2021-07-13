/*Write a JavaScript function to sort the following array of objects by title value. Go to the editor
Sample object :

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

/*function compare(a, b) {
  if (a is less than b by some ordering criterion) {
    return -1;
  }
  if (a is greater than b by the ordering criterion) {
    return 1;
  }
  // a must be equal to b
  return 0;
}*/

function compareSort(a, b) {
    if(a.title > b.title) {
        return 1;
    } else if (a.title < b.title) {
        return -1
    } else {
        return 0;
    }
}

function sortArrayTitle(arrayParam) {
    return arrayParam.sort(compareSort);
}

console.log(sortArrayTitle(library));