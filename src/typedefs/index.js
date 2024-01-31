const { gql } = require('apollo-server-express')

const typeDefs = gql`
#Querys
type Query {
    getUsers: [User]
    findUser(username: String): User
}

#Mutations
type Mutation {
    createUser(userName: String, password: String, email: String): User
    deleteUser(id: ID): String
    updateUser( id: ID, name: String, password: String): String
}

#custom types
type User {
    id: ID
    userName: String
    password: String
    email: String
}    
`

module.exports = { typeDefs }