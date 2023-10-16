const oldgreeting = require("./oldgreeting.js");
console.log("merge oefening leuk!")

oldgreeting.greet()


function basicHaiku()
{
    return ["Toward those short trees","We saw a batman descending","ik eet een broodje"]

}


function Haikustudent1(){
    console.log("haiku by:","Angelee Deodhar");
    console.log("Stars adrift");
    console.log("In the chill of night");
    console.log("The last dairy entry");
}

    //zet hier je haiku functie neer, zie https://github.com/progsen/haikugitopdracht voor ideeen

function Haikustudent2(){
    console.log("haiku by:","Emanuel");
    console.log("The wren Earns his living Noiselessly.");
    console.log("Consider me As one who loved poetry And persimmons.");
    console.log("Blowing from the west Fallen leaves gather In the east.");
}



//zet hier je haiku functie neer, zie https://github.com/progsen/haikugitopdracht voor ideeen


haikus = [
    basicHaiku()
]

function randomHaiku()
{

    let i = Math.floor(Math.random(haikus.length));
    return haikus[i];
}

function start()
{
    console.log("starting main")
    
    console.log(randomHaiku())

}

start()