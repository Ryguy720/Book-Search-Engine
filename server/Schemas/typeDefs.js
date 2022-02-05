const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    bookCount: String
    savedBooks: [Book]!
  }
  type Book {
    bookId: String !
    authors:[String]!
    description: String
    title: String
    image: String
    link: String

  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    
  }

  type Mutation {
    saveBook(authors: [String]!, description: String!, title: String, bookID: String, image: String, link: String,)
    login(email: String!, password: String!): Auth

    removeBook(bookID: String):User
  }
`;

module.exports = typeDefs;