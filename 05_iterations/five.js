const coding = ["JavaScript", "Python", "Ruby", "Java", "C++"];

coding.forEach( function(language) {
//   console.log(language);
});

coding.forEach( (item) =>{
    // console.log(item);
})

function printMe(language) {
    // console.log(language);
}
coding.forEach(printMe);

coding.forEach((item, index, arr) => {
    // console.log(item, index, arr);
})

const numbers = [
    {
        name: "one",
        value: 1
    }
    ,
    {
        name: "two",
        value: 2
    },
    {
        name: "three",
        value: 3
    }
];
numbers.forEach((item) => {
    console.log(item.name, item.value);
});