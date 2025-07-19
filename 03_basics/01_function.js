function name() {
    console.log("S");
    console.log("h");
    console.log("i");
    console.log("v");
    console.log("a");
    console.log("n");
    console.log("s");
    console.log("h");
}
// name()

// function addTwonumbers(number1, number2) {
//     console.log(number1 + number2);
// }
function addTwonumbers(number1, number2) {
    // let result = number1 + number2
    // return result

    return number1 + number2
}

const result= addTwonumbers(3,4)

// console.log("Result ",result);

// function loginUserMessage(username) {
//     if (username === undefined) {
//         console.log("Please enter a username");
//         return
//     }
//     return `${username} just logged in`
// }
function loginUserMessage(username = "Mishra") {
    if (!username) {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("Shivansh"));


function calculateCartPrice(...num1){
    return num1
}
// console.log(calculateCartPrice(200,300,400));

const user ={
    username: "Shivansh",
    price: 100
}
function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)

// handleObject({
//     username: "Mishra",
//     price: 299
// })

const myNewArray = [200,300,400]

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,5000,7886,9787]));
