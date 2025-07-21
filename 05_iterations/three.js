// for of

// ["","",""]
// [{},{},{}]

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
    // console.log(num);
}   

const greetings = "Hello, World!";
for (const greet of greetings) {
    // console.log(`Each character: ${greet}`);
}

// map

const map = new Map()
map.set("name", "Alice");
map.set("age", 30);
map.set("city", "New York");

// console.log(map);

for (const key of map) {
    // console.log(key);
}

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

// const myObject = {
//     'name1': 'Alice',
//     'name2': 'Bob',
// };
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }