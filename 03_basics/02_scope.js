// var c = 300
let a = 10
if (true) {
    let a = 20
    const b = 30
    // console.log("Inner ",a);
}




// console.log(a);
// console.log(b);
// console.log(c);


function one() {
    const username = "Shivansh";

    function two() {
        const website = "youtube.com";
        console.log(username);
    }
    // console.log(website);
    
    two();

}

// one();

if (true) {
    const username = "Shivansh";
    if (username === "Shivansh") {
        const website = "youtube.com";
        // console.log(username  +  website);
    }
    // console.log(website);
}    

// console.log(username);


//**************************** interesting *****************************

console.log(addone(10));

function addone(num) {
    return num + 1;
}


console.log(addtwo(10));

const addtwo = function (num) {
    return num + 2;
}
