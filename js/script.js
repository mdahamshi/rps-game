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
        this.total_result.style.color = 'black';
        let res = this.getResult(humanChoice, computerChoice);
        if(res == 'win'){
            this.round_result.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
            this.round_result.style.color = 'green';
            this.humanScore++;
        }
        if(res == 'lose'){
            this.round_result.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
            this.round_result.style.color = 'red';
            this.computerScore++;
        }
        if(res == 'draw'){
            this.round_result.textContent = `Draw! both choosed ${humanChoice}`;
            this.round_result.style.color = 'orange';
        }
        this.total_result.textContent = 
        `You: ${this.humanScore}  Computer: ${this.computerScore}`;
        if(this.computerScore == this.turns || this.humanScore == this.turns){
            if(this.computerScore > this.humanScore){
                this.total_result.textContent = "You lost ! "
                this.total_result.style.color = 'red';
            }
            else {
                this.total_result.textContent = "You Won !"
                this.total_result.style.color = 'green';
            }
            this.humanScore = 0;
            this.computerScore = 0;
            
        }
        return;
    },
    /**
     * Adds events and init score dom elements
     */
    init(){
        const rps_btns = document.querySelector('#rps-buttons');
        rps_btns.addEventListener('click', (e) => {
            let target = e.target;
            let choices = this.choices;
            if(choices.includes(target.id))
                this.playRound(target.id, this.getComputerChoice());
            
        });

        this.round_result = document.querySelector('#round-result');
        this.total_result = document.querySelector('#total-result');

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
// RPSGame.playGame();
RPSGame.init();
exports = {
    RPSGame
};