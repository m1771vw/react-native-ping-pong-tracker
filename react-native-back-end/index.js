const { ApolloServer, gql } = require('apollo-server');
require('./config');


const { Player, Game } = require('./models');

const typeDefs = gql`
 
  type Player {
    id: ID!
    name: String,
    team: String,
    wins: Int,
    losses: Int,
    elo: Int,
    description: String,
    weaknesses: String,
    strengths: String,
    style: String,
    hand: String,
    img_url: String
  }

  type Game {
    id: ID!
    player1: ID,
    player2: ID,
    player3: ID,
    player4: ID,
    type: String,
    team1Score: Int,
    team22Score: Int,
    specialNotes: String
  }

    input PlayerInput {
    name: String,
    team: String,
    wins: Int,
    losses: Int,
    elo: Int,
    description: String,
    weaknesses: String,
    strengths: String,
    style: String,
    hand: String,
    img_url: String
  }

  input GameInput {
    player1: ID,
    player2: ID,
    player3: ID,
    player4: ID,
    type: String,
    team1Score: Int,
    team22Score: Int,
    specialNotes: String
  }

  type Query {
    players: [Player]
    games: [Game]
  }

  type Mutation {
    addPlayer(player: PlayerInput): Player
    addGame(game: GameInput): Game
    # addBookToAuthor(authorId: ID, bookId: ID): Author
  }
`;

const resolvers = {
  Query: {
    // async () = await. Book.find({}).populate('author').exec()
    // async () = await. Author.find({}).populate('books').exec()
    players: async() => await Player.find({}).exec(), 
    games: async() => await Game.find({}).exec()
  },
  // Author: {
  //   books: async (obj) => await Promise.all(obj.books.map(bID => Book.findById(bID).exec()))
  //   // let bookObj = await Author.findById(root.id).populate('books').select('books').exec()
  //   // return bookObj.books
  // },
  // Book: {
  //   author: async (obj) => await Author.findById(obj.author).exec()
  //   // Author.findById(root.author).populate('books').exec()
  // },
  Mutation: {
    addPlayer: async (_, args) => {
      try {
        let response = await Player.create(args.player)
        return response;
      } catch (e) {
          return e.message;
      }
    },
    addGame: async (_, args) => {
      try {
        let response = await Game.create(args.game)
        return response;
      } catch (e) {
        return e.message;
      }
    }
    // addBookToAuthor: async(_, args) => {
    //   await Book.findByIdAndUpdate(args. bookId, { $set: { author: args.authorId }}).exec();
    //   return await Author.findByIdAndUpdate(args.authorId, )
    // }
  }
};  

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
