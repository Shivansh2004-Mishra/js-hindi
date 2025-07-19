const user = {
    username: "Shivansh",
    email: "shivansh@example.com",

    welcomeMessage: function () {
        console.log(`${this.username} welcomes you to the site!`);
        console.log(this);
    }

}

// user.welcomeMessage
// user.welcomeMessage();
// user.username = "Mishra";
// user.welcomeMessage();

// console.log(this);

// function chai() {
//     let username = "Shivansh";
//     console.log(this.username);
// }
// chai();


const chai = () => {
    let username = "Shivansh";
    console.log(this);
}
// chai();

// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }  
// const addTwo = (num1, num2) => num1 + num2;
// const addTwo = (num1, num2) => (num1 + num2);
// const addTwo = (num1, num2) => {username = "Mishra"}
// const addTwo = (num1, num2) => {{username: "Mishra"}}
const addTwo = (num1, num2) => ({username: "Mishra"})
console.log(addTwo(10, 20));


// const myArray = [1, 2, 3, 4, 5];

// myArray.forEach()
   