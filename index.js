const options = ["rock", "paper", "scissors"]

const computerPlay = () => {
  const randomIndex = Math.floor(Math.random() * options.length)
  return options[randomIndex]
}

const playRound = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {
    return "It's a tie!"
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return `You win! ${playerSelection} beats ${computerSelection}.`
  }
  return `You lose! ${computerSelection} beats ${playerSelection}.`
}

const game = () => {
  const computerSelection = computerPlay()
  const playerSelection = computerPlay()
  console.log(`Player selection is: ${playerSelection}`)
  console.log(`Computer selection is: ${computerSelection}`)
  console.log(playRound(playerSelection, computerSelection))
}

module.exports = { computerPlay, playRound, game }
