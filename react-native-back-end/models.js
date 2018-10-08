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
  player1: { type: ObjectId, ref: 'player' },
  player2: { type: ObjectId, ref: 'player' },
  player3: { type: ObjectId, ref: 'player' },
  player4: { type: ObjectId, ref: 'player' },
  type: String,
  team1Score: Number,
  team2Score: Number,
  winner: [{type: ObjectId, ref: 'Player'}],
  specialNotes: String

})

const Game = mongoose.model('game', gameSchema);


module.exports = {
  Player, 
  Game
};

