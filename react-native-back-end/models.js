const mongoose = require('mongoose');
const { Schema } = mongoose;
const ObjectId = mongoose.Schema.Types.ObjectId;

const playerSchema = new Schema({
  name: String,
  team: String,
  singleWins: Number,
  singleLosses: Number,
  singlesElo: Number,
  doublesWins: Number,
  doublesLosses: Number,
  doublesElo: Number,
  description: String,
  weaknesses: String,
  strengths: String,
  style: String,
  hand: String,
  img_url: String
});

const Player = mongoose.model('player', playerSchema); // 'book' is a look up key. Looks for this word +'s'

const gameSchema = new Schema({
  player1: ObjectId,
  player2: ObjectId,
  player3: ObjectId,
  player4: ObjectId,
  type: String,
  team1Score: Number,
  team2Score: Number,
  winner: [ObjectId],
  specialNotes: String

})

const Game = mongoose.model('game', gameSchema);


module.exports = {
  Player, 
  Game
};

