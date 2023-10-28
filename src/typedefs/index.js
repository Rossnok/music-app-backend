const { gql } = require('apollo-server-express')

const typeDefs = gql`
#Querys
type Query {
    hello: String
    getUsers: [User]
    getUser(id: ID): User
}

#Mutations
type Mutation {
    createUser(name: String, password: String): User
    deleteUser(id: ID): String
    updateUser( id: ID, name: String, password: String): String
}

#custom types
type User {
    id: ID
    name: String
    password: String
}
    
`

module.exports = { typeDefs }