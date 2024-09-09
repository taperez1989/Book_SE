import { gql } from '@apollo/client';

export const GET_ME = gql`
    query user($username: String!, $email: String!) {
        user(username: $username, email: $email) {
        _id
        username
        email
        savedBooks {
            title
            authors
            description
            bookId
            image
            link
        }
    }
}
`