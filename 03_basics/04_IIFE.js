// Immediately Invoked Function Expression (IIFE)

function chai() {
    console.log(`DB CONNECTED`);
} 

// chai()
// named IIFE
(function chai() {
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
    
})("Shivansh")
