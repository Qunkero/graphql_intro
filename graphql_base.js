const { buildSchema } = require('graphql');
const { Message, rootMessage }  = require('./resolverFunction/Message');
const root = require('./resolverFunction/rootResolve');

const schema = buildSchema(`
  type Query {
    hello: String
    quoteOfTheDay: String
    random: Float!
    rollThreeDice: [Int]
    rollDice(numDice: Int!, numSides: Int): [Int]
    getDie(numSides: Int): RandomDie
    getMessage(id: ID!): Message
    getAllId: [String]
  }
  
   type RandomDie {
    numSides: Int!
    rollOnce: Int!
    roll(numRolls: Int!): [Int]
  }
  
  type Mutation {
    createMessage(input: MessageInput): Message
    updateMessage(id: ID!, input: MessageInput): Message
  }
  
  input MessageInput {
    content: String
    author: String
  }

  type Message {
   id: ID!
   content: String
   author: String
  }
`);

module.exports = {
  schema,
  root: { ...root, ...rootMessage },
};