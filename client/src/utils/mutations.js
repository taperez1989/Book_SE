import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
        _id
        email
        password
     }
    }
`;

export const ADD_USER = gql`
    mutation signUp($username: String!, $email: String!, $password: String!) {
        signUp(username: $username, email: $email, password: $password) {
        _id
        email
        username
     }
    }
`;

export const SAVE_BOOK = gql`
    mutation saveBook($title: String!, $description: String!, $authors: String!, $bookId: String!, $image: String!, $link: String!) {
        saveBook(title: $title, description: $description, authors: $authors, bookId: $bookId, image: $image, link: $link) {
        _id
        title
        description
        author
        bookId
        image
        link
     }
    }
`;

export const REMOVE_BOOK = gql`
    mutation deleteBook($bookId: String!) {
        deleteBook(bookId: $bookId) {
        _id
        email
        password
     }
    }
`;