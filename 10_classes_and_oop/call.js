function SetUsername(Username) {
    this .Username = Username
}

function createUser(Username, email, password) {
    SetUsername.call(this, Username)
    this.email = email
    this.password = password
}

const chai = new createUser('chai', 'chai@insta.com', '123')
console.log(chai);
