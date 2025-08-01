// generate a random color

const randomColor =function() {
    const hexa ='0123456789ABCDEF'
    let color ='#'
    for (let i = 0; i < 6; i++) {
        color += hexa[Math.floor(Math.random() * 16)]
    }
    return color;
}

function changeBgColor(){
    document.body.style.backgroundColor = randomColor();
}

let intervalId = null;

document.getElementById('start').addEventListener('click', function(){
    if (!intervalId) {
        intervalId = setInterval(changeBgColor, 1000);
    }
});

document.getElementById('stop').addEventListener('click', function(){
    clearInterval(intervalId);
    intervalId = null;
});