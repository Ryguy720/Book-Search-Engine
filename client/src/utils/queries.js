import { gql } from '@apollo/client';

export const GET_ME = gql`
  # create a GraphQL query to be executed by Apollo Client
  query me {
    _id: ID
    username: String
    email: String
    bookCount: String
    savedBooks: [Book]!
    
  }
`;
