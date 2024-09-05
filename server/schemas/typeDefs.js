const typeDefs = `
type User {
_id: ID!
username: String!
email: String!
}

input BookInput {
authors: [String!]!       
description: String!       
title: String!            
bookId: String                             
}

type Book {
_id: ID!
title: String!
authors: [String!]!
description: String!
bookId: String

}

type Auth {
token: ID!
user: User
}

type Query {
user: User
}

type Mutation {
signUp(username: String!, email: String!, password: String!): Auth
saveBook(bookInput: BookInput!): Book
login(email: String!, password: String!): User
deleteBook(bookId: String!): User
}
`;

module.exports = typeDefs;