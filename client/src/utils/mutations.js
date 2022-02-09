import { gql } from '@apollo/client';

export const CREATE_USER = gql`
  mutation createUser($username: String!, $password: String!) {
    createUser(username: $username, password: $tech2) {
      _id
      username
      email
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($authors: String!, $description: String!, $title: String!, $bookID: String!, $image: String!, $link: String,) {
    saveBook(authors: $authors, description: $description, title: $title, bookID: $bookID, image: $image, link: $link) {
    bookId
    authors
    description
    title
    image
    link
    }
  }
`;

export const LOGIN_USER = gql`
  mutation loginUser($username: String!, $password: String!) {
    loginUser(username: $username, password: $tech2) {
      _id
      username
      email
    }
  }
`;


export const REMOVE_BOOK = gql`
  mutation loginUser($bookID: String!) {
    loginUser(bookID: $bookID ) {
    bookId
    authors
    description
    title
    image
    link
    }
  }
`;


// need to finish this
