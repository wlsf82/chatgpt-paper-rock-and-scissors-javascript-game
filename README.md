# ChatGPT "Rock paper scissors" JavaScript Game

[![main](https://github.com/wlsf82/chatgpt-paper-rock-and-scissors-javascript-game/actions/workflows/ci.yml/badge.svg)](https://github.com/wlsf82/chatgpt-paper-rock-and-scissors-javascript-game/actions)

JavaScript version of the game ['Rock paper scissors'](https://en.wikipedia.org/wiki/Rock_paper_scissors) created and tested by ChatGPT.

## Pre-requirements

To clone and run this project, you will need to have [git](https://git-scm.com/), [Node.js](https://nodejs.org/), and npm installed on your computer.

For this project, the following versions of git, Node.js, and npm were used:

```sh
$ git --version
git version 2.34.1

$ node --version
v18.15.0

$ npm --version
9.5.0

```

## Playing the game

Run `npm run play` to play the game.

> After running the game, you should have a result like this.

```sh
Player selection is: rock
Computer selection is: scissors
You win! rock beats scissors.

```

## Tests

In order to run the tests, you first need to install the `devDependencies`

### Installation of the `devDependencies`

Run `npm install` to install the `devDependencies`.

### Running the tests

Run `npm test` to run the unit tests.

> After running the tests, you should have a result like this.

```sh
Game
    computerPlay
      ✔ should return rock, paper, or scissors
    playRound
      ✔ should return `It's a tie!` when player and computer selections are the same
      ✔ should return `You win! {playerSelection} beats {computerSelection}.` when player wins
      ✔ should return `You lose! {computerSelection} beats {playerSelection}.` when computer wins


  4 passing (7ms)

```

___

Made by [ChatGPT](https://chat.openai.com/), and co-authored with ❤️ by [Walmyr](https://walmyr.dev).
