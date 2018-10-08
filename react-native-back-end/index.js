const { ApolloServer, gql } = require('apollo-server');
require('./config');


const { Player, Game } = require('./models');

const typeDefs = gql`
 
  type Player {
    id: ID!
    name: String,
    team: String,
    singleWins: Int,
    singleLosses: Int,
    singlesElo: Int,
    doublesWins: Int,
    doublesLosses: Int,
    doublesElo: Int,
    description: String,
    weaknesses: String,
    strengths: String,
    style: String,
    hand: String,
    img_url: String
  }

  type Game {
    id: ID!
    player1: Player,
    player2: Player,
    player3: Player,
    player4: Player,
    type: String,
    team1Score: Int,
    team2Score: Int,
    winner: [Player]
    specialNotes: String
  }

  input PlayerInput {
    name: String,
    team: String,
    singleWins: Int,
    singleLosses: Int,
    singlesElo: Int,
    doublesWins: Int,
    doublesLosses: Int,
    doublesElo: Int,
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
    team2Score: Int,
    winner: [ID]
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
  Game: {
    player1: async (root) => await Player.findById(root.player1).populate('player1').exec(),
    player2: async (root) => await Player.findById(root.player2).populate('player2').exec(),
    player3: async (root) => await Player.findById(root.player3).populate('player3').exec(),
    player4: async (root) => await Player.findById(root.player4).populate('player4').exec(),
    winner: async (root)  => {
      console.log(root);
    }
    
    // player2: ID,
    // player3: ID,
    // player4: ID,
  },
  // const employeeResolver = async (rootEmployee) => {
  //   let employee = await Employee.findById(rootEmployee.id).populate('projectsIDs').select('projectsIDs').exec()
  //   return employee.projectsIDs; 
  // }
  // const projectResolver = async (obj) => (await Project.findById(obj.id).populate('employeeIDs').select('employeeIDs').exec()).employeeIDs
  // Author: {
  //   books: async (obj) => await Promise.all(obj.books.map(bID => Book.findById(bID).exec()))
  //   let bookObj = await Author.findById(root.id).populate('books').select('books').exec()
  //   return bookObj.books
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
