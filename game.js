

// the computer player returns a choice of rock/paper/scissors
function computerPlay() {
    let seed = Math.floor(Math.random() * 100)
    
    if (seed < 33) {
        return "Rock"
    } else if (seed < 66) {
        return "Scissors"
    } else {
        return "Paper"
    }

}

// the human player is prompted for their choice of rock/paper/scissors
function humanPlay() {
    let answer = prompt("Do you pick Rock, Paper, or Scissors?")
    answer = answer[0].toUpperCase() + answer.slice(1).toLowerCase()

    if (answer == "Rock") {
        return answer
    } else if (answer == "Paper") {
        return answer
    } else if (answer == "Scissors") {
        return answer
    }

    return "Invalid Guess " + answer

}

// the program determines who is the winner 
function winnerPicker(computer,human) {
    if (human == "Rock" && computer == "Scissors") {
        return "human"
    } else if (human == "Rock" && computer == "Paper") {
        return "computer"
    } else if (human == "Rock" && computer == "Rock") {
        return "tie"
    } else if (human == "Scissors" && computer == "Paper") {
        return "human"
    } else if (human == "Scissors" && computer == "Rock") {
        return "computer" 
    } else if (human == "Scissors" && computer == "Scissors") {
        return "tie"
    } else if (human == "Paper" && computer == "Scissors") {
        return "computer"
    } else if (human == "Paper" && computer == "Paper") {
        return "tie"
    } else if (human == "Paper" && computer == "Rock") {
        return "human"
    } else {
        return "something is wrong"
    }

}