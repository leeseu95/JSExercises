/*rite a JavaScript program to sort an array of objects, ordered by properties and orders.*/

const library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    }
];

function orderBy(arrayParam, propParam, orders) {
    return [...arrayParam].sort((a, b) => 
        propParam.reduce((acc, prop, i) => {
            if (acc === 0) {
                const [p1, p2] = orders && orders[i] === 'desc' ? [b[prop], a[prop]] : [a[prop], b[prop]];
                acc = p1 > p2 ? 1 : p1 < p2 ? -1 : 0;
            }
            return acc;
        }, 0));
}

console.log(orderBy(library, ['author', 'title', 'readingStatus']))