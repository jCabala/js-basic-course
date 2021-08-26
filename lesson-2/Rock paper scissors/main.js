class Game {
  choices = ['rock', 'paper', 'scissors'];
  numberOfWins = 0;

  constructor() {
    this.choices.forEach(choice => {
      document.querySelector(`.${choice}`).addEventListener('click', () => {
        this.play(choice);
      });
    });

    document.querySelector('.restart-btn').addEventListener('click', () => {
      this.toggleWindows();
    });
  }

  randomComputerChoice() {
    const ranNum = Math.floor(Math.random() * 3);
    return this.choices[ranNum];
  }

  toggleWindows() {
    if (
      !document.querySelector('.choice-section').classList.contains('hidden')
    ) {
      document.querySelector('.choice-section').classList.add('hidden');
      document.querySelector('.score-section').classList.remove('hidden');
    } else {
      document.querySelector('.choice-section').classList.remove('hidden');
      document.querySelector('.score-section').classList.add('hidden');
    }
  }

  decideWinner(player, pc) {
    document.querySelector('.your-choice').src = `./images/${player}.png`;
    document.querySelector('.pc-choice').src = `./images/${pc}.png`;

    const text = document.querySelector('.decision');
    const score = document.querySelector('.your-score');
    if (
      (player === 'rock' && pc === 'scissors') ||
      (player === 'paper' && pc === 'rock') ||
      (player === 'scissors' && pc === 'paper')
    ) {
      text.innerHTML = '<h2 class="decision">You won!</h2>';
      this.numberOfWins++;
      score.innerHTML = this.numberOfWins;
    } else if (player === pc) {
      text.innerHTML = '<h2 class="decision">You tied!</h2>';
    } else {
      text.innerHTML = '<h2 class="decision">You lost!</h2>';
    }
  }

  play(playerChoice) {
    const computerChoice = this.randomComputerChoice();

    this.decideWinner(playerChoice, computerChoice);
    this.toggleWindows();
  }
}

const newGame = new Game();
