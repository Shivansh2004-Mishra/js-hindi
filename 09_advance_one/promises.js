const promisesOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        // console.log('Async task is compelete');
        resolve()
    },1000)
})

promisesOne.then(function(){
    // console.log('Promise consumed');
    
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        // console.log('Async task 2');
        resolve()
    },1000)
}).then(function(){
    // console.log('Promise consumed 2');
})

const promisesThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        // console.log('Async task 3');
        resolve({user: 'Shivansh', email: 'chai@example.com' })
    },1000)
})

promisesThree.then(function(user){
    // console.log(user);
    
})

// const promisesFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve({username: 'Shivansh', email: 'chai@example.com' })
//         }else {
//             reject('ERROR: Somthing went worng')
//         }
//     },1000)
// })

//  promisesFour.then((user) => {
//       console.log(user);
//      return user.username
//  }).then((username) =>{
//       console.log(username);
//  }).catch(function(error){
//       console.log(error);
//  }).finally(() => console.log('The promise is either resolved or rejected')
//  );

const promisesFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
             resolve({username: 'Shivansh', email: 'chai@example.com' })
        }else {
            reject('ERROR: Somthing went worng')
        }
    },1000)
})

async function consumePromiseFive(){
    try {
        const response = await promisesFive
        // console.log(response);
    } catch (error) {
        // console.log(error);
    }
}

consumePromiseFive()

// async function getAllUser(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }

// getAllUser()


fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error)
)