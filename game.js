const moves = document.getElementById("moves-Count");
const timeValue = document.getElementById("time");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const gameContainer = document.querySelector(".game-container");
const result = document.getElementById("result");
const control = document.querySelector(".controls-container");
let cards;
let interval;
let firstCards= false;
let secondCard= false;

//Items array 
const Items = [
    {name:"moon", image: "moon.jpg"},
    {name:"saturn", image: "saturn.jpeg"},
    {name:"merkurius", image: "merkurius.jpeg"},
    {name:"venus", image: "venus.jpg"},
];

//initial time
let second = 0,
minutes = 0;
//initial moves and win count 
let movesCount = 0,
winCount =0;


//For timer
const timeGenerator = () => {
    seconds += 1;
    //minutes logic
    if(seconds>=60){
        minutes += 1;
        seconds = 0;
    }
    //format time before displaying
let secondsValue = seconds < 10 ?  `0${seconds}` :
seconds;
let minuteValue= minutes <10 ? `0${minutes}` :
minutes;
timeValue.innerHTML = `<span>Time:</span>${minuteValue}:${secondsValue}`;
};

//For calculating moves 
const movesCounter = () => {
    movesCount +=1;
    moves.innerHTML = `<span>Moves:</span>${movesCount}`;
};

//PICK RANDOM OBJECTFROM THE ITEMS ARRAY
const generateRandom = (size = 4) =>{
    //temporary array 
    let tempArray = [...items];
    //initializes CardValues array
    let CardValues = [];
    //size should be double (4*4 matrix)/2 since pairs of objectwould exist
    size = (size * size) / 2;
    //random object selection
    for(let i =0; i< size;i++){
        const randomIndex = Math.floor(Math.random() * 
        tempArray.length);
        CardValues.push(tempArray[randomIndex]) ;
        //once selected remove the object from temp array
        tempArray.splice(randomIndex, 1);
    } 

return CardValues;
};


const matrixGenerator = (CardValues , size=4) => {
    gameContainer.innerHTML = "";
    CardValues = [...CardValues,...CardValues];
    //simple shuffle
    CardValues.sort(() =>Math.random() - 0.5);
    for(let i=0; i<size*size;i++){
/*
create cards 
before  => front size (contains question mark)
after => back side (contains actual image);
data-card-values is a  custom attribute which
stores the name of the cardsto match later
*/
gameContainer.innerHTML +=`
<div class="card-container" data-card-value="${
 CardValues[i].name}">
 <div class="card-before">?</div>
 </div>`;
    }
};

//initializes values and func calls
const initializer = () => {
    result.innerText = "";
    winCount = 0;
    let CardValues =generateRandom();
    console.log(CardValues);
    matrixGenerator(CardValues);
};

initializer();
