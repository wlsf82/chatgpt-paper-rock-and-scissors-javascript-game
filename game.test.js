const { assert } = require("chai")
const { describe, it } = require("mocha")

const { computerPlay, playRound } = require("./index")

describe("Game", () => {
  describe("computerPlay", () => {
    it("should return rock, paper, or scissors", () => {
      const options = ["rock", "paper", "scissors"]
      assert.include(options, computerPlay())
    })
  })

  describe("playRound", () => {
    it("should return `It's a tie!` when player and computer selections are the same", () => {
      const result = playRound("rock", "rock")
      assert.equal(result, "It's a tie!")
    })

    it("should return `You win! {playerSelection} beats {computerSelection}.` when player wins", () => {
      const result = playRound("rock", "scissors")
      assert.equal(result, "You win! rock beats scissors.")
    })

    it("should return `You lose! {computerSelection} beats {playerSelection}.` when computer wins", () => {
      const result = playRound("rock", "paper")
      assert.equal(result, "You lose! paper beats rock.")
    })
  })
})
