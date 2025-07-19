// const tinderUser = new Object() 
const tinderUser = {}

tinderUser.id = "134abc"
tinderUser.name = "Shivansh Mishra"
tinderUser.isLoggedIn = false


// console.log(tinderUser);

const regularUser = {
    fullname: {
        userfullname: {
            firstname: "Shivansh",
            lastname: "Mishra"
        }
    }
}

//  console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a",2: "b"}
const obj2 = {3: "a",4: "b"}
// const obj3 = {obj1 ,obj2}
// const obj3 = Object.assign(obj1, obj2)
// const obj3 = Object.assign({},obj1, obj2) 
const obj3 = {...obj1, ...obj2}

// console.log(obj3);

const users = [
    {
        id: 1,
        email: "dtrtctrdstrdtrt"
    },
     {
        id: 1,
        email: "dtrtctrdstrdtrt"
    },
     {
        id: 1,
        email: "dtrtctrdstrdtrt"
    }
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLogged'));





const course = {
    coursename: "js in hindi",
    prise: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "prise": "free"
// }

[
    {},
    {},
    {}
]