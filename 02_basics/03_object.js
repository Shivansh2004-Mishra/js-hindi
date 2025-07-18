// singleton


// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Shivansh",
   "full name":"Shivansh Mishra",
   [mySym]:"mykey1",
    age: 18,
    location: "gorakhpur",
    email: "shivansh@google.com",
    isLoggdIn: false

}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "gyftdrdtrftrtdtrut"
// Object.freeze(JsUser)
JsUser.email = "hfgfccutc"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`hello JS user,${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

