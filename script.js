var players = [];

const playerInput = document.getElementById('playerInput');

// ----- BUTTONS
const btnAddPlayer= document.getElementById('btnAddPlayer');
const btnStart = document.getElementById('btnStart');
const numOfSips = document.getElementById('numOfSips');
const whoSips = document.getElementById('whoSips');


// ----- OTHER
const playerSelect = document.getElementById('playerSelect');
const playerTurn = document.getElementById('playerTurn');

//==============================================================================
// VARIABLES
//==============================================================================

var whosTurn = 0;

//==============================================================================
// FUNCTIONS
//==============================================================================

// Calculates whose turn it is, its used in the numOfSips event listener
function turn() {
  if (whosTurn < players.length - 1){
    whosTurn += 1;
  } else {
    whosTurn = 0;
  }
}

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// once you press add button input from playerInput gets pushed
// into the players array, the input field is also cleared
btnAddPlayer.addEventListener('click', () => {

  players.push( playerInput.value ); // pushes text from playerInput to players array

  // creates the player list
  let playerList = document.getElementById('playerList');
  let li = document.createElement('li');
  li.textContent = playerInput.value;
  playerList.appendChild(li);

  // clears the playerInput field
  playerInput.value = "";
})

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
btnStart.addEventListener('click', () => {

  // Visualises the game elements, disables the player select elements
  playerSelect.style.display = 'none';
  gameScreen.style.display = "block";


  // Prints out the inital player turn statement
  let h1 = document.createElement('h1');
  h1.textContent = players[0] + "'s turn";
  playerTurn.appendChild(h1);
})

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// calculates and outputs the numer of sips players take
numOfSips.addEventListener('click', () => {
    whoSips.style.display = 'block';
    numOfSips.style.display = 'none';
  let numberOfSips = Math.floor(Math.random() * 6);
  let outputSips = document.getElementById('outputSips');
  let p = document.createElement('p');
  p.textContent = numberOfSips;
  outputSips.replaceChild(p, outputSips.childNodes[0]);

  // replaces the turn <h1> with the next player
  turn();
  let h1 = document.createElement('h1');
  h1.textContent = h1.textContent = players[whosTurn] + "'s turn";
  playerTurn.replaceChild(h1, playerTurn.childNodes[0]);
})

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// picks a player that will be sipping
whoSips.addEventListener('click', () => {
      whoSips.style.display = 'none';
      numOfSips.style.display = 'block';
  let playerSipping = Math.floor(Math.random() * players.length);
  let outputPlayer = document.getElementById('outputPlayer');
  let p = document.createElement('p');
  p.textContent = players[playerSipping];
  outputPlayer.replaceChild(p, outputPlayer.childNodes[0]);

})
