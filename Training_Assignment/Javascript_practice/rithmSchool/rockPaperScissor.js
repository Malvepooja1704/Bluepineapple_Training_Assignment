function rockPaperScissor() {
    function determineComputer(num) {
        if (num <= .33) return "rock";
        else if (num <= .66) return "paper";
        return "scissor";
    }

    let userChoice = prompt("Choose Rock / Paper / Scissor").toLowerCase();
    let computerChoice = determineComputer(Math.random());

    let answer = ["rock", "paper", "scissor"];
    if (!userChoice || answer.indexOf(userChoice) === -1) {
        return "please select valid input";
    }

    if (userChoice === computerChoice) {
        return "Tie";
    }
    if (userChoice === "rock" && computerChoice === "paper") return "You Lose, computer Picked" + computerChoice;
    if (userChoice === "paper" && computerChoice === "scissor") return "You Lose, computer Picked" + computerChoice;
    if (userChoice === "scissor" && computerChoice === "rock") return "You Lose, computer Picked" + computerChoice;

    return "You win , computer Picked" + computerChoice;
}