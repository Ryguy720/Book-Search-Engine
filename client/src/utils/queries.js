import { gql } from '@apollo/client';

export const GET_ME = gql`
  # create a GraphQL query to be executed by Apollo Client
  { me {
    _id
    username
    email
    bookCount
    savedBooks{
        bookId
        authors
        image
        description
        title
        link
    }
  } 
  }
`;
