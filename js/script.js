const RPSGame = {
    choices: ['rock', 'paper', 'scissors'],
    getComputerChoice(){
        let rand = Math.floor(Math.random() * 3);
        return this.choices[rand];
    },
    getHumanChoice(){
        const userIn = prompt('Choose paper, rock, scissors').toLowerCase().trim();
        if(! this.choices.includes(userIn)){
            alert('Invalid input');
            return;   
        }
        return userIn;
    },
};

exports = {
    RPSGame
}