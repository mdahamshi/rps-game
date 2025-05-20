const RPSGame = {
    choices_idx: {
        paper: 1, 
        rock: 0, 
        scissors: 2
    },
    turns: 5,
    winnerMat : {
        rock: {scissors: 'win', paper: 'lose', rock: 'draw'},
        paper: {rock: 'win', scissors: 'lose', paper: 'draw'},
        scissors: {paper: 'win', rock: 'lose', scissors: 'draw'}
    },
    
    choices: ['rock', 'paper', 'scissors'],
    humanScore: 0, computerScore: 0,
    
    getComputerChoice(){
        let rand = Math.floor(Math.random() * 3);
        return this.choices[rand];
    },

    getHumanChoice(){
        const userIn = prompt('Choose paper, rock, scissors').toLowerCase().trim();

        return userIn;
    },

    getResult(human, computer){
        return this.winnerMat[human][computer];
    },

    playRound(humanChoice, computerChoice){

        humanChoice = humanChoice.toLowerCase();
        if(! this.choices.includes(humanChoice)){
            console.error(`${humanChoice} is not a good input !`)
            return;
        }
        let res = this.getResult(humanChoice, computerChoice);
        if(res == 'win'){
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            this.humanScore++;
        }
        if(res == 'lose'){
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            this.computerScore++;
        }
        if(res == 'draw')
            console.log(`Draw! both choosed ${humanChoice}`);
        return;
    },

    playGame(){
        this.humanScore = 0;
        this.computerScore = 0;

        for(let i = 0; i < this.turns; i++){
            let humanChoice = this.getHumanChoice();
            let computerChoice = this.getComputerChoice();
            this.playRound(humanChoice, computerChoice);
        }
        if(this.humanScore > this.computerScore)
            console.log(`You won! ${this.humanScore} - ${this.computerScore}.`);

        else if(this.humanScore < this.computerScore)
            console.log(`You lose! ${this.humanScore} - ${this.computerScore}.`);

        else
            console.log(`Draw! ${this.humanScore} - ${this.computerScore}.`);
        return;
    },
};
RPSGame.playGame();
exports = {
    RPSGame
};