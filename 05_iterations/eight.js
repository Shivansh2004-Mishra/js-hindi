const mynums = [1, 2, 3]

// const myTotal = mynums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
    
//     return acc + currval
// }, 0)

// const myTotal = mynums.reduce( (acc, curr) => acc+ curr, 0)

// console.log(myTotal);


const shopping = [
    {
        itemNamee: "js course",
        price: 2999
    },
     {
        itemNamee: "py course",
        price: 299
    },
     {
        itemNamee: "c++ course",
        price: 29
    },
     {
        itemNamee: "dsa course",
        price: 3999
    }
]
const myTotal = shopping.reduce( (acc, item) => acc + item.price, 0)
console.log(myTotal);
