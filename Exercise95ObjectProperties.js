/*Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books. Go to the editor
*/

var library = [ 
   {
       author: 'Bill Gates',
       title: 'The Road Ahead',
       readingStatus: true
   },
   {
       author: 'Steve Jobs',
       title: 'Walter Isaacson',
       readingStatus: true
   },
   {
       author: 'Suzanne Collins',
       title:  'Mockingjay: The Final Book of The Hunger Games', 
       readingStatus: false
   }
];

function printPropertyObject(arrayParam, keyParam1, keyParam2) {
    for(let i = 0; i < arrayParam.length; i++) {
        if(arrayParam[i].hasOwnProperty(keyParam1) && arrayParam[i].hasOwnProperty(keyParam2)) {
            console.log("Book: " + arrayParam[i][keyParam1] + " | Reading status is: " + arrayParam[i][keyParam2]);
        }
    } 
}

printPropertyObject(library, 'title', 'readingStatus');