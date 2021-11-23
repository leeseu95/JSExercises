// Queue / Stacks (make sure to know how to use slice/splice)
//Slice = does NOT modify original array (start, end)
//["hello", "my", "friend"]
//Array.slice(0, 1) = "hello"

//Splice = modifies the array (can add or delete into it);
// const months = ['Jan', 'March', 'April', 'June'];
// months.splice(1, 0, 'Feb');
// // expected output: Array ["Jan", "Feb", "March", "April", "June"]
// months.splice(4, 1, 'May');
// // replaces 1 element at index 4
// // expected output: Array ["Jan", "Feb", "March", "April", "May"]
//[0, 1, 2, 3, 4, 5]
//Array.splice(2, 1)
//[0, 1, 3, 4, 5]
//splice(start, deleteCount, item 1, item 2, itemN)

// Hash Maps
const contacts = new Map()
contacts.set('Jessie', {phone: "213-555-1234", address: "123 N 1st Ave"})
contacts.has('Jessie') // true
contacts.get('Hilary') // undefined
contacts.set('Hilary', {phone: "617-555-4321", address: "321 S 2nd St"})
contacts.get('Jessie') // {phone: "213-555-1234", address: "123 N 1st Ave"}
contacts.delete('Raymond') // false
contacts.delete('Jessie') // true
console.log(contacts.size) // 1

//Check Trees code (BFS, DFS)

// var mynum = 5;
// console.log(mynum.toString(2));


// Hash Map Test
// const arrayMap = new Map();
const arrayExample = [4, 1, 2, 5, 99, 20, 4, 1, 2, 5, 99];

function solution(N, array) {
    let numPairs = 0;
    const arrayMap = new Map();

    for(let i = 0; i < array.length; i ++) {
        if(arrayMap.get(array[i]) == undefined) {
            arrayMap.set(array[i], 0);
            arrayMap.set(array[i], arrayMap.get(array[i]) + 1);
        } else {
            arrayMap.set(array[i], arrayMap.get(array[i]) + 1);
        }
    }

    for(let key of arrayMap.keys()) {
        if(arrayMap.get(key) % 2 == 1) {
            if(N > 0) {
                arrayMap.set(key, arrayMap.get(key) + 1);
                N --;
            } else {
                break;
            }
        }
    }

    while(N > 1) {
        for(let key of arrayMap.keys()) {
            if(N > 1) {
                arrayMap.set(key, arrayMap.get(key) + 2);
                N -= 2;
            } else {
                break;
            }
        }
    } 

    for(let keys of arrayMap.keys()) {
        if((arrayMap.get(keys) % 2 == 0)  && arrayMap.get(keys) > 1) {
            numPairs += (arrayMap.get(keys) / 2)
        }
    }

    return numPairs;
}

console.log(solution(6, arrayExample));