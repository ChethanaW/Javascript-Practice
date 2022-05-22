//Select 7 colors
let colors = ['red', 'blue', 'green', 'orange', 'purple', 'black', 'yellow']

//change the background of canvas when button is clicked
let button = document.getElementById('button');
let b = document.body;

// document.body.addEventListener('click', function(){
//     //select a random number 0 -6
//     let index = parseInt((Math.random()*colors.length)+1)
//     // let index = Math.floor(Math.random * 7) // for number between 0 - 6
//                 //Math.floor((Math.random * 7)+1) for numbers between 1- 6
//     //grad the  canvas
//     let canvas = document.getElementById('canvas');

//     canvas.style.color = `${colors[index]}`
//     // document.body.style.background = `${colors[index]}`;

// })

window.addEventListener('click', function(){
    //select a random number 0 -6
    let index = parseInt((Math.random()*colors.length)+1)
    // let index = Math.floor(Math.random * 7) // for number between 0 - 6
                //Math.floor((Math.random * 7)+1) for numbers between 1- 6
    //grad the  canvas
    let canvas = document.getElementById('canvas');

    canvas.style.color = `${colors[index]}`
    document.body.style.background = `${colors[index]}`;

})