// game logic
const player_one = {
    color_offset: 0,
    player_name: "Player One",
    score: 0,
    part: "left-side",
    heading: "dice-left",
    button_control: "button-left",
    store_button: "store-left",
    score_writeto: "score-left",
}

const player_two = {
    color_offset: 0,
    player_name: "Player Two",
    score: 0,
    part: "right-side",
    heading: "dice-right",
    button_control: "button-right",
    store_button: "store-right",
    score_writeto: "score-right",
}

let player_list = [player_one, player_two];
let player_index = 0;

let diceroll = 0;
let current_score = 0;

//////////////////////////////
/////// MAIN GAME LOOP /////// 
//////////////////////////////
document.getElementsByClassName(player_list[1].heading)[0].textContent = "STOP. OTHER PLAYER'S TURN."; // initially, P2 will be stopped from doing anything

function reverseSign(number) {
    let answer = (number == 0) ? 1 : 0;
    return answer;
}

function updateHandlers() {
    document.getElementsByClassName(player_list[player_index].button_control)[0].onclick = rollDice;
    document.getElementsByClassName(player_list[player_index].store_button)[0].onclick = storeScore;

    let temporary_index_swap = reverseSign(player_index);
    document.getElementsByClassName(player_list[temporary_index_swap].button_control)[0].onclick = null; // should've used event listeners but I don't careeee
    document.getElementsByClassName(player_list[temporary_index_swap].store_button)[0].onclick = null;
}

updateHandlers(); // called once

function switchPlayer() {
    current_score = 0;
    document.getElementsByClassName(player_list[player_index].heading)[0].textContent = "STOP. OTHER PLAYER'S TURN."
    player_index = reverseSign(player_index);
    updateHandlers(player_index);
    document.getElementsByClassName(player_list[player_index].heading)[0].textContent = "Rolled: 0, Scored: 0";
}

function rollDice() {
    console.log(player_list[player_index].button_control);
    diceroll = Math.floor(Math.random() * 6) + 1;
    if (diceroll == 1) {
        switchPlayer();
        return null;
    }
    current_score += diceroll;
    document.getElementsByClassName(player_list[player_index].heading)[0].textContent = `Rolled: ${diceroll}, Scored: ${current_score}`;
}

function replayGame() {
    if (player_index != 0) {
        switchPlayer();
    }
    updateHandlers();
    document.getElementsByClassName(player_list[0].part)[0].style.backgroundColor = "rgb(125, 20, 66)";
    document.getElementsByClassName(player_list[0].button_control)[0].textContent = "Roll";
    
    document.getElementsByClassName(player_list[1].part)[0].style.backgroundColor = "rgb(125, 20, 66)";
    document.getElementsByClassName(player_list[1].button_control)[0].textContent = "Roll";

    document.getElementsByClassName(player_list[0].score_writeto)[0].textContent = "Player One Score: 0";
    document.getElementsByClassName(player_list[1].score_writeto)[0].textContent = "Player Two Score: 0";

    player_list[0].score = 0;
    player_list[1].score = 0;
}
function storeScore() {
    player_list[player_index].score += current_score;
    document.getElementsByClassName(player_list[player_index].score_writeto)[0].textContent = `${player_list[player_index].player_name} Score: ${player_list[player_index].score}`;
    if (player_list[player_index].score >= 100) { // where you can do shit like this
        document.getElementsByClassName(player_list[player_index].part)[0].style.backgroundColor = "green"; // showing that you won
        document.getElementsByClassName(player_list[player_index].button_control)[0].textContent = "Replay";

        document.getElementsByClassName(player_list[player_index].button_control)[0].onclick = null; // disabling the incrementing and storing functions of the winning player
        document.getElementsByClassName(player_list[player_index].store_button)[0].onclick = null;
        document.getElementsByClassName(player_list[player_index].button_control)[0].onclick = replayGame;
    } else {
        switchPlayer();
    }
}
